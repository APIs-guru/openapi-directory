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
import * as shared from "../shared";
import { DetailTypeEnum } from "./detailtypeenum";
import { NotificationRuleStatusEnum } from "./notificationrulestatusenum";
var DescribeNotificationRuleResult = /** @class */ (function (_super) {
    __extends(DescribeNotificationRuleResult, _super);
    function DescribeNotificationRuleResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], DescribeNotificationRuleResult.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedBy" }),
        __metadata("design:type", String)
    ], DescribeNotificationRuleResult.prototype, "createdBy", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedTimestamp" }),
        __metadata("design:type", Date)
    ], DescribeNotificationRuleResult.prototype, "createdTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=DetailType" }),
        __metadata("design:type", String)
    ], DescribeNotificationRuleResult.prototype, "detailType", void 0);
    __decorate([
        Metadata({ data: "json, name=EventTypes", elemType: shared.EventTypeSummary }),
        __metadata("design:type", Array)
    ], DescribeNotificationRuleResult.prototype, "eventTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=LastModifiedTimestamp" }),
        __metadata("design:type", Date)
    ], DescribeNotificationRuleResult.prototype, "lastModifiedTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], DescribeNotificationRuleResult.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=Resource" }),
        __metadata("design:type", String)
    ], DescribeNotificationRuleResult.prototype, "resource", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DescribeNotificationRuleResult.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], DescribeNotificationRuleResult.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=Targets", elemType: shared.TargetSummary }),
        __metadata("design:type", Array)
    ], DescribeNotificationRuleResult.prototype, "targets", void 0);
    return DescribeNotificationRuleResult;
}(SpeakeasyBase));
export { DescribeNotificationRuleResult };
