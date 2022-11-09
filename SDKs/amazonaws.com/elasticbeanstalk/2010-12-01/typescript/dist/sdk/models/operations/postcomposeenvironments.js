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
export var PostComposeEnvironmentsActionEnum;
(function (PostComposeEnvironmentsActionEnum) {
    PostComposeEnvironmentsActionEnum["ComposeEnvironments"] = "ComposeEnvironments";
})(PostComposeEnvironmentsActionEnum || (PostComposeEnvironmentsActionEnum = {}));
export var PostComposeEnvironmentsVersionEnum;
(function (PostComposeEnvironmentsVersionEnum) {
    PostComposeEnvironmentsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostComposeEnvironmentsVersionEnum || (PostComposeEnvironmentsVersionEnum = {}));
var PostComposeEnvironmentsQueryParams = /** @class */ (function (_super) {
    __extends(PostComposeEnvironmentsQueryParams, _super);
    function PostComposeEnvironmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostComposeEnvironmentsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostComposeEnvironmentsQueryParams.prototype, "version", void 0);
    return PostComposeEnvironmentsQueryParams;
}(SpeakeasyBase));
export { PostComposeEnvironmentsQueryParams };
var PostComposeEnvironmentsHeaders = /** @class */ (function (_super) {
    __extends(PostComposeEnvironmentsHeaders, _super);
    function PostComposeEnvironmentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostComposeEnvironmentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostComposeEnvironmentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostComposeEnvironmentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostComposeEnvironmentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostComposeEnvironmentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostComposeEnvironmentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostComposeEnvironmentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostComposeEnvironmentsHeaders;
}(SpeakeasyBase));
export { PostComposeEnvironmentsHeaders };
var PostComposeEnvironmentsRequest = /** @class */ (function (_super) {
    __extends(PostComposeEnvironmentsRequest, _super);
    function PostComposeEnvironmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostComposeEnvironmentsQueryParams)
    ], PostComposeEnvironmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostComposeEnvironmentsHeaders)
    ], PostComposeEnvironmentsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostComposeEnvironmentsRequest.prototype, "request", void 0);
    return PostComposeEnvironmentsRequest;
}(SpeakeasyBase));
export { PostComposeEnvironmentsRequest };
var PostComposeEnvironmentsResponse = /** @class */ (function (_super) {
    __extends(PostComposeEnvironmentsResponse, _super);
    function PostComposeEnvironmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostComposeEnvironmentsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostComposeEnvironmentsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostComposeEnvironmentsResponse.prototype, "statusCode", void 0);
    return PostComposeEnvironmentsResponse;
}(SpeakeasyBase));
export { PostComposeEnvironmentsResponse };
