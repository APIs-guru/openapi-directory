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
import { RedshiftS3BackupModeEnum } from "./redshifts3backupmodeenum";
import { S3DestinationUpdate } from "./s3destinationupdate";
// RedshiftDestinationUpdate
/**
 * Describes an update for a destination in Amazon Redshift.
**/
var RedshiftDestinationUpdate = /** @class */ (function (_super) {
    __extends(RedshiftDestinationUpdate, _super);
    function RedshiftDestinationUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" }),
        __metadata("design:type", CloudWatchLoggingOptions)
    ], RedshiftDestinationUpdate.prototype, "cloudWatchLoggingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterJDBCURL" }),
        __metadata("design:type", String)
    ], RedshiftDestinationUpdate.prototype, "clusterJdbcurl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CopyCommand" }),
        __metadata("design:type", CopyCommand)
    ], RedshiftDestinationUpdate.prototype, "copyCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], RedshiftDestinationUpdate.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" }),
        __metadata("design:type", ProcessingConfiguration)
    ], RedshiftDestinationUpdate.prototype, "processingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryOptions" }),
        __metadata("design:type", RedshiftRetryOptions)
    ], RedshiftDestinationUpdate.prototype, "retryOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleARN" }),
        __metadata("design:type", String)
    ], RedshiftDestinationUpdate.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3BackupMode" }),
        __metadata("design:type", String)
    ], RedshiftDestinationUpdate.prototype, "s3BackupMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3BackupUpdate" }),
        __metadata("design:type", S3DestinationUpdate)
    ], RedshiftDestinationUpdate.prototype, "s3BackupUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Update" }),
        __metadata("design:type", S3DestinationUpdate)
    ], RedshiftDestinationUpdate.prototype, "s3Update", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], RedshiftDestinationUpdate.prototype, "username", void 0);
    return RedshiftDestinationUpdate;
}(SpeakeasyBase));
export { RedshiftDestinationUpdate };
