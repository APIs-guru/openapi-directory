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
export var PostPutLifecycleHookActionEnum;
(function (PostPutLifecycleHookActionEnum) {
    PostPutLifecycleHookActionEnum["PutLifecycleHook"] = "PutLifecycleHook";
})(PostPutLifecycleHookActionEnum || (PostPutLifecycleHookActionEnum = {}));
export var PostPutLifecycleHookVersionEnum;
(function (PostPutLifecycleHookVersionEnum) {
    PostPutLifecycleHookVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostPutLifecycleHookVersionEnum || (PostPutLifecycleHookVersionEnum = {}));
var PostPutLifecycleHookQueryParams = /** @class */ (function (_super) {
    __extends(PostPutLifecycleHookQueryParams, _super);
    function PostPutLifecycleHookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostPutLifecycleHookQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostPutLifecycleHookQueryParams.prototype, "version", void 0);
    return PostPutLifecycleHookQueryParams;
}(SpeakeasyBase));
export { PostPutLifecycleHookQueryParams };
var PostPutLifecycleHookHeaders = /** @class */ (function (_super) {
    __extends(PostPutLifecycleHookHeaders, _super);
    function PostPutLifecycleHookHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostPutLifecycleHookHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostPutLifecycleHookHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostPutLifecycleHookHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostPutLifecycleHookHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostPutLifecycleHookHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostPutLifecycleHookHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostPutLifecycleHookHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostPutLifecycleHookHeaders;
}(SpeakeasyBase));
export { PostPutLifecycleHookHeaders };
var PostPutLifecycleHookRequest = /** @class */ (function (_super) {
    __extends(PostPutLifecycleHookRequest, _super);
    function PostPutLifecycleHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostPutLifecycleHookQueryParams)
    ], PostPutLifecycleHookRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostPutLifecycleHookHeaders)
    ], PostPutLifecycleHookRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostPutLifecycleHookRequest.prototype, "request", void 0);
    return PostPutLifecycleHookRequest;
}(SpeakeasyBase));
export { PostPutLifecycleHookRequest };
var PostPutLifecycleHookResponse = /** @class */ (function (_super) {
    __extends(PostPutLifecycleHookResponse, _super);
    function PostPutLifecycleHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostPutLifecycleHookResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostPutLifecycleHookResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostPutLifecycleHookResponse.prototype, "statusCode", void 0);
    return PostPutLifecycleHookResponse;
}(SpeakeasyBase));
export { PostPutLifecycleHookResponse };
