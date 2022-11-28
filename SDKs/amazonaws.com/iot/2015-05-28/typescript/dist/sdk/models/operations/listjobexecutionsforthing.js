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
var ListJobExecutionsForThingPathParams = /** @class */ (function (_super) {
    __extends(ListJobExecutionsForThingPathParams, _super);
    function ListJobExecutionsForThingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingName" }),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingPathParams.prototype, "thingName", void 0);
    return ListJobExecutionsForThingPathParams;
}(SpeakeasyBase));
export { ListJobExecutionsForThingPathParams };
export var ListJobExecutionsForThingStatusEnum;
(function (ListJobExecutionsForThingStatusEnum) {
    ListJobExecutionsForThingStatusEnum["Queued"] = "QUEUED";
    ListJobExecutionsForThingStatusEnum["InProgress"] = "IN_PROGRESS";
    ListJobExecutionsForThingStatusEnum["Succeeded"] = "SUCCEEDED";
    ListJobExecutionsForThingStatusEnum["Failed"] = "FAILED";
    ListJobExecutionsForThingStatusEnum["TimedOut"] = "TIMED_OUT";
    ListJobExecutionsForThingStatusEnum["Rejected"] = "REJECTED";
    ListJobExecutionsForThingStatusEnum["Removed"] = "REMOVED";
    ListJobExecutionsForThingStatusEnum["Canceled"] = "CANCELED";
})(ListJobExecutionsForThingStatusEnum || (ListJobExecutionsForThingStatusEnum = {}));
var ListJobExecutionsForThingQueryParams = /** @class */ (function (_super) {
    __extends(ListJobExecutionsForThingQueryParams, _super);
    function ListJobExecutionsForThingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListJobExecutionsForThingQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=namespaceId" }),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingQueryParams.prototype, "namespaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingQueryParams.prototype, "status", void 0);
    return ListJobExecutionsForThingQueryParams;
}(SpeakeasyBase));
export { ListJobExecutionsForThingQueryParams };
var ListJobExecutionsForThingHeaders = /** @class */ (function (_super) {
    __extends(ListJobExecutionsForThingHeaders, _super);
    function ListJobExecutionsForThingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListJobExecutionsForThingHeaders;
}(SpeakeasyBase));
export { ListJobExecutionsForThingHeaders };
var ListJobExecutionsForThingRequest = /** @class */ (function (_super) {
    __extends(ListJobExecutionsForThingRequest, _super);
    function ListJobExecutionsForThingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListJobExecutionsForThingPathParams)
    ], ListJobExecutionsForThingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListJobExecutionsForThingQueryParams)
    ], ListJobExecutionsForThingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListJobExecutionsForThingHeaders)
    ], ListJobExecutionsForThingRequest.prototype, "headers", void 0);
    return ListJobExecutionsForThingRequest;
}(SpeakeasyBase));
export { ListJobExecutionsForThingRequest };
var ListJobExecutionsForThingResponse = /** @class */ (function (_super) {
    __extends(ListJobExecutionsForThingResponse, _super);
    function ListJobExecutionsForThingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListJobExecutionsForThingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobExecutionsForThingResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListJobExecutionsForThingResponse)
    ], ListJobExecutionsForThingResponse.prototype, "listJobExecutionsForThingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobExecutionsForThingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobExecutionsForThingResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListJobExecutionsForThingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobExecutionsForThingResponse.prototype, "throttlingException", void 0);
    return ListJobExecutionsForThingResponse;
}(SpeakeasyBase));
export { ListJobExecutionsForThingResponse };
