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
import { EndpointConfiguration } from "./endpointconfiguration";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";
import { PortOverride } from "./portoverride";
var CreateEndpointGroupRequest = /** @class */ (function (_super) {
    __extends(CreateEndpointGroupRequest, _super);
    function CreateEndpointGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointConfigurations", elemType: EndpointConfiguration }),
        __metadata("design:type", Array)
    ], CreateEndpointGroupRequest.prototype, "endpointConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointGroupRegion" }),
        __metadata("design:type", String)
    ], CreateEndpointGroupRequest.prototype, "endpointGroupRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthCheckIntervalSeconds" }),
        __metadata("design:type", Number)
    ], CreateEndpointGroupRequest.prototype, "healthCheckIntervalSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthCheckPath" }),
        __metadata("design:type", String)
    ], CreateEndpointGroupRequest.prototype, "healthCheckPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthCheckPort" }),
        __metadata("design:type", Number)
    ], CreateEndpointGroupRequest.prototype, "healthCheckPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthCheckProtocol" }),
        __metadata("design:type", String)
    ], CreateEndpointGroupRequest.prototype, "healthCheckProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdempotencyToken" }),
        __metadata("design:type", String)
    ], CreateEndpointGroupRequest.prototype, "idempotencyToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListenerArn" }),
        __metadata("design:type", String)
    ], CreateEndpointGroupRequest.prototype, "listenerArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PortOverrides", elemType: PortOverride }),
        __metadata("design:type", Array)
    ], CreateEndpointGroupRequest.prototype, "portOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThresholdCount" }),
        __metadata("design:type", Number)
    ], CreateEndpointGroupRequest.prototype, "thresholdCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrafficDialPercentage" }),
        __metadata("design:type", Number)
    ], CreateEndpointGroupRequest.prototype, "trafficDialPercentage", void 0);
    return CreateEndpointGroupRequest;
}(SpeakeasyBase));
export { CreateEndpointGroupRequest };
