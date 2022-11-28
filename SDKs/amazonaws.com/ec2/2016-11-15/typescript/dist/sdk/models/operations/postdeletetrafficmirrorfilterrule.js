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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var PostDeleteTrafficMirrorFilterRuleActionEnum;
(function (PostDeleteTrafficMirrorFilterRuleActionEnum) {
    PostDeleteTrafficMirrorFilterRuleActionEnum["DeleteTrafficMirrorFilterRule"] = "DeleteTrafficMirrorFilterRule";
})(PostDeleteTrafficMirrorFilterRuleActionEnum || (PostDeleteTrafficMirrorFilterRuleActionEnum = {}));
export var PostDeleteTrafficMirrorFilterRuleVersionEnum;
(function (PostDeleteTrafficMirrorFilterRuleVersionEnum) {
    PostDeleteTrafficMirrorFilterRuleVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteTrafficMirrorFilterRuleVersionEnum || (PostDeleteTrafficMirrorFilterRuleVersionEnum = {}));
var PostDeleteTrafficMirrorFilterRuleQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteTrafficMirrorFilterRuleQueryParams, _super);
    function PostDeleteTrafficMirrorFilterRuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteTrafficMirrorFilterRuleQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteTrafficMirrorFilterRuleQueryParams.prototype, "version", void 0);
    return PostDeleteTrafficMirrorFilterRuleQueryParams;
}(SpeakeasyBase));
export { PostDeleteTrafficMirrorFilterRuleQueryParams };
var PostDeleteTrafficMirrorFilterRuleHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteTrafficMirrorFilterRuleHeaders, _super);
    function PostDeleteTrafficMirrorFilterRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteTrafficMirrorFilterRuleHeaders;
}(SpeakeasyBase));
export { PostDeleteTrafficMirrorFilterRuleHeaders };
var PostDeleteTrafficMirrorFilterRuleRequest = /** @class */ (function (_super) {
    __extends(PostDeleteTrafficMirrorFilterRuleRequest, _super);
    function PostDeleteTrafficMirrorFilterRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteTrafficMirrorFilterRuleQueryParams)
    ], PostDeleteTrafficMirrorFilterRuleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteTrafficMirrorFilterRuleHeaders)
    ], PostDeleteTrafficMirrorFilterRuleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteTrafficMirrorFilterRuleRequest.prototype, "request", void 0);
    return PostDeleteTrafficMirrorFilterRuleRequest;
}(SpeakeasyBase));
export { PostDeleteTrafficMirrorFilterRuleRequest };
var PostDeleteTrafficMirrorFilterRuleResponse = /** @class */ (function (_super) {
    __extends(PostDeleteTrafficMirrorFilterRuleResponse, _super);
    function PostDeleteTrafficMirrorFilterRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteTrafficMirrorFilterRuleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteTrafficMirrorFilterRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteTrafficMirrorFilterRuleResponse.prototype, "statusCode", void 0);
    return PostDeleteTrafficMirrorFilterRuleResponse;
}(SpeakeasyBase));
export { PostDeleteTrafficMirrorFilterRuleResponse };
