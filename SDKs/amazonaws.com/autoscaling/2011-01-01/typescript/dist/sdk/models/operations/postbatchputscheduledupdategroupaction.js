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
export var PostBatchPutScheduledUpdateGroupActionActionEnum;
(function (PostBatchPutScheduledUpdateGroupActionActionEnum) {
    PostBatchPutScheduledUpdateGroupActionActionEnum["BatchPutScheduledUpdateGroupAction"] = "BatchPutScheduledUpdateGroupAction";
})(PostBatchPutScheduledUpdateGroupActionActionEnum || (PostBatchPutScheduledUpdateGroupActionActionEnum = {}));
export var PostBatchPutScheduledUpdateGroupActionVersionEnum;
(function (PostBatchPutScheduledUpdateGroupActionVersionEnum) {
    PostBatchPutScheduledUpdateGroupActionVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostBatchPutScheduledUpdateGroupActionVersionEnum || (PostBatchPutScheduledUpdateGroupActionVersionEnum = {}));
var PostBatchPutScheduledUpdateGroupActionQueryParams = /** @class */ (function (_super) {
    __extends(PostBatchPutScheduledUpdateGroupActionQueryParams, _super);
    function PostBatchPutScheduledUpdateGroupActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostBatchPutScheduledUpdateGroupActionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostBatchPutScheduledUpdateGroupActionQueryParams.prototype, "version", void 0);
    return PostBatchPutScheduledUpdateGroupActionQueryParams;
}(SpeakeasyBase));
export { PostBatchPutScheduledUpdateGroupActionQueryParams };
var PostBatchPutScheduledUpdateGroupActionHeaders = /** @class */ (function (_super) {
    __extends(PostBatchPutScheduledUpdateGroupActionHeaders, _super);
    function PostBatchPutScheduledUpdateGroupActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostBatchPutScheduledUpdateGroupActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostBatchPutScheduledUpdateGroupActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostBatchPutScheduledUpdateGroupActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostBatchPutScheduledUpdateGroupActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostBatchPutScheduledUpdateGroupActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostBatchPutScheduledUpdateGroupActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostBatchPutScheduledUpdateGroupActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostBatchPutScheduledUpdateGroupActionHeaders;
}(SpeakeasyBase));
export { PostBatchPutScheduledUpdateGroupActionHeaders };
var PostBatchPutScheduledUpdateGroupActionRequest = /** @class */ (function (_super) {
    __extends(PostBatchPutScheduledUpdateGroupActionRequest, _super);
    function PostBatchPutScheduledUpdateGroupActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostBatchPutScheduledUpdateGroupActionQueryParams)
    ], PostBatchPutScheduledUpdateGroupActionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostBatchPutScheduledUpdateGroupActionHeaders)
    ], PostBatchPutScheduledUpdateGroupActionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostBatchPutScheduledUpdateGroupActionRequest.prototype, "request", void 0);
    return PostBatchPutScheduledUpdateGroupActionRequest;
}(SpeakeasyBase));
export { PostBatchPutScheduledUpdateGroupActionRequest };
var PostBatchPutScheduledUpdateGroupActionResponse = /** @class */ (function (_super) {
    __extends(PostBatchPutScheduledUpdateGroupActionResponse, _super);
    function PostBatchPutScheduledUpdateGroupActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostBatchPutScheduledUpdateGroupActionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostBatchPutScheduledUpdateGroupActionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostBatchPutScheduledUpdateGroupActionResponse.prototype, "statusCode", void 0);
    return PostBatchPutScheduledUpdateGroupActionResponse;
}(SpeakeasyBase));
export { PostBatchPutScheduledUpdateGroupActionResponse };
