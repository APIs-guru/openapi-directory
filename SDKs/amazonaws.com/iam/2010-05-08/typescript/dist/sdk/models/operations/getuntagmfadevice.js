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
export var GetUntagMfaDeviceActionEnum;
(function (GetUntagMfaDeviceActionEnum) {
    GetUntagMfaDeviceActionEnum["UntagMfaDevice"] = "UntagMFADevice";
})(GetUntagMfaDeviceActionEnum || (GetUntagMfaDeviceActionEnum = {}));
export var GetUntagMfaDeviceVersionEnum;
(function (GetUntagMfaDeviceVersionEnum) {
    GetUntagMfaDeviceVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUntagMfaDeviceVersionEnum || (GetUntagMfaDeviceVersionEnum = {}));
var GetUntagMfaDeviceQueryParams = /** @class */ (function (_super) {
    __extends(GetUntagMfaDeviceQueryParams, _super);
    function GetUntagMfaDeviceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUntagMfaDeviceQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SerialNumber" }),
        __metadata("design:type", String)
    ], GetUntagMfaDeviceQueryParams.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" }),
        __metadata("design:type", Array)
    ], GetUntagMfaDeviceQueryParams.prototype, "tagKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUntagMfaDeviceQueryParams.prototype, "version", void 0);
    return GetUntagMfaDeviceQueryParams;
}(SpeakeasyBase));
export { GetUntagMfaDeviceQueryParams };
var GetUntagMfaDeviceHeaders = /** @class */ (function (_super) {
    __extends(GetUntagMfaDeviceHeaders, _super);
    function GetUntagMfaDeviceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUntagMfaDeviceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUntagMfaDeviceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUntagMfaDeviceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUntagMfaDeviceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUntagMfaDeviceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUntagMfaDeviceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUntagMfaDeviceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUntagMfaDeviceHeaders;
}(SpeakeasyBase));
export { GetUntagMfaDeviceHeaders };
var GetUntagMfaDeviceRequest = /** @class */ (function (_super) {
    __extends(GetUntagMfaDeviceRequest, _super);
    function GetUntagMfaDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUntagMfaDeviceQueryParams)
    ], GetUntagMfaDeviceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUntagMfaDeviceHeaders)
    ], GetUntagMfaDeviceRequest.prototype, "headers", void 0);
    return GetUntagMfaDeviceRequest;
}(SpeakeasyBase));
export { GetUntagMfaDeviceRequest };
var GetUntagMfaDeviceResponse = /** @class */ (function (_super) {
    __extends(GetUntagMfaDeviceResponse, _super);
    function GetUntagMfaDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUntagMfaDeviceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUntagMfaDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUntagMfaDeviceResponse.prototype, "statusCode", void 0);
    return GetUntagMfaDeviceResponse;
}(SpeakeasyBase));
export { GetUntagMfaDeviceResponse };
