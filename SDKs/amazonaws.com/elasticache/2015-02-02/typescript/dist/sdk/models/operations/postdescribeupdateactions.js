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
export var PostDescribeUpdateActionsActionEnum;
(function (PostDescribeUpdateActionsActionEnum) {
    PostDescribeUpdateActionsActionEnum["DescribeUpdateActions"] = "DescribeUpdateActions";
})(PostDescribeUpdateActionsActionEnum || (PostDescribeUpdateActionsActionEnum = {}));
export var PostDescribeUpdateActionsVersionEnum;
(function (PostDescribeUpdateActionsVersionEnum) {
    PostDescribeUpdateActionsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDescribeUpdateActionsVersionEnum || (PostDescribeUpdateActionsVersionEnum = {}));
var PostDescribeUpdateActionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeUpdateActionsQueryParams, _super);
    function PostDescribeUpdateActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsQueryParams.prototype, "version", void 0);
    return PostDescribeUpdateActionsQueryParams;
}(SpeakeasyBase));
export { PostDescribeUpdateActionsQueryParams };
var PostDescribeUpdateActionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeUpdateActionsHeaders, _super);
    function PostDescribeUpdateActionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeUpdateActionsHeaders;
}(SpeakeasyBase));
export { PostDescribeUpdateActionsHeaders };
var PostDescribeUpdateActionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeUpdateActionsRequest, _super);
    function PostDescribeUpdateActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeUpdateActionsQueryParams)
    ], PostDescribeUpdateActionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeUpdateActionsHeaders)
    ], PostDescribeUpdateActionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeUpdateActionsRequest.prototype, "request", void 0);
    return PostDescribeUpdateActionsRequest;
}(SpeakeasyBase));
export { PostDescribeUpdateActionsRequest };
var PostDescribeUpdateActionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeUpdateActionsResponse, _super);
    function PostDescribeUpdateActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeUpdateActionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeUpdateActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeUpdateActionsResponse.prototype, "statusCode", void 0);
    return PostDescribeUpdateActionsResponse;
}(SpeakeasyBase));
export { PostDescribeUpdateActionsResponse };
