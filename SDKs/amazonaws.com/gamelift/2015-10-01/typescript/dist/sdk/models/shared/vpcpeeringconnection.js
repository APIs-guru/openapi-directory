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
import { VpcPeeringConnectionStatus } from "./vpcpeeringconnectionstatus";
// VpcPeeringConnection
/**
 * <p>Represents a peering connection between a VPC on one of your AWS accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <p> <b>Related actions</b> </p> <p> <a>CreateVpcPeeringAuthorization</a> | <a>DescribeVpcPeeringAuthorizations</a> | <a>DeleteVpcPeeringAuthorization</a> | <a>CreateVpcPeeringConnection</a> | <a>DescribeVpcPeeringConnections</a> | <a>DeleteVpcPeeringConnection</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
var VpcPeeringConnection = /** @class */ (function (_super) {
    __extends(VpcPeeringConnection, _super);
    function VpcPeeringConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], VpcPeeringConnection.prototype, "fleetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetId" }),
        __metadata("design:type", String)
    ], VpcPeeringConnection.prototype, "fleetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameLiftVpcId" }),
        __metadata("design:type", String)
    ], VpcPeeringConnection.prototype, "gameLiftVpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpV4CidrBlock" }),
        __metadata("design:type", String)
    ], VpcPeeringConnection.prototype, "ipV4CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PeerVpcId" }),
        __metadata("design:type", String)
    ], VpcPeeringConnection.prototype, "peerVpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", VpcPeeringConnectionStatus)
    ], VpcPeeringConnection.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcPeeringConnectionId" }),
        __metadata("design:type", String)
    ], VpcPeeringConnection.prototype, "vpcPeeringConnectionId", void 0);
    return VpcPeeringConnection;
}(SpeakeasyBase));
export { VpcPeeringConnection };
