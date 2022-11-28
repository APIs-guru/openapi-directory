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
var BatchCreateTableRowsPathParams = /** @class */ (function (_super) {
    __extends(BatchCreateTableRowsPathParams, _super);
    function BatchCreateTableRowsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], BatchCreateTableRowsPathParams.prototype, "tableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workbookId" }),
        __metadata("design:type", String)
    ], BatchCreateTableRowsPathParams.prototype, "workbookId", void 0);
    return BatchCreateTableRowsPathParams;
}(SpeakeasyBase));
export { BatchCreateTableRowsPathParams };
var BatchCreateTableRowsHeaders = /** @class */ (function (_super) {
    __extends(BatchCreateTableRowsHeaders, _super);
    function BatchCreateTableRowsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchCreateTableRowsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchCreateTableRowsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchCreateTableRowsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchCreateTableRowsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchCreateTableRowsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchCreateTableRowsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchCreateTableRowsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchCreateTableRowsHeaders;
}(SpeakeasyBase));
export { BatchCreateTableRowsHeaders };
var BatchCreateTableRowsRequestBody = /** @class */ (function (_super) {
    __extends(BatchCreateTableRowsRequestBody, _super);
    function BatchCreateTableRowsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], BatchCreateTableRowsRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowsToCreate", elemType: shared.CreateRowData }),
        __metadata("design:type", Array)
    ], BatchCreateTableRowsRequestBody.prototype, "rowsToCreate", void 0);
    return BatchCreateTableRowsRequestBody;
}(SpeakeasyBase));
export { BatchCreateTableRowsRequestBody };
var BatchCreateTableRowsRequest = /** @class */ (function (_super) {
    __extends(BatchCreateTableRowsRequest, _super);
    function BatchCreateTableRowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchCreateTableRowsPathParams)
    ], BatchCreateTableRowsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchCreateTableRowsHeaders)
    ], BatchCreateTableRowsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchCreateTableRowsRequestBody)
    ], BatchCreateTableRowsRequest.prototype, "request", void 0);
    return BatchCreateTableRowsRequest;
}(SpeakeasyBase));
export { BatchCreateTableRowsRequest };
var BatchCreateTableRowsResponse = /** @class */ (function (_super) {
    __extends(BatchCreateTableRowsResponse, _super);
    function BatchCreateTableRowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchCreateTableRowsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchCreateTableRowsResult)
    ], BatchCreateTableRowsResponse.prototype, "batchCreateTableRowsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchCreateTableRowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchCreateTableRowsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchCreateTableRowsResponse.prototype, "requestTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchCreateTableRowsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchCreateTableRowsResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchCreateTableRowsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchCreateTableRowsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchCreateTableRowsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchCreateTableRowsResponse.prototype, "validationException", void 0);
    return BatchCreateTableRowsResponse;
}(SpeakeasyBase));
export { BatchCreateTableRowsResponse };
