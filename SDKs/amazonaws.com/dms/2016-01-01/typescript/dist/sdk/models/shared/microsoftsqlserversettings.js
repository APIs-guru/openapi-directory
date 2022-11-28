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
import { SafeguardPolicyEnum } from "./safeguardpolicyenum";
// MicrosoftSqlServerSettings
/**
 * Provides information that defines a Microsoft SQL Server endpoint.
**/
var MicrosoftSqlServerSettings = /** @class */ (function (_super) {
    __extends(MicrosoftSqlServerSettings, _super);
    function MicrosoftSqlServerSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BcpPacketSize" }),
        __metadata("design:type", Number)
    ], MicrosoftSqlServerSettings.prototype, "bcpPacketSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlTablesFileGroup" }),
        __metadata("design:type", String)
    ], MicrosoftSqlServerSettings.prototype, "controlTablesFileGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], MicrosoftSqlServerSettings.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], MicrosoftSqlServerSettings.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], MicrosoftSqlServerSettings.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuerySingleAlwaysOnNode" }),
        __metadata("design:type", Boolean)
    ], MicrosoftSqlServerSettings.prototype, "querySingleAlwaysOnNode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadBackupOnly" }),
        __metadata("design:type", Boolean)
    ], MicrosoftSqlServerSettings.prototype, "readBackupOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SafeguardPolicy" }),
        __metadata("design:type", String)
    ], MicrosoftSqlServerSettings.prototype, "safeguardPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" }),
        __metadata("design:type", String)
    ], MicrosoftSqlServerSettings.prototype, "secretsManagerAccessRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" }),
        __metadata("design:type", String)
    ], MicrosoftSqlServerSettings.prototype, "secretsManagerSecretId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], MicrosoftSqlServerSettings.prototype, "serverName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseBcpFullLoad" }),
        __metadata("design:type", Boolean)
    ], MicrosoftSqlServerSettings.prototype, "useBcpFullLoad", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseThirdPartyBackupDevice" }),
        __metadata("design:type", Boolean)
    ], MicrosoftSqlServerSettings.prototype, "useThirdPartyBackupDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], MicrosoftSqlServerSettings.prototype, "username", void 0);
    return MicrosoftSqlServerSettings;
}(SpeakeasyBase));
export { MicrosoftSqlServerSettings };
