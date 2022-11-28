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
var GlobalImagesPutGlobalImageContentsPathParams = /** @class */ (function (_super) {
    __extends(GlobalImagesPutGlobalImageContentsPathParams, _super);
    function GlobalImagesPutGlobalImageContentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" }),
        __metadata("design:type", String)
    ], GlobalImagesPutGlobalImageContentsPathParams.prototype, "id", void 0);
    return GlobalImagesPutGlobalImageContentsPathParams;
}(SpeakeasyBase));
export { GlobalImagesPutGlobalImageContentsPathParams };
var GlobalImagesPutGlobalImageContentsQueryParams = /** @class */ (function (_super) {
    __extends(GlobalImagesPutGlobalImageContentsQueryParams, _super);
    function GlobalImagesPutGlobalImageContentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFullImage" }),
        __metadata("design:type", Boolean)
    ], GlobalImagesPutGlobalImageContentsQueryParams.prototype, "isFullImage", void 0);
    return GlobalImagesPutGlobalImageContentsQueryParams;
}(SpeakeasyBase));
export { GlobalImagesPutGlobalImageContentsQueryParams };
var GlobalImagesPutGlobalImageContentsRequest = /** @class */ (function (_super) {
    __extends(GlobalImagesPutGlobalImageContentsRequest, _super);
    function GlobalImagesPutGlobalImageContentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GlobalImagesPutGlobalImageContentsPathParams)
    ], GlobalImagesPutGlobalImageContentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GlobalImagesPutGlobalImageContentsQueryParams)
    ], GlobalImagesPutGlobalImageContentsRequest.prototype, "queryParams", void 0);
    return GlobalImagesPutGlobalImageContentsRequest;
}(SpeakeasyBase));
export { GlobalImagesPutGlobalImageContentsRequest };
var GlobalImagesPutGlobalImageContentsResponse = /** @class */ (function (_super) {
    __extends(GlobalImagesPutGlobalImageContentsResponse, _super);
    function GlobalImagesPutGlobalImageContentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], GlobalImagesPutGlobalImageContentsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GlobalImagesPutGlobalImageContentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GlobalImagesPutGlobalImageContentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GlobalImagesPutGlobalImageContentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GlobalImagesPutGlobalImageContentsResponse.prototype, "systemObject", void 0);
    return GlobalImagesPutGlobalImageContentsResponse;
}(SpeakeasyBase));
export { GlobalImagesPutGlobalImageContentsResponse };
