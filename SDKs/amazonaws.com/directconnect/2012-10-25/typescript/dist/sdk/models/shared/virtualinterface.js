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
import { AddressFamilyEnum } from "./addressfamilyenum";
import { BgpPeer } from "./bgppeer";
import { RouteFilterPrefix } from "./routefilterprefix";
import { Tag } from "./tag";
import { VirtualInterfaceStateEnum } from "./virtualinterfacestateenum";
// VirtualInterface
/**
 * Information about a virtual interface.
**/
var VirtualInterface = /** @class */ (function (_super) {
    __extends(VirtualInterface, _super);
    function VirtualInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressFamily" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "addressFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amazonAddress" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "amazonAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amazonSideAsn" }),
        __metadata("design:type", Number)
    ], VirtualInterface.prototype, "amazonSideAsn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asn" }),
        __metadata("design:type", Number)
    ], VirtualInterface.prototype, "asn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authKey" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "authKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsDeviceV2" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "awsDeviceV2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsLogicalDeviceId" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "awsLogicalDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bgpPeers", elemType: BgpPeer }),
        __metadata("design:type", Array)
    ], VirtualInterface.prototype, "bgpPeers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionId" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "connectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerAddress" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "customerAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerRouterConfig" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "customerRouterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "directConnectGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jumboFrameCapable" }),
        __metadata("design:type", Boolean)
    ], VirtualInterface.prototype, "jumboFrameCapable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mtu" }),
        __metadata("design:type", Number)
    ], VirtualInterface.prototype, "mtu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerAccount" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "ownerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeFilterPrefixes", elemType: RouteFilterPrefix }),
        __metadata("design:type", Array)
    ], VirtualInterface.prototype, "routeFilterPrefixes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], VirtualInterface.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualGatewayId" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "virtualGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "virtualInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualInterfaceName" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "virtualInterfaceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualInterfaceState" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "virtualInterfaceState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualInterfaceType" }),
        __metadata("design:type", String)
    ], VirtualInterface.prototype, "virtualInterfaceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], VirtualInterface.prototype, "vlan", void 0);
    return VirtualInterface;
}(SpeakeasyBase));
export { VirtualInterface };
