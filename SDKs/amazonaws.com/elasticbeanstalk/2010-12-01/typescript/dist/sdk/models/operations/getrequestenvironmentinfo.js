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
export var GetRequestEnvironmentInfoActionEnum;
(function (GetRequestEnvironmentInfoActionEnum) {
    GetRequestEnvironmentInfoActionEnum["RequestEnvironmentInfo"] = "RequestEnvironmentInfo";
})(GetRequestEnvironmentInfoActionEnum || (GetRequestEnvironmentInfoActionEnum = {}));
export var GetRequestEnvironmentInfoInfoTypeEnum;
(function (GetRequestEnvironmentInfoInfoTypeEnum) {
    GetRequestEnvironmentInfoInfoTypeEnum["Tail"] = "tail";
    GetRequestEnvironmentInfoInfoTypeEnum["Bundle"] = "bundle";
})(GetRequestEnvironmentInfoInfoTypeEnum || (GetRequestEnvironmentInfoInfoTypeEnum = {}));
export var GetRequestEnvironmentInfoVersionEnum;
(function (GetRequestEnvironmentInfoVersionEnum) {
    GetRequestEnvironmentInfoVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetRequestEnvironmentInfoVersionEnum || (GetRequestEnvironmentInfoVersionEnum = {}));
var GetRequestEnvironmentInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetRequestEnvironmentInfoQueryParams, _super);
    function GetRequestEnvironmentInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoQueryParams.prototype, "environmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoQueryParams.prototype, "environmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InfoType" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoQueryParams.prototype, "infoType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoQueryParams.prototype, "version", void 0);
    return GetRequestEnvironmentInfoQueryParams;
}(SpeakeasyBase));
export { GetRequestEnvironmentInfoQueryParams };
var GetRequestEnvironmentInfoHeaders = /** @class */ (function (_super) {
    __extends(GetRequestEnvironmentInfoHeaders, _super);
    function GetRequestEnvironmentInfoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRequestEnvironmentInfoHeaders;
}(SpeakeasyBase));
export { GetRequestEnvironmentInfoHeaders };
var GetRequestEnvironmentInfoRequest = /** @class */ (function (_super) {
    __extends(GetRequestEnvironmentInfoRequest, _super);
    function GetRequestEnvironmentInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRequestEnvironmentInfoQueryParams)
    ], GetRequestEnvironmentInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRequestEnvironmentInfoHeaders)
    ], GetRequestEnvironmentInfoRequest.prototype, "headers", void 0);
    return GetRequestEnvironmentInfoRequest;
}(SpeakeasyBase));
export { GetRequestEnvironmentInfoRequest };
var GetRequestEnvironmentInfoResponse = /** @class */ (function (_super) {
    __extends(GetRequestEnvironmentInfoResponse, _super);
    function GetRequestEnvironmentInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRequestEnvironmentInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRequestEnvironmentInfoResponse.prototype, "statusCode", void 0);
    return GetRequestEnvironmentInfoResponse;
}(SpeakeasyBase));
export { GetRequestEnvironmentInfoResponse };
