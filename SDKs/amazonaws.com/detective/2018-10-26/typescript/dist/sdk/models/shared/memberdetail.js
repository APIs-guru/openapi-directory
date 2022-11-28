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
import { MemberDisabledReasonEnum } from "./memberdisabledreasonenum";
import { MemberStatusEnum } from "./memberstatusenum";
// MemberDetail
/**
 * Details about a member account that was invited to contribute to a behavior graph.
**/
var MemberDetail = /** @class */ (function (_super) {
    __extends(MemberDetail, _super);
    function MemberDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], MemberDetail.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdministratorId" }),
        __metadata("design:type", String)
    ], MemberDetail.prototype, "administratorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisabledReason" }),
        __metadata("design:type", String)
    ], MemberDetail.prototype, "disabledReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailAddress" }),
        __metadata("design:type", String)
    ], MemberDetail.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GraphArn" }),
        __metadata("design:type", String)
    ], MemberDetail.prototype, "graphArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvitedTime" }),
        __metadata("design:type", Date)
    ], MemberDetail.prototype, "invitedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterId" }),
        __metadata("design:type", String)
    ], MemberDetail.prototype, "masterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PercentOfGraphUtilization" }),
        __metadata("design:type", Number)
    ], MemberDetail.prototype, "percentOfGraphUtilization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PercentOfGraphUtilizationUpdatedTime" }),
        __metadata("design:type", Date)
    ], MemberDetail.prototype, "percentOfGraphUtilizationUpdatedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], MemberDetail.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedTime" }),
        __metadata("design:type", Date)
    ], MemberDetail.prototype, "updatedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeUsageInBytes" }),
        __metadata("design:type", Number)
    ], MemberDetail.prototype, "volumeUsageInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeUsageUpdatedTime" }),
        __metadata("design:type", Date)
    ], MemberDetail.prototype, "volumeUsageUpdatedTime", void 0);
    return MemberDetail;
}(SpeakeasyBase));
export { MemberDetail };
