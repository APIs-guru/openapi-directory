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
var PutContainerRecipePolicyHeaders = /** @class */ (function (_super) {
    __extends(PutContainerRecipePolicyHeaders, _super);
    function PutContainerRecipePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutContainerRecipePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutContainerRecipePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutContainerRecipePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutContainerRecipePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutContainerRecipePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutContainerRecipePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutContainerRecipePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutContainerRecipePolicyHeaders;
}(SpeakeasyBase));
export { PutContainerRecipePolicyHeaders };
var PutContainerRecipePolicyRequestBody = /** @class */ (function (_super) {
    __extends(PutContainerRecipePolicyRequestBody, _super);
    function PutContainerRecipePolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=containerRecipeArn" }),
        __metadata("design:type", String)
    ], PutContainerRecipePolicyRequestBody.prototype, "containerRecipeArn", void 0);
    __decorate([
        Metadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], PutContainerRecipePolicyRequestBody.prototype, "policy", void 0);
    return PutContainerRecipePolicyRequestBody;
}(SpeakeasyBase));
export { PutContainerRecipePolicyRequestBody };
var PutContainerRecipePolicyRequest = /** @class */ (function (_super) {
    __extends(PutContainerRecipePolicyRequest, _super);
    function PutContainerRecipePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutContainerRecipePolicyHeaders)
    ], PutContainerRecipePolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutContainerRecipePolicyRequestBody)
    ], PutContainerRecipePolicyRequest.prototype, "request", void 0);
    return PutContainerRecipePolicyRequest;
}(SpeakeasyBase));
export { PutContainerRecipePolicyRequest };
var PutContainerRecipePolicyResponse = /** @class */ (function (_super) {
    __extends(PutContainerRecipePolicyResponse, _super);
    function PutContainerRecipePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutContainerRecipePolicyResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutContainerRecipePolicyResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutContainerRecipePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutContainerRecipePolicyResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutContainerRecipePolicyResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutContainerRecipePolicyResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PutContainerRecipePolicyResponse)
    ], PutContainerRecipePolicyResponse.prototype, "putContainerRecipePolicyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutContainerRecipePolicyResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutContainerRecipePolicyResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutContainerRecipePolicyResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutContainerRecipePolicyResponse.prototype, "statusCode", void 0);
    return PutContainerRecipePolicyResponse;
}(SpeakeasyBase));
export { PutContainerRecipePolicyResponse };
