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
import { BinaryColumnStatisticsData } from "./binarycolumnstatisticsdata";
import { BooleanColumnStatisticsData } from "./booleancolumnstatisticsdata";
import { DateColumnStatisticsData } from "./datecolumnstatisticsdata";
import { DecimalColumnStatisticsData } from "./decimalcolumnstatisticsdata";
import { DoubleColumnStatisticsData } from "./doublecolumnstatisticsdata";
import { LongColumnStatisticsData } from "./longcolumnstatisticsdata";
import { StringColumnStatisticsData } from "./stringcolumnstatisticsdata";
import { ColumnStatisticsTypeEnum } from "./columnstatisticstypeenum";
// ColumnStatisticsData
/**
 * Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.
**/
var ColumnStatisticsData = /** @class */ (function (_super) {
    __extends(ColumnStatisticsData, _super);
    function ColumnStatisticsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BinaryColumnStatisticsData" }),
        __metadata("design:type", BinaryColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "binaryColumnStatisticsData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BooleanColumnStatisticsData" }),
        __metadata("design:type", BooleanColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "booleanColumnStatisticsData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateColumnStatisticsData" }),
        __metadata("design:type", DateColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "dateColumnStatisticsData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DecimalColumnStatisticsData" }),
        __metadata("design:type", DecimalColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "decimalColumnStatisticsData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DoubleColumnStatisticsData" }),
        __metadata("design:type", DoubleColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "doubleColumnStatisticsData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LongColumnStatisticsData" }),
        __metadata("design:type", LongColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "longColumnStatisticsData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StringColumnStatisticsData" }),
        __metadata("design:type", StringColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "stringColumnStatisticsData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ColumnStatisticsData.prototype, "type", void 0);
    return ColumnStatisticsData;
}(SpeakeasyBase));
export { ColumnStatisticsData };
