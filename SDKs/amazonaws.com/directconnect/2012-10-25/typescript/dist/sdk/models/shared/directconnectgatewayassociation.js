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
import { RouteFilterPrefix } from "./routefilterprefix";
import { AssociatedGateway } from "./associatedgateway";
import { DirectConnectGatewayAssociationStateEnum } from "./directconnectgatewayassociationstateenum";
// DirectConnectGatewayAssociation
/**
 * Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.
**/
var DirectConnectGatewayAssociation = /** @class */ (function (_super) {
    __extends(DirectConnectGatewayAssociation, _super);
    function DirectConnectGatewayAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedPrefixesToDirectConnectGateway", elemType: RouteFilterPrefix }),
        __metadata("design:type", Array)
    ], DirectConnectGatewayAssociation.prototype, "allowedPrefixesToDirectConnectGateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associatedGateway" }),
        __metadata("design:type", AssociatedGateway)
    ], DirectConnectGatewayAssociation.prototype, "associatedGateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associationId" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociation.prototype, "associationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associationState" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociation.prototype, "associationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociation.prototype, "directConnectGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directConnectGatewayOwnerAccount" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociation.prototype, "directConnectGatewayOwnerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateChangeError" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociation.prototype, "stateChangeError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualGatewayId" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociation.prototype, "virtualGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualGatewayOwnerAccount" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociation.prototype, "virtualGatewayOwnerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualGatewayRegion" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociation.prototype, "virtualGatewayRegion", void 0);
    return DirectConnectGatewayAssociation;
}(SpeakeasyBase));
export { DirectConnectGatewayAssociation };
