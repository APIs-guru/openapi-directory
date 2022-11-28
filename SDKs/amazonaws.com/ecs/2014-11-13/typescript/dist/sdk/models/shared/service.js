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
import { Deployment } from "./deployment";
import { ServiceEvent } from "./serviceevent";
import { LaunchTypeEnum } from "./launchtypeenum";
import { LoadBalancer } from "./loadbalancer";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { SchedulingStrategyEnum } from "./schedulingstrategyenum";
import { ServiceRegistry } from "./serviceregistry";
import { Tag } from "./tag";
import { TaskSet } from "./taskset";
// Service
/**
 * Details on a service within a cluster
**/
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacityProviderStrategy", elemType: CapacityProviderStrategyItem }),
        __metadata("design:type", Array)
    ], Service.prototype, "capacityProviderStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterArn" }),
        __metadata("design:type", String)
    ], Service.prototype, "clusterArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Service.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], Service.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentConfiguration" }),
        __metadata("design:type", DeploymentConfiguration)
    ], Service.prototype, "deploymentConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentController" }),
        __metadata("design:type", DeploymentController)
    ], Service.prototype, "deploymentController", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments", elemType: Deployment }),
        __metadata("design:type", Array)
    ], Service.prototype, "deployments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredCount" }),
        __metadata("design:type", Number)
    ], Service.prototype, "desiredCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableECSManagedTags" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "enableEcsManagedTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableExecuteCommand" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "enableExecuteCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: ServiceEvent }),
        __metadata("design:type", Array)
    ], Service.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthCheckGracePeriodSeconds" }),
        __metadata("design:type", Number)
    ], Service.prototype, "healthCheckGracePeriodSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchType" }),
        __metadata("design:type", String)
    ], Service.prototype, "launchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loadBalancers", elemType: LoadBalancer }),
        __metadata("design:type", Array)
    ], Service.prototype, "loadBalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfiguration" }),
        __metadata("design:type", NetworkConfiguration)
    ], Service.prototype, "networkConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingCount" }),
        __metadata("design:type", Number)
    ], Service.prototype, "pendingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementConstraints", elemType: PlacementConstraint }),
        __metadata("design:type", Array)
    ], Service.prototype, "placementConstraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementStrategy", elemType: PlacementStrategy }),
        __metadata("design:type", Array)
    ], Service.prototype, "placementStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformVersion" }),
        __metadata("design:type", String)
    ], Service.prototype, "platformVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propagateTags" }),
        __metadata("design:type", String)
    ], Service.prototype, "propagateTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], Service.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runningCount" }),
        __metadata("design:type", Number)
    ], Service.prototype, "runningCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedulingStrategy" }),
        __metadata("design:type", String)
    ], Service.prototype, "schedulingStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceArn" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceRegistries", elemType: ServiceRegistry }),
        __metadata("design:type", Array)
    ], Service.prototype, "serviceRegistries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Service.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Service.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskDefinition" }),
        __metadata("design:type", String)
    ], Service.prototype, "taskDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskSets", elemType: TaskSet }),
        __metadata("design:type", Array)
    ], Service.prototype, "taskSets", void 0);
    return Service;
}(SpeakeasyBase));
export { Service };
