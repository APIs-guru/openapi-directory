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
var ContentSubmissionsPostContentSubmissionAttributePathParams = /** @class */ (function (_super) {
    __extends(ContentSubmissionsPostContentSubmissionAttributePathParams, _super);
    function ContentSubmissionsPostContentSubmissionAttributePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionID" }),
        __metadata("design:type", Number)
    ], ContentSubmissionsPostContentSubmissionAttributePathParams.prototype, "contentSubmissionId", void 0);
    return ContentSubmissionsPostContentSubmissionAttributePathParams;
}(SpeakeasyBase));
export { ContentSubmissionsPostContentSubmissionAttributePathParams };
var ContentSubmissionsPostContentSubmissionAttributeRequests = /** @class */ (function (_super) {
    __extends(ContentSubmissionsPostContentSubmissionAttributeRequests, _super);
    function ContentSubmissionsPostContentSubmissionAttributeRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ContentSubmissionsPostContentSubmissionAttributeRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute)
    ], ContentSubmissionsPostContentSubmissionAttributeRequests.prototype, "contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute)
    ], ContentSubmissionsPostContentSubmissionAttributeRequests.prototype, "contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute)
    ], ContentSubmissionsPostContentSubmissionAttributeRequests.prototype, "contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ContentSubmissionsPostContentSubmissionAttributeRequests.prototype, "textXml", void 0);
    return ContentSubmissionsPostContentSubmissionAttributeRequests;
}(SpeakeasyBase));
export { ContentSubmissionsPostContentSubmissionAttributeRequests };
var ContentSubmissionsPostContentSubmissionAttributeRequest = /** @class */ (function (_super) {
    __extends(ContentSubmissionsPostContentSubmissionAttributeRequest, _super);
    function ContentSubmissionsPostContentSubmissionAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentSubmissionsPostContentSubmissionAttributePathParams)
    ], ContentSubmissionsPostContentSubmissionAttributeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentSubmissionsPostContentSubmissionAttributeRequests)
    ], ContentSubmissionsPostContentSubmissionAttributeRequest.prototype, "request", void 0);
    return ContentSubmissionsPostContentSubmissionAttributeRequest;
}(SpeakeasyBase));
export { ContentSubmissionsPostContentSubmissionAttributeRequest };
var ContentSubmissionsPostContentSubmissionAttributeResponse = /** @class */ (function (_super) {
    __extends(ContentSubmissionsPostContentSubmissionAttributeResponse, _super);
    function ContentSubmissionsPostContentSubmissionAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ContentSubmissionsPostContentSubmissionAttributeResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ContentSubmissionsPostContentSubmissionAttributeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentSubmissionsPostContentSubmissionAttributeResponse.prototype, "contentSubmissionsPostContentSubmissionAttribute200ApplicationJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentSubmissionsPostContentSubmissionAttributeResponse.prototype, "contentSubmissionsPostContentSubmissionAttribute200TextJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentSubmissionsPostContentSubmissionAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentSubmissionsPostContentSubmissionAttributeResponse.prototype, "statusCode", void 0);
    return ContentSubmissionsPostContentSubmissionAttributeResponse;
}(SpeakeasyBase));
export { ContentSubmissionsPostContentSubmissionAttributeResponse };
