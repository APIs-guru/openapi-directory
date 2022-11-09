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
var ListFunctionDefinitionVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListFunctionDefinitionVersionsPathParams, _super);
    function ListFunctionDefinitionVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionId" }),
        __metadata("design:type", String)
    ], ListFunctionDefinitionVersionsPathParams.prototype, "functionDefinitionId", void 0);
    return ListFunctionDefinitionVersionsPathParams;
}(SpeakeasyBase));
export { ListFunctionDefinitionVersionsPathParams };
var ListFunctionDefinitionVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListFunctionDefinitionVersionsQueryParams, _super);
    function ListFunctionDefinitionVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListFunctionDefinitionVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListFunctionDefinitionVersionsQueryParams.prototype, "nextToken", void 0);
    return ListFunctionDefinitionVersionsQueryParams;
}(SpeakeasyBase));
export { ListFunctionDefinitionVersionsQueryParams };
var ListFunctionDefinitionVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListFunctionDefinitionVersionsHeaders, _super);
    function ListFunctionDefinitionVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListFunctionDefinitionVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListFunctionDefinitionVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListFunctionDefinitionVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListFunctionDefinitionVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListFunctionDefinitionVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListFunctionDefinitionVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListFunctionDefinitionVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListFunctionDefinitionVersionsHeaders;
}(SpeakeasyBase));
export { ListFunctionDefinitionVersionsHeaders };
var ListFunctionDefinitionVersionsRequest = /** @class */ (function (_super) {
    __extends(ListFunctionDefinitionVersionsRequest, _super);
    function ListFunctionDefinitionVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionDefinitionVersionsPathParams)
    ], ListFunctionDefinitionVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionDefinitionVersionsQueryParams)
    ], ListFunctionDefinitionVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionDefinitionVersionsHeaders)
    ], ListFunctionDefinitionVersionsRequest.prototype, "headers", void 0);
    return ListFunctionDefinitionVersionsRequest;
}(SpeakeasyBase));
export { ListFunctionDefinitionVersionsRequest };
var ListFunctionDefinitionVersionsResponse = /** @class */ (function (_super) {
    __extends(ListFunctionDefinitionVersionsResponse, _super);
    function ListFunctionDefinitionVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFunctionDefinitionVersionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFunctionDefinitionVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListFunctionDefinitionVersionsResponse)
    ], ListFunctionDefinitionVersionsResponse.prototype, "listFunctionDefinitionVersionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListFunctionDefinitionVersionsResponse.prototype, "statusCode", void 0);
    return ListFunctionDefinitionVersionsResponse;
}(SpeakeasyBase));
export { ListFunctionDefinitionVersionsResponse };
