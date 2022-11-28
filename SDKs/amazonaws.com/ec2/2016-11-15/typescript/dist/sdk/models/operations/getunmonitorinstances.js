var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var GetUnmonitorInstancesActionEnum;
(function (GetUnmonitorInstancesActionEnum) {
    GetUnmonitorInstancesActionEnum["UnmonitorInstances"] = "UnmonitorInstances";
})(GetUnmonitorInstancesActionEnum || (GetUnmonitorInstancesActionEnum = {}));
export var GetUnmonitorInstancesVersionEnum;
(function (GetUnmonitorInstancesVersionEnum) {
    GetUnmonitorInstancesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetUnmonitorInstancesVersionEnum || (GetUnmonitorInstancesVersionEnum = {}));
var GetUnmonitorInstancesQueryParams = /** @class */ (function (_super) {
    __extends(GetUnmonitorInstancesQueryParams, _super);
    function GetUnmonitorInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUnmonitorInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetUnmonitorInstancesQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", Array)
    ], GetUnmonitorInstancesQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUnmonitorInstancesQueryParams.prototype, "version", void 0);
    return GetUnmonitorInstancesQueryParams;
}(SpeakeasyBase));
export { GetUnmonitorInstancesQueryParams };
var GetUnmonitorInstancesHeaders = /** @class */ (function (_super) {
    __extends(GetUnmonitorInstancesHeaders, _super);
    function GetUnmonitorInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUnmonitorInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUnmonitorInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUnmonitorInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUnmonitorInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUnmonitorInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUnmonitorInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUnmonitorInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUnmonitorInstancesHeaders;
}(SpeakeasyBase));
export { GetUnmonitorInstancesHeaders };
var GetUnmonitorInstancesRequest = /** @class */ (function (_super) {
    __extends(GetUnmonitorInstancesRequest, _super);
    function GetUnmonitorInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnmonitorInstancesQueryParams)
    ], GetUnmonitorInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnmonitorInstancesHeaders)
    ], GetUnmonitorInstancesRequest.prototype, "headers", void 0);
    return GetUnmonitorInstancesRequest;
}(SpeakeasyBase));
export { GetUnmonitorInstancesRequest };
var GetUnmonitorInstancesResponse = /** @class */ (function (_super) {
    __extends(GetUnmonitorInstancesResponse, _super);
    function GetUnmonitorInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUnmonitorInstancesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUnmonitorInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUnmonitorInstancesResponse.prototype, "statusCode", void 0);
    return GetUnmonitorInstancesResponse;
}(SpeakeasyBase));
export { GetUnmonitorInstancesResponse };
