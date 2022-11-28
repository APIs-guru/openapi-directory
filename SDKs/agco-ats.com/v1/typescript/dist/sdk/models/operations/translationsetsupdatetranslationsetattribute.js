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
var TranslationSetsUpdateTranslationSetAttributePathParams = /** @class */ (function (_super) {
    __extends(TranslationSetsUpdateTranslationSetAttributePathParams, _super);
    function TranslationSetsUpdateTranslationSetAttributePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" }),
        __metadata("design:type", Number)
    ], TranslationSetsUpdateTranslationSetAttributePathParams.prototype, "id", void 0);
    return TranslationSetsUpdateTranslationSetAttributePathParams;
}(SpeakeasyBase));
export { TranslationSetsUpdateTranslationSetAttributePathParams };
var TranslationSetsUpdateTranslationSetAttributeRequests = /** @class */ (function (_super) {
    __extends(TranslationSetsUpdateTranslationSetAttributeRequests, _super);
    function TranslationSetsUpdateTranslationSetAttributeRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], TranslationSetsUpdateTranslationSetAttributeRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsTranslationSetAttribute)
    ], TranslationSetsUpdateTranslationSetAttributeRequests.prototype, "globalResourcesSharedModelsTranslationSetAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsTranslationSetAttribute)
    ], TranslationSetsUpdateTranslationSetAttributeRequests.prototype, "globalResourcesSharedModelsTranslationSetAttribute1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsTranslationSetAttribute)
    ], TranslationSetsUpdateTranslationSetAttributeRequests.prototype, "globalResourcesSharedModelsTranslationSetAttribute2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], TranslationSetsUpdateTranslationSetAttributeRequests.prototype, "textXml", void 0);
    return TranslationSetsUpdateTranslationSetAttributeRequests;
}(SpeakeasyBase));
export { TranslationSetsUpdateTranslationSetAttributeRequests };
var TranslationSetsUpdateTranslationSetAttributeRequest = /** @class */ (function (_super) {
    __extends(TranslationSetsUpdateTranslationSetAttributeRequest, _super);
    function TranslationSetsUpdateTranslationSetAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslationSetsUpdateTranslationSetAttributePathParams)
    ], TranslationSetsUpdateTranslationSetAttributeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslationSetsUpdateTranslationSetAttributeRequests)
    ], TranslationSetsUpdateTranslationSetAttributeRequest.prototype, "request", void 0);
    return TranslationSetsUpdateTranslationSetAttributeRequest;
}(SpeakeasyBase));
export { TranslationSetsUpdateTranslationSetAttributeRequest };
var TranslationSetsUpdateTranslationSetAttributeResponse = /** @class */ (function (_super) {
    __extends(TranslationSetsUpdateTranslationSetAttributeResponse, _super);
    function TranslationSetsUpdateTranslationSetAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TranslationSetsUpdateTranslationSetAttributeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslationSetsUpdateTranslationSetAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslationSetsUpdateTranslationSetAttributeResponse.prototype, "statusCode", void 0);
    return TranslationSetsUpdateTranslationSetAttributeResponse;
}(SpeakeasyBase));
export { TranslationSetsUpdateTranslationSetAttributeResponse };
