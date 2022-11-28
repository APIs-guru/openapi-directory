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
// OrganizationManagedRuleMetadata
/**
 * An object that specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
**/
var OrganizationManagedRuleMetadata = /** @class */ (function (_super) {
    __extends(OrganizationManagedRuleMetadata, _super);
    function OrganizationManagedRuleMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], OrganizationManagedRuleMetadata.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputParameters" }),
        __metadata("design:type", String)
    ], OrganizationManagedRuleMetadata.prototype, "inputParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumExecutionFrequency" }),
        __metadata("design:type", String)
    ], OrganizationManagedRuleMetadata.prototype, "maximumExecutionFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceIdScope" }),
        __metadata("design:type", String)
    ], OrganizationManagedRuleMetadata.prototype, "resourceIdScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceTypesScope" }),
        __metadata("design:type", Array)
    ], OrganizationManagedRuleMetadata.prototype, "resourceTypesScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleIdentifier" }),
        __metadata("design:type", String)
    ], OrganizationManagedRuleMetadata.prototype, "ruleIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TagKeyScope" }),
        __metadata("design:type", String)
    ], OrganizationManagedRuleMetadata.prototype, "tagKeyScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TagValueScope" }),
        __metadata("design:type", String)
    ], OrganizationManagedRuleMetadata.prototype, "tagValueScope", void 0);
    return OrganizationManagedRuleMetadata;
}(SpeakeasyBase));
export { OrganizationManagedRuleMetadata };
