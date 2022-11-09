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
import { ImportStatusEnum } from "./importstatusenum";
// ImportTask
/**
 * An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
**/
var ImportTask = /** @class */ (function (_super) {
    __extends(ImportTask, _super);
    function ImportTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=applicationImportFailure" }),
        __metadata("design:type", Number)
    ], ImportTask.prototype, "applicationImportFailure", void 0);
    __decorate([
        Metadata({ data: "json, name=applicationImportSuccess" }),
        __metadata("design:type", Number)
    ], ImportTask.prototype, "applicationImportSuccess", void 0);
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], ImportTask.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=errorsAndFailedEntriesZip" }),
        __metadata("design:type", String)
    ], ImportTask.prototype, "errorsAndFailedEntriesZip", void 0);
    __decorate([
        Metadata({ data: "json, name=importCompletionTime" }),
        __metadata("design:type", Date)
    ], ImportTask.prototype, "importCompletionTime", void 0);
    __decorate([
        Metadata({ data: "json, name=importDeletedTime" }),
        __metadata("design:type", Date)
    ], ImportTask.prototype, "importDeletedTime", void 0);
    __decorate([
        Metadata({ data: "json, name=importRequestTime" }),
        __metadata("design:type", Date)
    ], ImportTask.prototype, "importRequestTime", void 0);
    __decorate([
        Metadata({ data: "json, name=importTaskId" }),
        __metadata("design:type", String)
    ], ImportTask.prototype, "importTaskId", void 0);
    __decorate([
        Metadata({ data: "json, name=importUrl" }),
        __metadata("design:type", String)
    ], ImportTask.prototype, "importUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportTask.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=serverImportFailure" }),
        __metadata("design:type", Number)
    ], ImportTask.prototype, "serverImportFailure", void 0);
    __decorate([
        Metadata({ data: "json, name=serverImportSuccess" }),
        __metadata("design:type", Number)
    ], ImportTask.prototype, "serverImportSuccess", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ImportTask.prototype, "status", void 0);
    return ImportTask;
}(SpeakeasyBase));
export { ImportTask };
