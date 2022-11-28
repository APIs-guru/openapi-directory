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
// CodeCoverageReportSummary
/**
 * <p>Contains a summary of a code coverage report.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>
**/
var CodeCoverageReportSummary = /** @class */ (function (_super) {
    __extends(CodeCoverageReportSummary, _super);
    function CodeCoverageReportSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branchCoveragePercentage" }),
        __metadata("design:type", Number)
    ], CodeCoverageReportSummary.prototype, "branchCoveragePercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branchesCovered" }),
        __metadata("design:type", Number)
    ], CodeCoverageReportSummary.prototype, "branchesCovered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branchesMissed" }),
        __metadata("design:type", Number)
    ], CodeCoverageReportSummary.prototype, "branchesMissed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineCoveragePercentage" }),
        __metadata("design:type", Number)
    ], CodeCoverageReportSummary.prototype, "lineCoveragePercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linesCovered" }),
        __metadata("design:type", Number)
    ], CodeCoverageReportSummary.prototype, "linesCovered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linesMissed" }),
        __metadata("design:type", Number)
    ], CodeCoverageReportSummary.prototype, "linesMissed", void 0);
    return CodeCoverageReportSummary;
}(SpeakeasyBase));
export { CodeCoverageReportSummary };
