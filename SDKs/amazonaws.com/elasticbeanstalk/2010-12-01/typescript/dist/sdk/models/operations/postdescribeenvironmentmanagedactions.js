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
export var PostDescribeEnvironmentManagedActionsActionEnum;
(function (PostDescribeEnvironmentManagedActionsActionEnum) {
    PostDescribeEnvironmentManagedActionsActionEnum["DescribeEnvironmentManagedActions"] = "DescribeEnvironmentManagedActions";
})(PostDescribeEnvironmentManagedActionsActionEnum || (PostDescribeEnvironmentManagedActionsActionEnum = {}));
export var PostDescribeEnvironmentManagedActionsVersionEnum;
(function (PostDescribeEnvironmentManagedActionsVersionEnum) {
    PostDescribeEnvironmentManagedActionsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDescribeEnvironmentManagedActionsVersionEnum || (PostDescribeEnvironmentManagedActionsVersionEnum = {}));
var PostDescribeEnvironmentManagedActionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentManagedActionsQueryParams, _super);
    function PostDescribeEnvironmentManagedActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionsQueryParams.prototype, "version", void 0);
    return PostDescribeEnvironmentManagedActionsQueryParams;
}(SpeakeasyBase));
export { PostDescribeEnvironmentManagedActionsQueryParams };
var PostDescribeEnvironmentManagedActionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentManagedActionsHeaders, _super);
    function PostDescribeEnvironmentManagedActionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeEnvironmentManagedActionsHeaders;
}(SpeakeasyBase));
export { PostDescribeEnvironmentManagedActionsHeaders };
var PostDescribeEnvironmentManagedActionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentManagedActionsRequest, _super);
    function PostDescribeEnvironmentManagedActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeEnvironmentManagedActionsQueryParams)
    ], PostDescribeEnvironmentManagedActionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeEnvironmentManagedActionsHeaders)
    ], PostDescribeEnvironmentManagedActionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEnvironmentManagedActionsRequest.prototype, "request", void 0);
    return PostDescribeEnvironmentManagedActionsRequest;
}(SpeakeasyBase));
export { PostDescribeEnvironmentManagedActionsRequest };
var PostDescribeEnvironmentManagedActionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentManagedActionsResponse, _super);
    function PostDescribeEnvironmentManagedActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEnvironmentManagedActionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeEnvironmentManagedActionsResponse.prototype, "statusCode", void 0);
    return PostDescribeEnvironmentManagedActionsResponse;
}(SpeakeasyBase));
export { PostDescribeEnvironmentManagedActionsResponse };
