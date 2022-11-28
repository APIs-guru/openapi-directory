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
import { BudgetTypeEnum } from "./budgettypeenum";
import { BudgetedAndActualAmounts } from "./budgetedandactualamounts";
import { CostTypes } from "./costtypes";
import { TimeUnitEnum } from "./timeunitenum";
// BudgetPerformanceHistory
/**
 * A history of the state of a budget at the end of the budget's specified time period.
**/
var BudgetPerformanceHistory = /** @class */ (function (_super) {
    __extends(BudgetPerformanceHistory, _super);
    function BudgetPerformanceHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BudgetName" }),
        __metadata("design:type", String)
    ], BudgetPerformanceHistory.prototype, "budgetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BudgetType" }),
        __metadata("design:type", String)
    ], BudgetPerformanceHistory.prototype, "budgetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BudgetedAndActualAmountsList", elemType: BudgetedAndActualAmounts }),
        __metadata("design:type", Array)
    ], BudgetPerformanceHistory.prototype, "budgetedAndActualAmountsList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CostFilters" }),
        __metadata("design:type", Map)
    ], BudgetPerformanceHistory.prototype, "costFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CostTypes" }),
        __metadata("design:type", CostTypes)
    ], BudgetPerformanceHistory.prototype, "costTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeUnit" }),
        __metadata("design:type", String)
    ], BudgetPerformanceHistory.prototype, "timeUnit", void 0);
    return BudgetPerformanceHistory;
}(SpeakeasyBase));
export { BudgetPerformanceHistory };
