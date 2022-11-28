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
var StringTranslationsGetTranslationsQueryParams = /** @class */ (function (_super) {
    __extends(StringTranslationsGetTranslationsQueryParams, _super);
    function StringTranslationsGetTranslationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], StringTranslationsGetTranslationsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modifiedAfterTimestamp" }),
        __metadata("design:type", String)
    ], StringTranslationsGetTranslationsQueryParams.prototype, "modifiedAfterTimestamp", void 0);
    return StringTranslationsGetTranslationsQueryParams;
}(SpeakeasyBase));
export { StringTranslationsGetTranslationsQueryParams };
var StringTranslationsGetTranslationsRequest = /** @class */ (function (_super) {
    __extends(StringTranslationsGetTranslationsRequest, _super);
    function StringTranslationsGetTranslationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StringTranslationsGetTranslationsQueryParams)
    ], StringTranslationsGetTranslationsRequest.prototype, "queryParams", void 0);
    return StringTranslationsGetTranslationsRequest;
}(SpeakeasyBase));
export { StringTranslationsGetTranslationsRequest };
var StringTranslationsGetTranslationsResponse = /** @class */ (function (_super) {
    __extends(StringTranslationsGetTranslationsResponse, _super);
    function StringTranslationsGetTranslationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiIPagedResponseGlobalResourcesSharedModelsStringTranslation)
    ], StringTranslationsGetTranslationsResponse.prototype, "apiIPagedResponseGlobalResourcesSharedModelsStringTranslation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], StringTranslationsGetTranslationsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], StringTranslationsGetTranslationsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StringTranslationsGetTranslationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StringTranslationsGetTranslationsResponse.prototype, "statusCode", void 0);
    return StringTranslationsGetTranslationsResponse;
}(SpeakeasyBase));
export { StringTranslationsGetTranslationsResponse };
