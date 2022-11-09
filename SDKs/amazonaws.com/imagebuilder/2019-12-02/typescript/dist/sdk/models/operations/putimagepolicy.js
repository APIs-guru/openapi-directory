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
import * as shared from "../shared";
var PutImagePolicyHeaders = /** @class */ (function (_super) {
    __extends(PutImagePolicyHeaders, _super);
    function PutImagePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutImagePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutImagePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutImagePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutImagePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutImagePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutImagePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutImagePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutImagePolicyHeaders;
}(SpeakeasyBase));
export { PutImagePolicyHeaders };
var PutImagePolicyRequestBody = /** @class */ (function (_super) {
    __extends(PutImagePolicyRequestBody, _super);
    function PutImagePolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=imageArn" }),
        __metadata("design:type", String)
    ], PutImagePolicyRequestBody.prototype, "imageArn", void 0);
    __decorate([
        Metadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], PutImagePolicyRequestBody.prototype, "policy", void 0);
    return PutImagePolicyRequestBody;
}(SpeakeasyBase));
export { PutImagePolicyRequestBody };
var PutImagePolicyRequest = /** @class */ (function (_super) {
    __extends(PutImagePolicyRequest, _super);
    function PutImagePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutImagePolicyHeaders)
    ], PutImagePolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutImagePolicyRequestBody)
    ], PutImagePolicyRequest.prototype, "request", void 0);
    return PutImagePolicyRequest;
}(SpeakeasyBase));
export { PutImagePolicyRequest };
var PutImagePolicyResponse = /** @class */ (function (_super) {
    __extends(PutImagePolicyResponse, _super);
    function PutImagePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImagePolicyResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImagePolicyResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutImagePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImagePolicyResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImagePolicyResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImagePolicyResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PutImagePolicyResponse)
    ], PutImagePolicyResponse.prototype, "putImagePolicyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImagePolicyResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImagePolicyResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImagePolicyResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutImagePolicyResponse.prototype, "statusCode", void 0);
    return PutImagePolicyResponse;
}(SpeakeasyBase));
export { PutImagePolicyResponse };
