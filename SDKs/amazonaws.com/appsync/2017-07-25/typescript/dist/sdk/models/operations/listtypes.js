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
var ListTypesPathParams = /** @class */ (function (_super) {
    __extends(ListTypesPathParams, _super);
    function ListTypesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], ListTypesPathParams.prototype, "apiId", void 0);
    return ListTypesPathParams;
}(SpeakeasyBase));
export { ListTypesPathParams };
export var ListTypesFormatEnum;
(function (ListTypesFormatEnum) {
    ListTypesFormatEnum["Sdl"] = "SDL";
    ListTypesFormatEnum["Json"] = "JSON";
})(ListTypesFormatEnum || (ListTypesFormatEnum = {}));
var ListTypesQueryParams = /** @class */ (function (_super) {
    __extends(ListTypesQueryParams, _super);
    function ListTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], ListTypesQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListTypesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListTypesQueryParams.prototype, "nextToken", void 0);
    return ListTypesQueryParams;
}(SpeakeasyBase));
export { ListTypesQueryParams };
var ListTypesHeaders = /** @class */ (function (_super) {
    __extends(ListTypesHeaders, _super);
    function ListTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListTypesHeaders;
}(SpeakeasyBase));
export { ListTypesHeaders };
var ListTypesRequest = /** @class */ (function (_super) {
    __extends(ListTypesRequest, _super);
    function ListTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListTypesPathParams)
    ], ListTypesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTypesQueryParams)
    ], ListTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTypesHeaders)
    ], ListTypesRequest.prototype, "headers", void 0);
    return ListTypesRequest;
}(SpeakeasyBase));
export { ListTypesRequest };
var ListTypesResponse = /** @class */ (function (_super) {
    __extends(ListTypesResponse, _super);
    function ListTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTypesResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTypesResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTypesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTypesResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTypesResponse)
    ], ListTypesResponse.prototype, "listTypesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTypesResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTypesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTypesResponse.prototype, "unauthorizedException", void 0);
    return ListTypesResponse;
}(SpeakeasyBase));
export { ListTypesResponse };
