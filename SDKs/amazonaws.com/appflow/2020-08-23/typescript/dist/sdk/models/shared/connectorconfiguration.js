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
import { ConnectorMetadata } from "./connectormetadata";
// ConnectorConfiguration
/**
 *  The configuration settings related to a given connector.
**/
var ConnectorConfiguration = /** @class */ (function (_super) {
    __extends(ConnectorConfiguration, _super);
    function ConnectorConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canUseAsDestination" }),
        __metadata("design:type", Boolean)
    ], ConnectorConfiguration.prototype, "canUseAsDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canUseAsSource" }),
        __metadata("design:type", Boolean)
    ], ConnectorConfiguration.prototype, "canUseAsSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorMetadata" }),
        __metadata("design:type", ConnectorMetadata)
    ], ConnectorConfiguration.prototype, "connectorMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPrivateLinkEnabled" }),
        __metadata("design:type", Boolean)
    ], ConnectorConfiguration.prototype, "isPrivateLinkEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPrivateLinkEndpointUrlRequired" }),
        __metadata("design:type", Boolean)
    ], ConnectorConfiguration.prototype, "isPrivateLinkEndpointUrlRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedDestinationConnectors" }),
        __metadata("design:type", Array)
    ], ConnectorConfiguration.prototype, "supportedDestinationConnectors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedSchedulingFrequencies" }),
        __metadata("design:type", Array)
    ], ConnectorConfiguration.prototype, "supportedSchedulingFrequencies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedTriggerTypes" }),
        __metadata("design:type", Array)
    ], ConnectorConfiguration.prototype, "supportedTriggerTypes", void 0);
    return ConnectorConfiguration;
}(SpeakeasyBase));
export { ConnectorConfiguration };
