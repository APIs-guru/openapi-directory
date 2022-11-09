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
export var PostRecordLifecycleActionHeartbeatActionEnum;
(function (PostRecordLifecycleActionHeartbeatActionEnum) {
    PostRecordLifecycleActionHeartbeatActionEnum["RecordLifecycleActionHeartbeat"] = "RecordLifecycleActionHeartbeat";
})(PostRecordLifecycleActionHeartbeatActionEnum || (PostRecordLifecycleActionHeartbeatActionEnum = {}));
export var PostRecordLifecycleActionHeartbeatVersionEnum;
(function (PostRecordLifecycleActionHeartbeatVersionEnum) {
    PostRecordLifecycleActionHeartbeatVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostRecordLifecycleActionHeartbeatVersionEnum || (PostRecordLifecycleActionHeartbeatVersionEnum = {}));
var PostRecordLifecycleActionHeartbeatQueryParams = /** @class */ (function (_super) {
    __extends(PostRecordLifecycleActionHeartbeatQueryParams, _super);
    function PostRecordLifecycleActionHeartbeatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRecordLifecycleActionHeartbeatQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRecordLifecycleActionHeartbeatQueryParams.prototype, "version", void 0);
    return PostRecordLifecycleActionHeartbeatQueryParams;
}(SpeakeasyBase));
export { PostRecordLifecycleActionHeartbeatQueryParams };
var PostRecordLifecycleActionHeartbeatHeaders = /** @class */ (function (_super) {
    __extends(PostRecordLifecycleActionHeartbeatHeaders, _super);
    function PostRecordLifecycleActionHeartbeatHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRecordLifecycleActionHeartbeatHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRecordLifecycleActionHeartbeatHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRecordLifecycleActionHeartbeatHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRecordLifecycleActionHeartbeatHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRecordLifecycleActionHeartbeatHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRecordLifecycleActionHeartbeatHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRecordLifecycleActionHeartbeatHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRecordLifecycleActionHeartbeatHeaders;
}(SpeakeasyBase));
export { PostRecordLifecycleActionHeartbeatHeaders };
var PostRecordLifecycleActionHeartbeatRequest = /** @class */ (function (_super) {
    __extends(PostRecordLifecycleActionHeartbeatRequest, _super);
    function PostRecordLifecycleActionHeartbeatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostRecordLifecycleActionHeartbeatQueryParams)
    ], PostRecordLifecycleActionHeartbeatRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRecordLifecycleActionHeartbeatHeaders)
    ], PostRecordLifecycleActionHeartbeatRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRecordLifecycleActionHeartbeatRequest.prototype, "request", void 0);
    return PostRecordLifecycleActionHeartbeatRequest;
}(SpeakeasyBase));
export { PostRecordLifecycleActionHeartbeatRequest };
var PostRecordLifecycleActionHeartbeatResponse = /** @class */ (function (_super) {
    __extends(PostRecordLifecycleActionHeartbeatResponse, _super);
    function PostRecordLifecycleActionHeartbeatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostRecordLifecycleActionHeartbeatResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRecordLifecycleActionHeartbeatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRecordLifecycleActionHeartbeatResponse.prototype, "statusCode", void 0);
    return PostRecordLifecycleActionHeartbeatResponse;
}(SpeakeasyBase));
export { PostRecordLifecycleActionHeartbeatResponse };
