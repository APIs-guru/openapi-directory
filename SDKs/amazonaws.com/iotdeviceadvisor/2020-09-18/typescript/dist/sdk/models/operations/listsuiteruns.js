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
var ListSuiteRunsQueryParams = /** @class */ (function (_super) {
    __extends(ListSuiteRunsQueryParams, _super);
    function ListSuiteRunsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListSuiteRunsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListSuiteRunsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=suiteDefinitionId" }),
        __metadata("design:type", String)
    ], ListSuiteRunsQueryParams.prototype, "suiteDefinitionId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=suiteDefinitionVersion" }),
        __metadata("design:type", String)
    ], ListSuiteRunsQueryParams.prototype, "suiteDefinitionVersion", void 0);
    return ListSuiteRunsQueryParams;
}(SpeakeasyBase));
export { ListSuiteRunsQueryParams };
var ListSuiteRunsHeaders = /** @class */ (function (_super) {
    __extends(ListSuiteRunsHeaders, _super);
    function ListSuiteRunsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListSuiteRunsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListSuiteRunsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListSuiteRunsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListSuiteRunsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListSuiteRunsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListSuiteRunsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListSuiteRunsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListSuiteRunsHeaders;
}(SpeakeasyBase));
export { ListSuiteRunsHeaders };
var ListSuiteRunsRequest = /** @class */ (function (_super) {
    __extends(ListSuiteRunsRequest, _super);
    function ListSuiteRunsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListSuiteRunsQueryParams)
    ], ListSuiteRunsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSuiteRunsHeaders)
    ], ListSuiteRunsRequest.prototype, "headers", void 0);
    return ListSuiteRunsRequest;
}(SpeakeasyBase));
export { ListSuiteRunsRequest };
var ListSuiteRunsResponse = /** @class */ (function (_super) {
    __extends(ListSuiteRunsResponse, _super);
    function ListSuiteRunsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSuiteRunsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListSuiteRunsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListSuiteRunsResponse)
    ], ListSuiteRunsResponse.prototype, "listSuiteRunsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSuiteRunsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListSuiteRunsResponse.prototype, "validationException", void 0);
    return ListSuiteRunsResponse;
}(SpeakeasyBase));
export { ListSuiteRunsResponse };
