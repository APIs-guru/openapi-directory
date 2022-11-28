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
export var PostCreateJobActionEnum;
(function (PostCreateJobActionEnum) {
    PostCreateJobActionEnum["CreateJob"] = "CreateJob";
})(PostCreateJobActionEnum || (PostCreateJobActionEnum = {}));
export var PostCreateJobOperationEnum;
(function (PostCreateJobOperationEnum) {
    PostCreateJobOperationEnum["CreateJob"] = "CreateJob";
})(PostCreateJobOperationEnum || (PostCreateJobOperationEnum = {}));
export var PostCreateJobVersionEnum;
(function (PostCreateJobVersionEnum) {
    PostCreateJobVersionEnum["TwoThousandAndTen0601"] = "2010-06-01";
})(PostCreateJobVersionEnum || (PostCreateJobVersionEnum = {}));
var PostCreateJobQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateJobQueryParams, _super);
    function PostCreateJobQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" }),
        __metadata("design:type", String)
    ], PostCreateJobQueryParams.prototype, "awsAccessKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateJobQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" }),
        __metadata("design:type", String)
    ], PostCreateJobQueryParams.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" }),
        __metadata("design:type", String)
    ], PostCreateJobQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" }),
        __metadata("design:type", String)
    ], PostCreateJobQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" }),
        __metadata("design:type", String)
    ], PostCreateJobQueryParams.prototype, "signatureVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" }),
        __metadata("design:type", String)
    ], PostCreateJobQueryParams.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateJobQueryParams.prototype, "version", void 0);
    return PostCreateJobQueryParams;
}(SpeakeasyBase));
export { PostCreateJobQueryParams };
var PostCreateJobRequest = /** @class */ (function (_super) {
    __extends(PostCreateJobRequest, _super);
    function PostCreateJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateJobQueryParams)
    ], PostCreateJobRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateJobRequest.prototype, "request", void 0);
    return PostCreateJobRequest;
}(SpeakeasyBase));
export { PostCreateJobRequest };
var PostCreateJobResponse = /** @class */ (function (_super) {
    __extends(PostCreateJobResponse, _super);
    function PostCreateJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateJobResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateJobResponse.prototype, "statusCode", void 0);
    return PostCreateJobResponse;
}(SpeakeasyBase));
export { PostCreateJobResponse };
