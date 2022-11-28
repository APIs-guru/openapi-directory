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
import { OrganizationCustomRuleMetadata } from "./organizationcustomrulemetadata";
import { OrganizationManagedRuleMetadata } from "./organizationmanagedrulemetadata";
// OrganizationConfigRule
/**
 * An organization config rule that has information about config rules that Config creates in member accounts.
**/
var OrganizationConfigRule = /** @class */ (function (_super) {
    __extends(OrganizationConfigRule, _super);
    function OrganizationConfigRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExcludedAccounts" }),
        __metadata("design:type", Array)
    ], OrganizationConfigRule.prototype, "excludedAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateTime" }),
        __metadata("design:type", Date)
    ], OrganizationConfigRule.prototype, "lastUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleArn" }),
        __metadata("design:type", String)
    ], OrganizationConfigRule.prototype, "organizationConfigRuleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleName" }),
        __metadata("design:type", String)
    ], OrganizationConfigRule.prototype, "organizationConfigRuleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganizationCustomRuleMetadata" }),
        __metadata("design:type", OrganizationCustomRuleMetadata)
    ], OrganizationConfigRule.prototype, "organizationCustomRuleMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganizationManagedRuleMetadata" }),
        __metadata("design:type", OrganizationManagedRuleMetadata)
    ], OrganizationConfigRule.prototype, "organizationManagedRuleMetadata", void 0);
    return OrganizationConfigRule;
}(SpeakeasyBase));
export { OrganizationConfigRule };
