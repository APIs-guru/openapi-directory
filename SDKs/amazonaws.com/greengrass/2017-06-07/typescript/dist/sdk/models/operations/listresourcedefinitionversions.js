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
var ListResourceDefinitionVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListResourceDefinitionVersionsPathParams, _super);
    function ListResourceDefinitionVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceDefinitionId" }),
        __metadata("design:type", String)
    ], ListResourceDefinitionVersionsPathParams.prototype, "resourceDefinitionId", void 0);
    return ListResourceDefinitionVersionsPathParams;
}(SpeakeasyBase));
export { ListResourceDefinitionVersionsPathParams };
var ListResourceDefinitionVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListResourceDefinitionVersionsQueryParams, _super);
    function ListResourceDefinitionVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListResourceDefinitionVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListResourceDefinitionVersionsQueryParams.prototype, "nextToken", void 0);
    return ListResourceDefinitionVersionsQueryParams;
}(SpeakeasyBase));
export { ListResourceDefinitionVersionsQueryParams };
var ListResourceDefinitionVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListResourceDefinitionVersionsHeaders, _super);
    function ListResourceDefinitionVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListResourceDefinitionVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListResourceDefinitionVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListResourceDefinitionVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListResourceDefinitionVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListResourceDefinitionVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListResourceDefinitionVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListResourceDefinitionVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListResourceDefinitionVersionsHeaders;
}(SpeakeasyBase));
export { ListResourceDefinitionVersionsHeaders };
var ListResourceDefinitionVersionsRequest = /** @class */ (function (_super) {
    __extends(ListResourceDefinitionVersionsRequest, _super);
    function ListResourceDefinitionVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListResourceDefinitionVersionsPathParams)
    ], ListResourceDefinitionVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListResourceDefinitionVersionsQueryParams)
    ], ListResourceDefinitionVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListResourceDefinitionVersionsHeaders)
    ], ListResourceDefinitionVersionsRequest.prototype, "headers", void 0);
    return ListResourceDefinitionVersionsRequest;
}(SpeakeasyBase));
export { ListResourceDefinitionVersionsRequest };
var ListResourceDefinitionVersionsResponse = /** @class */ (function (_super) {
    __extends(ListResourceDefinitionVersionsResponse, _super);
    function ListResourceDefinitionVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListResourceDefinitionVersionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListResourceDefinitionVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListResourceDefinitionVersionsResponse)
    ], ListResourceDefinitionVersionsResponse.prototype, "listResourceDefinitionVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListResourceDefinitionVersionsResponse.prototype, "statusCode", void 0);
    return ListResourceDefinitionVersionsResponse;
}(SpeakeasyBase));
export { ListResourceDefinitionVersionsResponse };
