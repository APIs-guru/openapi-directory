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
import { CharLengthSemanticsEnum } from "./charlengthsemanticsenum";
// OracleSettings
/**
 * Provides information that defines an Oracle endpoint.
**/
var OracleSettings = /** @class */ (function (_super) {
    __extends(OracleSettings, _super);
    function OracleSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessAlternateDirectly" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "accessAlternateDirectly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddSupplementalLogging" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "addSupplementalLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalArchivedLogDestId" }),
        __metadata("design:type", Number)
    ], OracleSettings.prototype, "additionalArchivedLogDestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowSelectNestedTables" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "allowSelectNestedTables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArchivedLogDestId" }),
        __metadata("design:type", Number)
    ], OracleSettings.prototype, "archivedLogDestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArchivedLogsOnly" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "archivedLogsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AsmPassword" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "asmPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AsmServer" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "asmServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AsmUser" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "asmUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CharLengthSemantics" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "charLengthSemantics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectPathNoLog" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "directPathNoLog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectPathParallelLoad" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "directPathParallelLoad", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableHomogenousTablespace" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "enableHomogenousTablespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtraArchivedLogDestIds" }),
        __metadata("design:type", Array)
    ], OracleSettings.prototype, "extraArchivedLogDestIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailTasksOnLobTruncation" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "failTasksOnLobTruncation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberDatatypeScale" }),
        __metadata("design:type", Number)
    ], OracleSettings.prototype, "numberDatatypeScale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OraclePathPrefix" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "oraclePathPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParallelAsmReadThreads" }),
        __metadata("design:type", Number)
    ], OracleSettings.prototype, "parallelAsmReadThreads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], OracleSettings.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadAheadBlocks" }),
        __metadata("design:type", Number)
    ], OracleSettings.prototype, "readAheadBlocks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadTableSpaceName" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "readTableSpaceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplacePathPrefix" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "replacePathPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryInterval" }),
        __metadata("design:type", Number)
    ], OracleSettings.prototype, "retryInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "secretsManagerAccessRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerOracleAsmAccessRoleArn" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "secretsManagerOracleAsmAccessRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerOracleAsmSecretId" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "secretsManagerOracleAsmSecretId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "secretsManagerSecretId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityDbEncryption" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "securityDbEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityDbEncryptionName" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "securityDbEncryptionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "serverName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpatialDataOptionToGeoJsonFunctionName" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "spatialDataOptionToGeoJsonFunctionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StandbyDelayTime" }),
        __metadata("design:type", Number)
    ], OracleSettings.prototype, "standbyDelayTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseAlternateFolderForOnline" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "useAlternateFolderForOnline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseBFile" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "useBFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseDirectPathFullLoad" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "useDirectPathFullLoad", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseLogminerReader" }),
        __metadata("design:type", Boolean)
    ], OracleSettings.prototype, "useLogminerReader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UsePathPrefix" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "usePathPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], OracleSettings.prototype, "username", void 0);
    return OracleSettings;
}(SpeakeasyBase));
export { OracleSettings };
