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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AssociateIdentityProviderConfigPathParams = /** @class */ (function (_super) {
    __extends(AssociateIdentityProviderConfigPathParams, _super);
    function AssociateIdentityProviderConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigPathParams.prototype, "name", void 0);
    return AssociateIdentityProviderConfigPathParams;
}(SpeakeasyBase));
export { AssociateIdentityProviderConfigPathParams };
var AssociateIdentityProviderConfigHeaders = /** @class */ (function (_super) {
    __extends(AssociateIdentityProviderConfigHeaders, _super);
    function AssociateIdentityProviderConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AssociateIdentityProviderConfigHeaders;
}(SpeakeasyBase));
export { AssociateIdentityProviderConfigHeaders };
// AssociateIdentityProviderConfigRequestBodyOidc
/**
 * An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.
**/
var AssociateIdentityProviderConfigRequestBodyOidc = /** @class */ (function (_super) {
    __extends(AssociateIdentityProviderConfigRequestBodyOidc, _super);
    function AssociateIdentityProviderConfigRequestBodyOidc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigRequestBodyOidc.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "json, name=groupsClaim" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigRequestBodyOidc.prototype, "groupsClaim", void 0);
    __decorate([
        Metadata({ data: "json, name=groupsPrefix" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigRequestBodyOidc.prototype, "groupsPrefix", void 0);
    __decorate([
        Metadata({ data: "json, name=identityProviderConfigName" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigRequestBodyOidc.prototype, "identityProviderConfigName", void 0);
    __decorate([
        Metadata({ data: "json, name=issuerUrl" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigRequestBodyOidc.prototype, "issuerUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=requiredClaims" }),
        __metadata("design:type", Map)
    ], AssociateIdentityProviderConfigRequestBodyOidc.prototype, "requiredClaims", void 0);
    __decorate([
        Metadata({ data: "json, name=usernameClaim" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigRequestBodyOidc.prototype, "usernameClaim", void 0);
    __decorate([
        Metadata({ data: "json, name=usernamePrefix" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigRequestBodyOidc.prototype, "usernamePrefix", void 0);
    return AssociateIdentityProviderConfigRequestBodyOidc;
}(SpeakeasyBase));
export { AssociateIdentityProviderConfigRequestBodyOidc };
var AssociateIdentityProviderConfigRequestBody = /** @class */ (function (_super) {
    __extends(AssociateIdentityProviderConfigRequestBody, _super);
    function AssociateIdentityProviderConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=oidc" }),
        __metadata("design:type", AssociateIdentityProviderConfigRequestBodyOidc)
    ], AssociateIdentityProviderConfigRequestBody.prototype, "oidc", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], AssociateIdentityProviderConfigRequestBody.prototype, "tags", void 0);
    return AssociateIdentityProviderConfigRequestBody;
}(SpeakeasyBase));
export { AssociateIdentityProviderConfigRequestBody };
var AssociateIdentityProviderConfigRequest = /** @class */ (function (_super) {
    __extends(AssociateIdentityProviderConfigRequest, _super);
    function AssociateIdentityProviderConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AssociateIdentityProviderConfigPathParams)
    ], AssociateIdentityProviderConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AssociateIdentityProviderConfigHeaders)
    ], AssociateIdentityProviderConfigRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssociateIdentityProviderConfigRequestBody)
    ], AssociateIdentityProviderConfigRequest.prototype, "request", void 0);
    return AssociateIdentityProviderConfigRequest;
}(SpeakeasyBase));
export { AssociateIdentityProviderConfigRequest };
var AssociateIdentityProviderConfigResponse = /** @class */ (function (_super) {
    __extends(AssociateIdentityProviderConfigResponse, _super);
    function AssociateIdentityProviderConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AssociateIdentityProviderConfigResponse)
    ], AssociateIdentityProviderConfigResponse.prototype, "associateIdentityProviderConfigResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateIdentityProviderConfigResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AssociateIdentityProviderConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateIdentityProviderConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateIdentityProviderConfigResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateIdentityProviderConfigResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateIdentityProviderConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateIdentityProviderConfigResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AssociateIdentityProviderConfigResponse.prototype, "statusCode", void 0);
    return AssociateIdentityProviderConfigResponse;
}(SpeakeasyBase));
export { AssociateIdentityProviderConfigResponse };
