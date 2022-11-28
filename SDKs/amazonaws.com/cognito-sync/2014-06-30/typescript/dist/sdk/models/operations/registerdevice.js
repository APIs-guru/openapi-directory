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
import * as shared from "../shared";
var RegisterDevicePathParams = /** @class */ (function (_super) {
    __extends(RegisterDevicePathParams, _super);
    function RegisterDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityId" }),
        __metadata("design:type", String)
    ], RegisterDevicePathParams.prototype, "identityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" }),
        __metadata("design:type", String)
    ], RegisterDevicePathParams.prototype, "identityPoolId", void 0);
    return RegisterDevicePathParams;
}(SpeakeasyBase));
export { RegisterDevicePathParams };
var RegisterDeviceHeaders = /** @class */ (function (_super) {
    __extends(RegisterDeviceHeaders, _super);
    function RegisterDeviceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RegisterDeviceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RegisterDeviceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RegisterDeviceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RegisterDeviceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RegisterDeviceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RegisterDeviceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RegisterDeviceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RegisterDeviceHeaders;
}(SpeakeasyBase));
export { RegisterDeviceHeaders };
export var RegisterDeviceRequestBodyPlatformEnum;
(function (RegisterDeviceRequestBodyPlatformEnum) {
    RegisterDeviceRequestBodyPlatformEnum["Apns"] = "APNS";
    RegisterDeviceRequestBodyPlatformEnum["ApnsSandbox"] = "APNS_SANDBOX";
    RegisterDeviceRequestBodyPlatformEnum["Gcm"] = "GCM";
    RegisterDeviceRequestBodyPlatformEnum["Adm"] = "ADM";
})(RegisterDeviceRequestBodyPlatformEnum || (RegisterDeviceRequestBodyPlatformEnum = {}));
var RegisterDeviceRequestBody = /** @class */ (function (_super) {
    __extends(RegisterDeviceRequestBody, _super);
    function RegisterDeviceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Platform" }),
        __metadata("design:type", String)
    ], RegisterDeviceRequestBody.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Token" }),
        __metadata("design:type", String)
    ], RegisterDeviceRequestBody.prototype, "token", void 0);
    return RegisterDeviceRequestBody;
}(SpeakeasyBase));
export { RegisterDeviceRequestBody };
var RegisterDeviceRequest = /** @class */ (function (_super) {
    __extends(RegisterDeviceRequest, _super);
    function RegisterDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegisterDevicePathParams)
    ], RegisterDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegisterDeviceHeaders)
    ], RegisterDeviceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RegisterDeviceRequestBody)
    ], RegisterDeviceRequest.prototype, "request", void 0);
    return RegisterDeviceRequest;
}(SpeakeasyBase));
export { RegisterDeviceRequest };
var RegisterDeviceResponse = /** @class */ (function (_super) {
    __extends(RegisterDeviceResponse, _super);
    function RegisterDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RegisterDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterDeviceResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterDeviceResponse.prototype, "invalidConfigurationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterDeviceResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterDeviceResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RegisterDeviceResponse)
    ], RegisterDeviceResponse.prototype, "registerDeviceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterDeviceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RegisterDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterDeviceResponse.prototype, "tooManyRequestsException", void 0);
    return RegisterDeviceResponse;
}(SpeakeasyBase));
export { RegisterDeviceResponse };
