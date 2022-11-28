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
import { ConflictResolution } from "./conflictresolution";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";
var MergePullRequestBySquashInput = /** @class */ (function (_super) {
    __extends(MergePullRequestBySquashInput, _super);
    function MergePullRequestBySquashInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorName" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashInput.prototype, "authorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitMessage" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashInput.prototype, "commitMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conflictDetailLevel" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashInput.prototype, "conflictDetailLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conflictResolution" }),
        __metadata("design:type", ConflictResolution)
    ], MergePullRequestBySquashInput.prototype, "conflictResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conflictResolutionStrategy" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashInput.prototype, "conflictResolutionStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashInput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keepEmptyFolders" }),
        __metadata("design:type", Boolean)
    ], MergePullRequestBySquashInput.prototype, "keepEmptyFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestId" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashInput.prototype, "pullRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositoryName" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashInput.prototype, "repositoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceCommitId" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashInput.prototype, "sourceCommitId", void 0);
    return MergePullRequestBySquashInput;
}(SpeakeasyBase));
export { MergePullRequestBySquashInput };
