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
import { VpcCidrBlockAssociation } from "./vpccidrblockassociation";
import { TenancyEnum } from "./tenancyenum";
import { VpcIpv6CidrBlockAssociation } from "./vpcipv6cidrblockassociation";
import { VpcStateEnum } from "./vpcstateenum";
import { Tag } from "./tag";
// Vpc
/**
 * Describes a VPC.
**/
var Vpc = /** @class */ (function (_super) {
    __extends(Vpc, _super);
    function Vpc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Vpc.prototype, "cidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: VpcCidrBlockAssociation }),
        __metadata("design:type", Array)
    ], Vpc.prototype, "cidrBlockAssociationSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Vpc.prototype, "dhcpOptionsId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Vpc.prototype, "instanceTenancy", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: VpcIpv6CidrBlockAssociation }),
        __metadata("design:type", Array)
    ], Vpc.prototype, "ipv6CidrBlockAssociationSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Vpc.prototype, "isDefault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Vpc.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Vpc.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Tag }),
        __metadata("design:type", Array)
    ], Vpc.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Vpc.prototype, "vpcId", void 0);
    return Vpc;
}(SpeakeasyBase));
export { Vpc };
