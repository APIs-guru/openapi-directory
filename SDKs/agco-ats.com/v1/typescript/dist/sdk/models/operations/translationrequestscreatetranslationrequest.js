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
var TranslationRequestsCreateTranslationRequestRequests = /** @class */ (function (_super) {
    __extends(TranslationRequestsCreateTranslationRequestRequests, _super);
    function TranslationRequestsCreateTranslationRequestRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], TranslationRequestsCreateTranslationRequestRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsTranslationRequest)
    ], TranslationRequestsCreateTranslationRequestRequests.prototype, "globalResourcesSharedModelsTranslationRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsTranslationRequest)
    ], TranslationRequestsCreateTranslationRequestRequests.prototype, "globalResourcesSharedModelsTranslationRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsTranslationRequest)
    ], TranslationRequestsCreateTranslationRequestRequests.prototype, "globalResourcesSharedModelsTranslationRequest2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], TranslationRequestsCreateTranslationRequestRequests.prototype, "textXml", void 0);
    return TranslationRequestsCreateTranslationRequestRequests;
}(SpeakeasyBase));
export { TranslationRequestsCreateTranslationRequestRequests };
var TranslationRequestsCreateTranslationRequestRequest = /** @class */ (function (_super) {
    __extends(TranslationRequestsCreateTranslationRequestRequest, _super);
    function TranslationRequestsCreateTranslationRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslationRequestsCreateTranslationRequestRequests)
    ], TranslationRequestsCreateTranslationRequestRequest.prototype, "request", void 0);
    return TranslationRequestsCreateTranslationRequestRequest;
}(SpeakeasyBase));
export { TranslationRequestsCreateTranslationRequestRequest };
var TranslationRequestsCreateTranslationRequestResponse = /** @class */ (function (_super) {
    __extends(TranslationRequestsCreateTranslationRequestResponse, _super);
    function TranslationRequestsCreateTranslationRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], TranslationRequestsCreateTranslationRequestResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TranslationRequestsCreateTranslationRequestResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslationRequestsCreateTranslationRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslationRequestsCreateTranslationRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslationRequestsCreateTranslationRequestResponse.prototype, "translationRequestsCreateTranslationRequest200ApplicationJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslationRequestsCreateTranslationRequestResponse.prototype, "translationRequestsCreateTranslationRequest200TextJsonInt32Integer", void 0);
    return TranslationRequestsCreateTranslationRequestResponse;
}(SpeakeasyBase));
export { TranslationRequestsCreateTranslationRequestResponse };
