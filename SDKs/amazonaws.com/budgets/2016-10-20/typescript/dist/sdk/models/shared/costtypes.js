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
// CostTypes
/**
 * <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
**/
var CostTypes = /** @class */ (function (_super) {
    __extends(CostTypes, _super);
    function CostTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeCredit" }),
        __metadata("design:type", Boolean)
    ], CostTypes.prototype, "includeCredit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeDiscount" }),
        __metadata("design:type", Boolean)
    ], CostTypes.prototype, "includeDiscount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeOtherSubscription" }),
        __metadata("design:type", Boolean)
    ], CostTypes.prototype, "includeOtherSubscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeRecurring" }),
        __metadata("design:type", Boolean)
    ], CostTypes.prototype, "includeRecurring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeRefund" }),
        __metadata("design:type", Boolean)
    ], CostTypes.prototype, "includeRefund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeSubscription" }),
        __metadata("design:type", Boolean)
    ], CostTypes.prototype, "includeSubscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeSupport" }),
        __metadata("design:type", Boolean)
    ], CostTypes.prototype, "includeSupport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeTax" }),
        __metadata("design:type", Boolean)
    ], CostTypes.prototype, "includeTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeUpfront" }),
        __metadata("design:type", Boolean)
    ], CostTypes.prototype, "includeUpfront", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseAmortized" }),
        __metadata("design:type", Boolean)
    ], CostTypes.prototype, "useAmortized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseBlended" }),
        __metadata("design:type", Boolean)
    ], CostTypes.prototype, "useBlended", void 0);
    return CostTypes;
}(SpeakeasyBase));
export { CostTypes };
