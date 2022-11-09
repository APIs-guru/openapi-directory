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
var ListImagePackagesQueryParams = /** @class */ (function (_super) {
    __extends(ListImagePackagesQueryParams, _super);
    function ListImagePackagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListImagePackagesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListImagePackagesQueryParams.prototype, "nextToken", void 0);
    return ListImagePackagesQueryParams;
}(SpeakeasyBase));
export { ListImagePackagesQueryParams };
var ListImagePackagesHeaders = /** @class */ (function (_super) {
    __extends(ListImagePackagesHeaders, _super);
    function ListImagePackagesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListImagePackagesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListImagePackagesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListImagePackagesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListImagePackagesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListImagePackagesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListImagePackagesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListImagePackagesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListImagePackagesHeaders;
}(SpeakeasyBase));
export { ListImagePackagesHeaders };
var ListImagePackagesRequestBody = /** @class */ (function (_super) {
    __extends(ListImagePackagesRequestBody, _super);
    function ListImagePackagesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=imageBuildVersionArn" }),
        __metadata("design:type", String)
    ], ListImagePackagesRequestBody.prototype, "imageBuildVersionArn", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListImagePackagesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListImagePackagesRequestBody.prototype, "nextToken", void 0);
    return ListImagePackagesRequestBody;
}(SpeakeasyBase));
export { ListImagePackagesRequestBody };
var ListImagePackagesRequest = /** @class */ (function (_super) {
    __extends(ListImagePackagesRequest, _super);
    function ListImagePackagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListImagePackagesQueryParams)
    ], ListImagePackagesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListImagePackagesHeaders)
    ], ListImagePackagesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListImagePackagesRequestBody)
    ], ListImagePackagesRequest.prototype, "request", void 0);
    return ListImagePackagesRequest;
}(SpeakeasyBase));
export { ListImagePackagesRequest };
var ListImagePackagesResponse = /** @class */ (function (_super) {
    __extends(ListImagePackagesResponse, _super);
    function ListImagePackagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagePackagesResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagePackagesResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListImagePackagesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagePackagesResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagePackagesResponse.prototype, "invalidPaginationTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagePackagesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListImagePackagesResponse)
    ], ListImagePackagesResponse.prototype, "listImagePackagesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagePackagesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagePackagesResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagePackagesResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListImagePackagesResponse.prototype, "statusCode", void 0);
    return ListImagePackagesResponse;
}(SpeakeasyBase));
export { ListImagePackagesResponse };
