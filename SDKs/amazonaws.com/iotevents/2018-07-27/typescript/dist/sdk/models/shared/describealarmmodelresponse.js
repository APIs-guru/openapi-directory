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
import { AlarmCapabilities } from "./alarmcapabilities";
import { AlarmEventActions } from "./alarmeventactions";
import { AlarmNotification } from "./alarmnotification";
import { AlarmRule } from "./alarmrule";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";
var DescribeAlarmModelResponse = /** @class */ (function (_super) {
    __extends(DescribeAlarmModelResponse, _super);
    function DescribeAlarmModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alarmCapabilities" }),
        __metadata("design:type", AlarmCapabilities)
    ], DescribeAlarmModelResponse.prototype, "alarmCapabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmEventActions" }),
        __metadata("design:type", AlarmEventActions)
    ], DescribeAlarmModelResponse.prototype, "alarmEventActions", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmModelArn" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelResponse.prototype, "alarmModelArn", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmModelDescription" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelResponse.prototype, "alarmModelDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmModelName" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelResponse.prototype, "alarmModelName", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmModelVersion" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelResponse.prototype, "alarmModelVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmNotification" }),
        __metadata("design:type", AlarmNotification)
    ], DescribeAlarmModelResponse.prototype, "alarmNotification", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmRule" }),
        __metadata("design:type", AlarmRule)
    ], DescribeAlarmModelResponse.prototype, "alarmRule", void 0);
    __decorate([
        Metadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Date)
    ], DescribeAlarmModelResponse.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelResponse.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdateTime" }),
        __metadata("design:type", Date)
    ], DescribeAlarmModelResponse.prototype, "lastUpdateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelResponse.prototype, "roleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=severity" }),
        __metadata("design:type", Number)
    ], DescribeAlarmModelResponse.prototype, "severity", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelResponse.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], DescribeAlarmModelResponse.prototype, "statusMessage", void 0);
    return DescribeAlarmModelResponse;
}(SpeakeasyBase));
export { DescribeAlarmModelResponse };
