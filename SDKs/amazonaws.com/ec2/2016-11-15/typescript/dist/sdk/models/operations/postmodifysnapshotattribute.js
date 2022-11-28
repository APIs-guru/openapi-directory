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
export var PostModifySnapshotAttributeActionEnum;
(function (PostModifySnapshotAttributeActionEnum) {
    PostModifySnapshotAttributeActionEnum["ModifySnapshotAttribute"] = "ModifySnapshotAttribute";
})(PostModifySnapshotAttributeActionEnum || (PostModifySnapshotAttributeActionEnum = {}));
export var PostModifySnapshotAttributeVersionEnum;
(function (PostModifySnapshotAttributeVersionEnum) {
    PostModifySnapshotAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifySnapshotAttributeVersionEnum || (PostModifySnapshotAttributeVersionEnum = {}));
var PostModifySnapshotAttributeQueryParams = /** @class */ (function (_super) {
    __extends(PostModifySnapshotAttributeQueryParams, _super);
    function PostModifySnapshotAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifySnapshotAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifySnapshotAttributeQueryParams.prototype, "version", void 0);
    return PostModifySnapshotAttributeQueryParams;
}(SpeakeasyBase));
export { PostModifySnapshotAttributeQueryParams };
var PostModifySnapshotAttributeHeaders = /** @class */ (function (_super) {
    __extends(PostModifySnapshotAttributeHeaders, _super);
    function PostModifySnapshotAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifySnapshotAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifySnapshotAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifySnapshotAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifySnapshotAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifySnapshotAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifySnapshotAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifySnapshotAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifySnapshotAttributeHeaders;
}(SpeakeasyBase));
export { PostModifySnapshotAttributeHeaders };
var PostModifySnapshotAttributeRequest = /** @class */ (function (_super) {
    __extends(PostModifySnapshotAttributeRequest, _super);
    function PostModifySnapshotAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifySnapshotAttributeQueryParams)
    ], PostModifySnapshotAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifySnapshotAttributeHeaders)
    ], PostModifySnapshotAttributeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifySnapshotAttributeRequest.prototype, "request", void 0);
    return PostModifySnapshotAttributeRequest;
}(SpeakeasyBase));
export { PostModifySnapshotAttributeRequest };
var PostModifySnapshotAttributeResponse = /** @class */ (function (_super) {
    __extends(PostModifySnapshotAttributeResponse, _super);
    function PostModifySnapshotAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifySnapshotAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifySnapshotAttributeResponse.prototype, "statusCode", void 0);
    return PostModifySnapshotAttributeResponse;
}(SpeakeasyBase));
export { PostModifySnapshotAttributeResponse };
