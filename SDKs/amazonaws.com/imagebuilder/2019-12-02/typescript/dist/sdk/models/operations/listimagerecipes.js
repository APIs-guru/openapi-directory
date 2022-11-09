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
var ListImageRecipesQueryParams = /** @class */ (function (_super) {
    __extends(ListImageRecipesQueryParams, _super);
    function ListImageRecipesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListImageRecipesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListImageRecipesQueryParams.prototype, "nextToken", void 0);
    return ListImageRecipesQueryParams;
}(SpeakeasyBase));
export { ListImageRecipesQueryParams };
var ListImageRecipesHeaders = /** @class */ (function (_super) {
    __extends(ListImageRecipesHeaders, _super);
    function ListImageRecipesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListImageRecipesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListImageRecipesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListImageRecipesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListImageRecipesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListImageRecipesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListImageRecipesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListImageRecipesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListImageRecipesHeaders;
}(SpeakeasyBase));
export { ListImageRecipesHeaders };
export var ListImageRecipesRequestBodyOwnerEnum;
(function (ListImageRecipesRequestBodyOwnerEnum) {
    ListImageRecipesRequestBodyOwnerEnum["Self"] = "Self";
    ListImageRecipesRequestBodyOwnerEnum["Shared"] = "Shared";
    ListImageRecipesRequestBodyOwnerEnum["Amazon"] = "Amazon";
})(ListImageRecipesRequestBodyOwnerEnum || (ListImageRecipesRequestBodyOwnerEnum = {}));
var ListImageRecipesRequestBody = /** @class */ (function (_super) {
    __extends(ListImageRecipesRequestBody, _super);
    function ListImageRecipesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=filters", elemType: shared.Filter }),
        __metadata("design:type", Array)
    ], ListImageRecipesRequestBody.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListImageRecipesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListImageRecipesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], ListImageRecipesRequestBody.prototype, "owner", void 0);
    return ListImageRecipesRequestBody;
}(SpeakeasyBase));
export { ListImageRecipesRequestBody };
var ListImageRecipesRequest = /** @class */ (function (_super) {
    __extends(ListImageRecipesRequest, _super);
    function ListImageRecipesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListImageRecipesQueryParams)
    ], ListImageRecipesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListImageRecipesHeaders)
    ], ListImageRecipesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListImageRecipesRequestBody)
    ], ListImageRecipesRequest.prototype, "request", void 0);
    return ListImageRecipesRequest;
}(SpeakeasyBase));
export { ListImageRecipesRequest };
var ListImageRecipesResponse = /** @class */ (function (_super) {
    __extends(ListImageRecipesResponse, _super);
    function ListImageRecipesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImageRecipesResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImageRecipesResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListImageRecipesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImageRecipesResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImageRecipesResponse.prototype, "invalidPaginationTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImageRecipesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListImageRecipesResponse)
    ], ListImageRecipesResponse.prototype, "listImageRecipesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImageRecipesResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImageRecipesResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListImageRecipesResponse.prototype, "statusCode", void 0);
    return ListImageRecipesResponse;
}(SpeakeasyBase));
export { ListImageRecipesResponse };
