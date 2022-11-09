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
// IdentityPool
/**
 * An object representing an Amazon Cognito identity pool.
**/
var IdentityPool = /** @class */ (function (_super) {
    __extends(IdentityPool, _super);
    function IdentityPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AllowClassicFlow" }),
        __metadata("design:type", Boolean)
    ], IdentityPool.prototype, "allowClassicFlow", void 0);
    __decorate([
        Metadata({ data: "json, name=AllowUnauthenticatedIdentities" }),
        __metadata("design:type", Boolean)
    ], IdentityPool.prototype, "allowUnauthenticatedIdentities", void 0);
    __decorate([
        Metadata({ data: "json, name=CognitoIdentityProviders", elemType: shared.CognitoIdentityProvider }),
        __metadata("design:type", Array)
    ], IdentityPool.prototype, "cognitoIdentityProviders", void 0);
    __decorate([
        Metadata({ data: "json, name=DeveloperProviderName" }),
        __metadata("design:type", String)
    ], IdentityPool.prototype, "developerProviderName", void 0);
    __decorate([
        Metadata({ data: "json, name=IdentityPoolId" }),
        __metadata("design:type", String)
    ], IdentityPool.prototype, "identityPoolId", void 0);
    __decorate([
        Metadata({ data: "json, name=IdentityPoolName" }),
        __metadata("design:type", String)
    ], IdentityPool.prototype, "identityPoolName", void 0);
    __decorate([
        Metadata({ data: "json, name=IdentityPoolTags" }),
        __metadata("design:type", Map)
    ], IdentityPool.prototype, "identityPoolTags", void 0);
    __decorate([
        Metadata({ data: "json, name=OpenIdConnectProviderARNs" }),
        __metadata("design:type", Array)
    ], IdentityPool.prototype, "openIdConnectProviderArNs", void 0);
    __decorate([
        Metadata({ data: "json, name=SamlProviderARNs" }),
        __metadata("design:type", Array)
    ], IdentityPool.prototype, "samlProviderArNs", void 0);
    __decorate([
        Metadata({ data: "json, name=SupportedLoginProviders" }),
        __metadata("design:type", Map)
    ], IdentityPool.prototype, "supportedLoginProviders", void 0);
    return IdentityPool;
}(SpeakeasyBase));
export { IdentityPool };
