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
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";
// OrganizationCustomRuleMetadata
/**
 * An object that specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
**/
var OrganizationCustomRuleMetadata = /** @class */ (function (_super) {
    __extends(OrganizationCustomRuleMetadata, _super);
    function OrganizationCustomRuleMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], OrganizationCustomRuleMetadata.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputParameters" }),
        __metadata("design:type", String)
    ], OrganizationCustomRuleMetadata.prototype, "inputParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LambdaFunctionArn" }),
        __metadata("design:type", String)
    ], OrganizationCustomRuleMetadata.prototype, "lambdaFunctionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumExecutionFrequency" }),
        __metadata("design:type", String)
    ], OrganizationCustomRuleMetadata.prototype, "maximumExecutionFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleTriggerTypes" }),
        __metadata("design:type", Array)
    ], OrganizationCustomRuleMetadata.prototype, "organizationConfigRuleTriggerTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceIdScope" }),
        __metadata("design:type", String)
    ], OrganizationCustomRuleMetadata.prototype, "resourceIdScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceTypesScope" }),
        __metadata("design:type", Array)
    ], OrganizationCustomRuleMetadata.prototype, "resourceTypesScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TagKeyScope" }),
        __metadata("design:type", String)
    ], OrganizationCustomRuleMetadata.prototype, "tagKeyScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TagValueScope" }),
        __metadata("design:type", String)
    ], OrganizationCustomRuleMetadata.prototype, "tagValueScope", void 0);
    return OrganizationCustomRuleMetadata;
}(SpeakeasyBase));
export { OrganizationCustomRuleMetadata };
