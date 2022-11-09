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
var DeleteDatasetContentPathParams = /** @class */ (function (_super) {
    __extends(DeleteDatasetContentPathParams, _super);
    function DeleteDatasetContentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=datasetName" }),
        __metadata("design:type", String)
    ], DeleteDatasetContentPathParams.prototype, "datasetName", void 0);
    return DeleteDatasetContentPathParams;
}(SpeakeasyBase));
export { DeleteDatasetContentPathParams };
var DeleteDatasetContentQueryParams = /** @class */ (function (_super) {
    __extends(DeleteDatasetContentQueryParams, _super);
    function DeleteDatasetContentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=versionId" }),
        __metadata("design:type", String)
    ], DeleteDatasetContentQueryParams.prototype, "versionId", void 0);
    return DeleteDatasetContentQueryParams;
}(SpeakeasyBase));
export { DeleteDatasetContentQueryParams };
var DeleteDatasetContentHeaders = /** @class */ (function (_super) {
    __extends(DeleteDatasetContentHeaders, _super);
    function DeleteDatasetContentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteDatasetContentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteDatasetContentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteDatasetContentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteDatasetContentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteDatasetContentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteDatasetContentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteDatasetContentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteDatasetContentHeaders;
}(SpeakeasyBase));
export { DeleteDatasetContentHeaders };
var DeleteDatasetContentRequest = /** @class */ (function (_super) {
    __extends(DeleteDatasetContentRequest, _super);
    function DeleteDatasetContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteDatasetContentPathParams)
    ], DeleteDatasetContentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteDatasetContentQueryParams)
    ], DeleteDatasetContentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteDatasetContentHeaders)
    ], DeleteDatasetContentRequest.prototype, "headers", void 0);
    return DeleteDatasetContentRequest;
}(SpeakeasyBase));
export { DeleteDatasetContentRequest };
var DeleteDatasetContentResponse = /** @class */ (function (_super) {
    __extends(DeleteDatasetContentResponse, _super);
    function DeleteDatasetContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteDatasetContentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDatasetContentResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDatasetContentResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDatasetContentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDatasetContentResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteDatasetContentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDatasetContentResponse.prototype, "throttlingException", void 0);
    return DeleteDatasetContentResponse;
}(SpeakeasyBase));
export { DeleteDatasetContentResponse };
