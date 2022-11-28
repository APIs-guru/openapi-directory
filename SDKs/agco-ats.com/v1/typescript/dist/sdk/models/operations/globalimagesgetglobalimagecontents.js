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
var GlobalImagesGetGlobalImageContentsPathParams = /** @class */ (function (_super) {
    __extends(GlobalImagesGetGlobalImageContentsPathParams, _super);
    function GlobalImagesGetGlobalImageContentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" }),
        __metadata("design:type", String)
    ], GlobalImagesGetGlobalImageContentsPathParams.prototype, "id", void 0);
    return GlobalImagesGetGlobalImageContentsPathParams;
}(SpeakeasyBase));
export { GlobalImagesGetGlobalImageContentsPathParams };
var GlobalImagesGetGlobalImageContentsQueryParams = /** @class */ (function (_super) {
    __extends(GlobalImagesGetGlobalImageContentsQueryParams, _super);
    function GlobalImagesGetGlobalImageContentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFullImage" }),
        __metadata("design:type", Boolean)
    ], GlobalImagesGetGlobalImageContentsQueryParams.prototype, "isFullImage", void 0);
    return GlobalImagesGetGlobalImageContentsQueryParams;
}(SpeakeasyBase));
export { GlobalImagesGetGlobalImageContentsQueryParams };
var GlobalImagesGetGlobalImageContentsRequest = /** @class */ (function (_super) {
    __extends(GlobalImagesGetGlobalImageContentsRequest, _super);
    function GlobalImagesGetGlobalImageContentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GlobalImagesGetGlobalImageContentsPathParams)
    ], GlobalImagesGetGlobalImageContentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GlobalImagesGetGlobalImageContentsQueryParams)
    ], GlobalImagesGetGlobalImageContentsRequest.prototype, "queryParams", void 0);
    return GlobalImagesGetGlobalImageContentsRequest;
}(SpeakeasyBase));
export { GlobalImagesGetGlobalImageContentsRequest };
var GlobalImagesGetGlobalImageContentsResponse = /** @class */ (function (_super) {
    __extends(GlobalImagesGetGlobalImageContentsResponse, _super);
    function GlobalImagesGetGlobalImageContentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], GlobalImagesGetGlobalImageContentsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GlobalImagesGetGlobalImageContentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GlobalImagesGetGlobalImageContentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GlobalImagesGetGlobalImageContentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GlobalImagesGetGlobalImageContentsResponse.prototype, "systemObject", void 0);
    return GlobalImagesGetGlobalImageContentsResponse;
}(SpeakeasyBase));
export { GlobalImagesGetGlobalImageContentsResponse };
