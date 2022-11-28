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
// TaskStatisticsForAuditCheck
/**
 * Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask.
**/
var TaskStatisticsForAuditCheck = /** @class */ (function (_super) {
    __extends(TaskStatisticsForAuditCheck, _super);
    function TaskStatisticsForAuditCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canceledFindingsCount" }),
        __metadata("design:type", Number)
    ], TaskStatisticsForAuditCheck.prototype, "canceledFindingsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failedFindingsCount" }),
        __metadata("design:type", Number)
    ], TaskStatisticsForAuditCheck.prototype, "failedFindingsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skippedFindingsCount" }),
        __metadata("design:type", Number)
    ], TaskStatisticsForAuditCheck.prototype, "skippedFindingsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=succeededFindingsCount" }),
        __metadata("design:type", Number)
    ], TaskStatisticsForAuditCheck.prototype, "succeededFindingsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalFindingsCount" }),
        __metadata("design:type", Number)
    ], TaskStatisticsForAuditCheck.prototype, "totalFindingsCount", void 0);
    return TaskStatisticsForAuditCheck;
}(SpeakeasyBase));
export { TaskStatisticsForAuditCheck };
