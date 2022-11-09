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
export var PostCreateTrafficMirrorFilterRuleActionEnum;
(function (PostCreateTrafficMirrorFilterRuleActionEnum) {
    PostCreateTrafficMirrorFilterRuleActionEnum["CreateTrafficMirrorFilterRule"] = "CreateTrafficMirrorFilterRule";
})(PostCreateTrafficMirrorFilterRuleActionEnum || (PostCreateTrafficMirrorFilterRuleActionEnum = {}));
export var PostCreateTrafficMirrorFilterRuleVersionEnum;
(function (PostCreateTrafficMirrorFilterRuleVersionEnum) {
    PostCreateTrafficMirrorFilterRuleVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateTrafficMirrorFilterRuleVersionEnum || (PostCreateTrafficMirrorFilterRuleVersionEnum = {}));
var PostCreateTrafficMirrorFilterRuleQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorFilterRuleQueryParams, _super);
    function PostCreateTrafficMirrorFilterRuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorFilterRuleQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorFilterRuleQueryParams.prototype, "version", void 0);
    return PostCreateTrafficMirrorFilterRuleQueryParams;
}(SpeakeasyBase));
export { PostCreateTrafficMirrorFilterRuleQueryParams };
var PostCreateTrafficMirrorFilterRuleHeaders = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorFilterRuleHeaders, _super);
    function PostCreateTrafficMirrorFilterRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateTrafficMirrorFilterRuleHeaders;
}(SpeakeasyBase));
export { PostCreateTrafficMirrorFilterRuleHeaders };
var PostCreateTrafficMirrorFilterRuleRequest = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorFilterRuleRequest, _super);
    function PostCreateTrafficMirrorFilterRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateTrafficMirrorFilterRuleQueryParams)
    ], PostCreateTrafficMirrorFilterRuleRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateTrafficMirrorFilterRuleHeaders)
    ], PostCreateTrafficMirrorFilterRuleRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateTrafficMirrorFilterRuleRequest.prototype, "request", void 0);
    return PostCreateTrafficMirrorFilterRuleRequest;
}(SpeakeasyBase));
export { PostCreateTrafficMirrorFilterRuleRequest };
var PostCreateTrafficMirrorFilterRuleResponse = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorFilterRuleResponse, _super);
    function PostCreateTrafficMirrorFilterRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateTrafficMirrorFilterRuleResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorFilterRuleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateTrafficMirrorFilterRuleResponse.prototype, "statusCode", void 0);
    return PostCreateTrafficMirrorFilterRuleResponse;
}(SpeakeasyBase));
export { PostCreateTrafficMirrorFilterRuleResponse };
