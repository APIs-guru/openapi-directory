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
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TaskSchedule } from "./taskschedule";
import { TaskStatusEnum } from "./taskstatusenum";
// DescribeTaskResponse
/**
 * DescribeTaskResponse
**/
var DescribeTaskResponse = /** @class */ (function (_super) {
    __extends(DescribeTaskResponse, _super);
    function DescribeTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchLogGroupArn" }),
        __metadata("design:type", String)
    ], DescribeTaskResponse.prototype, "cloudWatchLogGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeTaskResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentTaskExecutionArn" }),
        __metadata("design:type", String)
    ], DescribeTaskResponse.prototype, "currentTaskExecutionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationLocationArn" }),
        __metadata("design:type", String)
    ], DescribeTaskResponse.prototype, "destinationLocationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationNetworkInterfaceArns" }),
        __metadata("design:type", Array)
    ], DescribeTaskResponse.prototype, "destinationNetworkInterfaceArns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorCode" }),
        __metadata("design:type", String)
    ], DescribeTaskResponse.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorDetail" }),
        __metadata("design:type", String)
    ], DescribeTaskResponse.prototype, "errorDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Excludes", elemType: FilterRule }),
        __metadata("design:type", Array)
    ], DescribeTaskResponse.prototype, "excludes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Includes", elemType: FilterRule }),
        __metadata("design:type", Array)
    ], DescribeTaskResponse.prototype, "includes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], DescribeTaskResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Options" }),
        __metadata("design:type", Options)
    ], DescribeTaskResponse.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", TaskSchedule)
    ], DescribeTaskResponse.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceLocationArn" }),
        __metadata("design:type", String)
    ], DescribeTaskResponse.prototype, "sourceLocationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceNetworkInterfaceArns" }),
        __metadata("design:type", Array)
    ], DescribeTaskResponse.prototype, "sourceNetworkInterfaceArns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DescribeTaskResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskArn" }),
        __metadata("design:type", String)
    ], DescribeTaskResponse.prototype, "taskArn", void 0);
    return DescribeTaskResponse;
}(SpeakeasyBase));
export { DescribeTaskResponse };
