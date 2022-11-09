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
var ListAlarmModelVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListAlarmModelVersionsPathParams, _super);
    function ListAlarmModelVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=alarmModelName" }),
        __metadata("design:type", String)
    ], ListAlarmModelVersionsPathParams.prototype, "alarmModelName", void 0);
    return ListAlarmModelVersionsPathParams;
}(SpeakeasyBase));
export { ListAlarmModelVersionsPathParams };
var ListAlarmModelVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListAlarmModelVersionsQueryParams, _super);
    function ListAlarmModelVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListAlarmModelVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAlarmModelVersionsQueryParams.prototype, "nextToken", void 0);
    return ListAlarmModelVersionsQueryParams;
}(SpeakeasyBase));
export { ListAlarmModelVersionsQueryParams };
var ListAlarmModelVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListAlarmModelVersionsHeaders, _super);
    function ListAlarmModelVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAlarmModelVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAlarmModelVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAlarmModelVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAlarmModelVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAlarmModelVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAlarmModelVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAlarmModelVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAlarmModelVersionsHeaders;
}(SpeakeasyBase));
export { ListAlarmModelVersionsHeaders };
var ListAlarmModelVersionsRequest = /** @class */ (function (_super) {
    __extends(ListAlarmModelVersionsRequest, _super);
    function ListAlarmModelVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListAlarmModelVersionsPathParams)
    ], ListAlarmModelVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAlarmModelVersionsQueryParams)
    ], ListAlarmModelVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAlarmModelVersionsHeaders)
    ], ListAlarmModelVersionsRequest.prototype, "headers", void 0);
    return ListAlarmModelVersionsRequest;
}(SpeakeasyBase));
export { ListAlarmModelVersionsRequest };
var ListAlarmModelVersionsResponse = /** @class */ (function (_super) {
    __extends(ListAlarmModelVersionsResponse, _super);
    function ListAlarmModelVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAlarmModelVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAlarmModelVersionsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAlarmModelVersionsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListAlarmModelVersionsResponse)
    ], ListAlarmModelVersionsResponse.prototype, "listAlarmModelVersionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAlarmModelVersionsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAlarmModelVersionsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAlarmModelVersionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAlarmModelVersionsResponse.prototype, "throttlingException", void 0);
    return ListAlarmModelVersionsResponse;
}(SpeakeasyBase));
export { ListAlarmModelVersionsResponse };
