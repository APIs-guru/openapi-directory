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
var BatchUpsertTableRowsPathParams = /** @class */ (function (_super) {
    __extends(BatchUpsertTableRowsPathParams, _super);
    function BatchUpsertTableRowsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], BatchUpsertTableRowsPathParams.prototype, "tableId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=workbookId" }),
        __metadata("design:type", String)
    ], BatchUpsertTableRowsPathParams.prototype, "workbookId", void 0);
    return BatchUpsertTableRowsPathParams;
}(SpeakeasyBase));
export { BatchUpsertTableRowsPathParams };
var BatchUpsertTableRowsHeaders = /** @class */ (function (_super) {
    __extends(BatchUpsertTableRowsHeaders, _super);
    function BatchUpsertTableRowsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchUpsertTableRowsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchUpsertTableRowsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchUpsertTableRowsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchUpsertTableRowsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchUpsertTableRowsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchUpsertTableRowsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchUpsertTableRowsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchUpsertTableRowsHeaders;
}(SpeakeasyBase));
export { BatchUpsertTableRowsHeaders };
var BatchUpsertTableRowsRequestBody = /** @class */ (function (_super) {
    __extends(BatchUpsertTableRowsRequestBody, _super);
    function BatchUpsertTableRowsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], BatchUpsertTableRowsRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=rowsToUpsert", elemType: shared.UpsertRowData }),
        __metadata("design:type", Array)
    ], BatchUpsertTableRowsRequestBody.prototype, "rowsToUpsert", void 0);
    return BatchUpsertTableRowsRequestBody;
}(SpeakeasyBase));
export { BatchUpsertTableRowsRequestBody };
var BatchUpsertTableRowsRequest = /** @class */ (function (_super) {
    __extends(BatchUpsertTableRowsRequest, _super);
    function BatchUpsertTableRowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchUpsertTableRowsPathParams)
    ], BatchUpsertTableRowsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BatchUpsertTableRowsHeaders)
    ], BatchUpsertTableRowsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchUpsertTableRowsRequestBody)
    ], BatchUpsertTableRowsRequest.prototype, "request", void 0);
    return BatchUpsertTableRowsRequest;
}(SpeakeasyBase));
export { BatchUpsertTableRowsRequest };
var BatchUpsertTableRowsResponse = /** @class */ (function (_super) {
    __extends(BatchUpsertTableRowsResponse, _super);
    function BatchUpsertTableRowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpsertTableRowsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchUpsertTableRowsResult)
    ], BatchUpsertTableRowsResponse.prototype, "batchUpsertTableRowsResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchUpsertTableRowsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpsertTableRowsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpsertTableRowsResponse.prototype, "requestTimeoutException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpsertTableRowsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpsertTableRowsResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpsertTableRowsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchUpsertTableRowsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpsertTableRowsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpsertTableRowsResponse.prototype, "validationException", void 0);
    return BatchUpsertTableRowsResponse;
}(SpeakeasyBase));
export { BatchUpsertTableRowsResponse };
