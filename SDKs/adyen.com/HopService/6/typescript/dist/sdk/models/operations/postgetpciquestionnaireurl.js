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
import * as shared from "../shared";
var PostGetPciQuestionnaireUrlSecurity = /** @class */ (function (_super) {
    __extends(PostGetPciQuestionnaireUrlSecurity, _super);
    function PostGetPciQuestionnaireUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostGetPciQuestionnaireUrlSecurity.prototype, "basicAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostGetPciQuestionnaireUrlSecurity.prototype, "apiKeyAuth", void 0);
    return PostGetPciQuestionnaireUrlSecurity;
}(SpeakeasyBase));
export { PostGetPciQuestionnaireUrlSecurity };
var PostGetPciQuestionnaireUrlRequest = /** @class */ (function (_super) {
    __extends(PostGetPciQuestionnaireUrlRequest, _super);
    function PostGetPciQuestionnaireUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostGetPciQuestionnaireUrlRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetPciQuestionnaireUrlSecurity)
    ], PostGetPciQuestionnaireUrlRequest.prototype, "security", void 0);
    return PostGetPciQuestionnaireUrlRequest;
}(SpeakeasyBase));
export { PostGetPciQuestionnaireUrlRequest };
var PostGetPciQuestionnaireUrlResponse = /** @class */ (function (_super) {
    __extends(PostGetPciQuestionnaireUrlResponse, _super);
    function PostGetPciQuestionnaireUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetPciQuestionnaireUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostGetPciQuestionnaireUrlResponse.prototype, "getPciUrlResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostGetPciQuestionnaireUrlResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetPciQuestionnaireUrlResponse.prototype, "statusCode", void 0);
    return PostGetPciQuestionnaireUrlResponse;
}(SpeakeasyBase));
export { PostGetPciQuestionnaireUrlResponse };
