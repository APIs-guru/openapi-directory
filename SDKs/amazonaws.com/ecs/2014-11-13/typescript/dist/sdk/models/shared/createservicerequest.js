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
import { DeploymentController } from "./deploymentcontroller";
import { LaunchTypeEnum } from "./launchtypeenum";
import { LoadBalancer } from "./loadbalancer";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { SchedulingStrategyEnum } from "./schedulingstrategyenum";
import { ServiceRegistry } from "./serviceregistry";
import { Tag } from "./tag";
var CreateServiceRequest = /** @class */ (function (_super) {
    __extends(CreateServiceRequest, _super);
    function CreateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacityProviderStrategy", elemType: CapacityProviderStrategyItem }),
        __metadata("design:type", Array)
    ], CreateServiceRequest.prototype, "capacityProviderStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateServiceRequest.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cluster" }),
        __metadata("design:type", String)
    ], CreateServiceRequest.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentConfiguration" }),
        __metadata("design:type", DeploymentConfiguration)
    ], CreateServiceRequest.prototype, "deploymentConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentController" }),
        __metadata("design:type", DeploymentController)
    ], CreateServiceRequest.prototype, "deploymentController", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredCount" }),
        __metadata("design:type", Number)
    ], CreateServiceRequest.prototype, "desiredCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableECSManagedTags" }),
        __metadata("design:type", Boolean)
    ], CreateServiceRequest.prototype, "enableEcsManagedTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableExecuteCommand" }),
        __metadata("design:type", Boolean)
    ], CreateServiceRequest.prototype, "enableExecuteCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthCheckGracePeriodSeconds" }),
        __metadata("design:type", Number)
    ], CreateServiceRequest.prototype, "healthCheckGracePeriodSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchType" }),
        __metadata("design:type", String)
    ], CreateServiceRequest.prototype, "launchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loadBalancers", elemType: LoadBalancer }),
        __metadata("design:type", Array)
    ], CreateServiceRequest.prototype, "loadBalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfiguration" }),
        __metadata("design:type", NetworkConfiguration)
    ], CreateServiceRequest.prototype, "networkConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementConstraints", elemType: PlacementConstraint }),
        __metadata("design:type", Array)
    ], CreateServiceRequest.prototype, "placementConstraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementStrategy", elemType: PlacementStrategy }),
        __metadata("design:type", Array)
    ], CreateServiceRequest.prototype, "placementStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformVersion" }),
        __metadata("design:type", String)
    ], CreateServiceRequest.prototype, "platformVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propagateTags" }),
        __metadata("design:type", String)
    ], CreateServiceRequest.prototype, "propagateTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], CreateServiceRequest.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedulingStrategy" }),
        __metadata("design:type", String)
    ], CreateServiceRequest.prototype, "schedulingStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], CreateServiceRequest.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceRegistries", elemType: ServiceRegistry }),
        __metadata("design:type", Array)
    ], CreateServiceRequest.prototype, "serviceRegistries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateServiceRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskDefinition" }),
        __metadata("design:type", String)
    ], CreateServiceRequest.prototype, "taskDefinition", void 0);
    return CreateServiceRequest;
}(SpeakeasyBase));
export { CreateServiceRequest };
