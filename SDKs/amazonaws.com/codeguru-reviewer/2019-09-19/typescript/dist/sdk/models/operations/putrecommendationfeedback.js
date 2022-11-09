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
var PutRecommendationFeedbackHeaders = /** @class */ (function (_super) {
    __extends(PutRecommendationFeedbackHeaders, _super);
    function PutRecommendationFeedbackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutRecommendationFeedbackHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutRecommendationFeedbackHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutRecommendationFeedbackHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutRecommendationFeedbackHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutRecommendationFeedbackHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutRecommendationFeedbackHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutRecommendationFeedbackHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutRecommendationFeedbackHeaders;
}(SpeakeasyBase));
export { PutRecommendationFeedbackHeaders };
var PutRecommendationFeedbackRequestBody = /** @class */ (function (_super) {
    __extends(PutRecommendationFeedbackRequestBody, _super);
    function PutRecommendationFeedbackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CodeReviewArn" }),
        __metadata("design:type", String)
    ], PutRecommendationFeedbackRequestBody.prototype, "codeReviewArn", void 0);
    __decorate([
        Metadata({ data: "json, name=Reactions" }),
        __metadata("design:type", Array)
    ], PutRecommendationFeedbackRequestBody.prototype, "reactions", void 0);
    __decorate([
        Metadata({ data: "json, name=RecommendationId" }),
        __metadata("design:type", String)
    ], PutRecommendationFeedbackRequestBody.prototype, "recommendationId", void 0);
    return PutRecommendationFeedbackRequestBody;
}(SpeakeasyBase));
export { PutRecommendationFeedbackRequestBody };
var PutRecommendationFeedbackRequest = /** @class */ (function (_super) {
    __extends(PutRecommendationFeedbackRequest, _super);
    function PutRecommendationFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutRecommendationFeedbackHeaders)
    ], PutRecommendationFeedbackRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutRecommendationFeedbackRequestBody)
    ], PutRecommendationFeedbackRequest.prototype, "request", void 0);
    return PutRecommendationFeedbackRequest;
}(SpeakeasyBase));
export { PutRecommendationFeedbackRequest };
var PutRecommendationFeedbackResponse = /** @class */ (function (_super) {
    __extends(PutRecommendationFeedbackResponse, _super);
    function PutRecommendationFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutRecommendationFeedbackResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutRecommendationFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutRecommendationFeedbackResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PutRecommendationFeedbackResponse.prototype, "putRecommendationFeedbackResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutRecommendationFeedbackResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutRecommendationFeedbackResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutRecommendationFeedbackResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutRecommendationFeedbackResponse.prototype, "validationException", void 0);
    return PutRecommendationFeedbackResponse;
}(SpeakeasyBase));
export { PutRecommendationFeedbackResponse };
