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
import { Ec2AssociateRouteTableAction } from "./ec2associateroutetableaction";
import { Ec2CopyRouteTableAction } from "./ec2copyroutetableaction";
import { Ec2CreateRouteAction } from "./ec2createrouteaction";
import { Ec2CreateRouteTableAction } from "./ec2createroutetableaction";
import { Ec2DeleteRouteAction } from "./ec2deleterouteaction";
import { Ec2ReplaceRouteAction } from "./ec2replacerouteaction";
import { Ec2ReplaceRouteTableAssociationAction } from "./ec2replaceroutetableassociationaction";
// RemediationAction
/**
 * Information about an individual action you can take to remediate a violation.
**/
var RemediationAction = /** @class */ (function (_super) {
    __extends(RemediationAction, _super);
    function RemediationAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], RemediationAction.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EC2AssociateRouteTableAction" }),
        __metadata("design:type", Ec2AssociateRouteTableAction)
    ], RemediationAction.prototype, "ec2AssociateRouteTableAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EC2CopyRouteTableAction" }),
        __metadata("design:type", Ec2CopyRouteTableAction)
    ], RemediationAction.prototype, "ec2CopyRouteTableAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EC2CreateRouteAction" }),
        __metadata("design:type", Ec2CreateRouteAction)
    ], RemediationAction.prototype, "ec2CreateRouteAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EC2CreateRouteTableAction" }),
        __metadata("design:type", Ec2CreateRouteTableAction)
    ], RemediationAction.prototype, "ec2CreateRouteTableAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EC2DeleteRouteAction" }),
        __metadata("design:type", Ec2DeleteRouteAction)
    ], RemediationAction.prototype, "ec2DeleteRouteAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EC2ReplaceRouteAction" }),
        __metadata("design:type", Ec2ReplaceRouteAction)
    ], RemediationAction.prototype, "ec2ReplaceRouteAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EC2ReplaceRouteTableAssociationAction" }),
        __metadata("design:type", Ec2ReplaceRouteTableAssociationAction)
    ], RemediationAction.prototype, "ec2ReplaceRouteTableAssociationAction", void 0);
    return RemediationAction;
}(SpeakeasyBase));
export { RemediationAction };
