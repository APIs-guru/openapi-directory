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
import { BlueprintDetails } from "./blueprintdetails";
import { WorkflowGraph } from "./workflowgraph";
import { WorkflowRun } from "./workflowrun";
// Workflow
/**
 * A workflow is a collection of multiple dependent Glue jobs and crawlers that are run to complete a complex ETL task. A workflow manages the execution and monitoring of all its jobs and crawlers.
**/
var Workflow = /** @class */ (function (_super) {
    __extends(Workflow, _super);
    function Workflow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlueprintDetails" }),
        __metadata("design:type", BlueprintDetails)
    ], Workflow.prototype, "blueprintDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedOn" }),
        __metadata("design:type", Date)
    ], Workflow.prototype, "createdOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultRunProperties" }),
        __metadata("design:type", Map)
    ], Workflow.prototype, "defaultRunProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Graph" }),
        __metadata("design:type", WorkflowGraph)
    ], Workflow.prototype, "graph", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedOn" }),
        __metadata("design:type", Date)
    ], Workflow.prototype, "lastModifiedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastRun" }),
        __metadata("design:type", WorkflowRun)
    ], Workflow.prototype, "lastRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrentRuns" }),
        __metadata("design:type", Number)
    ], Workflow.prototype, "maxConcurrentRuns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "name", void 0);
    return Workflow;
}(SpeakeasyBase));
export { Workflow };
