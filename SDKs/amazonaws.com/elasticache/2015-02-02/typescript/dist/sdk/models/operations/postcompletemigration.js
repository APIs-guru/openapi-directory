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
export var PostCompleteMigrationActionEnum;
(function (PostCompleteMigrationActionEnum) {
    PostCompleteMigrationActionEnum["CompleteMigration"] = "CompleteMigration";
})(PostCompleteMigrationActionEnum || (PostCompleteMigrationActionEnum = {}));
export var PostCompleteMigrationVersionEnum;
(function (PostCompleteMigrationVersionEnum) {
    PostCompleteMigrationVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostCompleteMigrationVersionEnum || (PostCompleteMigrationVersionEnum = {}));
var PostCompleteMigrationQueryParams = /** @class */ (function (_super) {
    __extends(PostCompleteMigrationQueryParams, _super);
    function PostCompleteMigrationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCompleteMigrationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCompleteMigrationQueryParams.prototype, "version", void 0);
    return PostCompleteMigrationQueryParams;
}(SpeakeasyBase));
export { PostCompleteMigrationQueryParams };
var PostCompleteMigrationHeaders = /** @class */ (function (_super) {
    __extends(PostCompleteMigrationHeaders, _super);
    function PostCompleteMigrationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCompleteMigrationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCompleteMigrationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCompleteMigrationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCompleteMigrationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCompleteMigrationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCompleteMigrationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCompleteMigrationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCompleteMigrationHeaders;
}(SpeakeasyBase));
export { PostCompleteMigrationHeaders };
var PostCompleteMigrationRequest = /** @class */ (function (_super) {
    __extends(PostCompleteMigrationRequest, _super);
    function PostCompleteMigrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCompleteMigrationQueryParams)
    ], PostCompleteMigrationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCompleteMigrationHeaders)
    ], PostCompleteMigrationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCompleteMigrationRequest.prototype, "request", void 0);
    return PostCompleteMigrationRequest;
}(SpeakeasyBase));
export { PostCompleteMigrationRequest };
var PostCompleteMigrationResponse = /** @class */ (function (_super) {
    __extends(PostCompleteMigrationResponse, _super);
    function PostCompleteMigrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCompleteMigrationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCompleteMigrationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCompleteMigrationResponse.prototype, "statusCode", void 0);
    return PostCompleteMigrationResponse;
}(SpeakeasyBase));
export { PostCompleteMigrationResponse };
