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
// TableInput
/**
 * A structure used to define a table.
**/
var TableInput = /** @class */ (function (_super) {
    __extends(TableInput, _super);
    function TableInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], TableInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastAccessTime" }),
        __metadata("design:type", Date)
    ], TableInput.prototype, "lastAccessTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastAnalyzedTime" }),
        __metadata("design:type", Date)
    ], TableInput.prototype, "lastAnalyzedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], TableInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Owner" }),
        __metadata("design:type", String)
    ], TableInput.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], TableInput.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartitionKeys", elemType: Column }),
        __metadata("design:type", Array)
    ], TableInput.prototype, "partitionKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Retention" }),
        __metadata("design:type", Number)
    ], TableInput.prototype, "retention", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageDescriptor" }),
        __metadata("design:type", StorageDescriptor)
    ], TableInput.prototype, "storageDescriptor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableType" }),
        __metadata("design:type", String)
    ], TableInput.prototype, "tableType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetTable" }),
        __metadata("design:type", TableIdentifier)
    ], TableInput.prototype, "targetTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ViewExpandedText" }),
        __metadata("design:type", String)
    ], TableInput.prototype, "viewExpandedText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ViewOriginalText" }),
        __metadata("design:type", String)
    ], TableInput.prototype, "viewOriginalText", void 0);
    return TableInput;
}(SpeakeasyBase));
export { TableInput };
