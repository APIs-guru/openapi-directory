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
import { Column } from "./column";
import { StorageDescriptor } from "./storagedescriptor";
import { TableIdentifier } from "./tableidentifier";
// Table
/**
 * Represents a collection of related data organized in columns and rows.
**/
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CatalogId" }),
        __metadata("design:type", String)
    ], Table.prototype, "catalogId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateTime" }),
        __metadata("design:type", Date)
    ], Table.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedBy" }),
        __metadata("design:type", String)
    ], Table.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], Table.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Table.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRegisteredWithLakeFormation" }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "isRegisteredWithLakeFormation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastAccessTime" }),
        __metadata("design:type", Date)
    ], Table.prototype, "lastAccessTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastAnalyzedTime" }),
        __metadata("design:type", Date)
    ], Table.prototype, "lastAnalyzedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Table.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Owner" }),
        __metadata("design:type", String)
    ], Table.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], Table.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartitionKeys", elemType: Column }),
        __metadata("design:type", Array)
    ], Table.prototype, "partitionKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Retention" }),
        __metadata("design:type", Number)
    ], Table.prototype, "retention", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageDescriptor" }),
        __metadata("design:type", StorageDescriptor)
    ], Table.prototype, "storageDescriptor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableType" }),
        __metadata("design:type", String)
    ], Table.prototype, "tableType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetTable" }),
        __metadata("design:type", TableIdentifier)
    ], Table.prototype, "targetTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateTime" }),
        __metadata("design:type", Date)
    ], Table.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ViewExpandedText" }),
        __metadata("design:type", String)
    ], Table.prototype, "viewExpandedText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ViewOriginalText" }),
        __metadata("design:type", String)
    ], Table.prototype, "viewOriginalText", void 0);
    return Table;
}(SpeakeasyBase));
export { Table };
