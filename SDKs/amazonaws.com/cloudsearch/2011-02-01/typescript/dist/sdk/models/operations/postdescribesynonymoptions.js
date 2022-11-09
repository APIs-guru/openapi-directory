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
export var PostDescribeSynonymOptionsActionEnum;
(function (PostDescribeSynonymOptionsActionEnum) {
    PostDescribeSynonymOptionsActionEnum["DescribeSynonymOptions"] = "DescribeSynonymOptions";
})(PostDescribeSynonymOptionsActionEnum || (PostDescribeSynonymOptionsActionEnum = {}));
export var PostDescribeSynonymOptionsVersionEnum;
(function (PostDescribeSynonymOptionsVersionEnum) {
    PostDescribeSynonymOptionsVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(PostDescribeSynonymOptionsVersionEnum || (PostDescribeSynonymOptionsVersionEnum = {}));
var PostDescribeSynonymOptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeSynonymOptionsQueryParams, _super);
    function PostDescribeSynonymOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeSynonymOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeSynonymOptionsQueryParams.prototype, "version", void 0);
    return PostDescribeSynonymOptionsQueryParams;
}(SpeakeasyBase));
export { PostDescribeSynonymOptionsQueryParams };
var PostDescribeSynonymOptionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeSynonymOptionsHeaders, _super);
    function PostDescribeSynonymOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeSynonymOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeSynonymOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeSynonymOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeSynonymOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeSynonymOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeSynonymOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeSynonymOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeSynonymOptionsHeaders;
}(SpeakeasyBase));
export { PostDescribeSynonymOptionsHeaders };
var PostDescribeSynonymOptionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeSynonymOptionsRequest, _super);
    function PostDescribeSynonymOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeSynonymOptionsQueryParams)
    ], PostDescribeSynonymOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeSynonymOptionsHeaders)
    ], PostDescribeSynonymOptionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSynonymOptionsRequest.prototype, "request", void 0);
    return PostDescribeSynonymOptionsRequest;
}(SpeakeasyBase));
export { PostDescribeSynonymOptionsRequest };
var PostDescribeSynonymOptionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeSynonymOptionsResponse, _super);
    function PostDescribeSynonymOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSynonymOptionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeSynonymOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeSynonymOptionsResponse.prototype, "statusCode", void 0);
    return PostDescribeSynonymOptionsResponse;
}(SpeakeasyBase));
export { PostDescribeSynonymOptionsResponse };
