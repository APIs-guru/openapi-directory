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
// CalculatedSpend
/**
 * <p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, RI units, or Savings Plans units and the <code>forecastedSpend</code> tracks how much you are predicted to spend based on your historical usage profile.</p> <p>For example, if it is the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p>
**/
var CalculatedSpend = /** @class */ (function (_super) {
    __extends(CalculatedSpend, _super);
    function CalculatedSpend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActualSpend" }),
        __metadata("design:type", Spend)
    ], CalculatedSpend.prototype, "actualSpend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForecastedSpend" }),
        __metadata("design:type", Spend)
    ], CalculatedSpend.prototype, "forecastedSpend", void 0);
    return CalculatedSpend;
}(SpeakeasyBase));
export { CalculatedSpend };
