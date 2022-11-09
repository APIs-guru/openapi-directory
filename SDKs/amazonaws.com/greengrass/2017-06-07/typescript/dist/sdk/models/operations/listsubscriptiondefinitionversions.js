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
var ListSubscriptionDefinitionVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListSubscriptionDefinitionVersionsPathParams, _super);
    function ListSubscriptionDefinitionVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionDefinitionId" }),
        __metadata("design:type", String)
    ], ListSubscriptionDefinitionVersionsPathParams.prototype, "subscriptionDefinitionId", void 0);
    return ListSubscriptionDefinitionVersionsPathParams;
}(SpeakeasyBase));
export { ListSubscriptionDefinitionVersionsPathParams };
var ListSubscriptionDefinitionVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListSubscriptionDefinitionVersionsQueryParams, _super);
    function ListSubscriptionDefinitionVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListSubscriptionDefinitionVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListSubscriptionDefinitionVersionsQueryParams.prototype, "nextToken", void 0);
    return ListSubscriptionDefinitionVersionsQueryParams;
}(SpeakeasyBase));
export { ListSubscriptionDefinitionVersionsQueryParams };
var ListSubscriptionDefinitionVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListSubscriptionDefinitionVersionsHeaders, _super);
    function ListSubscriptionDefinitionVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListSubscriptionDefinitionVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListSubscriptionDefinitionVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListSubscriptionDefinitionVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListSubscriptionDefinitionVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListSubscriptionDefinitionVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListSubscriptionDefinitionVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListSubscriptionDefinitionVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListSubscriptionDefinitionVersionsHeaders;
}(SpeakeasyBase));
export { ListSubscriptionDefinitionVersionsHeaders };
var ListSubscriptionDefinitionVersionsRequest = /** @class */ (function (_super) {
    __extends(ListSubscriptionDefinitionVersionsRequest, _super);
    function ListSubscriptionDefinitionVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListSubscriptionDefinitionVersionsPathParams)
    ], ListSubscriptionDefinitionVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSubscriptionDefinitionVersionsQueryParams)
    ], ListSubscriptionDefinitionVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSubscriptionDefinitionVersionsHeaders)
    ], ListSubscriptionDefinitionVersionsRequest.prototype, "headers", void 0);
    return ListSubscriptionDefinitionVersionsRequest;
}(SpeakeasyBase));
export { ListSubscriptionDefinitionVersionsRequest };
var ListSubscriptionDefinitionVersionsResponse = /** @class */ (function (_super) {
    __extends(ListSubscriptionDefinitionVersionsResponse, _super);
    function ListSubscriptionDefinitionVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListSubscriptionDefinitionVersionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSubscriptionDefinitionVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListSubscriptionDefinitionVersionsResponse)
    ], ListSubscriptionDefinitionVersionsResponse.prototype, "listSubscriptionDefinitionVersionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSubscriptionDefinitionVersionsResponse.prototype, "statusCode", void 0);
    return ListSubscriptionDefinitionVersionsResponse;
}(SpeakeasyBase));
export { ListSubscriptionDefinitionVersionsResponse };
