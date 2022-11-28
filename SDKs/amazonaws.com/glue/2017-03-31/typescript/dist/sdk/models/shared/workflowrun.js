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
import { WorkflowGraph } from "./workflowgraph";
import { StartingEventBatchCondition } from "./startingeventbatchcondition";
import { WorkflowRunStatistics } from "./workflowrunstatistics";
import { WorkflowRunStatusEnum } from "./workflowrunstatusenum";
// WorkflowRun
/**
 * A workflow run is an execution of a workflow providing all the runtime information.
**/
var WorkflowRun = /** @class */ (function (_super) {
    __extends(WorkflowRun, _super);
    function WorkflowRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletedOn" }),
        __metadata("design:type", Date)
    ], WorkflowRun.prototype, "completedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorMessage" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Graph" }),
        __metadata("design:type", WorkflowGraph)
    ], WorkflowRun.prototype, "graph", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousRunId" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "previousRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartedOn" }),
        __metadata("design:type", Date)
    ], WorkflowRun.prototype, "startedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartingEventBatchCondition" }),
        __metadata("design:type", StartingEventBatchCondition)
    ], WorkflowRun.prototype, "startingEventBatchCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Statistics" }),
        __metadata("design:type", WorkflowRunStatistics)
    ], WorkflowRun.prototype, "statistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowRunId" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "workflowRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowRunProperties" }),
        __metadata("design:type", Map)
    ], WorkflowRun.prototype, "workflowRunProperties", void 0);
    return WorkflowRun;
}(SpeakeasyBase));
export { WorkflowRun };
