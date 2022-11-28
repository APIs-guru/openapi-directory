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
var ListContainerRecipesQueryParams = /** @class */ (function (_super) {
    __extends(ListContainerRecipesQueryParams, _super);
    function ListContainerRecipesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListContainerRecipesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListContainerRecipesQueryParams.prototype, "nextToken", void 0);
    return ListContainerRecipesQueryParams;
}(SpeakeasyBase));
export { ListContainerRecipesQueryParams };
var ListContainerRecipesHeaders = /** @class */ (function (_super) {
    __extends(ListContainerRecipesHeaders, _super);
    function ListContainerRecipesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListContainerRecipesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListContainerRecipesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListContainerRecipesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListContainerRecipesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListContainerRecipesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListContainerRecipesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListContainerRecipesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListContainerRecipesHeaders;
}(SpeakeasyBase));
export { ListContainerRecipesHeaders };
export var ListContainerRecipesRequestBodyOwnerEnum;
(function (ListContainerRecipesRequestBodyOwnerEnum) {
    ListContainerRecipesRequestBodyOwnerEnum["Self"] = "Self";
    ListContainerRecipesRequestBodyOwnerEnum["Shared"] = "Shared";
    ListContainerRecipesRequestBodyOwnerEnum["Amazon"] = "Amazon";
})(ListContainerRecipesRequestBodyOwnerEnum || (ListContainerRecipesRequestBodyOwnerEnum = {}));
var ListContainerRecipesRequestBody = /** @class */ (function (_super) {
    __extends(ListContainerRecipesRequestBody, _super);
    function ListContainerRecipesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.Filter }),
        __metadata("design:type", Array)
    ], ListContainerRecipesRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListContainerRecipesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListContainerRecipesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], ListContainerRecipesRequestBody.prototype, "owner", void 0);
    return ListContainerRecipesRequestBody;
}(SpeakeasyBase));
export { ListContainerRecipesRequestBody };
var ListContainerRecipesRequest = /** @class */ (function (_super) {
    __extends(ListContainerRecipesRequest, _super);
    function ListContainerRecipesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListContainerRecipesQueryParams)
    ], ListContainerRecipesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListContainerRecipesHeaders)
    ], ListContainerRecipesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListContainerRecipesRequestBody)
    ], ListContainerRecipesRequest.prototype, "request", void 0);
    return ListContainerRecipesRequest;
}(SpeakeasyBase));
export { ListContainerRecipesRequest };
var ListContainerRecipesResponse = /** @class */ (function (_super) {
    __extends(ListContainerRecipesResponse, _super);
    function ListContainerRecipesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListContainerRecipesResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListContainerRecipesResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListContainerRecipesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListContainerRecipesResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListContainerRecipesResponse.prototype, "invalidPaginationTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListContainerRecipesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListContainerRecipesResponse)
    ], ListContainerRecipesResponse.prototype, "listContainerRecipesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListContainerRecipesResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListContainerRecipesResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListContainerRecipesResponse.prototype, "statusCode", void 0);
    return ListContainerRecipesResponse;
}(SpeakeasyBase));
export { ListContainerRecipesResponse };
