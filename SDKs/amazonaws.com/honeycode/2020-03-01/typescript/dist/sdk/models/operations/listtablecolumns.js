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
var ListTableColumnsPathParams = /** @class */ (function (_super) {
    __extends(ListTableColumnsPathParams, _super);
    function ListTableColumnsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], ListTableColumnsPathParams.prototype, "tableId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=workbookId" }),
        __metadata("design:type", String)
    ], ListTableColumnsPathParams.prototype, "workbookId", void 0);
    return ListTableColumnsPathParams;
}(SpeakeasyBase));
export { ListTableColumnsPathParams };
var ListTableColumnsQueryParams = /** @class */ (function (_super) {
    __extends(ListTableColumnsQueryParams, _super);
    function ListTableColumnsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListTableColumnsQueryParams.prototype, "nextToken", void 0);
    return ListTableColumnsQueryParams;
}(SpeakeasyBase));
export { ListTableColumnsQueryParams };
var ListTableColumnsHeaders = /** @class */ (function (_super) {
    __extends(ListTableColumnsHeaders, _super);
    function ListTableColumnsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTableColumnsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTableColumnsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTableColumnsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTableColumnsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTableColumnsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTableColumnsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTableColumnsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListTableColumnsHeaders;
}(SpeakeasyBase));
export { ListTableColumnsHeaders };
var ListTableColumnsRequest = /** @class */ (function (_super) {
    __extends(ListTableColumnsRequest, _super);
    function ListTableColumnsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListTableColumnsPathParams)
    ], ListTableColumnsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTableColumnsQueryParams)
    ], ListTableColumnsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTableColumnsHeaders)
    ], ListTableColumnsRequest.prototype, "headers", void 0);
    return ListTableColumnsRequest;
}(SpeakeasyBase));
export { ListTableColumnsRequest };
var ListTableColumnsResponse = /** @class */ (function (_super) {
    __extends(ListTableColumnsResponse, _super);
    function ListTableColumnsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTableColumnsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTableColumnsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTableColumnsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTableColumnsResult)
    ], ListTableColumnsResponse.prototype, "listTableColumnsResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTableColumnsResponse.prototype, "requestTimeoutException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTableColumnsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTableColumnsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTableColumnsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTableColumnsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTableColumnsResponse.prototype, "validationException", void 0);
    return ListTableColumnsResponse;
}(SpeakeasyBase));
export { ListTableColumnsResponse };
