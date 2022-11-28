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
var ListDetectMitigationActionsExecutionsQueryParams = /** @class */ (function (_super) {
    __extends(ListDetectMitigationActionsExecutionsQueryParams, _super);
    function ListDetectMitigationActionsExecutionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", Date)
    ], ListDetectMitigationActionsExecutionsQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListDetectMitigationActionsExecutionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", Date)
    ], ListDetectMitigationActionsExecutionsQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taskId" }),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsQueryParams.prototype, "taskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thingName" }),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsQueryParams.prototype, "thingName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=violationId" }),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsQueryParams.prototype, "violationId", void 0);
    return ListDetectMitigationActionsExecutionsQueryParams;
}(SpeakeasyBase));
export { ListDetectMitigationActionsExecutionsQueryParams };
var ListDetectMitigationActionsExecutionsHeaders = /** @class */ (function (_super) {
    __extends(ListDetectMitigationActionsExecutionsHeaders, _super);
    function ListDetectMitigationActionsExecutionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListDetectMitigationActionsExecutionsHeaders;
}(SpeakeasyBase));
export { ListDetectMitigationActionsExecutionsHeaders };
var ListDetectMitigationActionsExecutionsRequest = /** @class */ (function (_super) {
    __extends(ListDetectMitigationActionsExecutionsRequest, _super);
    function ListDetectMitigationActionsExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDetectMitigationActionsExecutionsQueryParams)
    ], ListDetectMitigationActionsExecutionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDetectMitigationActionsExecutionsHeaders)
    ], ListDetectMitigationActionsExecutionsRequest.prototype, "headers", void 0);
    return ListDetectMitigationActionsExecutionsRequest;
}(SpeakeasyBase));
export { ListDetectMitigationActionsExecutionsRequest };
var ListDetectMitigationActionsExecutionsResponse = /** @class */ (function (_super) {
    __extends(ListDetectMitigationActionsExecutionsResponse, _super);
    function ListDetectMitigationActionsExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDetectMitigationActionsExecutionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDetectMitigationActionsExecutionsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDetectMitigationActionsExecutionsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDetectMitigationActionsExecutionsResponse)
    ], ListDetectMitigationActionsExecutionsResponse.prototype, "listDetectMitigationActionsExecutionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDetectMitigationActionsExecutionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDetectMitigationActionsExecutionsResponse.prototype, "throttlingException", void 0);
    return ListDetectMitigationActionsExecutionsResponse;
}(SpeakeasyBase));
export { ListDetectMitigationActionsExecutionsResponse };
