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
var BundlesGetBundlesQueryParams = /** @class */ (function (_super) {
    __extends(BundlesGetBundlesQueryParams, _super);
    function BundlesGetBundlesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Active" }),
        __metadata("design:type", Boolean)
    ], BundlesGetBundlesQueryParams.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" }),
        __metadata("design:type", String)
    ], BundlesGetBundlesQueryParams.prototype, "updateGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], BundlesGetBundlesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], BundlesGetBundlesQueryParams.prototype, "offset", void 0);
    return BundlesGetBundlesQueryParams;
}(SpeakeasyBase));
export { BundlesGetBundlesQueryParams };
var BundlesGetBundlesRequest = /** @class */ (function (_super) {
    __extends(BundlesGetBundlesRequest, _super);
    function BundlesGetBundlesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BundlesGetBundlesQueryParams)
    ], BundlesGetBundlesRequest.prototype, "queryParams", void 0);
    return BundlesGetBundlesRequest;
}(SpeakeasyBase));
export { BundlesGetBundlesRequest };
var BundlesGetBundlesResponse = /** @class */ (function (_super) {
    __extends(BundlesGetBundlesResponse, _super);
    function BundlesGetBundlesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], BundlesGetBundlesResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseUpdateSystemModelsBundle)
    ], BundlesGetBundlesResponse.prototype, "apiPagedResponseUpdateSystemModelsBundle", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BundlesGetBundlesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BundlesGetBundlesResponse.prototype, "statusCode", void 0);
    return BundlesGetBundlesResponse;
}(SpeakeasyBase));
export { BundlesGetBundlesResponse };
