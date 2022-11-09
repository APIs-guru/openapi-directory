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
import { EvaluationTypeEnum } from "./evaluationtypeenum";
import { Metrics } from "./metrics";
// WindowSummary
/**
 * <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>
**/
var WindowSummary = /** @class */ (function (_super) {
    __extends(WindowSummary, _super);
    function WindowSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=EvaluationType" }),
        __metadata("design:type", String)
    ], WindowSummary.prototype, "evaluationType", void 0);
    __decorate([
        Metadata({ data: "json, name=ItemCount" }),
        __metadata("design:type", Number)
    ], WindowSummary.prototype, "itemCount", void 0);
    __decorate([
        Metadata({ data: "json, name=Metrics" }),
        __metadata("design:type", Metrics)
    ], WindowSummary.prototype, "metrics", void 0);
    __decorate([
        Metadata({ data: "json, name=TestWindowEnd" }),
        __metadata("design:type", Date)
    ], WindowSummary.prototype, "testWindowEnd", void 0);
    __decorate([
        Metadata({ data: "json, name=TestWindowStart" }),
        __metadata("design:type", Date)
    ], WindowSummary.prototype, "testWindowStart", void 0);
    return WindowSummary;
}(SpeakeasyBase));
export { WindowSummary };
