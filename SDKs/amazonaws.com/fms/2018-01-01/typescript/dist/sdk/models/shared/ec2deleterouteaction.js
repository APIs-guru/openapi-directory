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
// Ec2DeleteRouteAction
/**
 * Information about the DeleteRoute action in Amazon EC2.
**/
var Ec2DeleteRouteAction = /** @class */ (function (_super) {
    __extends(Ec2DeleteRouteAction, _super);
    function Ec2DeleteRouteAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Ec2DeleteRouteAction.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCidrBlock" }),
        __metadata("design:type", String)
    ], Ec2DeleteRouteAction.prototype, "destinationCidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationIpv6CidrBlock" }),
        __metadata("design:type", String)
    ], Ec2DeleteRouteAction.prototype, "destinationIpv6CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationPrefixListId" }),
        __metadata("design:type", String)
    ], Ec2DeleteRouteAction.prototype, "destinationPrefixListId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RouteTableId" }),
        __metadata("design:type", ActionTarget)
    ], Ec2DeleteRouteAction.prototype, "routeTableId", void 0);
    return Ec2DeleteRouteAction;
}(SpeakeasyBase));
export { Ec2DeleteRouteAction };
