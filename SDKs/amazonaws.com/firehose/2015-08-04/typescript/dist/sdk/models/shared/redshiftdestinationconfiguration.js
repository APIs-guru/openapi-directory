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
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CopyCommand } from "./copycommand";
import { ProcessingConfiguration } from "./processingconfiguration";
import { RedshiftRetryOptions } from "./redshiftretryoptions";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { RedshiftS3BackupModeEnum } from "./redshifts3backupmodeenum";
// RedshiftDestinationConfiguration
/**
 * Describes the configuration of a destination in Amazon Redshift.
**/
var RedshiftDestinationConfiguration = /** @class */ (function (_super) {
    __extends(RedshiftDestinationConfiguration, _super);
    function RedshiftDestinationConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" }),
        __metadata("design:type", CloudWatchLoggingOptions)
    ], RedshiftDestinationConfiguration.prototype, "cloudWatchLoggingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterJDBCURL" }),
        __metadata("design:type", String)
    ], RedshiftDestinationConfiguration.prototype, "clusterJdbcurl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CopyCommand" }),
        __metadata("design:type", CopyCommand)
    ], RedshiftDestinationConfiguration.prototype, "copyCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], RedshiftDestinationConfiguration.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" }),
        __metadata("design:type", ProcessingConfiguration)
    ], RedshiftDestinationConfiguration.prototype, "processingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryOptions" }),
        __metadata("design:type", RedshiftRetryOptions)
    ], RedshiftDestinationConfiguration.prototype, "retryOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleARN" }),
        __metadata("design:type", String)
    ], RedshiftDestinationConfiguration.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3BackupConfiguration" }),
        __metadata("design:type", S3DestinationConfiguration)
    ], RedshiftDestinationConfiguration.prototype, "s3BackupConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3BackupMode" }),
        __metadata("design:type", String)
    ], RedshiftDestinationConfiguration.prototype, "s3BackupMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Configuration" }),
        __metadata("design:type", S3DestinationConfiguration)
    ], RedshiftDestinationConfiguration.prototype, "s3Configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], RedshiftDestinationConfiguration.prototype, "username", void 0);
    return RedshiftDestinationConfiguration;
}(SpeakeasyBase));
export { RedshiftDestinationConfiguration };
