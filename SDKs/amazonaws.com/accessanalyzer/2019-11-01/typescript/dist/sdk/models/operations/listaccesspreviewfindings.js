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
var ListAccessPreviewFindingsPathParams = /** @class */ (function (_super) {
    __extends(ListAccessPreviewFindingsPathParams, _super);
    function ListAccessPreviewFindingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessPreviewId" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsPathParams.prototype, "accessPreviewId", void 0);
    return ListAccessPreviewFindingsPathParams;
}(SpeakeasyBase));
export { ListAccessPreviewFindingsPathParams };
var ListAccessPreviewFindingsQueryParams = /** @class */ (function (_super) {
    __extends(ListAccessPreviewFindingsQueryParams, _super);
    function ListAccessPreviewFindingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsQueryParams.prototype, "nextToken", void 0);
    return ListAccessPreviewFindingsQueryParams;
}(SpeakeasyBase));
export { ListAccessPreviewFindingsQueryParams };
var ListAccessPreviewFindingsHeaders = /** @class */ (function (_super) {
    __extends(ListAccessPreviewFindingsHeaders, _super);
    function ListAccessPreviewFindingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAccessPreviewFindingsHeaders;
}(SpeakeasyBase));
export { ListAccessPreviewFindingsHeaders };
var ListAccessPreviewFindingsRequestBody = /** @class */ (function (_super) {
    __extends(ListAccessPreviewFindingsRequestBody, _super);
    function ListAccessPreviewFindingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analyzerArn" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsRequestBody.prototype, "analyzerArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter", elemType: shared.Criterion }),
        __metadata("design:type", Map)
    ], ListAccessPreviewFindingsRequestBody.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListAccessPreviewFindingsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsRequestBody.prototype, "nextToken", void 0);
    return ListAccessPreviewFindingsRequestBody;
}(SpeakeasyBase));
export { ListAccessPreviewFindingsRequestBody };
var ListAccessPreviewFindingsRequest = /** @class */ (function (_super) {
    __extends(ListAccessPreviewFindingsRequest, _super);
    function ListAccessPreviewFindingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAccessPreviewFindingsPathParams)
    ], ListAccessPreviewFindingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAccessPreviewFindingsQueryParams)
    ], ListAccessPreviewFindingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAccessPreviewFindingsHeaders)
    ], ListAccessPreviewFindingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListAccessPreviewFindingsRequestBody)
    ], ListAccessPreviewFindingsRequest.prototype, "request", void 0);
    return ListAccessPreviewFindingsRequest;
}(SpeakeasyBase));
export { ListAccessPreviewFindingsRequest };
var ListAccessPreviewFindingsResponse = /** @class */ (function (_super) {
    __extends(ListAccessPreviewFindingsResponse, _super);
    function ListAccessPreviewFindingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccessPreviewFindingsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccessPreviewFindingsResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAccessPreviewFindingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccessPreviewFindingsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAccessPreviewFindingsResponse)
    ], ListAccessPreviewFindingsResponse.prototype, "listAccessPreviewFindingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccessPreviewFindingsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAccessPreviewFindingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccessPreviewFindingsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccessPreviewFindingsResponse.prototype, "validationException", void 0);
    return ListAccessPreviewFindingsResponse;
}(SpeakeasyBase));
export { ListAccessPreviewFindingsResponse };
