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
export var PostModifyInstanceEventStartTimeActionEnum;
(function (PostModifyInstanceEventStartTimeActionEnum) {
    PostModifyInstanceEventStartTimeActionEnum["ModifyInstanceEventStartTime"] = "ModifyInstanceEventStartTime";
})(PostModifyInstanceEventStartTimeActionEnum || (PostModifyInstanceEventStartTimeActionEnum = {}));
export var PostModifyInstanceEventStartTimeVersionEnum;
(function (PostModifyInstanceEventStartTimeVersionEnum) {
    PostModifyInstanceEventStartTimeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyInstanceEventStartTimeVersionEnum || (PostModifyInstanceEventStartTimeVersionEnum = {}));
var PostModifyInstanceEventStartTimeQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyInstanceEventStartTimeQueryParams, _super);
    function PostModifyInstanceEventStartTimeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyInstanceEventStartTimeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyInstanceEventStartTimeQueryParams.prototype, "version", void 0);
    return PostModifyInstanceEventStartTimeQueryParams;
}(SpeakeasyBase));
export { PostModifyInstanceEventStartTimeQueryParams };
var PostModifyInstanceEventStartTimeHeaders = /** @class */ (function (_super) {
    __extends(PostModifyInstanceEventStartTimeHeaders, _super);
    function PostModifyInstanceEventStartTimeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyInstanceEventStartTimeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyInstanceEventStartTimeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyInstanceEventStartTimeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyInstanceEventStartTimeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyInstanceEventStartTimeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyInstanceEventStartTimeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyInstanceEventStartTimeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyInstanceEventStartTimeHeaders;
}(SpeakeasyBase));
export { PostModifyInstanceEventStartTimeHeaders };
var PostModifyInstanceEventStartTimeRequest = /** @class */ (function (_super) {
    __extends(PostModifyInstanceEventStartTimeRequest, _super);
    function PostModifyInstanceEventStartTimeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyInstanceEventStartTimeQueryParams)
    ], PostModifyInstanceEventStartTimeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyInstanceEventStartTimeHeaders)
    ], PostModifyInstanceEventStartTimeRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyInstanceEventStartTimeRequest.prototype, "request", void 0);
    return PostModifyInstanceEventStartTimeRequest;
}(SpeakeasyBase));
export { PostModifyInstanceEventStartTimeRequest };
var PostModifyInstanceEventStartTimeResponse = /** @class */ (function (_super) {
    __extends(PostModifyInstanceEventStartTimeResponse, _super);
    function PostModifyInstanceEventStartTimeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyInstanceEventStartTimeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostModifyInstanceEventStartTimeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostModifyInstanceEventStartTimeResponse.prototype, "statusCode", void 0);
    return PostModifyInstanceEventStartTimeResponse;
}(SpeakeasyBase));
export { PostModifyInstanceEventStartTimeResponse };
