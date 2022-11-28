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
import { ActionTarget } from "./actiontarget";
// Ec2ReplaceRouteAction
/**
 * Information about the ReplaceRoute action in Amazon EC2.
**/
var Ec2ReplaceRouteAction = /** @class */ (function (_super) {
    __extends(Ec2ReplaceRouteAction, _super);
    function Ec2ReplaceRouteAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Ec2ReplaceRouteAction.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCidrBlock" }),
        __metadata("design:type", String)
    ], Ec2ReplaceRouteAction.prototype, "destinationCidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationIpv6CidrBlock" }),
        __metadata("design:type", String)
    ], Ec2ReplaceRouteAction.prototype, "destinationIpv6CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationPrefixListId" }),
        __metadata("design:type", String)
    ], Ec2ReplaceRouteAction.prototype, "destinationPrefixListId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GatewayId" }),
        __metadata("design:type", ActionTarget)
    ], Ec2ReplaceRouteAction.prototype, "gatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RouteTableId" }),
        __metadata("design:type", ActionTarget)
    ], Ec2ReplaceRouteAction.prototype, "routeTableId", void 0);
    return Ec2ReplaceRouteAction;
}(SpeakeasyBase));
export { Ec2ReplaceRouteAction };
