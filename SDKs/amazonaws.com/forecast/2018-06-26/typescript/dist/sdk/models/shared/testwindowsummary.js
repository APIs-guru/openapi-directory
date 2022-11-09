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
// TestWindowSummary
/**
 * The status, start time, and end time of a backtest, as well as a failure reason if applicable.
**/
var TestWindowSummary = /** @class */ (function (_super) {
    __extends(TestWindowSummary, _super);
    function TestWindowSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], TestWindowSummary.prototype, "message", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], TestWindowSummary.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=TestWindowEnd" }),
        __metadata("design:type", Date)
    ], TestWindowSummary.prototype, "testWindowEnd", void 0);
    __decorate([
        Metadata({ data: "json, name=TestWindowStart" }),
        __metadata("design:type", Date)
    ], TestWindowSummary.prototype, "testWindowStart", void 0);
    return TestWindowSummary;
}(SpeakeasyBase));
export { TestWindowSummary };
