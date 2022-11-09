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
var BatchUpdateTableRowsPathParams = /** @class */ (function (_super) {
    __extends(BatchUpdateTableRowsPathParams, _super);
    function BatchUpdateTableRowsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], BatchUpdateTableRowsPathParams.prototype, "tableId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=workbookId" }),
        __metadata("design:type", String)
    ], BatchUpdateTableRowsPathParams.prototype, "workbookId", void 0);
    return BatchUpdateTableRowsPathParams;
}(SpeakeasyBase));
export { BatchUpdateTableRowsPathParams };
var BatchUpdateTableRowsHeaders = /** @class */ (function (_super) {
    __extends(BatchUpdateTableRowsHeaders, _super);
    function BatchUpdateTableRowsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchUpdateTableRowsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchUpdateTableRowsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchUpdateTableRowsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchUpdateTableRowsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchUpdateTableRowsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchUpdateTableRowsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchUpdateTableRowsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchUpdateTableRowsHeaders;
}(SpeakeasyBase));
export { BatchUpdateTableRowsHeaders };
var BatchUpdateTableRowsRequestBody = /** @class */ (function (_super) {
    __extends(BatchUpdateTableRowsRequestBody, _super);
    function BatchUpdateTableRowsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], BatchUpdateTableRowsRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=rowsToUpdate", elemType: shared.UpdateRowData }),
        __metadata("design:type", Array)
    ], BatchUpdateTableRowsRequestBody.prototype, "rowsToUpdate", void 0);
    return BatchUpdateTableRowsRequestBody;
}(SpeakeasyBase));
export { BatchUpdateTableRowsRequestBody };
var BatchUpdateTableRowsRequest = /** @class */ (function (_super) {
    __extends(BatchUpdateTableRowsRequest, _super);
    function BatchUpdateTableRowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchUpdateTableRowsPathParams)
    ], BatchUpdateTableRowsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BatchUpdateTableRowsHeaders)
    ], BatchUpdateTableRowsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchUpdateTableRowsRequestBody)
    ], BatchUpdateTableRowsRequest.prototype, "request", void 0);
    return BatchUpdateTableRowsRequest;
}(SpeakeasyBase));
export { BatchUpdateTableRowsRequest };
var BatchUpdateTableRowsResponse = /** @class */ (function (_super) {
    __extends(BatchUpdateTableRowsResponse, _super);
    function BatchUpdateTableRowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateTableRowsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchUpdateTableRowsResult)
    ], BatchUpdateTableRowsResponse.prototype, "batchUpdateTableRowsResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchUpdateTableRowsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateTableRowsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateTableRowsResponse.prototype, "requestTimeoutException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateTableRowsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateTableRowsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchUpdateTableRowsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateTableRowsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateTableRowsResponse.prototype, "validationException", void 0);
    return BatchUpdateTableRowsResponse;
}(SpeakeasyBase));
export { BatchUpdateTableRowsResponse };
