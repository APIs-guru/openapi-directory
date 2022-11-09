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
var ListConnectorDefinitionVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionVersionsPathParams, _super);
    function ListConnectorDefinitionVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConnectorDefinitionId" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsPathParams.prototype, "connectorDefinitionId", void 0);
    return ListConnectorDefinitionVersionsPathParams;
}(SpeakeasyBase));
export { ListConnectorDefinitionVersionsPathParams };
var ListConnectorDefinitionVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionVersionsQueryParams, _super);
    function ListConnectorDefinitionVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsQueryParams.prototype, "nextToken", void 0);
    return ListConnectorDefinitionVersionsQueryParams;
}(SpeakeasyBase));
export { ListConnectorDefinitionVersionsQueryParams };
var ListConnectorDefinitionVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionVersionsHeaders, _super);
    function ListConnectorDefinitionVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListConnectorDefinitionVersionsHeaders;
}(SpeakeasyBase));
export { ListConnectorDefinitionVersionsHeaders };
var ListConnectorDefinitionVersionsRequest = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionVersionsRequest, _super);
    function ListConnectorDefinitionVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListConnectorDefinitionVersionsPathParams)
    ], ListConnectorDefinitionVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConnectorDefinitionVersionsQueryParams)
    ], ListConnectorDefinitionVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConnectorDefinitionVersionsHeaders)
    ], ListConnectorDefinitionVersionsRequest.prototype, "headers", void 0);
    return ListConnectorDefinitionVersionsRequest;
}(SpeakeasyBase));
export { ListConnectorDefinitionVersionsRequest };
var ListConnectorDefinitionVersionsResponse = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionVersionsResponse, _super);
    function ListConnectorDefinitionVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListConnectorDefinitionVersionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListConnectorDefinitionVersionsResponse)
    ], ListConnectorDefinitionVersionsResponse.prototype, "listConnectorDefinitionVersionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListConnectorDefinitionVersionsResponse.prototype, "statusCode", void 0);
    return ListConnectorDefinitionVersionsResponse;
}(SpeakeasyBase));
export { ListConnectorDefinitionVersionsResponse };
