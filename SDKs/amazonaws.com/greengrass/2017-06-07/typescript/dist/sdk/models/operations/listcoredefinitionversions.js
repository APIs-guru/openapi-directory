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
var ListCoreDefinitionVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListCoreDefinitionVersionsPathParams, _super);
    function ListCoreDefinitionVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CoreDefinitionId" }),
        __metadata("design:type", String)
    ], ListCoreDefinitionVersionsPathParams.prototype, "coreDefinitionId", void 0);
    return ListCoreDefinitionVersionsPathParams;
}(SpeakeasyBase));
export { ListCoreDefinitionVersionsPathParams };
var ListCoreDefinitionVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListCoreDefinitionVersionsQueryParams, _super);
    function ListCoreDefinitionVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListCoreDefinitionVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListCoreDefinitionVersionsQueryParams.prototype, "nextToken", void 0);
    return ListCoreDefinitionVersionsQueryParams;
}(SpeakeasyBase));
export { ListCoreDefinitionVersionsQueryParams };
var ListCoreDefinitionVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListCoreDefinitionVersionsHeaders, _super);
    function ListCoreDefinitionVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListCoreDefinitionVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListCoreDefinitionVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListCoreDefinitionVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListCoreDefinitionVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListCoreDefinitionVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListCoreDefinitionVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListCoreDefinitionVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListCoreDefinitionVersionsHeaders;
}(SpeakeasyBase));
export { ListCoreDefinitionVersionsHeaders };
var ListCoreDefinitionVersionsRequest = /** @class */ (function (_super) {
    __extends(ListCoreDefinitionVersionsRequest, _super);
    function ListCoreDefinitionVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListCoreDefinitionVersionsPathParams)
    ], ListCoreDefinitionVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCoreDefinitionVersionsQueryParams)
    ], ListCoreDefinitionVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCoreDefinitionVersionsHeaders)
    ], ListCoreDefinitionVersionsRequest.prototype, "headers", void 0);
    return ListCoreDefinitionVersionsRequest;
}(SpeakeasyBase));
export { ListCoreDefinitionVersionsRequest };
var ListCoreDefinitionVersionsResponse = /** @class */ (function (_super) {
    __extends(ListCoreDefinitionVersionsResponse, _super);
    function ListCoreDefinitionVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListCoreDefinitionVersionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCoreDefinitionVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListCoreDefinitionVersionsResponse)
    ], ListCoreDefinitionVersionsResponse.prototype, "listCoreDefinitionVersionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListCoreDefinitionVersionsResponse.prototype, "statusCode", void 0);
    return ListCoreDefinitionVersionsResponse;
}(SpeakeasyBase));
export { ListCoreDefinitionVersionsResponse };
