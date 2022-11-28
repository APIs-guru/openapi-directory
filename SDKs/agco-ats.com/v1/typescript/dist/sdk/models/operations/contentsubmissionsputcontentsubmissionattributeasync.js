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
var ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams = /** @class */ (function (_super) {
    __extends(ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams, _super);
    function ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionAttributeID" }),
        __metadata("design:type", Number)
    ], ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams.prototype, "contentSubmissionAttributeId", void 0);
    return ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams;
}(SpeakeasyBase));
export { ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams };
var ContentSubmissionsPutContentSubmissionAttributeAsyncRequests = /** @class */ (function (_super) {
    __extends(ContentSubmissionsPutContentSubmissionAttributeAsyncRequests, _super);
    function ContentSubmissionsPutContentSubmissionAttributeAsyncRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ContentSubmissionsPutContentSubmissionAttributeAsyncRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute)
    ], ContentSubmissionsPutContentSubmissionAttributeAsyncRequests.prototype, "contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute)
    ], ContentSubmissionsPutContentSubmissionAttributeAsyncRequests.prototype, "contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute)
    ], ContentSubmissionsPutContentSubmissionAttributeAsyncRequests.prototype, "contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ContentSubmissionsPutContentSubmissionAttributeAsyncRequests.prototype, "textXml", void 0);
    return ContentSubmissionsPutContentSubmissionAttributeAsyncRequests;
}(SpeakeasyBase));
export { ContentSubmissionsPutContentSubmissionAttributeAsyncRequests };
var ContentSubmissionsPutContentSubmissionAttributeAsyncRequest = /** @class */ (function (_super) {
    __extends(ContentSubmissionsPutContentSubmissionAttributeAsyncRequest, _super);
    function ContentSubmissionsPutContentSubmissionAttributeAsyncRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams)
    ], ContentSubmissionsPutContentSubmissionAttributeAsyncRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentSubmissionsPutContentSubmissionAttributeAsyncRequests)
    ], ContentSubmissionsPutContentSubmissionAttributeAsyncRequest.prototype, "request", void 0);
    return ContentSubmissionsPutContentSubmissionAttributeAsyncRequest;
}(SpeakeasyBase));
export { ContentSubmissionsPutContentSubmissionAttributeAsyncRequest };
var ContentSubmissionsPutContentSubmissionAttributeAsyncResponse = /** @class */ (function (_super) {
    __extends(ContentSubmissionsPutContentSubmissionAttributeAsyncResponse, _super);
    function ContentSubmissionsPutContentSubmissionAttributeAsyncResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ContentSubmissionsPutContentSubmissionAttributeAsyncResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentSubmissionsPutContentSubmissionAttributeAsyncResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentSubmissionsPutContentSubmissionAttributeAsyncResponse.prototype, "statusCode", void 0);
    return ContentSubmissionsPutContentSubmissionAttributeAsyncResponse;
}(SpeakeasyBase));
export { ContentSubmissionsPutContentSubmissionAttributeAsyncResponse };
