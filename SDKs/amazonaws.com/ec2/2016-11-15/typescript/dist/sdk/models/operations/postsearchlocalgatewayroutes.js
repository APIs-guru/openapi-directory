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
export var PostSearchLocalGatewayRoutesActionEnum;
(function (PostSearchLocalGatewayRoutesActionEnum) {
    PostSearchLocalGatewayRoutesActionEnum["SearchLocalGatewayRoutes"] = "SearchLocalGatewayRoutes";
})(PostSearchLocalGatewayRoutesActionEnum || (PostSearchLocalGatewayRoutesActionEnum = {}));
export var PostSearchLocalGatewayRoutesVersionEnum;
(function (PostSearchLocalGatewayRoutesVersionEnum) {
    PostSearchLocalGatewayRoutesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostSearchLocalGatewayRoutesVersionEnum || (PostSearchLocalGatewayRoutesVersionEnum = {}));
var PostSearchLocalGatewayRoutesQueryParams = /** @class */ (function (_super) {
    __extends(PostSearchLocalGatewayRoutesQueryParams, _super);
    function PostSearchLocalGatewayRoutesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesQueryParams.prototype, "version", void 0);
    return PostSearchLocalGatewayRoutesQueryParams;
}(SpeakeasyBase));
export { PostSearchLocalGatewayRoutesQueryParams };
var PostSearchLocalGatewayRoutesHeaders = /** @class */ (function (_super) {
    __extends(PostSearchLocalGatewayRoutesHeaders, _super);
    function PostSearchLocalGatewayRoutesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSearchLocalGatewayRoutesHeaders;
}(SpeakeasyBase));
export { PostSearchLocalGatewayRoutesHeaders };
var PostSearchLocalGatewayRoutesRequest = /** @class */ (function (_super) {
    __extends(PostSearchLocalGatewayRoutesRequest, _super);
    function PostSearchLocalGatewayRoutesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostSearchLocalGatewayRoutesQueryParams)
    ], PostSearchLocalGatewayRoutesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostSearchLocalGatewayRoutesHeaders)
    ], PostSearchLocalGatewayRoutesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSearchLocalGatewayRoutesRequest.prototype, "request", void 0);
    return PostSearchLocalGatewayRoutesRequest;
}(SpeakeasyBase));
export { PostSearchLocalGatewayRoutesRequest };
var PostSearchLocalGatewayRoutesResponse = /** @class */ (function (_super) {
    __extends(PostSearchLocalGatewayRoutesResponse, _super);
    function PostSearchLocalGatewayRoutesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostSearchLocalGatewayRoutesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostSearchLocalGatewayRoutesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostSearchLocalGatewayRoutesResponse.prototype, "statusCode", void 0);
    return PostSearchLocalGatewayRoutesResponse;
}(SpeakeasyBase));
export { PostSearchLocalGatewayRoutesResponse };
