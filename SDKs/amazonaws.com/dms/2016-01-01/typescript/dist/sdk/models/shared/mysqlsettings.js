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
import { TargetDbTypeEnum } from "./targetdbtypeenum";
// MySqlSettings
/**
 * Provides information that defines a MySQL endpoint.
**/
var MySqlSettings = /** @class */ (function (_super) {
    __extends(MySqlSettings, _super);
    function MySqlSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AfterConnectScript" }),
        __metadata("design:type", String)
    ], MySqlSettings.prototype, "afterConnectScript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CleanSourceMetadataOnMismatch" }),
        __metadata("design:type", Boolean)
    ], MySqlSettings.prototype, "cleanSourceMetadataOnMismatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], MySqlSettings.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventsPollInterval" }),
        __metadata("design:type", Number)
    ], MySqlSettings.prototype, "eventsPollInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxFileSize" }),
        __metadata("design:type", Number)
    ], MySqlSettings.prototype, "maxFileSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParallelLoadThreads" }),
        __metadata("design:type", Number)
    ], MySqlSettings.prototype, "parallelLoadThreads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], MySqlSettings.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], MySqlSettings.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" }),
        __metadata("design:type", String)
    ], MySqlSettings.prototype, "secretsManagerAccessRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" }),
        __metadata("design:type", String)
    ], MySqlSettings.prototype, "secretsManagerSecretId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], MySqlSettings.prototype, "serverName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerTimezone" }),
        __metadata("design:type", String)
    ], MySqlSettings.prototype, "serverTimezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetDbType" }),
        __metadata("design:type", String)
    ], MySqlSettings.prototype, "targetDbType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], MySqlSettings.prototype, "username", void 0);
    return MySqlSettings;
}(SpeakeasyBase));
export { MySqlSettings };
