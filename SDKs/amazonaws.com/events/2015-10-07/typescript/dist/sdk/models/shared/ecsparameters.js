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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LaunchTypeEnum } from "./launchtypeenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { PropagateTagsEnum } from "./propagatetagsenum";
// EcsParameters
/**
 * The custom parameters to be used when the target is an Amazon ECS task.
**/
var EcsParameters = /** @class */ (function (_super) {
    __extends(EcsParameters, _super);
    function EcsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CapacityProviderStrategy", elemType: shared.CapacityProviderStrategyItem }),
        __metadata("design:type", Array)
    ], EcsParameters.prototype, "capacityProviderStrategy", void 0);
    __decorate([
        Metadata({ data: "json, name=EnableECSManagedTags" }),
        __metadata("design:type", Boolean)
    ], EcsParameters.prototype, "enableEcsManagedTags", void 0);
    __decorate([
        Metadata({ data: "json, name=EnableExecuteCommand" }),
        __metadata("design:type", Boolean)
    ], EcsParameters.prototype, "enableExecuteCommand", void 0);
    __decorate([
        Metadata({ data: "json, name=Group" }),
        __metadata("design:type", String)
    ], EcsParameters.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "json, name=LaunchType" }),
        __metadata("design:type", String)
    ], EcsParameters.prototype, "launchType", void 0);
    __decorate([
        Metadata({ data: "json, name=NetworkConfiguration" }),
        __metadata("design:type", NetworkConfiguration)
    ], EcsParameters.prototype, "networkConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=PlacementConstraints", elemType: shared.PlacementConstraint }),
        __metadata("design:type", Array)
    ], EcsParameters.prototype, "placementConstraints", void 0);
    __decorate([
        Metadata({ data: "json, name=PlacementStrategy", elemType: shared.PlacementStrategy }),
        __metadata("design:type", Array)
    ], EcsParameters.prototype, "placementStrategy", void 0);
    __decorate([
        Metadata({ data: "json, name=PlatformVersion" }),
        __metadata("design:type", String)
    ], EcsParameters.prototype, "platformVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=PropagateTags" }),
        __metadata("design:type", String)
    ], EcsParameters.prototype, "propagateTags", void 0);
    __decorate([
        Metadata({ data: "json, name=ReferenceId" }),
        __metadata("design:type", String)
    ], EcsParameters.prototype, "referenceId", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], EcsParameters.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=TaskCount" }),
        __metadata("design:type", Number)
    ], EcsParameters.prototype, "taskCount", void 0);
    __decorate([
        Metadata({ data: "json, name=TaskDefinitionArn" }),
        __metadata("design:type", String)
    ], EcsParameters.prototype, "taskDefinitionArn", void 0);
    return EcsParameters;
}(SpeakeasyBase));
export { EcsParameters };
