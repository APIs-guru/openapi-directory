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
var DisassociateIdentityProviderConfigPathParams = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigPathParams, _super);
    function DisassociateIdentityProviderConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigPathParams.prototype, "name", void 0);
    return DisassociateIdentityProviderConfigPathParams;
}(SpeakeasyBase));
export { DisassociateIdentityProviderConfigPathParams };
var DisassociateIdentityProviderConfigHeaders = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigHeaders, _super);
    function DisassociateIdentityProviderConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DisassociateIdentityProviderConfigHeaders;
}(SpeakeasyBase));
export { DisassociateIdentityProviderConfigHeaders };
// DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig
/**
 * An object representing an identity provider configuration.
**/
var DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig, _super);
    function DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig.prototype, "type", void 0);
    return DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig;
}(SpeakeasyBase));
export { DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig };
var DisassociateIdentityProviderConfigRequestBody = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigRequestBody, _super);
    function DisassociateIdentityProviderConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityProviderConfig" }),
        __metadata("design:type", DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig)
    ], DisassociateIdentityProviderConfigRequestBody.prototype, "identityProviderConfig", void 0);
    return DisassociateIdentityProviderConfigRequestBody;
}(SpeakeasyBase));
export { DisassociateIdentityProviderConfigRequestBody };
var DisassociateIdentityProviderConfigRequest = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigRequest, _super);
    function DisassociateIdentityProviderConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisassociateIdentityProviderConfigPathParams)
    ], DisassociateIdentityProviderConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisassociateIdentityProviderConfigHeaders)
    ], DisassociateIdentityProviderConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DisassociateIdentityProviderConfigRequestBody)
    ], DisassociateIdentityProviderConfigRequest.prototype, "request", void 0);
    return DisassociateIdentityProviderConfigRequest;
}(SpeakeasyBase));
export { DisassociateIdentityProviderConfigRequest };
var DisassociateIdentityProviderConfigResponse = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigResponse, _super);
    function DisassociateIdentityProviderConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DisassociateIdentityProviderConfigResponse)
    ], DisassociateIdentityProviderConfigResponse.prototype, "disassociateIdentityProviderConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisassociateIdentityProviderConfigResponse.prototype, "statusCode", void 0);
    return DisassociateIdentityProviderConfigResponse;
}(SpeakeasyBase));
export { DisassociateIdentityProviderConfigResponse };
