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
export var GetResyncMfaDeviceActionEnum;
(function (GetResyncMfaDeviceActionEnum) {
    GetResyncMfaDeviceActionEnum["ResyncMfaDevice"] = "ResyncMFADevice";
})(GetResyncMfaDeviceActionEnum || (GetResyncMfaDeviceActionEnum = {}));
export var GetResyncMfaDeviceVersionEnum;
(function (GetResyncMfaDeviceVersionEnum) {
    GetResyncMfaDeviceVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetResyncMfaDeviceVersionEnum || (GetResyncMfaDeviceVersionEnum = {}));
var GetResyncMfaDeviceQueryParams = /** @class */ (function (_super) {
    __extends(GetResyncMfaDeviceQueryParams, _super);
    function GetResyncMfaDeviceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthenticationCode1" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceQueryParams.prototype, "authenticationCode1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthenticationCode2" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceQueryParams.prototype, "authenticationCode2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SerialNumber" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceQueryParams.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceQueryParams.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceQueryParams.prototype, "version", void 0);
    return GetResyncMfaDeviceQueryParams;
}(SpeakeasyBase));
export { GetResyncMfaDeviceQueryParams };
var GetResyncMfaDeviceHeaders = /** @class */ (function (_super) {
    __extends(GetResyncMfaDeviceHeaders, _super);
    function GetResyncMfaDeviceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResyncMfaDeviceHeaders;
}(SpeakeasyBase));
export { GetResyncMfaDeviceHeaders };
var GetResyncMfaDeviceRequest = /** @class */ (function (_super) {
    __extends(GetResyncMfaDeviceRequest, _super);
    function GetResyncMfaDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResyncMfaDeviceQueryParams)
    ], GetResyncMfaDeviceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResyncMfaDeviceHeaders)
    ], GetResyncMfaDeviceRequest.prototype, "headers", void 0);
    return GetResyncMfaDeviceRequest;
}(SpeakeasyBase));
export { GetResyncMfaDeviceRequest };
var GetResyncMfaDeviceResponse = /** @class */ (function (_super) {
    __extends(GetResyncMfaDeviceResponse, _super);
    function GetResyncMfaDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetResyncMfaDeviceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResyncMfaDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResyncMfaDeviceResponse.prototype, "statusCode", void 0);
    return GetResyncMfaDeviceResponse;
}(SpeakeasyBase));
export { GetResyncMfaDeviceResponse };
