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
import { HecEndpointTypeEnum } from "./hecendpointtypeenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { SplunkRetryOptions } from "./splunkretryoptions";
import { SplunkS3BackupModeEnum } from "./splunks3backupmodeenum";
import { S3DestinationDescription } from "./s3destinationdescription";
// SplunkDestinationDescription
/**
 * Describes a destination in Splunk.
**/
var SplunkDestinationDescription = /** @class */ (function (_super) {
    __extends(SplunkDestinationDescription, _super);
    function SplunkDestinationDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" }),
        __metadata("design:type", CloudWatchLoggingOptions)
    ], SplunkDestinationDescription.prototype, "cloudWatchLoggingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HECAcknowledgmentTimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], SplunkDestinationDescription.prototype, "hecAcknowledgmentTimeoutInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HECEndpoint" }),
        __metadata("design:type", String)
    ], SplunkDestinationDescription.prototype, "hecEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HECEndpointType" }),
        __metadata("design:type", String)
    ], SplunkDestinationDescription.prototype, "hecEndpointType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HECToken" }),
        __metadata("design:type", String)
    ], SplunkDestinationDescription.prototype, "hecToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" }),
        __metadata("design:type", ProcessingConfiguration)
    ], SplunkDestinationDescription.prototype, "processingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryOptions" }),
        __metadata("design:type", SplunkRetryOptions)
    ], SplunkDestinationDescription.prototype, "retryOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3BackupMode" }),
        __metadata("design:type", String)
    ], SplunkDestinationDescription.prototype, "s3BackupMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3DestinationDescription" }),
        __metadata("design:type", S3DestinationDescription)
    ], SplunkDestinationDescription.prototype, "s3DestinationDescription", void 0);
    return SplunkDestinationDescription;
}(SpeakeasyBase));
export { SplunkDestinationDescription };
