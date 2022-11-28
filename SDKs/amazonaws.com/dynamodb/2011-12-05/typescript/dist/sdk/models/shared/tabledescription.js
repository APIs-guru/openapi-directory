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
import { KeySchema } from "./keyschema";
import { ProvisionedThroughputDescription } from "./provisionedthroughputdescription";
import { TableStatusEnum } from "./tablestatusenum";
var TableDescription = /** @class */ (function (_super) {
    __extends(TableDescription, _super);
    function TableDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], TableDescription.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemCount" }),
        __metadata("design:type", Number)
    ], TableDescription.prototype, "itemCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeySchema" }),
        __metadata("design:type", KeySchema)
    ], TableDescription.prototype, "keySchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" }),
        __metadata("design:type", ProvisionedThroughputDescription)
    ], TableDescription.prototype, "provisionedThroughput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableName" }),
        __metadata("design:type", String)
    ], TableDescription.prototype, "tableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableSizeBytes" }),
        __metadata("design:type", Number)
    ], TableDescription.prototype, "tableSizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableStatus" }),
        __metadata("design:type", String)
    ], TableDescription.prototype, "tableStatus", void 0);
    return TableDescription;
}(SpeakeasyBase));
export { TableDescription };
