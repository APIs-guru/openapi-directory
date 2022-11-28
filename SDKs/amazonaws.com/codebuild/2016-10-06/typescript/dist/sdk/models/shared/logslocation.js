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
import { CloudWatchLogsConfig } from "./cloudwatchlogsconfig";
import { S3LogsConfig } from "./s3logsconfig";
// LogsLocation
/**
 * Information about build logs in CloudWatch Logs.
**/
var LogsLocation = /** @class */ (function (_super) {
    __extends(LogsLocation, _super);
    function LogsLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudWatchLogs" }),
        __metadata("design:type", CloudWatchLogsConfig)
    ], LogsLocation.prototype, "cloudWatchLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudWatchLogsArn" }),
        __metadata("design:type", String)
    ], LogsLocation.prototype, "cloudWatchLogsArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deepLink" }),
        __metadata("design:type", String)
    ], LogsLocation.prototype, "deepLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupName" }),
        __metadata("design:type", String)
    ], LogsLocation.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3DeepLink" }),
        __metadata("design:type", String)
    ], LogsLocation.prototype, "s3DeepLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Logs" }),
        __metadata("design:type", S3LogsConfig)
    ], LogsLocation.prototype, "s3Logs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3LogsArn" }),
        __metadata("design:type", String)
    ], LogsLocation.prototype, "s3LogsArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamName" }),
        __metadata("design:type", String)
    ], LogsLocation.prototype, "streamName", void 0);
    return LogsLocation;
}(SpeakeasyBase));
export { LogsLocation };
