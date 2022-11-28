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
import { ApprovalRule } from "./approvalrule";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";
import { PullRequestTarget } from "./pullrequesttarget";
// PullRequest
/**
 * Returns information about a pull request.
**/
var PullRequest = /** @class */ (function (_super) {
    __extends(PullRequest, _super);
    function PullRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalRules", elemType: ApprovalRule }),
        __metadata("design:type", Array)
    ], PullRequest.prototype, "approvalRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorArn" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "authorArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", Date)
    ], PullRequest.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastActivityDate" }),
        __metadata("design:type", Date)
    ], PullRequest.prototype, "lastActivityDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestId" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "pullRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestStatus" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "pullRequestStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestTargets", elemType: PullRequestTarget }),
        __metadata("design:type", Array)
    ], PullRequest.prototype, "pullRequestTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "title", void 0);
    return PullRequest;
}(SpeakeasyBase));
export { PullRequest };
