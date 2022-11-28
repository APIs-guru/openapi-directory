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
export var ListAuditMitigationActionsExecutionsActionStatusEnum;
(function (ListAuditMitigationActionsExecutionsActionStatusEnum) {
    ListAuditMitigationActionsExecutionsActionStatusEnum["InProgress"] = "IN_PROGRESS";
    ListAuditMitigationActionsExecutionsActionStatusEnum["Completed"] = "COMPLETED";
    ListAuditMitigationActionsExecutionsActionStatusEnum["Failed"] = "FAILED";
    ListAuditMitigationActionsExecutionsActionStatusEnum["Canceled"] = "CANCELED";
    ListAuditMitigationActionsExecutionsActionStatusEnum["Skipped"] = "SKIPPED";
    ListAuditMitigationActionsExecutionsActionStatusEnum["Pending"] = "PENDING";
})(ListAuditMitigationActionsExecutionsActionStatusEnum || (ListAuditMitigationActionsExecutionsActionStatusEnum = {}));
var ListAuditMitigationActionsExecutionsQueryParams = /** @class */ (function (_super) {
    __extends(ListAuditMitigationActionsExecutionsQueryParams, _super);
    function ListAuditMitigationActionsExecutionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=actionStatus" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsQueryParams.prototype, "actionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=findingId" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsQueryParams.prototype, "findingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListAuditMitigationActionsExecutionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taskId" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsQueryParams.prototype, "taskId", void 0);
    return ListAuditMitigationActionsExecutionsQueryParams;
}(SpeakeasyBase));
export { ListAuditMitigationActionsExecutionsQueryParams };
var ListAuditMitigationActionsExecutionsHeaders = /** @class */ (function (_super) {
    __extends(ListAuditMitigationActionsExecutionsHeaders, _super);
    function ListAuditMitigationActionsExecutionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAuditMitigationActionsExecutionsHeaders;
}(SpeakeasyBase));
export { ListAuditMitigationActionsExecutionsHeaders };
var ListAuditMitigationActionsExecutionsRequest = /** @class */ (function (_super) {
    __extends(ListAuditMitigationActionsExecutionsRequest, _super);
    function ListAuditMitigationActionsExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAuditMitigationActionsExecutionsQueryParams)
    ], ListAuditMitigationActionsExecutionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAuditMitigationActionsExecutionsHeaders)
    ], ListAuditMitigationActionsExecutionsRequest.prototype, "headers", void 0);
    return ListAuditMitigationActionsExecutionsRequest;
}(SpeakeasyBase));
export { ListAuditMitigationActionsExecutionsRequest };
var ListAuditMitigationActionsExecutionsResponse = /** @class */ (function (_super) {
    __extends(ListAuditMitigationActionsExecutionsResponse, _super);
    function ListAuditMitigationActionsExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAuditMitigationActionsExecutionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditMitigationActionsExecutionsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditMitigationActionsExecutionsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAuditMitigationActionsExecutionsResponse)
    ], ListAuditMitigationActionsExecutionsResponse.prototype, "listAuditMitigationActionsExecutionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAuditMitigationActionsExecutionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAuditMitigationActionsExecutionsResponse.prototype, "throttlingException", void 0);
    return ListAuditMitigationActionsExecutionsResponse;
}(SpeakeasyBase));
export { ListAuditMitigationActionsExecutionsResponse };
