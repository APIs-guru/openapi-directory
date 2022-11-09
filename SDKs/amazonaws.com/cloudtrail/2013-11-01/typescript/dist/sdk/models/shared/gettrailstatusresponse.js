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
// GetTrailStatusResponse
/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
var GetTrailStatusResponse = /** @class */ (function (_super) {
    __extends(GetTrailStatusResponse, _super);
    function GetTrailStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=IsLogging" }),
        __metadata("design:type", Boolean)
    ], GetTrailStatusResponse.prototype, "isLogging", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestCloudWatchLogsDeliveryError" }),
        __metadata("design:type", String)
    ], GetTrailStatusResponse.prototype, "latestCloudWatchLogsDeliveryError", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestCloudWatchLogsDeliveryTime" }),
        __metadata("design:type", Date)
    ], GetTrailStatusResponse.prototype, "latestCloudWatchLogsDeliveryTime", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestDeliveryAttemptSucceeded" }),
        __metadata("design:type", String)
    ], GetTrailStatusResponse.prototype, "latestDeliveryAttemptSucceeded", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestDeliveryAttemptTime" }),
        __metadata("design:type", String)
    ], GetTrailStatusResponse.prototype, "latestDeliveryAttemptTime", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestDeliveryError" }),
        __metadata("design:type", String)
    ], GetTrailStatusResponse.prototype, "latestDeliveryError", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestDeliveryTime" }),
        __metadata("design:type", Date)
    ], GetTrailStatusResponse.prototype, "latestDeliveryTime", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestDigestDeliveryError" }),
        __metadata("design:type", String)
    ], GetTrailStatusResponse.prototype, "latestDigestDeliveryError", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestDigestDeliveryTime" }),
        __metadata("design:type", Date)
    ], GetTrailStatusResponse.prototype, "latestDigestDeliveryTime", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestNotificationAttemptSucceeded" }),
        __metadata("design:type", String)
    ], GetTrailStatusResponse.prototype, "latestNotificationAttemptSucceeded", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestNotificationAttemptTime" }),
        __metadata("design:type", String)
    ], GetTrailStatusResponse.prototype, "latestNotificationAttemptTime", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestNotificationError" }),
        __metadata("design:type", String)
    ], GetTrailStatusResponse.prototype, "latestNotificationError", void 0);
    __decorate([
        Metadata({ data: "json, name=LatestNotificationTime" }),
        __metadata("design:type", Date)
    ], GetTrailStatusResponse.prototype, "latestNotificationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=StartLoggingTime" }),
        __metadata("design:type", Date)
    ], GetTrailStatusResponse.prototype, "startLoggingTime", void 0);
    __decorate([
        Metadata({ data: "json, name=StopLoggingTime" }),
        __metadata("design:type", Date)
    ], GetTrailStatusResponse.prototype, "stopLoggingTime", void 0);
    __decorate([
        Metadata({ data: "json, name=TimeLoggingStarted" }),
        __metadata("design:type", String)
    ], GetTrailStatusResponse.prototype, "timeLoggingStarted", void 0);
    __decorate([
        Metadata({ data: "json, name=TimeLoggingStopped" }),
        __metadata("design:type", String)
    ], GetTrailStatusResponse.prototype, "timeLoggingStopped", void 0);
    return GetTrailStatusResponse;
}(SpeakeasyBase));
export { GetTrailStatusResponse };
