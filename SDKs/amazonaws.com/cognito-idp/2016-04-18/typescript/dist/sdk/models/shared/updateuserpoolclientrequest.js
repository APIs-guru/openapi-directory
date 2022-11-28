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
import { AnalyticsConfigurationType } from "./analyticsconfigurationtype";
import { PreventUserExistenceErrorTypesEnum } from "./preventuserexistenceerrortypesenum";
import { TokenValidityUnitsType } from "./tokenvalidityunitstype";
// UpdateUserPoolClientRequest
/**
 * Represents the request to update the user pool client.
**/
var UpdateUserPoolClientRequest = /** @class */ (function (_super) {
    __extends(UpdateUserPoolClientRequest, _super);
    function UpdateUserPoolClientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessTokenValidity" }),
        __metadata("design:type", Number)
    ], UpdateUserPoolClientRequest.prototype, "accessTokenValidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowedOAuthFlows" }),
        __metadata("design:type", Array)
    ], UpdateUserPoolClientRequest.prototype, "allowedOAuthFlows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowedOAuthFlowsUserPoolClient" }),
        __metadata("design:type", Boolean)
    ], UpdateUserPoolClientRequest.prototype, "allowedOAuthFlowsUserPoolClient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowedOAuthScopes" }),
        __metadata("design:type", Array)
    ], UpdateUserPoolClientRequest.prototype, "allowedOAuthScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnalyticsConfiguration" }),
        __metadata("design:type", AnalyticsConfigurationType)
    ], UpdateUserPoolClientRequest.prototype, "analyticsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CallbackURLs" }),
        __metadata("design:type", Array)
    ], UpdateUserPoolClientRequest.prototype, "callbackUrLs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientId" }),
        __metadata("design:type", String)
    ], UpdateUserPoolClientRequest.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientName" }),
        __metadata("design:type", String)
    ], UpdateUserPoolClientRequest.prototype, "clientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultRedirectURI" }),
        __metadata("design:type", String)
    ], UpdateUserPoolClientRequest.prototype, "defaultRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableTokenRevocation" }),
        __metadata("design:type", Boolean)
    ], UpdateUserPoolClientRequest.prototype, "enableTokenRevocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExplicitAuthFlows" }),
        __metadata("design:type", Array)
    ], UpdateUserPoolClientRequest.prototype, "explicitAuthFlows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdTokenValidity" }),
        __metadata("design:type", Number)
    ], UpdateUserPoolClientRequest.prototype, "idTokenValidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogoutURLs" }),
        __metadata("design:type", Array)
    ], UpdateUserPoolClientRequest.prototype, "logoutUrLs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreventUserExistenceErrors" }),
        __metadata("design:type", String)
    ], UpdateUserPoolClientRequest.prototype, "preventUserExistenceErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadAttributes" }),
        __metadata("design:type", Array)
    ], UpdateUserPoolClientRequest.prototype, "readAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefreshTokenValidity" }),
        __metadata("design:type", Number)
    ], UpdateUserPoolClientRequest.prototype, "refreshTokenValidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportedIdentityProviders" }),
        __metadata("design:type", Array)
    ], UpdateUserPoolClientRequest.prototype, "supportedIdentityProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenValidityUnits" }),
        __metadata("design:type", TokenValidityUnitsType)
    ], UpdateUserPoolClientRequest.prototype, "tokenValidityUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserPoolId" }),
        __metadata("design:type", String)
    ], UpdateUserPoolClientRequest.prototype, "userPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WriteAttributes" }),
        __metadata("design:type", Array)
    ], UpdateUserPoolClientRequest.prototype, "writeAttributes", void 0);
    return UpdateUserPoolClientRequest;
}(SpeakeasyBase));
export { UpdateUserPoolClientRequest };
