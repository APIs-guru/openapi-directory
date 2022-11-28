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
// ConfigRuleEvaluationStatus
/**
 * <p>Status information for your Config managed rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom Config rules.</p>
**/
var ConfigRuleEvaluationStatus = /** @class */ (function (_super) {
    __extends(ConfigRuleEvaluationStatus, _super);
    function ConfigRuleEvaluationStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigRuleArn" }),
        __metadata("design:type", String)
    ], ConfigRuleEvaluationStatus.prototype, "configRuleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigRuleId" }),
        __metadata("design:type", String)
    ], ConfigRuleEvaluationStatus.prototype, "configRuleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigRuleName" }),
        __metadata("design:type", String)
    ], ConfigRuleEvaluationStatus.prototype, "configRuleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstActivatedTime" }),
        __metadata("design:type", Date)
    ], ConfigRuleEvaluationStatus.prototype, "firstActivatedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstEvaluationStarted" }),
        __metadata("design:type", Boolean)
    ], ConfigRuleEvaluationStatus.prototype, "firstEvaluationStarted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastDeactivatedTime" }),
        __metadata("design:type", Date)
    ], ConfigRuleEvaluationStatus.prototype, "lastDeactivatedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastErrorCode" }),
        __metadata("design:type", String)
    ], ConfigRuleEvaluationStatus.prototype, "lastErrorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastErrorMessage" }),
        __metadata("design:type", String)
    ], ConfigRuleEvaluationStatus.prototype, "lastErrorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastFailedEvaluationTime" }),
        __metadata("design:type", Date)
    ], ConfigRuleEvaluationStatus.prototype, "lastFailedEvaluationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastFailedInvocationTime" }),
        __metadata("design:type", Date)
    ], ConfigRuleEvaluationStatus.prototype, "lastFailedInvocationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastSuccessfulEvaluationTime" }),
        __metadata("design:type", Date)
    ], ConfigRuleEvaluationStatus.prototype, "lastSuccessfulEvaluationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastSuccessfulInvocationTime" }),
        __metadata("design:type", Date)
    ], ConfigRuleEvaluationStatus.prototype, "lastSuccessfulInvocationTime", void 0);
    return ConfigRuleEvaluationStatus;
}(SpeakeasyBase));
export { ConfigRuleEvaluationStatus };
