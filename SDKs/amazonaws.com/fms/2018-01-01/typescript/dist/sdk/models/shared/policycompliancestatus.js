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
import { EvaluationResult } from "./evaluationresult";
// PolicyComplianceStatus
/**
 * Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies.
**/
var PolicyComplianceStatus = /** @class */ (function (_super) {
    __extends(PolicyComplianceStatus, _super);
    function PolicyComplianceStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EvaluationResults", elemType: EvaluationResult }),
        __metadata("design:type", Array)
    ], PolicyComplianceStatus.prototype, "evaluationResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssueInfoMap" }),
        __metadata("design:type", Map)
    ], PolicyComplianceStatus.prototype, "issueInfoMap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], PolicyComplianceStatus.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MemberAccount" }),
        __metadata("design:type", String)
    ], PolicyComplianceStatus.prototype, "memberAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyId" }),
        __metadata("design:type", String)
    ], PolicyComplianceStatus.prototype, "policyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyName" }),
        __metadata("design:type", String)
    ], PolicyComplianceStatus.prototype, "policyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyOwner" }),
        __metadata("design:type", String)
    ], PolicyComplianceStatus.prototype, "policyOwner", void 0);
    return PolicyComplianceStatus;
}(SpeakeasyBase));
export { PolicyComplianceStatus };
