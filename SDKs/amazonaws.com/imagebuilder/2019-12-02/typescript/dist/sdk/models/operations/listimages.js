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
var ListImagesQueryParams = /** @class */ (function (_super) {
    __extends(ListImagesQueryParams, _super);
    function ListImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListImagesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListImagesQueryParams.prototype, "nextToken", void 0);
    return ListImagesQueryParams;
}(SpeakeasyBase));
export { ListImagesQueryParams };
var ListImagesHeaders = /** @class */ (function (_super) {
    __extends(ListImagesHeaders, _super);
    function ListImagesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListImagesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListImagesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListImagesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListImagesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListImagesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListImagesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListImagesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListImagesHeaders;
}(SpeakeasyBase));
export { ListImagesHeaders };
export var ListImagesRequestBodyOwnerEnum;
(function (ListImagesRequestBodyOwnerEnum) {
    ListImagesRequestBodyOwnerEnum["Self"] = "Self";
    ListImagesRequestBodyOwnerEnum["Shared"] = "Shared";
    ListImagesRequestBodyOwnerEnum["Amazon"] = "Amazon";
})(ListImagesRequestBodyOwnerEnum || (ListImagesRequestBodyOwnerEnum = {}));
var ListImagesRequestBody = /** @class */ (function (_super) {
    __extends(ListImagesRequestBody, _super);
    function ListImagesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=byName" }),
        __metadata("design:type", Boolean)
    ], ListImagesRequestBody.prototype, "byName", void 0);
    __decorate([
        Metadata({ data: "json, name=filters", elemType: shared.Filter }),
        __metadata("design:type", Array)
    ], ListImagesRequestBody.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=includeDeprecated" }),
        __metadata("design:type", Boolean)
    ], ListImagesRequestBody.prototype, "includeDeprecated", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListImagesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListImagesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], ListImagesRequestBody.prototype, "owner", void 0);
    return ListImagesRequestBody;
}(SpeakeasyBase));
export { ListImagesRequestBody };
var ListImagesRequest = /** @class */ (function (_super) {
    __extends(ListImagesRequest, _super);
    function ListImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListImagesQueryParams)
    ], ListImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListImagesHeaders)
    ], ListImagesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListImagesRequestBody)
    ], ListImagesRequest.prototype, "request", void 0);
    return ListImagesRequest;
}(SpeakeasyBase));
export { ListImagesRequest };
var ListImagesResponse = /** @class */ (function (_super) {
    __extends(ListImagesResponse, _super);
    function ListImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagesResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagesResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListImagesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagesResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagesResponse.prototype, "invalidPaginationTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListImagesResponse)
    ], ListImagesResponse.prototype, "listImagesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagesResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagesResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListImagesResponse.prototype, "statusCode", void 0);
    return ListImagesResponse;
}(SpeakeasyBase));
export { ListImagesResponse };
