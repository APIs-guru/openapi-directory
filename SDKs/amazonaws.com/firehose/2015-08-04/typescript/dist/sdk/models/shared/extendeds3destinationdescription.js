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
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { DataFormatConversionConfiguration } from "./dataformatconversionconfiguration";
import { DynamicPartitioningConfiguration } from "./dynamicpartitioningconfiguration";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationDescription } from "./s3destinationdescription";
import { S3BackupModeEnum } from "./s3backupmodeenum";
// ExtendedS3DestinationDescription
/**
 * Describes a destination in Amazon S3.
**/
var ExtendedS3DestinationDescription = /** @class */ (function (_super) {
    __extends(ExtendedS3DestinationDescription, _super);
    function ExtendedS3DestinationDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BucketARN" }),
        __metadata("design:type", String)
    ], ExtendedS3DestinationDescription.prototype, "bucketArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BufferingHints" }),
        __metadata("design:type", BufferingHints)
    ], ExtendedS3DestinationDescription.prototype, "bufferingHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" }),
        __metadata("design:type", CloudWatchLoggingOptions)
    ], ExtendedS3DestinationDescription.prototype, "cloudWatchLoggingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompressionFormat" }),
        __metadata("design:type", String)
    ], ExtendedS3DestinationDescription.prototype, "compressionFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataFormatConversionConfiguration" }),
        __metadata("design:type", DataFormatConversionConfiguration)
    ], ExtendedS3DestinationDescription.prototype, "dataFormatConversionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DynamicPartitioningConfiguration" }),
        __metadata("design:type", DynamicPartitioningConfiguration)
    ], ExtendedS3DestinationDescription.prototype, "dynamicPartitioningConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionConfiguration" }),
        __metadata("design:type", EncryptionConfiguration)
    ], ExtendedS3DestinationDescription.prototype, "encryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorOutputPrefix" }),
        __metadata("design:type", String)
    ], ExtendedS3DestinationDescription.prototype, "errorOutputPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Prefix" }),
        __metadata("design:type", String)
    ], ExtendedS3DestinationDescription.prototype, "prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" }),
        __metadata("design:type", ProcessingConfiguration)
    ], ExtendedS3DestinationDescription.prototype, "processingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleARN" }),
        __metadata("design:type", String)
    ], ExtendedS3DestinationDescription.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3BackupDescription" }),
        __metadata("design:type", S3DestinationDescription)
    ], ExtendedS3DestinationDescription.prototype, "s3BackupDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3BackupMode" }),
        __metadata("design:type", String)
    ], ExtendedS3DestinationDescription.prototype, "s3BackupMode", void 0);
    return ExtendedS3DestinationDescription;
}(SpeakeasyBase));
export { ExtendedS3DestinationDescription };
