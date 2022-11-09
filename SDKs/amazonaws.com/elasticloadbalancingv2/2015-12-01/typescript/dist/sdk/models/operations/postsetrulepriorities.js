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
export var PostSetRulePrioritiesActionEnum;
(function (PostSetRulePrioritiesActionEnum) {
    PostSetRulePrioritiesActionEnum["SetRulePriorities"] = "SetRulePriorities";
})(PostSetRulePrioritiesActionEnum || (PostSetRulePrioritiesActionEnum = {}));
export var PostSetRulePrioritiesVersionEnum;
(function (PostSetRulePrioritiesVersionEnum) {
    PostSetRulePrioritiesVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostSetRulePrioritiesVersionEnum || (PostSetRulePrioritiesVersionEnum = {}));
var PostSetRulePrioritiesQueryParams = /** @class */ (function (_super) {
    __extends(PostSetRulePrioritiesQueryParams, _super);
    function PostSetRulePrioritiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSetRulePrioritiesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSetRulePrioritiesQueryParams.prototype, "version", void 0);
    return PostSetRulePrioritiesQueryParams;
}(SpeakeasyBase));
export { PostSetRulePrioritiesQueryParams };
var PostSetRulePrioritiesHeaders = /** @class */ (function (_super) {
    __extends(PostSetRulePrioritiesHeaders, _super);
    function PostSetRulePrioritiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSetRulePrioritiesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSetRulePrioritiesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSetRulePrioritiesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSetRulePrioritiesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSetRulePrioritiesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSetRulePrioritiesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSetRulePrioritiesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSetRulePrioritiesHeaders;
}(SpeakeasyBase));
export { PostSetRulePrioritiesHeaders };
var PostSetRulePrioritiesRequest = /** @class */ (function (_super) {
    __extends(PostSetRulePrioritiesRequest, _super);
    function PostSetRulePrioritiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostSetRulePrioritiesQueryParams)
    ], PostSetRulePrioritiesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostSetRulePrioritiesHeaders)
    ], PostSetRulePrioritiesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSetRulePrioritiesRequest.prototype, "request", void 0);
    return PostSetRulePrioritiesRequest;
}(SpeakeasyBase));
export { PostSetRulePrioritiesRequest };
var PostSetRulePrioritiesResponse = /** @class */ (function (_super) {
    __extends(PostSetRulePrioritiesResponse, _super);
    function PostSetRulePrioritiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostSetRulePrioritiesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostSetRulePrioritiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostSetRulePrioritiesResponse.prototype, "statusCode", void 0);
    return PostSetRulePrioritiesResponse;
}(SpeakeasyBase));
export { PostSetRulePrioritiesResponse };
