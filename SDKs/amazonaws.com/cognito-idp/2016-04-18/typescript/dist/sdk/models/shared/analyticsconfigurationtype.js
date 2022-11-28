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
// AnalyticsConfigurationType
/**
 * <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1. In regions where Pinpoint is available, Cognito User Pools will support sending events to Amazon Pinpoint projects within that same region. </p> </note>
**/
var AnalyticsConfigurationType = /** @class */ (function (_super) {
    __extends(AnalyticsConfigurationType, _super);
    function AnalyticsConfigurationType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationArn" }),
        __metadata("design:type", String)
    ], AnalyticsConfigurationType.prototype, "applicationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationId" }),
        __metadata("design:type", String)
    ], AnalyticsConfigurationType.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalId" }),
        __metadata("design:type", String)
    ], AnalyticsConfigurationType.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], AnalyticsConfigurationType.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserDataShared" }),
        __metadata("design:type", Boolean)
    ], AnalyticsConfigurationType.prototype, "userDataShared", void 0);
    return AnalyticsConfigurationType;
}(SpeakeasyBase));
export { AnalyticsConfigurationType };
