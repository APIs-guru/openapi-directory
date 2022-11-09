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
export var PostDescribeTrafficMirrorTargetsActionEnum;
(function (PostDescribeTrafficMirrorTargetsActionEnum) {
    PostDescribeTrafficMirrorTargetsActionEnum["DescribeTrafficMirrorTargets"] = "DescribeTrafficMirrorTargets";
})(PostDescribeTrafficMirrorTargetsActionEnum || (PostDescribeTrafficMirrorTargetsActionEnum = {}));
export var PostDescribeTrafficMirrorTargetsVersionEnum;
(function (PostDescribeTrafficMirrorTargetsVersionEnum) {
    PostDescribeTrafficMirrorTargetsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeTrafficMirrorTargetsVersionEnum || (PostDescribeTrafficMirrorTargetsVersionEnum = {}));
var PostDescribeTrafficMirrorTargetsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeTrafficMirrorTargetsQueryParams, _super);
    function PostDescribeTrafficMirrorTargetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsQueryParams.prototype, "version", void 0);
    return PostDescribeTrafficMirrorTargetsQueryParams;
}(SpeakeasyBase));
export { PostDescribeTrafficMirrorTargetsQueryParams };
var PostDescribeTrafficMirrorTargetsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeTrafficMirrorTargetsHeaders, _super);
    function PostDescribeTrafficMirrorTargetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeTrafficMirrorTargetsHeaders;
}(SpeakeasyBase));
export { PostDescribeTrafficMirrorTargetsHeaders };
var PostDescribeTrafficMirrorTargetsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeTrafficMirrorTargetsRequest, _super);
    function PostDescribeTrafficMirrorTargetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeTrafficMirrorTargetsQueryParams)
    ], PostDescribeTrafficMirrorTargetsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeTrafficMirrorTargetsHeaders)
    ], PostDescribeTrafficMirrorTargetsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeTrafficMirrorTargetsRequest.prototype, "request", void 0);
    return PostDescribeTrafficMirrorTargetsRequest;
}(SpeakeasyBase));
export { PostDescribeTrafficMirrorTargetsRequest };
var PostDescribeTrafficMirrorTargetsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeTrafficMirrorTargetsResponse, _super);
    function PostDescribeTrafficMirrorTargetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeTrafficMirrorTargetsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeTrafficMirrorTargetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeTrafficMirrorTargetsResponse.prototype, "statusCode", void 0);
    return PostDescribeTrafficMirrorTargetsResponse;
}(SpeakeasyBase));
export { PostDescribeTrafficMirrorTargetsResponse };
