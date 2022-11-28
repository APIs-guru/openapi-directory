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
import { DnsEntry } from "./dnsentry";
import { SecurityGroupIdentifier } from "./securitygroupidentifier";
import { LastError } from "./lasterror";
import { StateEnum } from "./stateenum";
import { Tag } from "./tag";
import { VpcEndpointTypeEnum } from "./vpcendpointtypeenum";
// VpcEndpoint
/**
 * Describes a VPC endpoint.
**/
var VpcEndpoint = /** @class */ (function (_super) {
    __extends(VpcEndpoint, _super);
    function VpcEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], VpcEndpoint.prototype, "creationTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DnsEntry }),
        __metadata("design:type", Array)
    ], VpcEndpoint.prototype, "dnsEntries", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: SecurityGroupIdentifier }),
        __metadata("design:type", Array)
    ], VpcEndpoint.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LastError)
    ], VpcEndpoint.prototype, "lastError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], VpcEndpoint.prototype, "networkInterfaceIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VpcEndpoint.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VpcEndpoint.prototype, "policyDocument", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], VpcEndpoint.prototype, "privateDnsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], VpcEndpoint.prototype, "requesterManaged", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], VpcEndpoint.prototype, "routeTableIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VpcEndpoint.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VpcEndpoint.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], VpcEndpoint.prototype, "subnetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Tag }),
        __metadata("design:type", Array)
    ], VpcEndpoint.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VpcEndpoint.prototype, "vpcEndpointId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VpcEndpoint.prototype, "vpcEndpointType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VpcEndpoint.prototype, "vpcId", void 0);
    return VpcEndpoint;
}(SpeakeasyBase));
export { VpcEndpoint };
