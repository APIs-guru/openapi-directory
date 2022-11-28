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
var PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams = /** @class */ (function (_super) {
    __extends(PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams, _super);
    function PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addGroupMemberships" }),
        __metadata("design:type", Boolean)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "addGroupMemberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addGroupMemberships@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "addGroupMembershipsAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assertionConsumerServiceURL" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "assertionConsumerServiceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assertionConsumerServiceURL@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "assertionConsumerServiceUrlAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clockTolerance" }),
        __metadata("design:type", Number)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "clockTolerance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clockTolerance@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "clockToleranceAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createUser" }),
        __metadata("design:type", Boolean)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "createUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createUser@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "createUserAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defaultGroups" }),
        __metadata("design:type", Array)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "defaultGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defaultGroups@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "defaultGroupsAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defaultRedirectUrl" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "defaultRedirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defaultRedirectUrl@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "defaultRedirectUrlAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=digestMethod" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "digestMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=digestMethod@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "digestMethodAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupMembershipAttribute" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "groupMembershipAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupMembershipAttribute@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "groupMembershipAttributeAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=handleLogout" }),
        __metadata("design:type", Boolean)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "handleLogout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=handleLogout@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "handleLogoutAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpCertAlias" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "idpCertAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpCertAlias@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "idpCertAliasAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpHttpRedirect" }),
        __metadata("design:type", Boolean)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "idpHttpRedirect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpHttpRedirect@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "idpHttpRedirectAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpUrl" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "idpUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpUrl@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "idpUrlAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyStorePassword" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "keyStorePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyStorePassword@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "keyStorePasswordAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=logoutUrl" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "logoutUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=logoutUrl@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "logoutUrlAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameIdFormat" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "nameIdFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameIdFormat@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "nameIdFormatAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", Array)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "pathAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service.ranking" }),
        __metadata("design:type", Number)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "serviceRanking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service.ranking@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "serviceRankingAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceProviderEntityId" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "serviceProviderEntityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceProviderEntityId@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "serviceProviderEntityIdAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signatureMethod" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signatureMethod@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "signatureMethodAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spPrivateKeyAlias" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "spPrivateKeyAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spPrivateKeyAlias@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "spPrivateKeyAliasAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=synchronizeAttributes" }),
        __metadata("design:type", Array)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "synchronizeAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=synchronizeAttributes@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "synchronizeAttributesAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useEncryption" }),
        __metadata("design:type", Boolean)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "useEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useEncryption@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "useEncryptionAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIDAttribute" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "userIdAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIDAttribute@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "userIdAttributeAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIntermediatePath" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "userIntermediatePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIntermediatePath@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams.prototype, "userIntermediatePathAtTypeHint", void 0);
    return PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams;
}(SpeakeasyBase));
export { PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams };
var PostConfigAdobeGraniteSamlAuthenticationHandlerRequest = /** @class */ (function (_super) {
    __extends(PostConfigAdobeGraniteSamlAuthenticationHandlerRequest, _super);
    function PostConfigAdobeGraniteSamlAuthenticationHandlerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerRequest.prototype, "queryParams", void 0);
    return PostConfigAdobeGraniteSamlAuthenticationHandlerRequest;
}(SpeakeasyBase));
export { PostConfigAdobeGraniteSamlAuthenticationHandlerRequest };
var PostConfigAdobeGraniteSamlAuthenticationHandlerResponse = /** @class */ (function (_super) {
    __extends(PostConfigAdobeGraniteSamlAuthenticationHandlerResponse, _super);
    function PostConfigAdobeGraniteSamlAuthenticationHandlerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostConfigAdobeGraniteSamlAuthenticationHandlerResponse.prototype, "statusCode", void 0);
    return PostConfigAdobeGraniteSamlAuthenticationHandlerResponse;
}(SpeakeasyBase));
export { PostConfigAdobeGraniteSamlAuthenticationHandlerResponse };
