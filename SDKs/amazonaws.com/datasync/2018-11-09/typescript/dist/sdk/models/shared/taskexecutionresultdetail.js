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
import { PhaseStatusEnum } from "./phasestatusenum";
// TaskExecutionResultDetail
/**
 * Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered.
**/
var TaskExecutionResultDetail = /** @class */ (function (_super) {
    __extends(TaskExecutionResultDetail, _super);
    function TaskExecutionResultDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorCode" }),
        __metadata("design:type", String)
    ], TaskExecutionResultDetail.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorDetail" }),
        __metadata("design:type", String)
    ], TaskExecutionResultDetail.prototype, "errorDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrepareDuration" }),
        __metadata("design:type", Number)
    ], TaskExecutionResultDetail.prototype, "prepareDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrepareStatus" }),
        __metadata("design:type", String)
    ], TaskExecutionResultDetail.prototype, "prepareStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalDuration" }),
        __metadata("design:type", Number)
    ], TaskExecutionResultDetail.prototype, "totalDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransferDuration" }),
        __metadata("design:type", Number)
    ], TaskExecutionResultDetail.prototype, "transferDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransferStatus" }),
        __metadata("design:type", String)
    ], TaskExecutionResultDetail.prototype, "transferStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifyDuration" }),
        __metadata("design:type", Number)
    ], TaskExecutionResultDetail.prototype, "verifyDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifyStatus" }),
        __metadata("design:type", String)
    ], TaskExecutionResultDetail.prototype, "verifyStatus", void 0);
    return TaskExecutionResultDetail;
}(SpeakeasyBase));
export { TaskExecutionResultDetail };
