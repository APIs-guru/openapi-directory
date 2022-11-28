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
import { CsvHeaderOptionEnum } from "./csvheaderoptionenum";
// CsvClassifier
/**
 * A classifier for custom <code>CSV</code> content.
**/
var CsvClassifier = /** @class */ (function (_super) {
    __extends(CsvClassifier, _super);
    function CsvClassifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowSingleColumn" }),
        __metadata("design:type", Boolean)
    ], CsvClassifier.prototype, "allowSingleColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContainsHeader" }),
        __metadata("design:type", String)
    ], CsvClassifier.prototype, "containsHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], CsvClassifier.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Delimiter" }),
        __metadata("design:type", String)
    ], CsvClassifier.prototype, "delimiter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisableValueTrimming" }),
        __metadata("design:type", Boolean)
    ], CsvClassifier.prototype, "disableValueTrimming", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Header" }),
        __metadata("design:type", Array)
    ], CsvClassifier.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], CsvClassifier.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CsvClassifier.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuoteSymbol" }),
        __metadata("design:type", String)
    ], CsvClassifier.prototype, "quoteSymbol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], CsvClassifier.prototype, "version", void 0);
    return CsvClassifier;
}(SpeakeasyBase));
export { CsvClassifier };
