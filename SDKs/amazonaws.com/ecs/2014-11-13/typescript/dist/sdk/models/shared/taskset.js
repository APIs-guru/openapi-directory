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
import { LaunchTypeEnum } from "./launchtypeenum";
import { LoadBalancer } from "./loadbalancer";
import { NetworkConfiguration } from "./networkconfiguration";
import { Scale } from "./scale";
import { ServiceRegistry } from "./serviceregistry";
import { StabilityStatusEnum } from "./stabilitystatusenum";
import { Tag } from "./tag";
// TaskSet
/**
 * Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.
**/
var TaskSet = /** @class */ (function (_super) {
    __extends(TaskSet, _super);
    function TaskSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacityProviderStrategy", elemType: CapacityProviderStrategyItem }),
        __metadata("design:type", Array)
    ], TaskSet.prototype, "capacityProviderStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterArn" }),
        __metadata("design:type", String)
    ], TaskSet.prototype, "clusterArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computedDesiredCount" }),
        __metadata("design:type", Number)
    ], TaskSet.prototype, "computedDesiredCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], TaskSet.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], TaskSet.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TaskSet.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchType" }),
        __metadata("design:type", String)
    ], TaskSet.prototype, "launchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loadBalancers", elemType: LoadBalancer }),
        __metadata("design:type", Array)
    ], TaskSet.prototype, "loadBalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfiguration" }),
        __metadata("design:type", NetworkConfiguration)
    ], TaskSet.prototype, "networkConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingCount" }),
        __metadata("design:type", Number)
    ], TaskSet.prototype, "pendingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformVersion" }),
        __metadata("design:type", String)
    ], TaskSet.prototype, "platformVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runningCount" }),
        __metadata("design:type", Number)
    ], TaskSet.prototype, "runningCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scale" }),
        __metadata("design:type", Scale)
    ], TaskSet.prototype, "scale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceArn" }),
        __metadata("design:type", String)
    ], TaskSet.prototype, "serviceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceRegistries", elemType: ServiceRegistry }),
        __metadata("design:type", Array)
    ], TaskSet.prototype, "serviceRegistries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stabilityStatus" }),
        __metadata("design:type", String)
    ], TaskSet.prototype, "stabilityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stabilityStatusAt" }),
        __metadata("design:type", Date)
    ], TaskSet.prototype, "stabilityStatusAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startedBy" }),
        __metadata("design:type", String)
    ], TaskSet.prototype, "startedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TaskSet.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], TaskSet.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskDefinition" }),
        __metadata("design:type", String)
    ], TaskSet.prototype, "taskDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskSetArn" }),
        __metadata("design:type", String)
    ], TaskSet.prototype, "taskSetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], TaskSet.prototype, "updatedAt", void 0);
    return TaskSet;
}(SpeakeasyBase));
export { TaskSet };
