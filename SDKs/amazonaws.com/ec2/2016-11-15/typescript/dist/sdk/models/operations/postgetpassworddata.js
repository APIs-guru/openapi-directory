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
export var PostGetPasswordDataActionEnum;
(function (PostGetPasswordDataActionEnum) {
    PostGetPasswordDataActionEnum["GetPasswordData"] = "GetPasswordData";
})(PostGetPasswordDataActionEnum || (PostGetPasswordDataActionEnum = {}));
export var PostGetPasswordDataVersionEnum;
(function (PostGetPasswordDataVersionEnum) {
    PostGetPasswordDataVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostGetPasswordDataVersionEnum || (PostGetPasswordDataVersionEnum = {}));
var PostGetPasswordDataQueryParams = /** @class */ (function (_super) {
    __extends(PostGetPasswordDataQueryParams, _super);
    function PostGetPasswordDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetPasswordDataQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetPasswordDataQueryParams.prototype, "version", void 0);
    return PostGetPasswordDataQueryParams;
}(SpeakeasyBase));
export { PostGetPasswordDataQueryParams };
var PostGetPasswordDataHeaders = /** @class */ (function (_super) {
    __extends(PostGetPasswordDataHeaders, _super);
    function PostGetPasswordDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetPasswordDataHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetPasswordDataHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetPasswordDataHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetPasswordDataHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetPasswordDataHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetPasswordDataHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetPasswordDataHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetPasswordDataHeaders;
}(SpeakeasyBase));
export { PostGetPasswordDataHeaders };
var PostGetPasswordDataRequest = /** @class */ (function (_super) {
    __extends(PostGetPasswordDataRequest, _super);
    function PostGetPasswordDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetPasswordDataQueryParams)
    ], PostGetPasswordDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetPasswordDataHeaders)
    ], PostGetPasswordDataRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetPasswordDataRequest.prototype, "request", void 0);
    return PostGetPasswordDataRequest;
}(SpeakeasyBase));
export { PostGetPasswordDataRequest };
var PostGetPasswordDataResponse = /** @class */ (function (_super) {
    __extends(PostGetPasswordDataResponse, _super);
    function PostGetPasswordDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetPasswordDataResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetPasswordDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetPasswordDataResponse.prototype, "statusCode", void 0);
    return PostGetPasswordDataResponse;
}(SpeakeasyBase));
export { PostGetPasswordDataResponse };
