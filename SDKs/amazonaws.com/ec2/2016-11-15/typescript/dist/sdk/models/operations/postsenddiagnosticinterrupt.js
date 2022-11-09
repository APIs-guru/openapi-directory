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
export var PostSendDiagnosticInterruptActionEnum;
(function (PostSendDiagnosticInterruptActionEnum) {
    PostSendDiagnosticInterruptActionEnum["SendDiagnosticInterrupt"] = "SendDiagnosticInterrupt";
})(PostSendDiagnosticInterruptActionEnum || (PostSendDiagnosticInterruptActionEnum = {}));
export var PostSendDiagnosticInterruptVersionEnum;
(function (PostSendDiagnosticInterruptVersionEnum) {
    PostSendDiagnosticInterruptVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostSendDiagnosticInterruptVersionEnum || (PostSendDiagnosticInterruptVersionEnum = {}));
var PostSendDiagnosticInterruptQueryParams = /** @class */ (function (_super) {
    __extends(PostSendDiagnosticInterruptQueryParams, _super);
    function PostSendDiagnosticInterruptQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSendDiagnosticInterruptQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSendDiagnosticInterruptQueryParams.prototype, "version", void 0);
    return PostSendDiagnosticInterruptQueryParams;
}(SpeakeasyBase));
export { PostSendDiagnosticInterruptQueryParams };
var PostSendDiagnosticInterruptHeaders = /** @class */ (function (_super) {
    __extends(PostSendDiagnosticInterruptHeaders, _super);
    function PostSendDiagnosticInterruptHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSendDiagnosticInterruptHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSendDiagnosticInterruptHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSendDiagnosticInterruptHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSendDiagnosticInterruptHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSendDiagnosticInterruptHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSendDiagnosticInterruptHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSendDiagnosticInterruptHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSendDiagnosticInterruptHeaders;
}(SpeakeasyBase));
export { PostSendDiagnosticInterruptHeaders };
var PostSendDiagnosticInterruptRequest = /** @class */ (function (_super) {
    __extends(PostSendDiagnosticInterruptRequest, _super);
    function PostSendDiagnosticInterruptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostSendDiagnosticInterruptQueryParams)
    ], PostSendDiagnosticInterruptRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostSendDiagnosticInterruptHeaders)
    ], PostSendDiagnosticInterruptRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSendDiagnosticInterruptRequest.prototype, "request", void 0);
    return PostSendDiagnosticInterruptRequest;
}(SpeakeasyBase));
export { PostSendDiagnosticInterruptRequest };
var PostSendDiagnosticInterruptResponse = /** @class */ (function (_super) {
    __extends(PostSendDiagnosticInterruptResponse, _super);
    function PostSendDiagnosticInterruptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostSendDiagnosticInterruptResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostSendDiagnosticInterruptResponse.prototype, "statusCode", void 0);
    return PostSendDiagnosticInterruptResponse;
}(SpeakeasyBase));
export { PostSendDiagnosticInterruptResponse };
