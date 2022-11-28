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
import { TargetGroupInfo } from "./targetgroupinfo";
import { TargetLabelEnum } from "./targetlabelenum";
// EcsTaskSet
/**
 *  Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An AWS CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set.
**/
var EcsTaskSet = /** @class */ (function (_super) {
    __extends(EcsTaskSet, _super);
    function EcsTaskSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredCount" }),
        __metadata("design:type", Number)
    ], EcsTaskSet.prototype, "desiredCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifer" }),
        __metadata("design:type", String)
    ], EcsTaskSet.prototype, "identifer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingCount" }),
        __metadata("design:type", Number)
    ], EcsTaskSet.prototype, "pendingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runningCount" }),
        __metadata("design:type", Number)
    ], EcsTaskSet.prototype, "runningCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], EcsTaskSet.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetGroup" }),
        __metadata("design:type", TargetGroupInfo)
    ], EcsTaskSet.prototype, "targetGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskSetLabel" }),
        __metadata("design:type", String)
    ], EcsTaskSet.prototype, "taskSetLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trafficWeight" }),
        __metadata("design:type", Number)
    ], EcsTaskSet.prototype, "trafficWeight", void 0);
    return EcsTaskSet;
}(SpeakeasyBase));
export { EcsTaskSet };
