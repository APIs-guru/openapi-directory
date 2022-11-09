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
// Dataset
/**
 * A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.
**/
var Dataset = /** @class */ (function (_super) {
    __extends(Dataset, _super);
    function Dataset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], Dataset.prototype, "creationDate", void 0);
    __decorate([
        Metadata({ data: "json, name=DataStorage" }),
        __metadata("design:type", Number)
    ], Dataset.prototype, "dataStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=DatasetName" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "datasetName", void 0);
    __decorate([
        Metadata({ data: "json, name=IdentityId" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "identityId", void 0);
    __decorate([
        Metadata({ data: "json, name=LastModifiedBy" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "lastModifiedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", Date)
    ], Dataset.prototype, "lastModifiedDate", void 0);
    __decorate([
        Metadata({ data: "json, name=NumRecords" }),
        __metadata("design:type", Number)
    ], Dataset.prototype, "numRecords", void 0);
    return Dataset;
}(SpeakeasyBase));
export { Dataset };
