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
import { ExecutionEngineConfig } from "./executionengineconfig";
import { NotebookExecutionStatusEnum } from "./notebookexecutionstatusenum";
import { Tag } from "./tag";
// NotebookExecution
/**
 * A notebook execution. An execution is a specific instance that an EMR Notebook is run using the <code>StartNotebookExecution</code> action.
**/
var NotebookExecution = /** @class */ (function (_super) {
    __extends(NotebookExecution, _super);
    function NotebookExecution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], NotebookExecution.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EditorId" }),
        __metadata("design:type", String)
    ], NotebookExecution.prototype, "editorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], NotebookExecution.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionEngine" }),
        __metadata("design:type", ExecutionEngineConfig)
    ], NotebookExecution.prototype, "executionEngine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastStateChangeReason" }),
        __metadata("design:type", String)
    ], NotebookExecution.prototype, "lastStateChangeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookExecutionId" }),
        __metadata("design:type", String)
    ], NotebookExecution.prototype, "notebookExecutionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookExecutionName" }),
        __metadata("design:type", String)
    ], NotebookExecution.prototype, "notebookExecutionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookInstanceSecurityGroupId" }),
        __metadata("design:type", String)
    ], NotebookExecution.prototype, "notebookInstanceSecurityGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookParams" }),
        __metadata("design:type", String)
    ], NotebookExecution.prototype, "notebookParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputNotebookURI" }),
        __metadata("design:type", String)
    ], NotebookExecution.prototype, "outputNotebookUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], NotebookExecution.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], NotebookExecution.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], NotebookExecution.prototype, "tags", void 0);
    return NotebookExecution;
}(SpeakeasyBase));
export { NotebookExecution };
