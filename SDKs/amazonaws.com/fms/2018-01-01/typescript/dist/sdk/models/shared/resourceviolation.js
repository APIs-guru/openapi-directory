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
import { AwsEc2InstanceViolation } from "./awsec2instanceviolation";
import { AwsEc2NetworkInterfaceViolation } from "./awsec2networkinterfaceviolation";
import { AwsVpcSecurityGroupViolation } from "./awsvpcsecuritygroupviolation";
import { DnsDuplicateRuleGroupViolation } from "./dnsduplicaterulegroupviolation";
import { DnsRuleGroupLimitExceededViolation } from "./dnsrulegrouplimitexceededviolation";
import { DnsRuleGroupPriorityConflictViolation } from "./dnsrulegrouppriorityconflictviolation";
import { NetworkFirewallBlackHoleRouteDetectedViolation } from "./networkfirewallblackholeroutedetectedviolation";
import { NetworkFirewallInternetTrafficNotInspectedViolation } from "./networkfirewallinternettrafficnotinspectedviolation";
import { NetworkFirewallInvalidRouteConfigurationViolation } from "./networkfirewallinvalidrouteconfigurationviolation";
import { NetworkFirewallMissingExpectedRtViolation } from "./networkfirewallmissingexpectedrtviolation";
import { NetworkFirewallMissingExpectedRoutesViolation } from "./networkfirewallmissingexpectedroutesviolation";
import { NetworkFirewallMissingFirewallViolation } from "./networkfirewallmissingfirewallviolation";
import { NetworkFirewallMissingSubnetViolation } from "./networkfirewallmissingsubnetviolation";
import { NetworkFirewallPolicyModifiedViolation } from "./networkfirewallpolicymodifiedviolation";
import { NetworkFirewallUnexpectedFirewallRoutesViolation } from "./networkfirewallunexpectedfirewallroutesviolation";
import { NetworkFirewallUnexpectedGatewayRoutesViolation } from "./networkfirewallunexpectedgatewayroutesviolation";
import { PossibleRemediationActions } from "./possibleremediationactions";
// ResourceViolation
/**
 * Violation detail based on resource type.
**/
var ResourceViolation = /** @class */ (function (_super) {
    __extends(ResourceViolation, _super);
    function ResourceViolation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEc2InstanceViolation" }),
        __metadata("design:type", AwsEc2InstanceViolation)
    ], ResourceViolation.prototype, "awsEc2InstanceViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEc2NetworkInterfaceViolation" }),
        __metadata("design:type", AwsEc2NetworkInterfaceViolation)
    ], ResourceViolation.prototype, "awsEc2NetworkInterfaceViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsVPCSecurityGroupViolation" }),
        __metadata("design:type", AwsVpcSecurityGroupViolation)
    ], ResourceViolation.prototype, "awsVpcSecurityGroupViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsDuplicateRuleGroupViolation" }),
        __metadata("design:type", DnsDuplicateRuleGroupViolation)
    ], ResourceViolation.prototype, "dnsDuplicateRuleGroupViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsRuleGroupLimitExceededViolation" }),
        __metadata("design:type", DnsRuleGroupLimitExceededViolation)
    ], ResourceViolation.prototype, "dnsRuleGroupLimitExceededViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsRuleGroupPriorityConflictViolation" }),
        __metadata("design:type", DnsRuleGroupPriorityConflictViolation)
    ], ResourceViolation.prototype, "dnsRuleGroupPriorityConflictViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkFirewallBlackHoleRouteDetectedViolation" }),
        __metadata("design:type", NetworkFirewallBlackHoleRouteDetectedViolation)
    ], ResourceViolation.prototype, "networkFirewallBlackHoleRouteDetectedViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkFirewallInternetTrafficNotInspectedViolation" }),
        __metadata("design:type", NetworkFirewallInternetTrafficNotInspectedViolation)
    ], ResourceViolation.prototype, "networkFirewallInternetTrafficNotInspectedViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkFirewallInvalidRouteConfigurationViolation" }),
        __metadata("design:type", NetworkFirewallInvalidRouteConfigurationViolation)
    ], ResourceViolation.prototype, "networkFirewallInvalidRouteConfigurationViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkFirewallMissingExpectedRTViolation" }),
        __metadata("design:type", NetworkFirewallMissingExpectedRtViolation)
    ], ResourceViolation.prototype, "networkFirewallMissingExpectedRtViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkFirewallMissingExpectedRoutesViolation" }),
        __metadata("design:type", NetworkFirewallMissingExpectedRoutesViolation)
    ], ResourceViolation.prototype, "networkFirewallMissingExpectedRoutesViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkFirewallMissingFirewallViolation" }),
        __metadata("design:type", NetworkFirewallMissingFirewallViolation)
    ], ResourceViolation.prototype, "networkFirewallMissingFirewallViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkFirewallMissingSubnetViolation" }),
        __metadata("design:type", NetworkFirewallMissingSubnetViolation)
    ], ResourceViolation.prototype, "networkFirewallMissingSubnetViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkFirewallPolicyModifiedViolation" }),
        __metadata("design:type", NetworkFirewallPolicyModifiedViolation)
    ], ResourceViolation.prototype, "networkFirewallPolicyModifiedViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkFirewallUnexpectedFirewallRoutesViolation" }),
        __metadata("design:type", NetworkFirewallUnexpectedFirewallRoutesViolation)
    ], ResourceViolation.prototype, "networkFirewallUnexpectedFirewallRoutesViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkFirewallUnexpectedGatewayRoutesViolation" }),
        __metadata("design:type", NetworkFirewallUnexpectedGatewayRoutesViolation)
    ], ResourceViolation.prototype, "networkFirewallUnexpectedGatewayRoutesViolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PossibleRemediationActions" }),
        __metadata("design:type", PossibleRemediationActions)
    ], ResourceViolation.prototype, "possibleRemediationActions", void 0);
    return ResourceViolation;
}(SpeakeasyBase));
export { ResourceViolation };
