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
import { SocketAddress } from "./socketaddress";
import { CustomRoutingDestinationTrafficStateEnum } from "./customroutingdestinationtrafficstateenum";
// PortMapping
/**
 * Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in AWS Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets.
**/
var PortMapping = /** @class */ (function (_super) {
    __extends(PortMapping, _super);
    function PortMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AcceleratorPort" }),
        __metadata("design:type", Number)
    ], PortMapping.prototype, "acceleratorPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationSocketAddress" }),
        __metadata("design:type", SocketAddress)
    ], PortMapping.prototype, "destinationSocketAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationTrafficState" }),
        __metadata("design:type", String)
    ], PortMapping.prototype, "destinationTrafficState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" }),
        __metadata("design:type", String)
    ], PortMapping.prototype, "endpointGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointId" }),
        __metadata("design:type", String)
    ], PortMapping.prototype, "endpointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Protocols" }),
        __metadata("design:type", Array)
    ], PortMapping.prototype, "protocols", void 0);
    return PortMapping;
}(SpeakeasyBase));
export { PortMapping };
