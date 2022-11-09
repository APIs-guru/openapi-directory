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
import { CannedAclForObjectsValueEnum } from "./cannedaclforobjectsvalueenum";
import { CompressionTypeValueEnum } from "./compressiontypevalueenum";
import { DataFormatValueEnum } from "./dataformatvalueenum";
import { DatePartitionDelimiterValueEnum } from "./datepartitiondelimitervalueenum";
import { DatePartitionSequenceValueEnum } from "./datepartitionsequencevalueenum";
import { EncodingTypeValueEnum } from "./encodingtypevalueenum";
import { EncryptionModeValueEnum } from "./encryptionmodevalueenum";
import { ParquetVersionValueEnum } from "./parquetversionvalueenum";
// S3Settings
/**
 * Settings for exporting data to Amazon S3.
**/
var S3Settings = /** @class */ (function (_super) {
    __extends(S3Settings, _super);
    function S3Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AddColumnName" }),
        __metadata("design:type", Boolean)
    ], S3Settings.prototype, "addColumnName", void 0);
    __decorate([
        Metadata({ data: "json, name=BucketFolder" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "bucketFolder", void 0);
    __decorate([
        Metadata({ data: "json, name=BucketName" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "bucketName", void 0);
    __decorate([
        Metadata({ data: "json, name=CannedAclForObjects" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "cannedAclForObjects", void 0);
    __decorate([
        Metadata({ data: "json, name=CdcInsertsAndUpdates" }),
        __metadata("design:type", Boolean)
    ], S3Settings.prototype, "cdcInsertsAndUpdates", void 0);
    __decorate([
        Metadata({ data: "json, name=CdcInsertsOnly" }),
        __metadata("design:type", Boolean)
    ], S3Settings.prototype, "cdcInsertsOnly", void 0);
    __decorate([
        Metadata({ data: "json, name=CdcMaxBatchInterval" }),
        __metadata("design:type", Number)
    ], S3Settings.prototype, "cdcMaxBatchInterval", void 0);
    __decorate([
        Metadata({ data: "json, name=CdcMinFileSize" }),
        __metadata("design:type", Number)
    ], S3Settings.prototype, "cdcMinFileSize", void 0);
    __decorate([
        Metadata({ data: "json, name=CdcPath" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "cdcPath", void 0);
    __decorate([
        Metadata({ data: "json, name=CompressionType" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "compressionType", void 0);
    __decorate([
        Metadata({ data: "json, name=CsvDelimiter" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "csvDelimiter", void 0);
    __decorate([
        Metadata({ data: "json, name=CsvNoSupValue" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "csvNoSupValue", void 0);
    __decorate([
        Metadata({ data: "json, name=CsvNullValue" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "csvNullValue", void 0);
    __decorate([
        Metadata({ data: "json, name=CsvRowDelimiter" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "csvRowDelimiter", void 0);
    __decorate([
        Metadata({ data: "json, name=DataFormat" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "dataFormat", void 0);
    __decorate([
        Metadata({ data: "json, name=DataPageSize" }),
        __metadata("design:type", Number)
    ], S3Settings.prototype, "dataPageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=DatePartitionDelimiter" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "datePartitionDelimiter", void 0);
    __decorate([
        Metadata({ data: "json, name=DatePartitionEnabled" }),
        __metadata("design:type", Boolean)
    ], S3Settings.prototype, "datePartitionEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=DatePartitionSequence" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "datePartitionSequence", void 0);
    __decorate([
        Metadata({ data: "json, name=DictPageSizeLimit" }),
        __metadata("design:type", Number)
    ], S3Settings.prototype, "dictPageSizeLimit", void 0);
    __decorate([
        Metadata({ data: "json, name=EnableStatistics" }),
        __metadata("design:type", Boolean)
    ], S3Settings.prototype, "enableStatistics", void 0);
    __decorate([
        Metadata({ data: "json, name=EncodingType" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "encodingType", void 0);
    __decorate([
        Metadata({ data: "json, name=EncryptionMode" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "encryptionMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ExternalTableDefinition" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "externalTableDefinition", void 0);
    __decorate([
        Metadata({ data: "json, name=IgnoreHeaderRows" }),
        __metadata("design:type", Number)
    ], S3Settings.prototype, "ignoreHeaderRows", void 0);
    __decorate([
        Metadata({ data: "json, name=IncludeOpForFullLoad" }),
        __metadata("design:type", Boolean)
    ], S3Settings.prototype, "includeOpForFullLoad", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxFileSize" }),
        __metadata("design:type", Number)
    ], S3Settings.prototype, "maxFileSize", void 0);
    __decorate([
        Metadata({ data: "json, name=ParquetTimestampInMillisecond" }),
        __metadata("design:type", Boolean)
    ], S3Settings.prototype, "parquetTimestampInMillisecond", void 0);
    __decorate([
        Metadata({ data: "json, name=ParquetVersion" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "parquetVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=PreserveTransactions" }),
        __metadata("design:type", Boolean)
    ], S3Settings.prototype, "preserveTransactions", void 0);
    __decorate([
        Metadata({ data: "json, name=Rfc4180" }),
        __metadata("design:type", Boolean)
    ], S3Settings.prototype, "rfc4180", void 0);
    __decorate([
        Metadata({ data: "json, name=RowGroupLength" }),
        __metadata("design:type", Number)
    ], S3Settings.prototype, "rowGroupLength", void 0);
    __decorate([
        Metadata({ data: "json, name=ServerSideEncryptionKmsKeyId" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "serverSideEncryptionKmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceAccessRoleArn" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "serviceAccessRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=TimestampColumnName" }),
        __metadata("design:type", String)
    ], S3Settings.prototype, "timestampColumnName", void 0);
    __decorate([
        Metadata({ data: "json, name=UseCsvNoSupValue" }),
        __metadata("design:type", Boolean)
    ], S3Settings.prototype, "useCsvNoSupValue", void 0);
    return S3Settings;
}(SpeakeasyBase));
export { S3Settings };
