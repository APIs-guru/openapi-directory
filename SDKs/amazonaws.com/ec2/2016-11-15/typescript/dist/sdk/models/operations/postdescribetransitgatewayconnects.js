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
export var PostDescribeTransitGatewayConnectsActionEnum;
(function (PostDescribeTransitGatewayConnectsActionEnum) {
    PostDescribeTransitGatewayConnectsActionEnum["DescribeTransitGatewayConnects"] = "DescribeTransitGatewayConnects";
})(PostDescribeTransitGatewayConnectsActionEnum || (PostDescribeTransitGatewayConnectsActionEnum = {}));
export var PostDescribeTransitGatewayConnectsVersionEnum;
(function (PostDescribeTransitGatewayConnectsVersionEnum) {
    PostDescribeTransitGatewayConnectsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeTransitGatewayConnectsVersionEnum || (PostDescribeTransitGatewayConnectsVersionEnum = {}));
var PostDescribeTransitGatewayConnectsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayConnectsQueryParams, _super);
    function PostDescribeTransitGatewayConnectsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsQueryParams.prototype, "version", void 0);
    return PostDescribeTransitGatewayConnectsQueryParams;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayConnectsQueryParams };
var PostDescribeTransitGatewayConnectsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayConnectsHeaders, _super);
    function PostDescribeTransitGatewayConnectsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeTransitGatewayConnectsHeaders;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayConnectsHeaders };
var PostDescribeTransitGatewayConnectsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayConnectsRequest, _super);
    function PostDescribeTransitGatewayConnectsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeTransitGatewayConnectsQueryParams)
    ], PostDescribeTransitGatewayConnectsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeTransitGatewayConnectsHeaders)
    ], PostDescribeTransitGatewayConnectsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeTransitGatewayConnectsRequest.prototype, "request", void 0);
    return PostDescribeTransitGatewayConnectsRequest;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayConnectsRequest };
var PostDescribeTransitGatewayConnectsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayConnectsResponse, _super);
    function PostDescribeTransitGatewayConnectsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeTransitGatewayConnectsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayConnectsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeTransitGatewayConnectsResponse.prototype, "statusCode", void 0);
    return PostDescribeTransitGatewayConnectsResponse;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayConnectsResponse };
