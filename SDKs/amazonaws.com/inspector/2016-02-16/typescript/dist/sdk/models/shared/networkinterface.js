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
import { PrivateIp } from "./privateip";
import { SecurityGroup } from "./securitygroup";
// NetworkInterface
/**
 * Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type.
**/
var NetworkInterface = /** @class */ (function (_super) {
    __extends(NetworkInterface, _super);
    function NetworkInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6Addresses" }),
        __metadata("design:type", Array)
    ], NetworkInterface.prototype, "ipv6Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkInterfaceId" }),
        __metadata("design:type", String)
    ], NetworkInterface.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateDnsName" }),
        __metadata("design:type", String)
    ], NetworkInterface.prototype, "privateDnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateIpAddress" }),
        __metadata("design:type", String)
    ], NetworkInterface.prototype, "privateIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateIpAddresses", elemType: PrivateIp }),
        __metadata("design:type", Array)
    ], NetworkInterface.prototype, "privateIpAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicDnsName" }),
        __metadata("design:type", String)
    ], NetworkInterface.prototype, "publicDnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicIp" }),
        __metadata("design:type", String)
    ], NetworkInterface.prototype, "publicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityGroups", elemType: SecurityGroup }),
        __metadata("design:type", Array)
    ], NetworkInterface.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetId" }),
        __metadata("design:type", String)
    ], NetworkInterface.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcId" }),
        __metadata("design:type", String)
    ], NetworkInterface.prototype, "vpcId", void 0);
    return NetworkInterface;
}(SpeakeasyBase));
export { NetworkInterface };
