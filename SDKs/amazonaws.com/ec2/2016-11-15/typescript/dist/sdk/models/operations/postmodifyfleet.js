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
export var PostModifyFleetActionEnum;
(function (PostModifyFleetActionEnum) {
    PostModifyFleetActionEnum["ModifyFleet"] = "ModifyFleet";
})(PostModifyFleetActionEnum || (PostModifyFleetActionEnum = {}));
export var PostModifyFleetVersionEnum;
(function (PostModifyFleetVersionEnum) {
    PostModifyFleetVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyFleetVersionEnum || (PostModifyFleetVersionEnum = {}));
var PostModifyFleetQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyFleetQueryParams, _super);
    function PostModifyFleetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyFleetQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyFleetQueryParams.prototype, "version", void 0);
    return PostModifyFleetQueryParams;
}(SpeakeasyBase));
export { PostModifyFleetQueryParams };
var PostModifyFleetHeaders = /** @class */ (function (_super) {
    __extends(PostModifyFleetHeaders, _super);
    function PostModifyFleetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyFleetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyFleetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyFleetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyFleetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyFleetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyFleetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyFleetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyFleetHeaders;
}(SpeakeasyBase));
export { PostModifyFleetHeaders };
var PostModifyFleetRequest = /** @class */ (function (_super) {
    __extends(PostModifyFleetRequest, _super);
    function PostModifyFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyFleetQueryParams)
    ], PostModifyFleetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyFleetHeaders)
    ], PostModifyFleetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyFleetRequest.prototype, "request", void 0);
    return PostModifyFleetRequest;
}(SpeakeasyBase));
export { PostModifyFleetRequest };
var PostModifyFleetResponse = /** @class */ (function (_super) {
    __extends(PostModifyFleetResponse, _super);
    function PostModifyFleetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyFleetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifyFleetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifyFleetResponse.prototype, "statusCode", void 0);
    return PostModifyFleetResponse;
}(SpeakeasyBase));
export { PostModifyFleetResponse };
