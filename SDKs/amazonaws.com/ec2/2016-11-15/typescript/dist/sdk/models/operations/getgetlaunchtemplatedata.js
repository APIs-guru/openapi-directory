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
export var GetGetLaunchTemplateDataActionEnum;
(function (GetGetLaunchTemplateDataActionEnum) {
    GetGetLaunchTemplateDataActionEnum["GetLaunchTemplateData"] = "GetLaunchTemplateData";
})(GetGetLaunchTemplateDataActionEnum || (GetGetLaunchTemplateDataActionEnum = {}));
export var GetGetLaunchTemplateDataVersionEnum;
(function (GetGetLaunchTemplateDataVersionEnum) {
    GetGetLaunchTemplateDataVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetGetLaunchTemplateDataVersionEnum || (GetGetLaunchTemplateDataVersionEnum = {}));
var GetGetLaunchTemplateDataQueryParams = /** @class */ (function (_super) {
    __extends(GetGetLaunchTemplateDataQueryParams, _super);
    function GetGetLaunchTemplateDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetLaunchTemplateDataQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetGetLaunchTemplateDataQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetGetLaunchTemplateDataQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetLaunchTemplateDataQueryParams.prototype, "version", void 0);
    return GetGetLaunchTemplateDataQueryParams;
}(SpeakeasyBase));
export { GetGetLaunchTemplateDataQueryParams };
var GetGetLaunchTemplateDataHeaders = /** @class */ (function (_super) {
    __extends(GetGetLaunchTemplateDataHeaders, _super);
    function GetGetLaunchTemplateDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetLaunchTemplateDataHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetLaunchTemplateDataHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetLaunchTemplateDataHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetLaunchTemplateDataHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetLaunchTemplateDataHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetLaunchTemplateDataHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetLaunchTemplateDataHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetLaunchTemplateDataHeaders;
}(SpeakeasyBase));
export { GetGetLaunchTemplateDataHeaders };
var GetGetLaunchTemplateDataRequest = /** @class */ (function (_super) {
    __extends(GetGetLaunchTemplateDataRequest, _super);
    function GetGetLaunchTemplateDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetLaunchTemplateDataQueryParams)
    ], GetGetLaunchTemplateDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetLaunchTemplateDataHeaders)
    ], GetGetLaunchTemplateDataRequest.prototype, "headers", void 0);
    return GetGetLaunchTemplateDataRequest;
}(SpeakeasyBase));
export { GetGetLaunchTemplateDataRequest };
var GetGetLaunchTemplateDataResponse = /** @class */ (function (_super) {
    __extends(GetGetLaunchTemplateDataResponse, _super);
    function GetGetLaunchTemplateDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetLaunchTemplateDataResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetLaunchTemplateDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetLaunchTemplateDataResponse.prototype, "statusCode", void 0);
    return GetGetLaunchTemplateDataResponse;
}(SpeakeasyBase));
export { GetGetLaunchTemplateDataResponse };
