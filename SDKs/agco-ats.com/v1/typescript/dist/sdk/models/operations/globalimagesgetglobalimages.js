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
var GlobalImagesGetGlobalImagesQueryParams = /** @class */ (function (_super) {
    __extends(GlobalImagesGetGlobalImagesQueryParams, _super);
    function GlobalImagesGetGlobalImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryId" }),
        __metadata("design:type", String)
    ], GlobalImagesGetGlobalImagesQueryParams.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" }),
        __metadata("design:type", Boolean)
    ], GlobalImagesGetGlobalImagesQueryParams.prototype, "includeDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GlobalImagesGetGlobalImagesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GlobalImagesGetGlobalImagesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publisher" }),
        __metadata("design:type", String)
    ], GlobalImagesGetGlobalImagesQueryParams.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GlobalImagesGetGlobalImagesQueryParams.prototype, "search", void 0);
    return GlobalImagesGetGlobalImagesQueryParams;
}(SpeakeasyBase));
export { GlobalImagesGetGlobalImagesQueryParams };
var GlobalImagesGetGlobalImagesRequest = /** @class */ (function (_super) {
    __extends(GlobalImagesGetGlobalImagesRequest, _super);
    function GlobalImagesGetGlobalImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GlobalImagesGetGlobalImagesQueryParams)
    ], GlobalImagesGetGlobalImagesRequest.prototype, "queryParams", void 0);
    return GlobalImagesGetGlobalImagesRequest;
}(SpeakeasyBase));
export { GlobalImagesGetGlobalImagesRequest };
var GlobalImagesGetGlobalImagesResponse = /** @class */ (function (_super) {
    __extends(GlobalImagesGetGlobalImagesResponse, _super);
    function GlobalImagesGetGlobalImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiIPagedResponseGlobalResourcesSharedModelsGlobalImage)
    ], GlobalImagesGetGlobalImagesResponse.prototype, "apiIPagedResponseGlobalResourcesSharedModelsGlobalImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], GlobalImagesGetGlobalImagesResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GlobalImagesGetGlobalImagesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GlobalImagesGetGlobalImagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GlobalImagesGetGlobalImagesResponse.prototype, "statusCode", void 0);
    return GlobalImagesGetGlobalImagesResponse;
}(SpeakeasyBase));
export { GlobalImagesGetGlobalImagesResponse };
