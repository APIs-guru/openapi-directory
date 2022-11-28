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
import { FileModes } from "./filemodes";
import { FileSizes } from "./filesizes";
import { IsBinaryFile } from "./isbinaryfile";
import { MergeOperations } from "./mergeoperations";
import { ObjectTypes } from "./objecttypes";
// ConflictMetadata
/**
 * Information about the metadata for a conflict in a merge operation.
**/
var ConflictMetadata = /** @class */ (function (_super) {
    __extends(ConflictMetadata, _super);
    function ConflictMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentConflict" }),
        __metadata("design:type", Boolean)
    ], ConflictMetadata.prototype, "contentConflict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileModeConflict" }),
        __metadata("design:type", Boolean)
    ], ConflictMetadata.prototype, "fileModeConflict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileModes" }),
        __metadata("design:type", FileModes)
    ], ConflictMetadata.prototype, "fileModes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filePath" }),
        __metadata("design:type", String)
    ], ConflictMetadata.prototype, "filePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileSizes" }),
        __metadata("design:type", FileSizes)
    ], ConflictMetadata.prototype, "fileSizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isBinaryFile" }),
        __metadata("design:type", IsBinaryFile)
    ], ConflictMetadata.prototype, "isBinaryFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergeOperations" }),
        __metadata("design:type", MergeOperations)
    ], ConflictMetadata.prototype, "mergeOperations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfConflicts" }),
        __metadata("design:type", Number)
    ], ConflictMetadata.prototype, "numberOfConflicts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectTypeConflict" }),
        __metadata("design:type", Boolean)
    ], ConflictMetadata.prototype, "objectTypeConflict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectTypes" }),
        __metadata("design:type", ObjectTypes)
    ], ConflictMetadata.prototype, "objectTypes", void 0);
    return ConflictMetadata;
}(SpeakeasyBase));
export { ConflictMetadata };
