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
import { HttpEndpointBufferingHints } from "./httpendpointbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HttpEndpointDescription } from "./httpendpointdescription";
import { ProcessingConfiguration } from "./processingconfiguration";
import { HttpEndpointRequestConfiguration } from "./httpendpointrequestconfiguration";
import { HttpEndpointRetryOptions } from "./httpendpointretryoptions";
import { HttpEndpointS3BackupModeEnum } from "./httpendpoints3backupmodeenum";
import { S3DestinationDescription } from "./s3destinationdescription";
// HttpEndpointDestinationDescription
/**
 * Describes the HTTP endpoint destination.
**/
var HttpEndpointDestinationDescription = /** @class */ (function (_super) {
    __extends(HttpEndpointDestinationDescription, _super);
    function HttpEndpointDestinationDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BufferingHints" }),
        __metadata("design:type", HttpEndpointBufferingHints)
    ], HttpEndpointDestinationDescription.prototype, "bufferingHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" }),
        __metadata("design:type", CloudWatchLoggingOptions)
    ], HttpEndpointDestinationDescription.prototype, "cloudWatchLoggingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointConfiguration" }),
        __metadata("design:type", HttpEndpointDescription)
    ], HttpEndpointDestinationDescription.prototype, "endpointConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" }),
        __metadata("design:type", ProcessingConfiguration)
    ], HttpEndpointDestinationDescription.prototype, "processingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestConfiguration" }),
        __metadata("design:type", HttpEndpointRequestConfiguration)
    ], HttpEndpointDestinationDescription.prototype, "requestConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryOptions" }),
        __metadata("design:type", HttpEndpointRetryOptions)
    ], HttpEndpointDestinationDescription.prototype, "retryOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleARN" }),
        __metadata("design:type", String)
    ], HttpEndpointDestinationDescription.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3BackupMode" }),
        __metadata("design:type", String)
    ], HttpEndpointDestinationDescription.prototype, "s3BackupMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3DestinationDescription" }),
        __metadata("design:type", S3DestinationDescription)
    ], HttpEndpointDestinationDescription.prototype, "s3DestinationDescription", void 0);
    return HttpEndpointDestinationDescription;
}(SpeakeasyBase));
export { HttpEndpointDestinationDescription };
