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
var PostSamlConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(PostSamlConfigurationQueryParams, _super);
    function PostSamlConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$location" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "dollarLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addGroupMemberships" }),
        __metadata("design:type", Boolean)
    ], PostSamlConfigurationQueryParams.prototype, "addGroupMemberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apply" }),
        __metadata("design:type", Boolean)
    ], PostSamlConfigurationQueryParams.prototype, "apply", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assertionConsumerServiceURL" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "assertionConsumerServiceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clockTolerance" }),
        __metadata("design:type", Number)
    ], PostSamlConfigurationQueryParams.prototype, "clockTolerance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createUser" }),
        __metadata("design:type", Boolean)
    ], PostSamlConfigurationQueryParams.prototype, "createUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defaultGroups" }),
        __metadata("design:type", Array)
    ], PostSamlConfigurationQueryParams.prototype, "defaultGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defaultRedirectUrl" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "defaultRedirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delete" }),
        __metadata("design:type", Boolean)
    ], PostSamlConfigurationQueryParams.prototype, "delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=digestMethod" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "digestMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupMembershipAttribute" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "groupMembershipAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=handleLogout" }),
        __metadata("design:type", Boolean)
    ], PostSamlConfigurationQueryParams.prototype, "handleLogout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpCertAlias" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "idpCertAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpHttpRedirect" }),
        __metadata("design:type", Boolean)
    ], PostSamlConfigurationQueryParams.prototype, "idpHttpRedirect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpUrl" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "idpUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyStorePassword" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "keyStorePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=logoutUrl" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "logoutUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameIdFormat" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "nameIdFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", Array)
    ], PostSamlConfigurationQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=post" }),
        __metadata("design:type", Boolean)
    ], PostSamlConfigurationQueryParams.prototype, "post", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=propertylist" }),
        __metadata("design:type", Array)
    ], PostSamlConfigurationQueryParams.prototype, "propertylist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service.ranking" }),
        __metadata("design:type", Number)
    ], PostSamlConfigurationQueryParams.prototype, "serviceRanking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceProviderEntityId" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "serviceProviderEntityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signatureMethod" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spPrivateKeyAlias" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "spPrivateKeyAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=synchronizeAttributes" }),
        __metadata("design:type", Array)
    ], PostSamlConfigurationQueryParams.prototype, "synchronizeAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useEncryption" }),
        __metadata("design:type", Boolean)
    ], PostSamlConfigurationQueryParams.prototype, "useEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIDAttribute" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "userIdAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIntermediatePath" }),
        __metadata("design:type", String)
    ], PostSamlConfigurationQueryParams.prototype, "userIntermediatePath", void 0);
    return PostSamlConfigurationQueryParams;
}(SpeakeasyBase));
export { PostSamlConfigurationQueryParams };
var PostSamlConfigurationRequest = /** @class */ (function (_super) {
    __extends(PostSamlConfigurationRequest, _super);
    function PostSamlConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSamlConfigurationQueryParams)
    ], PostSamlConfigurationRequest.prototype, "queryParams", void 0);
    return PostSamlConfigurationRequest;
}(SpeakeasyBase));
export { PostSamlConfigurationRequest };
var PostSamlConfigurationResponse = /** @class */ (function (_super) {
    __extends(PostSamlConfigurationResponse, _super);
    function PostSamlConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostSamlConfigurationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSamlConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSamlConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSamlConfigurationResponse.prototype, "postSamlConfiguration302TextPlainString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSamlConfigurationResponse.prototype, "postSamlConfigurationDefaultTextPlainString", void 0);
    return PostSamlConfigurationResponse;
}(SpeakeasyBase));
export { PostSamlConfigurationResponse };
