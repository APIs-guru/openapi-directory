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
export var PostDeleteFlowLogsActionEnum;
(function (PostDeleteFlowLogsActionEnum) {
    PostDeleteFlowLogsActionEnum["DeleteFlowLogs"] = "DeleteFlowLogs";
})(PostDeleteFlowLogsActionEnum || (PostDeleteFlowLogsActionEnum = {}));
export var PostDeleteFlowLogsVersionEnum;
(function (PostDeleteFlowLogsVersionEnum) {
    PostDeleteFlowLogsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteFlowLogsVersionEnum || (PostDeleteFlowLogsVersionEnum = {}));
var PostDeleteFlowLogsQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteFlowLogsQueryParams, _super);
    function PostDeleteFlowLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteFlowLogsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteFlowLogsQueryParams.prototype, "version", void 0);
    return PostDeleteFlowLogsQueryParams;
}(SpeakeasyBase));
export { PostDeleteFlowLogsQueryParams };
var PostDeleteFlowLogsHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteFlowLogsHeaders, _super);
    function PostDeleteFlowLogsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteFlowLogsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteFlowLogsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteFlowLogsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteFlowLogsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteFlowLogsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteFlowLogsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteFlowLogsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteFlowLogsHeaders;
}(SpeakeasyBase));
export { PostDeleteFlowLogsHeaders };
var PostDeleteFlowLogsRequest = /** @class */ (function (_super) {
    __extends(PostDeleteFlowLogsRequest, _super);
    function PostDeleteFlowLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteFlowLogsQueryParams)
    ], PostDeleteFlowLogsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteFlowLogsHeaders)
    ], PostDeleteFlowLogsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteFlowLogsRequest.prototype, "request", void 0);
    return PostDeleteFlowLogsRequest;
}(SpeakeasyBase));
export { PostDeleteFlowLogsRequest };
var PostDeleteFlowLogsResponse = /** @class */ (function (_super) {
    __extends(PostDeleteFlowLogsResponse, _super);
    function PostDeleteFlowLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteFlowLogsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteFlowLogsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteFlowLogsResponse.prototype, "statusCode", void 0);
    return PostDeleteFlowLogsResponse;
}(SpeakeasyBase));
export { PostDeleteFlowLogsResponse };
