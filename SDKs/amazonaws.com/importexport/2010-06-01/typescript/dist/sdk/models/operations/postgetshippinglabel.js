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
export var PostGetShippingLabelActionEnum;
(function (PostGetShippingLabelActionEnum) {
    PostGetShippingLabelActionEnum["GetShippingLabel"] = "GetShippingLabel";
})(PostGetShippingLabelActionEnum || (PostGetShippingLabelActionEnum = {}));
export var PostGetShippingLabelOperationEnum;
(function (PostGetShippingLabelOperationEnum) {
    PostGetShippingLabelOperationEnum["GetShippingLabel"] = "GetShippingLabel";
})(PostGetShippingLabelOperationEnum || (PostGetShippingLabelOperationEnum = {}));
export var PostGetShippingLabelVersionEnum;
(function (PostGetShippingLabelVersionEnum) {
    PostGetShippingLabelVersionEnum["TwoThousandAndTen0601"] = "2010-06-01";
})(PostGetShippingLabelVersionEnum || (PostGetShippingLabelVersionEnum = {}));
var PostGetShippingLabelQueryParams = /** @class */ (function (_super) {
    __extends(PostGetShippingLabelQueryParams, _super);
    function PostGetShippingLabelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" }),
        __metadata("design:type", String)
    ], PostGetShippingLabelQueryParams.prototype, "awsAccessKeyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetShippingLabelQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Operation" }),
        __metadata("design:type", String)
    ], PostGetShippingLabelQueryParams.prototype, "operation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Signature" }),
        __metadata("design:type", String)
    ], PostGetShippingLabelQueryParams.prototype, "signature", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" }),
        __metadata("design:type", String)
    ], PostGetShippingLabelQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" }),
        __metadata("design:type", String)
    ], PostGetShippingLabelQueryParams.prototype, "signatureVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" }),
        __metadata("design:type", String)
    ], PostGetShippingLabelQueryParams.prototype, "timestamp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetShippingLabelQueryParams.prototype, "version", void 0);
    return PostGetShippingLabelQueryParams;
}(SpeakeasyBase));
export { PostGetShippingLabelQueryParams };
var PostGetShippingLabelRequest = /** @class */ (function (_super) {
    __extends(PostGetShippingLabelRequest, _super);
    function PostGetShippingLabelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetShippingLabelQueryParams)
    ], PostGetShippingLabelRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetShippingLabelRequest.prototype, "request", void 0);
    return PostGetShippingLabelRequest;
}(SpeakeasyBase));
export { PostGetShippingLabelRequest };
var PostGetShippingLabelResponse = /** @class */ (function (_super) {
    __extends(PostGetShippingLabelResponse, _super);
    function PostGetShippingLabelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetShippingLabelResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetShippingLabelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetShippingLabelResponse.prototype, "statusCode", void 0);
    return PostGetShippingLabelResponse;
}(SpeakeasyBase));
export { PostGetShippingLabelResponse };
