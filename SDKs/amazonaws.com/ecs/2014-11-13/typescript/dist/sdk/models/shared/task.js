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
import { Attachment } from "./attachment";
import { Attribute } from "./attribute";
import { ConnectivityEnum } from "./connectivityenum";
import { Container } from "./container";
import { EphemeralStorage } from "./ephemeralstorage";
import { HealthStatusEnum } from "./healthstatusenum";
import { InferenceAccelerator } from "./inferenceaccelerator";
import { LaunchTypeEnum } from "./launchtypeenum";
import { TaskOverride } from "./taskoverride";
import { TaskStopCodeEnum } from "./taskstopcodeenum";
import { Tag } from "./tag";
// Task
/**
 * Details on a task in a cluster.
**/
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment }),
        __metadata("design:type", Array)
    ], Task.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute }),
        __metadata("design:type", Array)
    ], Task.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availabilityZone" }),
        __metadata("design:type", String)
    ], Task.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacityProviderName" }),
        __metadata("design:type", String)
    ], Task.prototype, "capacityProviderName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterArn" }),
        __metadata("design:type", String)
    ], Task.prototype, "clusterArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectivity" }),
        __metadata("design:type", String)
    ], Task.prototype, "connectivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectivityAt" }),
        __metadata("design:type", Date)
    ], Task.prototype, "connectivityAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerInstanceArn" }),
        __metadata("design:type", String)
    ], Task.prototype, "containerInstanceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containers", elemType: Container }),
        __metadata("design:type", Array)
    ], Task.prototype, "containers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpu" }),
        __metadata("design:type", String)
    ], Task.prototype, "cpu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Task.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredStatus" }),
        __metadata("design:type", String)
    ], Task.prototype, "desiredStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableExecuteCommand" }),
        __metadata("design:type", Boolean)
    ], Task.prototype, "enableExecuteCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ephemeralStorage" }),
        __metadata("design:type", EphemeralStorage)
    ], Task.prototype, "ephemeralStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionStoppedAt" }),
        __metadata("design:type", Date)
    ], Task.prototype, "executionStoppedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], Task.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthStatus" }),
        __metadata("design:type", String)
    ], Task.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inferenceAccelerators", elemType: InferenceAccelerator }),
        __metadata("design:type", Array)
    ], Task.prototype, "inferenceAccelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastStatus" }),
        __metadata("design:type", String)
    ], Task.prototype, "lastStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchType" }),
        __metadata("design:type", String)
    ], Task.prototype, "launchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", String)
    ], Task.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrides" }),
        __metadata("design:type", TaskOverride)
    ], Task.prototype, "overrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformVersion" }),
        __metadata("design:type", String)
    ], Task.prototype, "platformVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullStartedAt" }),
        __metadata("design:type", Date)
    ], Task.prototype, "pullStartedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullStoppedAt" }),
        __metadata("design:type", Date)
    ], Task.prototype, "pullStoppedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startedAt" }),
        __metadata("design:type", Date)
    ], Task.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startedBy" }),
        __metadata("design:type", String)
    ], Task.prototype, "startedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopCode" }),
        __metadata("design:type", String)
    ], Task.prototype, "stopCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stoppedAt" }),
        __metadata("design:type", Date)
    ], Task.prototype, "stoppedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stoppedReason" }),
        __metadata("design:type", String)
    ], Task.prototype, "stoppedReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stoppingAt" }),
        __metadata("design:type", Date)
    ], Task.prototype, "stoppingAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Task.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskArn" }),
        __metadata("design:type", String)
    ], Task.prototype, "taskArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskDefinitionArn" }),
        __metadata("design:type", String)
    ], Task.prototype, "taskDefinitionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Task.prototype, "version", void 0);
    return Task;
}(SpeakeasyBase));
export { Task };
