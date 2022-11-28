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
import { NetworkConfiguration } from "./networkconfiguration";
import { TaskOverride } from "./taskoverride";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { Tag } from "./tag";
var RunTaskRequest = /** @class */ (function (_super) {
    __extends(RunTaskRequest, _super);
    function RunTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacityProviderStrategy", elemType: CapacityProviderStrategyItem }),
        __metadata("design:type", Array)
    ], RunTaskRequest.prototype, "capacityProviderStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cluster" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], RunTaskRequest.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableECSManagedTags" }),
        __metadata("design:type", Boolean)
    ], RunTaskRequest.prototype, "enableEcsManagedTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableExecuteCommand" }),
        __metadata("design:type", Boolean)
    ], RunTaskRequest.prototype, "enableExecuteCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchType" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "launchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfiguration" }),
        __metadata("design:type", NetworkConfiguration)
    ], RunTaskRequest.prototype, "networkConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrides" }),
        __metadata("design:type", TaskOverride)
    ], RunTaskRequest.prototype, "overrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementConstraints", elemType: PlacementConstraint }),
        __metadata("design:type", Array)
    ], RunTaskRequest.prototype, "placementConstraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementStrategy", elemType: PlacementStrategy }),
        __metadata("design:type", Array)
    ], RunTaskRequest.prototype, "placementStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformVersion" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "platformVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propagateTags" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "propagateTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referenceId" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "referenceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startedBy" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "startedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], RunTaskRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskDefinition" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "taskDefinition", void 0);
    return RunTaskRequest;
}(SpeakeasyBase));
export { RunTaskRequest };
