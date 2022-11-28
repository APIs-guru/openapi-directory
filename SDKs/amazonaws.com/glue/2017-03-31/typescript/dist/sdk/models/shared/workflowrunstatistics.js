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
// WorkflowRunStatistics
/**
 * Workflow run statistics provides statistics about the workflow run.
**/
var WorkflowRunStatistics = /** @class */ (function (_super) {
    __extends(WorkflowRunStatistics, _super);
    function WorkflowRunStatistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailedActions" }),
        __metadata("design:type", Number)
    ], WorkflowRunStatistics.prototype, "failedActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunningActions" }),
        __metadata("design:type", Number)
    ], WorkflowRunStatistics.prototype, "runningActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppedActions" }),
        __metadata("design:type", Number)
    ], WorkflowRunStatistics.prototype, "stoppedActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SucceededActions" }),
        __metadata("design:type", Number)
    ], WorkflowRunStatistics.prototype, "succeededActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeoutActions" }),
        __metadata("design:type", Number)
    ], WorkflowRunStatistics.prototype, "timeoutActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalActions" }),
        __metadata("design:type", Number)
    ], WorkflowRunStatistics.prototype, "totalActions", void 0);
    return WorkflowRunStatistics;
}(SpeakeasyBase));
export { WorkflowRunStatistics };
