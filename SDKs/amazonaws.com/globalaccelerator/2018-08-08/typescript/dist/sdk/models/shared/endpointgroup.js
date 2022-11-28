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
import { EndpointDescription } from "./endpointdescription";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";
import { PortOverride } from "./portoverride";
// EndpointGroup
/**
 * A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener.
**/
var EndpointGroup = /** @class */ (function (_super) {
    __extends(EndpointGroup, _super);
    function EndpointGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointDescriptions", elemType: EndpointDescription }),
        __metadata("design:type", Array)
    ], EndpointGroup.prototype, "endpointDescriptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" }),
        __metadata("design:type", String)
    ], EndpointGroup.prototype, "endpointGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointGroupRegion" }),
        __metadata("design:type", String)
    ], EndpointGroup.prototype, "endpointGroupRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthCheckIntervalSeconds" }),
        __metadata("design:type", Number)
    ], EndpointGroup.prototype, "healthCheckIntervalSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthCheckPath" }),
        __metadata("design:type", String)
    ], EndpointGroup.prototype, "healthCheckPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthCheckPort" }),
        __metadata("design:type", Number)
    ], EndpointGroup.prototype, "healthCheckPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthCheckProtocol" }),
        __metadata("design:type", String)
    ], EndpointGroup.prototype, "healthCheckProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PortOverrides", elemType: PortOverride }),
        __metadata("design:type", Array)
    ], EndpointGroup.prototype, "portOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThresholdCount" }),
        __metadata("design:type", Number)
    ], EndpointGroup.prototype, "thresholdCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrafficDialPercentage" }),
        __metadata("design:type", Number)
    ], EndpointGroup.prototype, "trafficDialPercentage", void 0);
    return EndpointGroup;
}(SpeakeasyBase));
export { EndpointGroup };
