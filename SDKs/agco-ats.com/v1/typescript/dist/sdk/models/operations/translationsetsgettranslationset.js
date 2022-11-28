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
var TranslationSetsGetTranslationSetPathParams = /** @class */ (function (_super) {
    __extends(TranslationSetsGetTranslationSetPathParams, _super);
    function TranslationSetsGetTranslationSetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" }),
        __metadata("design:type", Number)
    ], TranslationSetsGetTranslationSetPathParams.prototype, "id", void 0);
    return TranslationSetsGetTranslationSetPathParams;
}(SpeakeasyBase));
export { TranslationSetsGetTranslationSetPathParams };
var TranslationSetsGetTranslationSetQueryParams = /** @class */ (function (_super) {
    __extends(TranslationSetsGetTranslationSetQueryParams, _super);
    function TranslationSetsGetTranslationSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" }),
        __metadata("design:type", String)
    ], TranslationSetsGetTranslationSetQueryParams.prototype, "includeAttributes", void 0);
    return TranslationSetsGetTranslationSetQueryParams;
}(SpeakeasyBase));
export { TranslationSetsGetTranslationSetQueryParams };
var TranslationSetsGetTranslationSetRequest = /** @class */ (function (_super) {
    __extends(TranslationSetsGetTranslationSetRequest, _super);
    function TranslationSetsGetTranslationSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslationSetsGetTranslationSetPathParams)
    ], TranslationSetsGetTranslationSetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslationSetsGetTranslationSetQueryParams)
    ], TranslationSetsGetTranslationSetRequest.prototype, "queryParams", void 0);
    return TranslationSetsGetTranslationSetRequest;
}(SpeakeasyBase));
export { TranslationSetsGetTranslationSetRequest };
var TranslationSetsGetTranslationSetResponse = /** @class */ (function (_super) {
    __extends(TranslationSetsGetTranslationSetResponse, _super);
    function TranslationSetsGetTranslationSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], TranslationSetsGetTranslationSetResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TranslationSetsGetTranslationSetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslationSetsGetTranslationSetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GlobalResourcesSharedModelsTranslationSet)
    ], TranslationSetsGetTranslationSetResponse.prototype, "globalResourcesSharedModelsTranslationSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslationSetsGetTranslationSetResponse.prototype, "statusCode", void 0);
    return TranslationSetsGetTranslationSetResponse;
}(SpeakeasyBase));
export { TranslationSetsGetTranslationSetResponse };
