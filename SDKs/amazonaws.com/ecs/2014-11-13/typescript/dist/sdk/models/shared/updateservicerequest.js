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
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { DeploymentConfiguration } from "./deploymentconfiguration";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
var UpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceRequest, _super);
    function UpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacityProviderStrategy", elemType: CapacityProviderStrategyItem }),
        __metadata("design:type", Array)
    ], UpdateServiceRequest.prototype, "capacityProviderStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cluster" }),
        __metadata("design:type", String)
    ], UpdateServiceRequest.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentConfiguration" }),
        __metadata("design:type", DeploymentConfiguration)
    ], UpdateServiceRequest.prototype, "deploymentConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredCount" }),
        __metadata("design:type", Number)
    ], UpdateServiceRequest.prototype, "desiredCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableExecuteCommand" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceRequest.prototype, "enableExecuteCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forceNewDeployment" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceRequest.prototype, "forceNewDeployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthCheckGracePeriodSeconds" }),
        __metadata("design:type", Number)
    ], UpdateServiceRequest.prototype, "healthCheckGracePeriodSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfiguration" }),
        __metadata("design:type", NetworkConfiguration)
    ], UpdateServiceRequest.prototype, "networkConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementConstraints", elemType: PlacementConstraint }),
        __metadata("design:type", Array)
    ], UpdateServiceRequest.prototype, "placementConstraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementStrategy", elemType: PlacementStrategy }),
        __metadata("design:type", Array)
    ], UpdateServiceRequest.prototype, "placementStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformVersion" }),
        __metadata("design:type", String)
    ], UpdateServiceRequest.prototype, "platformVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], UpdateServiceRequest.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskDefinition" }),
        __metadata("design:type", String)
    ], UpdateServiceRequest.prototype, "taskDefinition", void 0);
    return UpdateServiceRequest;
}(SpeakeasyBase));
export { UpdateServiceRequest };
