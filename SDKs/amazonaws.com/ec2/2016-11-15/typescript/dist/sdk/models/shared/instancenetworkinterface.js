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
import { InstanceNetworkInterfaceAssociation } from "./instancenetworkinterfaceassociation";
import { InstanceNetworkInterfaceAttachment } from "./instancenetworkinterfaceattachment";
import { GroupIdentifier } from "./groupidentifier";
import { InstanceIpv4Prefix } from "./instanceipv4prefix";
import { InstanceIpv6Address } from "./instanceipv6address";
import { InstanceIpv6Prefix } from "./instanceipv6prefix";
import { InstancePrivateIpAddress } from "./instanceprivateipaddress";
import { NetworkInterfaceStatusEnum } from "./networkinterfacestatusenum";
// InstanceNetworkInterface
/**
 * Describes a network interface.
**/
var InstanceNetworkInterface = /** @class */ (function (_super) {
    __extends(InstanceNetworkInterface, _super);
    function InstanceNetworkInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InstanceNetworkInterfaceAssociation)
    ], InstanceNetworkInterface.prototype, "association", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InstanceNetworkInterfaceAttachment)
    ], InstanceNetworkInterface.prototype, "attachment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterface.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GroupIdentifier }),
        __metadata("design:type", Array)
    ], InstanceNetworkInterface.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterface.prototype, "interfaceType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: InstanceIpv4Prefix }),
        __metadata("design:type", Array)
    ], InstanceNetworkInterface.prototype, "ipv4Prefixes", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: InstanceIpv6Address }),
        __metadata("design:type", Array)
    ], InstanceNetworkInterface.prototype, "ipv6Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: InstanceIpv6Prefix }),
        __metadata("design:type", Array)
    ], InstanceNetworkInterface.prototype, "ipv6Prefixes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterface.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterface.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterface.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterface.prototype, "privateDnsName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterface.prototype, "privateIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: InstancePrivateIpAddress }),
        __metadata("design:type", Array)
    ], InstanceNetworkInterface.prototype, "privateIpAddresses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceNetworkInterface.prototype, "sourceDestCheck", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterface.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterface.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterface.prototype, "vpcId", void 0);
    return InstanceNetworkInterface;
}(SpeakeasyBase));
export { InstanceNetworkInterface };
