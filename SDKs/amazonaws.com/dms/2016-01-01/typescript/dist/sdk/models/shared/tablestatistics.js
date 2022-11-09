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
// TableStatistics
/**
 * Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation.
**/
var TableStatistics = /** @class */ (function (_super) {
    __extends(TableStatistics, _super);
    function TableStatistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Ddls" }),
        __metadata("design:type", Number)
    ], TableStatistics.prototype, "ddls", void 0);
    __decorate([
        Metadata({ data: "json, name=Deletes" }),
        __metadata("design:type", Number)
    ], TableStatistics.prototype, "deletes", void 0);
    __decorate([
        Metadata({ data: "json, name=FullLoadCondtnlChkFailedRows" }),
        __metadata("design:type", Number)
    ], TableStatistics.prototype, "fullLoadCondtnlChkFailedRows", void 0);
    __decorate([
        Metadata({ data: "json, name=FullLoadEndTime" }),
        __metadata("design:type", Date)
    ], TableStatistics.prototype, "fullLoadEndTime", void 0);
    __decorate([
        Metadata({ data: "json, name=FullLoadErrorRows" }),
        __metadata("design:type", Number)
    ], TableStatistics.prototype, "fullLoadErrorRows", void 0);
    __decorate([
        Metadata({ data: "json, name=FullLoadReloaded" }),
        __metadata("design:type", Boolean)
    ], TableStatistics.prototype, "fullLoadReloaded", void 0);
    __decorate([
        Metadata({ data: "json, name=FullLoadRows" }),
        __metadata("design:type", Number)
    ], TableStatistics.prototype, "fullLoadRows", void 0);
    __decorate([
        Metadata({ data: "json, name=FullLoadStartTime" }),
        __metadata("design:type", Date)
    ], TableStatistics.prototype, "fullLoadStartTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Inserts" }),
        __metadata("design:type", Number)
    ], TableStatistics.prototype, "inserts", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdateTime" }),
        __metadata("design:type", Date)
    ], TableStatistics.prototype, "lastUpdateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=SchemaName" }),
        __metadata("design:type", String)
    ], TableStatistics.prototype, "schemaName", void 0);
    __decorate([
        Metadata({ data: "json, name=TableName" }),
        __metadata("design:type", String)
    ], TableStatistics.prototype, "tableName", void 0);
    __decorate([
        Metadata({ data: "json, name=TableState" }),
        __metadata("design:type", String)
    ], TableStatistics.prototype, "tableState", void 0);
    __decorate([
        Metadata({ data: "json, name=Updates" }),
        __metadata("design:type", Number)
    ], TableStatistics.prototype, "updates", void 0);
    __decorate([
        Metadata({ data: "json, name=ValidationFailedRecords" }),
        __metadata("design:type", Number)
    ], TableStatistics.prototype, "validationFailedRecords", void 0);
    __decorate([
        Metadata({ data: "json, name=ValidationPendingRecords" }),
        __metadata("design:type", Number)
    ], TableStatistics.prototype, "validationPendingRecords", void 0);
    __decorate([
        Metadata({ data: "json, name=ValidationState" }),
        __metadata("design:type", String)
    ], TableStatistics.prototype, "validationState", void 0);
    __decorate([
        Metadata({ data: "json, name=ValidationStateDetails" }),
        __metadata("design:type", String)
    ], TableStatistics.prototype, "validationStateDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=ValidationSuspendedRecords" }),
        __metadata("design:type", Number)
    ], TableStatistics.prototype, "validationSuspendedRecords", void 0);
    return TableStatistics;
}(SpeakeasyBase));
export { TableStatistics };
