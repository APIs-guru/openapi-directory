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
import { Spend } from "./spend";
import { BudgetTypeEnum } from "./budgettypeenum";
import { CalculatedSpend } from "./calculatedspend";
import { CostTypes } from "./costtypes";
import { TimePeriod } from "./timeperiod";
import { TimeUnitEnum } from "./timeunitenum";
// Budget
/**
 * <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p>
**/
var Budget = /** @class */ (function (_super) {
    __extends(Budget, _super);
    function Budget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BudgetLimit" }),
        __metadata("design:type", Spend)
    ], Budget.prototype, "budgetLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BudgetName" }),
        __metadata("design:type", String)
    ], Budget.prototype, "budgetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BudgetType" }),
        __metadata("design:type", String)
    ], Budget.prototype, "budgetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculatedSpend" }),
        __metadata("design:type", CalculatedSpend)
    ], Budget.prototype, "calculatedSpend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CostFilters" }),
        __metadata("design:type", Map)
    ], Budget.prototype, "costFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CostTypes" }),
        __metadata("design:type", CostTypes)
    ], Budget.prototype, "costTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" }),
        __metadata("design:type", Date)
    ], Budget.prototype, "lastUpdatedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlannedBudgetLimits", elemType: Spend }),
        __metadata("design:type", Map)
    ], Budget.prototype, "plannedBudgetLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimePeriod" }),
        __metadata("design:type", TimePeriod)
    ], Budget.prototype, "timePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeUnit" }),
        __metadata("design:type", String)
    ], Budget.prototype, "timeUnit", void 0);
    return Budget;
}(SpeakeasyBase));
export { Budget };
