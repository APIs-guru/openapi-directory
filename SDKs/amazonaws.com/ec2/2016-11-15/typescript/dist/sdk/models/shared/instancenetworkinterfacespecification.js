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
import { Ipv4PrefixSpecificationRequest } from "./ipv4prefixspecificationrequest";
import { InstanceIpv6Address } from "./instanceipv6address";
import { Ipv6PrefixSpecificationRequest } from "./ipv6prefixspecificationrequest";
import { PrivateIpAddressSpecification } from "./privateipaddressspecification";
// InstanceNetworkInterfaceSpecification
/**
 * Describes a network interface.
**/
var InstanceNetworkInterfaceSpecification = /** @class */ (function (_super) {
    __extends(InstanceNetworkInterfaceSpecification, _super);
    function InstanceNetworkInterfaceSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceNetworkInterfaceSpecification.prototype, "associateCarrierIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceNetworkInterfaceSpecification.prototype, "associatePublicIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceNetworkInterfaceSpecification.prototype, "deleteOnTermination", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterfaceSpecification.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InstanceNetworkInterfaceSpecification.prototype, "deviceIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], InstanceNetworkInterfaceSpecification.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterfaceSpecification.prototype, "interfaceType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InstanceNetworkInterfaceSpecification.prototype, "ipv4PrefixCount", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Ipv4PrefixSpecificationRequest }),
        __metadata("design:type", Array)
    ], InstanceNetworkInterfaceSpecification.prototype, "ipv4Prefixes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InstanceNetworkInterfaceSpecification.prototype, "ipv6AddressCount", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: InstanceIpv6Address }),
        __metadata("design:type", Array)
    ], InstanceNetworkInterfaceSpecification.prototype, "ipv6Addresses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InstanceNetworkInterfaceSpecification.prototype, "ipv6PrefixCount", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Ipv6PrefixSpecificationRequest }),
        __metadata("design:type", Array)
    ], InstanceNetworkInterfaceSpecification.prototype, "ipv6Prefixes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InstanceNetworkInterfaceSpecification.prototype, "networkCardIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterfaceSpecification.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterfaceSpecification.prototype, "privateIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PrivateIpAddressSpecification }),
        __metadata("design:type", Array)
    ], InstanceNetworkInterfaceSpecification.prototype, "privateIpAddresses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InstanceNetworkInterfaceSpecification.prototype, "secondaryPrivateIpAddressCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceNetworkInterfaceSpecification.prototype, "subnetId", void 0);
    return InstanceNetworkInterfaceSpecification;
}(SpeakeasyBase));
export { InstanceNetworkInterfaceSpecification };
