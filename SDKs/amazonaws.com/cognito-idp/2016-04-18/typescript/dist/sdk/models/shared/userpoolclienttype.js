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
// UserPoolClientType
/**
 * Contains information about a user pool client.
**/
var UserPoolClientType = /** @class */ (function (_super) {
    __extends(UserPoolClientType, _super);
    function UserPoolClientType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessTokenValidity" }),
        __metadata("design:type", Number)
    ], UserPoolClientType.prototype, "accessTokenValidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowedOAuthFlows" }),
        __metadata("design:type", Array)
    ], UserPoolClientType.prototype, "allowedOAuthFlows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowedOAuthFlowsUserPoolClient" }),
        __metadata("design:type", Boolean)
    ], UserPoolClientType.prototype, "allowedOAuthFlowsUserPoolClient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowedOAuthScopes" }),
        __metadata("design:type", Array)
    ], UserPoolClientType.prototype, "allowedOAuthScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnalyticsConfiguration" }),
        __metadata("design:type", AnalyticsConfigurationType)
    ], UserPoolClientType.prototype, "analyticsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CallbackURLs" }),
        __metadata("design:type", Array)
    ], UserPoolClientType.prototype, "callbackUrLs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientId" }),
        __metadata("design:type", String)
    ], UserPoolClientType.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientName" }),
        __metadata("design:type", String)
    ], UserPoolClientType.prototype, "clientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientSecret" }),
        __metadata("design:type", String)
    ], UserPoolClientType.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], UserPoolClientType.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultRedirectURI" }),
        __metadata("design:type", String)
    ], UserPoolClientType.prototype, "defaultRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableTokenRevocation" }),
        __metadata("design:type", Boolean)
    ], UserPoolClientType.prototype, "enableTokenRevocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExplicitAuthFlows" }),
        __metadata("design:type", Array)
    ], UserPoolClientType.prototype, "explicitAuthFlows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdTokenValidity" }),
        __metadata("design:type", Number)
    ], UserPoolClientType.prototype, "idTokenValidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", Date)
    ], UserPoolClientType.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogoutURLs" }),
        __metadata("design:type", Array)
    ], UserPoolClientType.prototype, "logoutUrLs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreventUserExistenceErrors" }),
        __metadata("design:type", String)
    ], UserPoolClientType.prototype, "preventUserExistenceErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadAttributes" }),
        __metadata("design:type", Array)
    ], UserPoolClientType.prototype, "readAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefreshTokenValidity" }),
        __metadata("design:type", Number)
    ], UserPoolClientType.prototype, "refreshTokenValidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportedIdentityProviders" }),
        __metadata("design:type", Array)
    ], UserPoolClientType.prototype, "supportedIdentityProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenValidityUnits" }),
        __metadata("design:type", TokenValidityUnitsType)
    ], UserPoolClientType.prototype, "tokenValidityUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserPoolId" }),
        __metadata("design:type", String)
    ], UserPoolClientType.prototype, "userPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WriteAttributes" }),
        __metadata("design:type", Array)
    ], UserPoolClientType.prototype, "writeAttributes", void 0);
    return UserPoolClientType;
}(SpeakeasyBase));
export { UserPoolClientType };
