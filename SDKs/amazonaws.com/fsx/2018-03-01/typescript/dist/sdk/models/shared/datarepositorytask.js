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
import { DataRepositoryTaskFailureDetails } from "./datarepositorytaskfailuredetails";
import { DataRepositoryTaskLifecycleEnum } from "./datarepositorytasklifecycleenum";
import { CompletionReport } from "./completionreport";
import { DataRepositoryTaskStatus } from "./datarepositorytaskstatus";
import { Tag } from "./tag";
import { DataRepositoryTaskTypeEnum } from "./datarepositorytasktypeenum";
// DataRepositoryTask
/**
 * A description of the data repository task. You use data repository tasks to perform bulk transfer operations between your Amazon FSx file system and its linked data repository.
**/
var DataRepositoryTask = /** @class */ (function (_super) {
    __extends(DataRepositoryTask, _super);
    function DataRepositoryTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DataRepositoryTask.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], DataRepositoryTask.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureDetails" }),
        __metadata("design:type", DataRepositoryTaskFailureDetails)
    ], DataRepositoryTask.prototype, "failureDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemId" }),
        __metadata("design:type", String)
    ], DataRepositoryTask.prototype, "fileSystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Lifecycle" }),
        __metadata("design:type", String)
    ], DataRepositoryTask.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Paths" }),
        __metadata("design:type", Array)
    ], DataRepositoryTask.prototype, "paths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Report" }),
        __metadata("design:type", CompletionReport)
    ], DataRepositoryTask.prototype, "report", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceARN" }),
        __metadata("design:type", String)
    ], DataRepositoryTask.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], DataRepositoryTask.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", DataRepositoryTaskStatus)
    ], DataRepositoryTask.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], DataRepositoryTask.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskId" }),
        __metadata("design:type", String)
    ], DataRepositoryTask.prototype, "taskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], DataRepositoryTask.prototype, "type", void 0);
    return DataRepositoryTask;
}(SpeakeasyBase));
export { DataRepositoryTask };
