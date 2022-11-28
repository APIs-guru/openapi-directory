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
import { ColumnNullableEnum } from "./columnnullableenum";
// ColumnInfo
/**
 * Information about the columns in a query execution result.
**/
var ColumnInfo = /** @class */ (function (_super) {
    __extends(ColumnInfo, _super);
    function ColumnInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CaseSensitive" }),
        __metadata("design:type", Boolean)
    ], ColumnInfo.prototype, "caseSensitive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CatalogName" }),
        __metadata("design:type", String)
    ], ColumnInfo.prototype, "catalogName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Label" }),
        __metadata("design:type", String)
    ], ColumnInfo.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ColumnInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Nullable" }),
        __metadata("design:type", String)
    ], ColumnInfo.prototype, "nullable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Precision" }),
        __metadata("design:type", Number)
    ], ColumnInfo.prototype, "precision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Scale" }),
        __metadata("design:type", Number)
    ], ColumnInfo.prototype, "scale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaName" }),
        __metadata("design:type", String)
    ], ColumnInfo.prototype, "schemaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableName" }),
        __metadata("design:type", String)
    ], ColumnInfo.prototype, "tableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ColumnInfo.prototype, "type", void 0);
    return ColumnInfo;
}(SpeakeasyBase));
export { ColumnInfo };
