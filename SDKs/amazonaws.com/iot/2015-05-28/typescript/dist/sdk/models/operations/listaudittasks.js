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
import * as shared from "../shared";
export var ListAuditTasksTaskStatusEnum;
(function (ListAuditTasksTaskStatusEnum) {
    ListAuditTasksTaskStatusEnum["InProgress"] = "IN_PROGRESS";
    ListAuditTasksTaskStatusEnum["Completed"] = "COMPLETED";
    ListAuditTasksTaskStatusEnum["Failed"] = "FAILED";
    ListAuditTasksTaskStatusEnum["Canceled"] = "CANCELED";
})(ListAuditTasksTaskStatusEnum || (ListAuditTasksTaskStatusEnum = {}));
export var ListAuditTasksTaskTypeEnum;
(function (ListAuditTasksTaskTypeEnum) {
    ListAuditTasksTaskTypeEnum["OnDemandAuditTask"] = "ON_DEMAND_AUDIT_TASK";
    ListAuditTasksTaskTypeEnum["ScheduledAuditTask"] = "SCHEDULED_AUDIT_TASK";
})(ListAuditTasksTaskTypeEnum || (ListAuditTasksTaskTypeEnum = {}));
var ListAuditTasksQueryParams = /** @class */ (function (_super) {
    __extends(ListAuditTasksQueryParams, _super);
    function ListAuditTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", Date)
    ], ListAuditTasksQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListAuditTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAuditTasksQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", Date)
    ], ListAuditTasksQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taskStatus" }),
        __metadata("design:type", String)
    ], ListAuditTasksQueryParams.prototype, "taskStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taskType" }),
        __metadata("design:type", String)
    ], ListAuditTasksQueryParams.prototype, "taskType", void 0);
    return ListAuditTasksQueryParams;
}(SpeakeasyBase));
export { ListAuditTasksQueryParams };
var ListAuditTasksHeaders = /** @class */ (function (_super) {
    __extends(ListAuditTasksHeaders, _super);
    function ListAuditTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAuditTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAuditTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAuditTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAuditTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAuditTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAuditTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAuditTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAuditTasksHeaders;
}(SpeakeasyBase));
export { ListAuditTasksHeaders };
var ListAuditTasksRequest = /** @class */ (function (_super) {
    __extends(ListAuditTasksRequest, _super);
    function ListAuditTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAuditTasksQueryParams)
    ], ListAuditTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAuditTasksHeaders)
    ], ListAuditTasksRequest.prototype, "headers", void 0);
    return ListAuditTasksRequest;
}(SpeakeasyBase));
export { ListAuditTasksRequest };
var ListAuditTasksResponse = /** @class */ (function (_super) {
    __extends(ListAuditTasksResponse, _super);
    function ListAuditTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAuditTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditTasksResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditTasksResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAuditTasksResponse)
    ], ListAuditTasksResponse.prototype, "listAuditTasksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAuditTasksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditTasksResponse.prototype, "throttlingException", void 0);
    return ListAuditTasksResponse;
}(SpeakeasyBase));
export { ListAuditTasksResponse };
