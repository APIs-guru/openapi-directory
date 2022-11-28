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
import { ApprovalRuleEventMetadata } from "./approvalruleeventmetadata";
import { ApprovalRuleOverriddenEventMetadata } from "./approvalruleoverriddeneventmetadata";
import { ApprovalStateChangedEventMetadata } from "./approvalstatechangedeventmetadata";
import { PullRequestCreatedEventMetadata } from "./pullrequestcreatedeventmetadata";
import { PullRequestEventTypeEnum } from "./pullrequesteventtypeenum";
import { PullRequestMergedStateChangedEventMetadata } from "./pullrequestmergedstatechangedeventmetadata";
import { PullRequestSourceReferenceUpdatedEventMetadata } from "./pullrequestsourcereferenceupdatedeventmetadata";
import { PullRequestStatusChangedEventMetadata } from "./pullrequeststatuschangedeventmetadata";
// PullRequestEvent
/**
 * Returns information about a pull request event.
**/
var PullRequestEvent = /** @class */ (function (_super) {
    __extends(PullRequestEvent, _super);
    function PullRequestEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actorArn" }),
        __metadata("design:type", String)
    ], PullRequestEvent.prototype, "actorArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalRuleEventMetadata" }),
        __metadata("design:type", ApprovalRuleEventMetadata)
    ], PullRequestEvent.prototype, "approvalRuleEventMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalRuleOverriddenEventMetadata" }),
        __metadata("design:type", ApprovalRuleOverriddenEventMetadata)
    ], PullRequestEvent.prototype, "approvalRuleOverriddenEventMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalStateChangedEventMetadata" }),
        __metadata("design:type", ApprovalStateChangedEventMetadata)
    ], PullRequestEvent.prototype, "approvalStateChangedEventMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventDate" }),
        __metadata("design:type", Date)
    ], PullRequestEvent.prototype, "eventDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestCreatedEventMetadata" }),
        __metadata("design:type", PullRequestCreatedEventMetadata)
    ], PullRequestEvent.prototype, "pullRequestCreatedEventMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestEventType" }),
        __metadata("design:type", String)
    ], PullRequestEvent.prototype, "pullRequestEventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestId" }),
        __metadata("design:type", String)
    ], PullRequestEvent.prototype, "pullRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestMergedStateChangedEventMetadata" }),
        __metadata("design:type", PullRequestMergedStateChangedEventMetadata)
    ], PullRequestEvent.prototype, "pullRequestMergedStateChangedEventMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestSourceReferenceUpdatedEventMetadata" }),
        __metadata("design:type", PullRequestSourceReferenceUpdatedEventMetadata)
    ], PullRequestEvent.prototype, "pullRequestSourceReferenceUpdatedEventMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestStatusChangedEventMetadata" }),
        __metadata("design:type", PullRequestStatusChangedEventMetadata)
    ], PullRequestEvent.prototype, "pullRequestStatusChangedEventMetadata", void 0);
    return PullRequestEvent;
}(SpeakeasyBase));
export { PullRequestEvent };
