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
export var PostDefineExpressionActionEnum;
(function (PostDefineExpressionActionEnum) {
    PostDefineExpressionActionEnum["DefineExpression"] = "DefineExpression";
})(PostDefineExpressionActionEnum || (PostDefineExpressionActionEnum = {}));
export var PostDefineExpressionVersionEnum;
(function (PostDefineExpressionVersionEnum) {
    PostDefineExpressionVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(PostDefineExpressionVersionEnum || (PostDefineExpressionVersionEnum = {}));
var PostDefineExpressionQueryParams = /** @class */ (function (_super) {
    __extends(PostDefineExpressionQueryParams, _super);
    function PostDefineExpressionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDefineExpressionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDefineExpressionQueryParams.prototype, "version", void 0);
    return PostDefineExpressionQueryParams;
}(SpeakeasyBase));
export { PostDefineExpressionQueryParams };
var PostDefineExpressionHeaders = /** @class */ (function (_super) {
    __extends(PostDefineExpressionHeaders, _super);
    function PostDefineExpressionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDefineExpressionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDefineExpressionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDefineExpressionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDefineExpressionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDefineExpressionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDefineExpressionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDefineExpressionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDefineExpressionHeaders;
}(SpeakeasyBase));
export { PostDefineExpressionHeaders };
var PostDefineExpressionRequest = /** @class */ (function (_super) {
    __extends(PostDefineExpressionRequest, _super);
    function PostDefineExpressionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDefineExpressionQueryParams)
    ], PostDefineExpressionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDefineExpressionHeaders)
    ], PostDefineExpressionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDefineExpressionRequest.prototype, "request", void 0);
    return PostDefineExpressionRequest;
}(SpeakeasyBase));
export { PostDefineExpressionRequest };
var PostDefineExpressionResponse = /** @class */ (function (_super) {
    __extends(PostDefineExpressionResponse, _super);
    function PostDefineExpressionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDefineExpressionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDefineExpressionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDefineExpressionResponse.prototype, "statusCode", void 0);
    return PostDefineExpressionResponse;
}(SpeakeasyBase));
export { PostDefineExpressionResponse };
