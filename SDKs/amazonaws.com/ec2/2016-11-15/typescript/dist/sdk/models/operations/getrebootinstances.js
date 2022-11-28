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
export var GetRebootInstancesActionEnum;
(function (GetRebootInstancesActionEnum) {
    GetRebootInstancesActionEnum["RebootInstances"] = "RebootInstances";
})(GetRebootInstancesActionEnum || (GetRebootInstancesActionEnum = {}));
export var GetRebootInstancesVersionEnum;
(function (GetRebootInstancesVersionEnum) {
    GetRebootInstancesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetRebootInstancesVersionEnum || (GetRebootInstancesVersionEnum = {}));
var GetRebootInstancesQueryParams = /** @class */ (function (_super) {
    __extends(GetRebootInstancesQueryParams, _super);
    function GetRebootInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRebootInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetRebootInstancesQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", Array)
    ], GetRebootInstancesQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRebootInstancesQueryParams.prototype, "version", void 0);
    return GetRebootInstancesQueryParams;
}(SpeakeasyBase));
export { GetRebootInstancesQueryParams };
var GetRebootInstancesHeaders = /** @class */ (function (_super) {
    __extends(GetRebootInstancesHeaders, _super);
    function GetRebootInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRebootInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRebootInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRebootInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRebootInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRebootInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRebootInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRebootInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRebootInstancesHeaders;
}(SpeakeasyBase));
export { GetRebootInstancesHeaders };
var GetRebootInstancesRequest = /** @class */ (function (_super) {
    __extends(GetRebootInstancesRequest, _super);
    function GetRebootInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRebootInstancesQueryParams)
    ], GetRebootInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRebootInstancesHeaders)
    ], GetRebootInstancesRequest.prototype, "headers", void 0);
    return GetRebootInstancesRequest;
}(SpeakeasyBase));
export { GetRebootInstancesRequest };
var GetRebootInstancesResponse = /** @class */ (function (_super) {
    __extends(GetRebootInstancesResponse, _super);
    function GetRebootInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRebootInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRebootInstancesResponse.prototype, "statusCode", void 0);
    return GetRebootInstancesResponse;
}(SpeakeasyBase));
export { GetRebootInstancesResponse };
