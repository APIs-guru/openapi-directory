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
import { TaskRunProperties } from "./taskrunproperties";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
var GetMlTaskRunResponse = /** @class */ (function (_super) {
    __extends(GetMlTaskRunResponse, _super);
    function GetMlTaskRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletedOn" }),
        __metadata("design:type", Date)
    ], GetMlTaskRunResponse.prototype, "completedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorString" }),
        __metadata("design:type", String)
    ], GetMlTaskRunResponse.prototype, "errorString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionTime" }),
        __metadata("design:type", Number)
    ], GetMlTaskRunResponse.prototype, "executionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedOn" }),
        __metadata("design:type", Date)
    ], GetMlTaskRunResponse.prototype, "lastModifiedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogGroupName" }),
        __metadata("design:type", String)
    ], GetMlTaskRunResponse.prototype, "logGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Properties" }),
        __metadata("design:type", TaskRunProperties)
    ], GetMlTaskRunResponse.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartedOn" }),
        __metadata("design:type", Date)
    ], GetMlTaskRunResponse.prototype, "startedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], GetMlTaskRunResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskRunId" }),
        __metadata("design:type", String)
    ], GetMlTaskRunResponse.prototype, "taskRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformId" }),
        __metadata("design:type", String)
    ], GetMlTaskRunResponse.prototype, "transformId", void 0);
    return GetMlTaskRunResponse;
}(SpeakeasyBase));
export { GetMlTaskRunResponse };
