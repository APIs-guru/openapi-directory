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
// BackendApiAppSyncAuthSettings
/**
 * The authentication settings for accessing provisioned data models in your Amplify project.
**/
var BackendApiAppSyncAuthSettings = /** @class */ (function (_super) {
    __extends(BackendApiAppSyncAuthSettings, _super);
    function BackendApiAppSyncAuthSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CognitoUserPoolId" }),
        __metadata("design:type", String)
    ], BackendApiAppSyncAuthSettings.prototype, "cognitoUserPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], BackendApiAppSyncAuthSettings.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationTime" }),
        __metadata("design:type", Number)
    ], BackendApiAppSyncAuthSettings.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpenIDAuthTTL" }),
        __metadata("design:type", String)
    ], BackendApiAppSyncAuthSettings.prototype, "openIdAuthTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpenIDClientId" }),
        __metadata("design:type", String)
    ], BackendApiAppSyncAuthSettings.prototype, "openIdClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpenIDIatTTL" }),
        __metadata("design:type", String)
    ], BackendApiAppSyncAuthSettings.prototype, "openIdIatTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpenIDIssueURL" }),
        __metadata("design:type", String)
    ], BackendApiAppSyncAuthSettings.prototype, "openIdIssueUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpenIDProviderName" }),
        __metadata("design:type", String)
    ], BackendApiAppSyncAuthSettings.prototype, "openIdProviderName", void 0);
    return BackendApiAppSyncAuthSettings;
}(SpeakeasyBase));
export { BackendApiAppSyncAuthSettings };
