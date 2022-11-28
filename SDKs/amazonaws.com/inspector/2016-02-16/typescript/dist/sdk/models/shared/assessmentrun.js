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
import { AssessmentRunNotification } from "./assessmentrunnotification";
import { AssessmentRunStateEnum } from "./assessmentrunstateenum";
import { AssessmentRunStateChange } from "./assessmentrunstatechange";
import { Attribute } from "./attribute";
// AssessmentRun
/**
 * <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>
**/
var AssessmentRun = /** @class */ (function (_super) {
    __extends(AssessmentRun, _super);
    function AssessmentRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], AssessmentRun.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assessmentTemplateArn" }),
        __metadata("design:type", String)
    ], AssessmentRun.prototype, "assessmentTemplateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completedAt" }),
        __metadata("design:type", Date)
    ], AssessmentRun.prototype, "completedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], AssessmentRun.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataCollected" }),
        __metadata("design:type", Boolean)
    ], AssessmentRun.prototype, "dataCollected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationInSeconds" }),
        __metadata("design:type", Number)
    ], AssessmentRun.prototype, "durationInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingCounts" }),
        __metadata("design:type", Map)
    ], AssessmentRun.prototype, "findingCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AssessmentRun.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications", elemType: AssessmentRunNotification }),
        __metadata("design:type", Array)
    ], AssessmentRun.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rulesPackageArns" }),
        __metadata("design:type", Array)
    ], AssessmentRun.prototype, "rulesPackageArns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startedAt" }),
        __metadata("design:type", Date)
    ], AssessmentRun.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AssessmentRun.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateChangedAt" }),
        __metadata("design:type", Date)
    ], AssessmentRun.prototype, "stateChangedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateChanges", elemType: AssessmentRunStateChange }),
        __metadata("design:type", Array)
    ], AssessmentRun.prototype, "stateChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAttributesForFindings", elemType: Attribute }),
        __metadata("design:type", Array)
    ], AssessmentRun.prototype, "userAttributesForFindings", void 0);
    return AssessmentRun;
}(SpeakeasyBase));
export { AssessmentRun };
