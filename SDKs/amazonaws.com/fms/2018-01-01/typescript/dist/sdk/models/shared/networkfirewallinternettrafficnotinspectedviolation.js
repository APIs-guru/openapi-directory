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
import { Route } from "./route";
import { ExpectedRoute } from "./expectedroute";
// NetworkFirewallInternetTrafficNotInspectedViolation
/**
 * Violation detail for the subnet for which internet traffic that hasn't been inspected.
**/
var NetworkFirewallInternetTrafficNotInspectedViolation = /** @class */ (function (_super) {
    __extends(NetworkFirewallInternetTrafficNotInspectedViolation, _super);
    function NetworkFirewallInternetTrafficNotInspectedViolation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActualFirewallSubnetRoutes", elemType: Route }),
        __metadata("design:type", Array)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "actualFirewallSubnetRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActualInternetGatewayRoutes", elemType: Route }),
        __metadata("design:type", Array)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "actualInternetGatewayRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentFirewallSubnetRouteTable" }),
        __metadata("design:type", String)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "currentFirewallSubnetRouteTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentInternetGatewayRouteTable" }),
        __metadata("design:type", String)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "currentInternetGatewayRouteTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedFirewallEndpoint" }),
        __metadata("design:type", String)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "expectedFirewallEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedFirewallSubnetRoutes", elemType: ExpectedRoute }),
        __metadata("design:type", Array)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "expectedFirewallSubnetRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedInternetGatewayRoutes", elemType: ExpectedRoute }),
        __metadata("design:type", Array)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "expectedInternetGatewayRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirewallSubnetId" }),
        __metadata("design:type", String)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "firewallSubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InternetGatewayId" }),
        __metadata("design:type", String)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "internetGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRouteTableUsedInDifferentAZ" }),
        __metadata("design:type", Boolean)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "isRouteTableUsedInDifferentAz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RouteTableId" }),
        __metadata("design:type", String)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "routeTableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetAvailabilityZone" }),
        __metadata("design:type", String)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "subnetAvailabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetId" }),
        __metadata("design:type", String)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ViolatingRoutes", elemType: Route }),
        __metadata("design:type", Array)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "violatingRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], NetworkFirewallInternetTrafficNotInspectedViolation.prototype, "vpcId", void 0);
    return NetworkFirewallInternetTrafficNotInspectedViolation;
}(SpeakeasyBase));
export { NetworkFirewallInternetTrafficNotInspectedViolation };
