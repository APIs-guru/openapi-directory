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
var TranslationRequestsUpdateTranslationRequestPathParams = /** @class */ (function (_super) {
    __extends(TranslationRequestsUpdateTranslationRequestPathParams, _super);
    function TranslationRequestsUpdateTranslationRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Id" }),
        __metadata("design:type", Number)
    ], TranslationRequestsUpdateTranslationRequestPathParams.prototype, "id", void 0);
    return TranslationRequestsUpdateTranslationRequestPathParams;
}(SpeakeasyBase));
export { TranslationRequestsUpdateTranslationRequestPathParams };
var TranslationRequestsUpdateTranslationRequestQueryParams = /** @class */ (function (_super) {
    __extends(TranslationRequestsUpdateTranslationRequestQueryParams, _super);
    function TranslationRequestsUpdateTranslationRequestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doResendRequest" }),
        __metadata("design:type", Boolean)
    ], TranslationRequestsUpdateTranslationRequestQueryParams.prototype, "doResendRequest", void 0);
    return TranslationRequestsUpdateTranslationRequestQueryParams;
}(SpeakeasyBase));
export { TranslationRequestsUpdateTranslationRequestQueryParams };
var TranslationRequestsUpdateTranslationRequestRequests = /** @class */ (function (_super) {
    __extends(TranslationRequestsUpdateTranslationRequestRequests, _super);
    function TranslationRequestsUpdateTranslationRequestRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], TranslationRequestsUpdateTranslationRequestRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsTranslationRequest)
    ], TranslationRequestsUpdateTranslationRequestRequests.prototype, "globalResourcesSharedModelsTranslationRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsTranslationRequest)
    ], TranslationRequestsUpdateTranslationRequestRequests.prototype, "globalResourcesSharedModelsTranslationRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsTranslationRequest)
    ], TranslationRequestsUpdateTranslationRequestRequests.prototype, "globalResourcesSharedModelsTranslationRequest2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], TranslationRequestsUpdateTranslationRequestRequests.prototype, "textXml", void 0);
    return TranslationRequestsUpdateTranslationRequestRequests;
}(SpeakeasyBase));
export { TranslationRequestsUpdateTranslationRequestRequests };
var TranslationRequestsUpdateTranslationRequestRequest = /** @class */ (function (_super) {
    __extends(TranslationRequestsUpdateTranslationRequestRequest, _super);
    function TranslationRequestsUpdateTranslationRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslationRequestsUpdateTranslationRequestPathParams)
    ], TranslationRequestsUpdateTranslationRequestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslationRequestsUpdateTranslationRequestQueryParams)
    ], TranslationRequestsUpdateTranslationRequestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslationRequestsUpdateTranslationRequestRequests)
    ], TranslationRequestsUpdateTranslationRequestRequest.prototype, "request", void 0);
    return TranslationRequestsUpdateTranslationRequestRequest;
}(SpeakeasyBase));
export { TranslationRequestsUpdateTranslationRequestRequest };
var TranslationRequestsUpdateTranslationRequestResponse = /** @class */ (function (_super) {
    __extends(TranslationRequestsUpdateTranslationRequestResponse, _super);
    function TranslationRequestsUpdateTranslationRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TranslationRequestsUpdateTranslationRequestResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslationRequestsUpdateTranslationRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslationRequestsUpdateTranslationRequestResponse.prototype, "statusCode", void 0);
    return TranslationRequestsUpdateTranslationRequestResponse;
}(SpeakeasyBase));
export { TranslationRequestsUpdateTranslationRequestResponse };
