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
var DescribeTableDataImportJobPathParams = /** @class */ (function (_super) {
    __extends(DescribeTableDataImportJobPathParams, _super);
    function DescribeTableDataImportJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DescribeTableDataImportJobPathParams.prototype, "jobId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], DescribeTableDataImportJobPathParams.prototype, "tableId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=workbookId" }),
        __metadata("design:type", String)
    ], DescribeTableDataImportJobPathParams.prototype, "workbookId", void 0);
    return DescribeTableDataImportJobPathParams;
}(SpeakeasyBase));
export { DescribeTableDataImportJobPathParams };
var DescribeTableDataImportJobHeaders = /** @class */ (function (_super) {
    __extends(DescribeTableDataImportJobHeaders, _super);
    function DescribeTableDataImportJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeTableDataImportJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeTableDataImportJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeTableDataImportJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeTableDataImportJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeTableDataImportJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeTableDataImportJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeTableDataImportJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeTableDataImportJobHeaders;
}(SpeakeasyBase));
export { DescribeTableDataImportJobHeaders };
var DescribeTableDataImportJobRequest = /** @class */ (function (_super) {
    __extends(DescribeTableDataImportJobRequest, _super);
    function DescribeTableDataImportJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeTableDataImportJobPathParams)
    ], DescribeTableDataImportJobRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeTableDataImportJobHeaders)
    ], DescribeTableDataImportJobRequest.prototype, "headers", void 0);
    return DescribeTableDataImportJobRequest;
}(SpeakeasyBase));
export { DescribeTableDataImportJobRequest };
var DescribeTableDataImportJobResponse = /** @class */ (function (_super) {
    __extends(DescribeTableDataImportJobResponse, _super);
    function DescribeTableDataImportJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTableDataImportJobResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeTableDataImportJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeTableDataImportJobResult)
    ], DescribeTableDataImportJobResponse.prototype, "describeTableDataImportJobResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTableDataImportJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTableDataImportJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTableDataImportJobResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeTableDataImportJobResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTableDataImportJobResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTableDataImportJobResponse.prototype, "validationException", void 0);
    return DescribeTableDataImportJobResponse;
}(SpeakeasyBase));
export { DescribeTableDataImportJobResponse };
