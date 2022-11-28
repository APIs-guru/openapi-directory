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
import { ConfigRuleStateEnum } from "./configrulestateenum";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";
import { Scope } from "./scope";
import { Source } from "./source";
// ConfigRule
/**
 * <p>An Config rule represents an Lambda function that you create for a custom rule or a predefined function for an Config managed rule. The function evaluates configuration items to assess whether your Amazon Web Services resources comply with your desired configurations. This function can run when Config detects a configuration change to an Amazon Web Services resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the Amazon Web Services CLI and Amazon Web Services SDKs if you want to create a rule that triggers evaluations for your resources when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Amazon Web Services resource Configurations with Config</a> in the <i>Config Developer Guide</i>.</p>
**/
var ConfigRule = /** @class */ (function (_super) {
    __extends(ConfigRule, _super);
    function ConfigRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigRuleArn" }),
        __metadata("design:type", String)
    ], ConfigRule.prototype, "configRuleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigRuleId" }),
        __metadata("design:type", String)
    ], ConfigRule.prototype, "configRuleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigRuleName" }),
        __metadata("design:type", String)
    ], ConfigRule.prototype, "configRuleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigRuleState" }),
        __metadata("design:type", String)
    ], ConfigRule.prototype, "configRuleState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedBy" }),
        __metadata("design:type", String)
    ], ConfigRule.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ConfigRule.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputParameters" }),
        __metadata("design:type", String)
    ], ConfigRule.prototype, "inputParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumExecutionFrequency" }),
        __metadata("design:type", String)
    ], ConfigRule.prototype, "maximumExecutionFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Scope" }),
        __metadata("design:type", Scope)
    ], ConfigRule.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Source" }),
        __metadata("design:type", Source)
    ], ConfigRule.prototype, "source", void 0);
    return ConfigRule;
}(SpeakeasyBase));
export { ConfigRule };
