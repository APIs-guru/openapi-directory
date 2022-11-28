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
import { EncryptionModeValueEnum } from "./encryptionmodevalueenum";
// RedshiftSettings
/**
 * Provides information that defines an Amazon Redshift endpoint.
**/
var RedshiftSettings = /** @class */ (function (_super) {
    __extends(RedshiftSettings, _super);
    function RedshiftSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AcceptAnyDate" }),
        __metadata("design:type", Boolean)
    ], RedshiftSettings.prototype, "acceptAnyDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AfterConnectScript" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "afterConnectScript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BucketFolder" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "bucketFolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BucketName" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "bucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CaseSensitiveNames" }),
        __metadata("design:type", Boolean)
    ], RedshiftSettings.prototype, "caseSensitiveNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompUpdate" }),
        __metadata("design:type", Boolean)
    ], RedshiftSettings.prototype, "compUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConnectionTimeout" }),
        __metadata("design:type", Number)
    ], RedshiftSettings.prototype, "connectionTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateFormat" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "dateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmptyAsNull" }),
        __metadata("design:type", Boolean)
    ], RedshiftSettings.prototype, "emptyAsNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionMode" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "encryptionMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExplicitIds" }),
        __metadata("design:type", Boolean)
    ], RedshiftSettings.prototype, "explicitIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileTransferUploadStreams" }),
        __metadata("design:type", Number)
    ], RedshiftSettings.prototype, "fileTransferUploadStreams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoadTimeout" }),
        __metadata("design:type", Number)
    ], RedshiftSettings.prototype, "loadTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxFileSize" }),
        __metadata("design:type", Number)
    ], RedshiftSettings.prototype, "maxFileSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], RedshiftSettings.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoveQuotes" }),
        __metadata("design:type", Boolean)
    ], RedshiftSettings.prototype, "removeQuotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplaceChars" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "replaceChars", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplaceInvalidChars" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "replaceInvalidChars", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "secretsManagerAccessRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "secretsManagerSecretId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "serverName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerSideEncryptionKmsKeyId" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "serverSideEncryptionKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "serviceAccessRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeFormat" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "timeFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrimBlanks" }),
        __metadata("design:type", Boolean)
    ], RedshiftSettings.prototype, "trimBlanks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TruncateColumns" }),
        __metadata("design:type", Boolean)
    ], RedshiftSettings.prototype, "truncateColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], RedshiftSettings.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WriteBufferSize" }),
        __metadata("design:type", Number)
    ], RedshiftSettings.prototype, "writeBufferSize", void 0);
    return RedshiftSettings;
}(SpeakeasyBase));
export { RedshiftSettings };
