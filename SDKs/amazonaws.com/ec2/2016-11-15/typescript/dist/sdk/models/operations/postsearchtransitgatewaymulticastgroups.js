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
export var PostSearchTransitGatewayMulticastGroupsActionEnum;
(function (PostSearchTransitGatewayMulticastGroupsActionEnum) {
    PostSearchTransitGatewayMulticastGroupsActionEnum["SearchTransitGatewayMulticastGroups"] = "SearchTransitGatewayMulticastGroups";
})(PostSearchTransitGatewayMulticastGroupsActionEnum || (PostSearchTransitGatewayMulticastGroupsActionEnum = {}));
export var PostSearchTransitGatewayMulticastGroupsVersionEnum;
(function (PostSearchTransitGatewayMulticastGroupsVersionEnum) {
    PostSearchTransitGatewayMulticastGroupsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostSearchTransitGatewayMulticastGroupsVersionEnum || (PostSearchTransitGatewayMulticastGroupsVersionEnum = {}));
var PostSearchTransitGatewayMulticastGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostSearchTransitGatewayMulticastGroupsQueryParams, _super);
    function PostSearchTransitGatewayMulticastGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsQueryParams.prototype, "version", void 0);
    return PostSearchTransitGatewayMulticastGroupsQueryParams;
}(SpeakeasyBase));
export { PostSearchTransitGatewayMulticastGroupsQueryParams };
var PostSearchTransitGatewayMulticastGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostSearchTransitGatewayMulticastGroupsHeaders, _super);
    function PostSearchTransitGatewayMulticastGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSearchTransitGatewayMulticastGroupsHeaders;
}(SpeakeasyBase));
export { PostSearchTransitGatewayMulticastGroupsHeaders };
var PostSearchTransitGatewayMulticastGroupsRequest = /** @class */ (function (_super) {
    __extends(PostSearchTransitGatewayMulticastGroupsRequest, _super);
    function PostSearchTransitGatewayMulticastGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostSearchTransitGatewayMulticastGroupsQueryParams)
    ], PostSearchTransitGatewayMulticastGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostSearchTransitGatewayMulticastGroupsHeaders)
    ], PostSearchTransitGatewayMulticastGroupsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSearchTransitGatewayMulticastGroupsRequest.prototype, "request", void 0);
    return PostSearchTransitGatewayMulticastGroupsRequest;
}(SpeakeasyBase));
export { PostSearchTransitGatewayMulticastGroupsRequest };
var PostSearchTransitGatewayMulticastGroupsResponse = /** @class */ (function (_super) {
    __extends(PostSearchTransitGatewayMulticastGroupsResponse, _super);
    function PostSearchTransitGatewayMulticastGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostSearchTransitGatewayMulticastGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostSearchTransitGatewayMulticastGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostSearchTransitGatewayMulticastGroupsResponse.prototype, "statusCode", void 0);
    return PostSearchTransitGatewayMulticastGroupsResponse;
}(SpeakeasyBase));
export { PostSearchTransitGatewayMulticastGroupsResponse };
