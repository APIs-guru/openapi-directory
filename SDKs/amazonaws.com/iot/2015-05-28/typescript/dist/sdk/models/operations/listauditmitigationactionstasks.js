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
export var ListAuditMitigationActionsTasksTaskStatusEnum;
(function (ListAuditMitigationActionsTasksTaskStatusEnum) {
    ListAuditMitigationActionsTasksTaskStatusEnum["InProgress"] = "IN_PROGRESS";
    ListAuditMitigationActionsTasksTaskStatusEnum["Completed"] = "COMPLETED";
    ListAuditMitigationActionsTasksTaskStatusEnum["Failed"] = "FAILED";
    ListAuditMitigationActionsTasksTaskStatusEnum["Canceled"] = "CANCELED";
})(ListAuditMitigationActionsTasksTaskStatusEnum || (ListAuditMitigationActionsTasksTaskStatusEnum = {}));
var ListAuditMitigationActionsTasksQueryParams = /** @class */ (function (_super) {
    __extends(ListAuditMitigationActionsTasksQueryParams, _super);
    function ListAuditMitigationActionsTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auditTaskId" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksQueryParams.prototype, "auditTaskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", Date)
    ], ListAuditMitigationActionsTasksQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=findingId" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksQueryParams.prototype, "findingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListAuditMitigationActionsTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", Date)
    ], ListAuditMitigationActionsTasksQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taskStatus" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksQueryParams.prototype, "taskStatus", void 0);
    return ListAuditMitigationActionsTasksQueryParams;
}(SpeakeasyBase));
export { ListAuditMitigationActionsTasksQueryParams };
var ListAuditMitigationActionsTasksHeaders = /** @class */ (function (_super) {
    __extends(ListAuditMitigationActionsTasksHeaders, _super);
    function ListAuditMitigationActionsTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAuditMitigationActionsTasksHeaders;
}(SpeakeasyBase));
export { ListAuditMitigationActionsTasksHeaders };
var ListAuditMitigationActionsTasksRequest = /** @class */ (function (_super) {
    __extends(ListAuditMitigationActionsTasksRequest, _super);
    function ListAuditMitigationActionsTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAuditMitigationActionsTasksQueryParams)
    ], ListAuditMitigationActionsTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAuditMitigationActionsTasksHeaders)
    ], ListAuditMitigationActionsTasksRequest.prototype, "headers", void 0);
    return ListAuditMitigationActionsTasksRequest;
}(SpeakeasyBase));
export { ListAuditMitigationActionsTasksRequest };
var ListAuditMitigationActionsTasksResponse = /** @class */ (function (_super) {
    __extends(ListAuditMitigationActionsTasksResponse, _super);
    function ListAuditMitigationActionsTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditMitigationActionsTasksResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditMitigationActionsTasksResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAuditMitigationActionsTasksResponse)
    ], ListAuditMitigationActionsTasksResponse.prototype, "listAuditMitigationActionsTasksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAuditMitigationActionsTasksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditMitigationActionsTasksResponse.prototype, "throttlingException", void 0);
    return ListAuditMitigationActionsTasksResponse;
}(SpeakeasyBase));
export { ListAuditMitigationActionsTasksResponse };
