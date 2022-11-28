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
var ActivitiesGetActivityPathParams = /** @class */ (function (_super) {
    __extends(ActivitiesGetActivityPathParams, _super);
    function ActivitiesGetActivityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityID" }),
        __metadata("design:type", Number)
    ], ActivitiesGetActivityPathParams.prototype, "activityId", void 0);
    return ActivitiesGetActivityPathParams;
}(SpeakeasyBase));
export { ActivitiesGetActivityPathParams };
var ActivitiesGetActivityQueryParams = /** @class */ (function (_super) {
    __extends(ActivitiesGetActivityQueryParams, _super);
    function ActivitiesGetActivityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isIncludeDeleted" }),
        __metadata("design:type", Boolean)
    ], ActivitiesGetActivityQueryParams.prototype, "isIncludeDeleted", void 0);
    return ActivitiesGetActivityQueryParams;
}(SpeakeasyBase));
export { ActivitiesGetActivityQueryParams };
var ActivitiesGetActivityRequest = /** @class */ (function (_super) {
    __extends(ActivitiesGetActivityRequest, _super);
    function ActivitiesGetActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitiesGetActivityPathParams)
    ], ActivitiesGetActivityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitiesGetActivityQueryParams)
    ], ActivitiesGetActivityRequest.prototype, "queryParams", void 0);
    return ActivitiesGetActivityRequest;
}(SpeakeasyBase));
export { ActivitiesGetActivityRequest };
var ActivitiesGetActivityResponse = /** @class */ (function (_super) {
    __extends(ActivitiesGetActivityResponse, _super);
    function ActivitiesGetActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ActivitiesGetActivityResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ActivitiesGetActivityResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BuildSystemSharedDtoActivity)
    ], ActivitiesGetActivityResponse.prototype, "buildSystemSharedDtoActivity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivitiesGetActivityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivitiesGetActivityResponse.prototype, "statusCode", void 0);
    return ActivitiesGetActivityResponse;
}(SpeakeasyBase));
export { ActivitiesGetActivityResponse };
