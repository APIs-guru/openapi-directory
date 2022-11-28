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
import { CreateRule } from "./createrule";
import { CrossRegionCopyRule } from "./crossregioncopyrule";
import { DeprecateRule } from "./deprecaterule";
import { FastRestoreRule } from "./fastrestorerule";
import { RetainRule } from "./retainrule";
import { ShareRule } from "./sharerule";
import { Tag } from "./tag";
// Schedule
/**
 * Specifies a backup schedule for a snapshot or AMI lifecycle policy.
**/
var Schedule = /** @class */ (function (_super) {
    __extends(Schedule, _super);
    function Schedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CopyTags" }),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "copyTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateRule" }),
        __metadata("design:type", CreateRule)
    ], Schedule.prototype, "createRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CrossRegionCopyRules", elemType: CrossRegionCopyRule }),
        __metadata("design:type", Array)
    ], Schedule.prototype, "crossRegionCopyRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeprecateRule" }),
        __metadata("design:type", DeprecateRule)
    ], Schedule.prototype, "deprecateRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FastRestoreRule" }),
        __metadata("design:type", FastRestoreRule)
    ], Schedule.prototype, "fastRestoreRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetainRule" }),
        __metadata("design:type", RetainRule)
    ], Schedule.prototype, "retainRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShareRules", elemType: ShareRule }),
        __metadata("design:type", Array)
    ], Schedule.prototype, "shareRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TagsToAdd", elemType: Tag }),
        __metadata("design:type", Array)
    ], Schedule.prototype, "tagsToAdd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VariableTags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Schedule.prototype, "variableTags", void 0);
    return Schedule;
}(SpeakeasyBase));
export { Schedule };
