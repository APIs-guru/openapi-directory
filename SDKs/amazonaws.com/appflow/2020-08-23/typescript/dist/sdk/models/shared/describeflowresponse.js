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
import { DestinationFlowConfig } from "./destinationflowconfig";
import { FlowStatusEnum } from "./flowstatusenum";
import { ExecutionDetails } from "./executiondetails";
import { SourceFlowConfig } from "./sourceflowconfig";
import { Task } from "./task";
import { TriggerConfig } from "./triggerconfig";
var DescribeFlowResponse = /** @class */ (function (_super) {
    __extends(DescribeFlowResponse, _super);
    function DescribeFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], DescribeFlowResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], DescribeFlowResponse.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DescribeFlowResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationFlowConfigList", elemType: DestinationFlowConfig }),
        __metadata("design:type", Array)
    ], DescribeFlowResponse.prototype, "destinationFlowConfigList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowArn" }),
        __metadata("design:type", String)
    ], DescribeFlowResponse.prototype, "flowArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowName" }),
        __metadata("design:type", String)
    ], DescribeFlowResponse.prototype, "flowName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowStatus" }),
        __metadata("design:type", String)
    ], DescribeFlowResponse.prototype, "flowStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowStatusMessage" }),
        __metadata("design:type", String)
    ], DescribeFlowResponse.prototype, "flowStatusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsArn" }),
        __metadata("design:type", String)
    ], DescribeFlowResponse.prototype, "kmsArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRunExecutionDetails" }),
        __metadata("design:type", ExecutionDetails)
    ], DescribeFlowResponse.prototype, "lastRunExecutionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], DescribeFlowResponse.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedBy" }),
        __metadata("design:type", String)
    ], DescribeFlowResponse.prototype, "lastUpdatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceFlowConfig" }),
        __metadata("design:type", SourceFlowConfig)
    ], DescribeFlowResponse.prototype, "sourceFlowConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], DescribeFlowResponse.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tasks", elemType: Task }),
        __metadata("design:type", Array)
    ], DescribeFlowResponse.prototype, "tasks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerConfig" }),
        __metadata("design:type", TriggerConfig)
    ], DescribeFlowResponse.prototype, "triggerConfig", void 0);
    return DescribeFlowResponse;
}(SpeakeasyBase));
export { DescribeFlowResponse };
