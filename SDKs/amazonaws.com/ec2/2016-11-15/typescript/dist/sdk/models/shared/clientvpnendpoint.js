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
import { AssociatedTargetNetwork } from "./associatedtargetnetwork";
import { ClientVpnAuthentication } from "./clientvpnauthentication";
import { ClientConnectResponseOptions } from "./clientconnectresponseoptions";
import { ConnectionLogResponseOptions } from "./connectionlogresponseoptions";
import { ClientVpnEndpointStatus } from "./clientvpnendpointstatus";
import { Tag } from "./tag";
import { TransportProtocolEnum } from "./transportprotocolenum";
import { VpnProtocolEnum } from "./vpnprotocolenum";
// ClientVpnEndpoint
/**
 * Describes a Client VPN endpoint.
**/
var ClientVpnEndpoint = /** @class */ (function (_super) {
    __extends(ClientVpnEndpoint, _super);
    function ClientVpnEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: AssociatedTargetNetwork }),
        __metadata("design:type", Array)
    ], ClientVpnEndpoint.prototype, "associatedTargetNetworks", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ClientVpnAuthentication }),
        __metadata("design:type", Array)
    ], ClientVpnEndpoint.prototype, "authenticationOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientVpnEndpoint.prototype, "clientCidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClientConnectResponseOptions)
    ], ClientVpnEndpoint.prototype, "clientConnectOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientVpnEndpoint.prototype, "clientVpnEndpointId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectionLogResponseOptions)
    ], ClientVpnEndpoint.prototype, "connectionLogOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientVpnEndpoint.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientVpnEndpoint.prototype, "deletionTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientVpnEndpoint.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientVpnEndpoint.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ClientVpnEndpoint.prototype, "dnsServers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ClientVpnEndpoint.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientVpnEndpoint.prototype, "selfServicePortalUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientVpnEndpoint.prototype, "serverCertificateArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ClientVpnEndpoint.prototype, "splitTunnel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClientVpnEndpointStatus)
    ], ClientVpnEndpoint.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Tag }),
        __metadata("design:type", Array)
    ], ClientVpnEndpoint.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientVpnEndpoint.prototype, "transportProtocol", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientVpnEndpoint.prototype, "vpcId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClientVpnEndpoint.prototype, "vpnPort", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientVpnEndpoint.prototype, "vpnProtocol", void 0);
    return ClientVpnEndpoint;
}(SpeakeasyBase));
export { ClientVpnEndpoint };
