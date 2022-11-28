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
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";
var GetMergeConflictsInput = /** @class */ (function (_super) {
    __extends(GetMergeConflictsInput, _super);
    function GetMergeConflictsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conflictDetailLevel" }),
        __metadata("design:type", String)
    ], GetMergeConflictsInput.prototype, "conflictDetailLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conflictResolutionStrategy" }),
        __metadata("design:type", String)
    ], GetMergeConflictsInput.prototype, "conflictResolutionStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationCommitSpecifier" }),
        __metadata("design:type", String)
    ], GetMergeConflictsInput.prototype, "destinationCommitSpecifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxConflictFiles" }),
        __metadata("design:type", Number)
    ], GetMergeConflictsInput.prototype, "maxConflictFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergeOption" }),
        __metadata("design:type", String)
    ], GetMergeConflictsInput.prototype, "mergeOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], GetMergeConflictsInput.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositoryName" }),
        __metadata("design:type", String)
    ], GetMergeConflictsInput.prototype, "repositoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceCommitSpecifier" }),
        __metadata("design:type", String)
    ], GetMergeConflictsInput.prototype, "sourceCommitSpecifier", void 0);
    return GetMergeConflictsInput;
}(SpeakeasyBase));
export { GetMergeConflictsInput };
