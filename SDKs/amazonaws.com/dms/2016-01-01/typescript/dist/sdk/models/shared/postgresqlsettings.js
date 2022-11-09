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
import { PluginNameValueEnum } from "./pluginnamevalueenum";
// PostgreSqlSettings
/**
 * Provides information that defines a PostgreSQL endpoint.
**/
var PostgreSqlSettings = /** @class */ (function (_super) {
    __extends(PostgreSqlSettings, _super);
    function PostgreSqlSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AfterConnectScript" }),
        __metadata("design:type", String)
    ], PostgreSqlSettings.prototype, "afterConnectScript", void 0);
    __decorate([
        Metadata({ data: "json, name=CaptureDdls" }),
        __metadata("design:type", Boolean)
    ], PostgreSqlSettings.prototype, "captureDdls", void 0);
    __decorate([
        Metadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], PostgreSqlSettings.prototype, "databaseName", void 0);
    __decorate([
        Metadata({ data: "json, name=DdlArtifactsSchema" }),
        __metadata("design:type", String)
    ], PostgreSqlSettings.prototype, "ddlArtifactsSchema", void 0);
    __decorate([
        Metadata({ data: "json, name=ExecuteTimeout" }),
        __metadata("design:type", Number)
    ], PostgreSqlSettings.prototype, "executeTimeout", void 0);
    __decorate([
        Metadata({ data: "json, name=FailTasksOnLobTruncation" }),
        __metadata("design:type", Boolean)
    ], PostgreSqlSettings.prototype, "failTasksOnLobTruncation", void 0);
    __decorate([
        Metadata({ data: "json, name=HeartbeatEnable" }),
        __metadata("design:type", Boolean)
    ], PostgreSqlSettings.prototype, "heartbeatEnable", void 0);
    __decorate([
        Metadata({ data: "json, name=HeartbeatFrequency" }),
        __metadata("design:type", Number)
    ], PostgreSqlSettings.prototype, "heartbeatFrequency", void 0);
    __decorate([
        Metadata({ data: "json, name=HeartbeatSchema" }),
        __metadata("design:type", String)
    ], PostgreSqlSettings.prototype, "heartbeatSchema", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxFileSize" }),
        __metadata("design:type", Number)
    ], PostgreSqlSettings.prototype, "maxFileSize", void 0);
    __decorate([
        Metadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], PostgreSqlSettings.prototype, "password", void 0);
    __decorate([
        Metadata({ data: "json, name=PluginName" }),
        __metadata("design:type", String)
    ], PostgreSqlSettings.prototype, "pluginName", void 0);
    __decorate([
        Metadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], PostgreSqlSettings.prototype, "port", void 0);
    __decorate([
        Metadata({ data: "json, name=SecretsManagerAccessRoleArn" }),
        __metadata("design:type", String)
    ], PostgreSqlSettings.prototype, "secretsManagerAccessRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=SecretsManagerSecretId" }),
        __metadata("design:type", String)
    ], PostgreSqlSettings.prototype, "secretsManagerSecretId", void 0);
    __decorate([
        Metadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], PostgreSqlSettings.prototype, "serverName", void 0);
    __decorate([
        Metadata({ data: "json, name=SlotName" }),
        __metadata("design:type", String)
    ], PostgreSqlSettings.prototype, "slotName", void 0);
    __decorate([
        Metadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], PostgreSqlSettings.prototype, "username", void 0);
    return PostgreSqlSettings;
}(SpeakeasyBase));
export { PostgreSqlSettings };
