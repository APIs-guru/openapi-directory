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
import { ComplianceViolator } from "./complianceviolator";
// PolicyComplianceDetail
/**
 * Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.
**/
var PolicyComplianceDetail = /** @class */ (function (_super) {
    __extends(PolicyComplianceDetail, _super);
    function PolicyComplianceDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EvaluationLimitExceeded" }),
        __metadata("design:type", Boolean)
    ], PolicyComplianceDetail.prototype, "evaluationLimitExceeded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpiredAt" }),
        __metadata("design:type", Date)
    ], PolicyComplianceDetail.prototype, "expiredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssueInfoMap" }),
        __metadata("design:type", Map)
    ], PolicyComplianceDetail.prototype, "issueInfoMap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MemberAccount" }),
        __metadata("design:type", String)
    ], PolicyComplianceDetail.prototype, "memberAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyId" }),
        __metadata("design:type", String)
    ], PolicyComplianceDetail.prototype, "policyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyOwner" }),
        __metadata("design:type", String)
    ], PolicyComplianceDetail.prototype, "policyOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Violators", elemType: ComplianceViolator }),
        __metadata("design:type", Array)
    ], PolicyComplianceDetail.prototype, "violators", void 0);
    return PolicyComplianceDetail;
}(SpeakeasyBase));
export { PolicyComplianceDetail };
