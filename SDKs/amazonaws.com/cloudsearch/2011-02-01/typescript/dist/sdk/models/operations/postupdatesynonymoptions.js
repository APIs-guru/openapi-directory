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
export var PostUpdateSynonymOptionsActionEnum;
(function (PostUpdateSynonymOptionsActionEnum) {
    PostUpdateSynonymOptionsActionEnum["UpdateSynonymOptions"] = "UpdateSynonymOptions";
})(PostUpdateSynonymOptionsActionEnum || (PostUpdateSynonymOptionsActionEnum = {}));
export var PostUpdateSynonymOptionsVersionEnum;
(function (PostUpdateSynonymOptionsVersionEnum) {
    PostUpdateSynonymOptionsVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(PostUpdateSynonymOptionsVersionEnum || (PostUpdateSynonymOptionsVersionEnum = {}));
var PostUpdateSynonymOptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateSynonymOptionsQueryParams, _super);
    function PostUpdateSynonymOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateSynonymOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateSynonymOptionsQueryParams.prototype, "version", void 0);
    return PostUpdateSynonymOptionsQueryParams;
}(SpeakeasyBase));
export { PostUpdateSynonymOptionsQueryParams };
var PostUpdateSynonymOptionsHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateSynonymOptionsHeaders, _super);
    function PostUpdateSynonymOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateSynonymOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateSynonymOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateSynonymOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateSynonymOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateSynonymOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateSynonymOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateSynonymOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateSynonymOptionsHeaders;
}(SpeakeasyBase));
export { PostUpdateSynonymOptionsHeaders };
var PostUpdateSynonymOptionsRequest = /** @class */ (function (_super) {
    __extends(PostUpdateSynonymOptionsRequest, _super);
    function PostUpdateSynonymOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUpdateSynonymOptionsQueryParams)
    ], PostUpdateSynonymOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUpdateSynonymOptionsHeaders)
    ], PostUpdateSynonymOptionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateSynonymOptionsRequest.prototype, "request", void 0);
    return PostUpdateSynonymOptionsRequest;
}(SpeakeasyBase));
export { PostUpdateSynonymOptionsRequest };
var PostUpdateSynonymOptionsResponse = /** @class */ (function (_super) {
    __extends(PostUpdateSynonymOptionsResponse, _super);
    function PostUpdateSynonymOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateSynonymOptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUpdateSynonymOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUpdateSynonymOptionsResponse.prototype, "statusCode", void 0);
    return PostUpdateSynonymOptionsResponse;
}(SpeakeasyBase));
export { PostUpdateSynonymOptionsResponse };
