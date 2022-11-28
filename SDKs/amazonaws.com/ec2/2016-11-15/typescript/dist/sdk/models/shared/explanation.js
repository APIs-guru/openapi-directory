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
import { AnalysisComponent } from "./analysiscomponent";
import { AnalysisAclRule } from "./analysisaclrule";
import { AnalysisLoadBalancerListener } from "./analysisloadbalancerlistener";
import { AnalysisLoadBalancerTarget } from "./analysisloadbalancertarget";
import { PortRange } from "./portrange";
import { AnalysisRouteTableRoute } from "./analysisroutetableroute";
import { AnalysisSecurityGroupRule } from "./analysissecuritygrouprule";
// Explanation
/**
 * Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.
**/
var Explanation = /** @class */ (function (_super) {
    __extends(Explanation, _super);
    function Explanation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "acl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisAclRule)
    ], Explanation.prototype, "aclRule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Explanation.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Explanation.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "attachedTo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Explanation.prototype, "availabilityZones", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Explanation.prototype, "cidrs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisLoadBalancerListener)
    ], Explanation.prototype, "classicLoadBalancerListener", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "component", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "customerGateway", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "destinationVpc", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Explanation.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "elasticLoadBalancerListener", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Explanation.prototype, "explanationCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "ingressRouteTable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "internetGateway", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Explanation.prototype, "loadBalancerArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Explanation.prototype, "loadBalancerListenerPort", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisLoadBalancerTarget)
    ], Explanation.prototype, "loadBalancerTarget", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "loadBalancerTargetGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: AnalysisComponent }),
        __metadata("design:type", Array)
    ], Explanation.prototype, "loadBalancerTargetGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Explanation.prototype, "loadBalancerTargetPort", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Explanation.prototype, "missingComponent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "natGateway", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "networkInterface", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Explanation.prototype, "packetField", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Explanation.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PortRange }),
        __metadata("design:type", Array)
    ], Explanation.prototype, "portRanges", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "prefixList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Explanation.prototype, "protocols", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "routeTable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisRouteTableRoute)
    ], Explanation.prototype, "routeTableRoute", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "securityGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisSecurityGroupRule)
    ], Explanation.prototype, "securityGroupRule", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: AnalysisComponent }),
        __metadata("design:type", Array)
    ], Explanation.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "sourceVpc", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Explanation.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "subnet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "subnetRouteTable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "vpc", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "vpcEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "vpcPeeringConnection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "vpnConnection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], Explanation.prototype, "vpnGateway", void 0);
    return Explanation;
}(SpeakeasyBase));
export { Explanation };
