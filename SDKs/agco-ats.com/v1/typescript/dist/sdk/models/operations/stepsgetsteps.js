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
var StepsGetStepsQueryParams = /** @class */ (function (_super) {
    __extends(StepsGetStepsQueryParams, _super);
    function StepsGetStepsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" }),
        __metadata("design:type", Boolean)
    ], StepsGetStepsQueryParams.prototype, "includeDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], StepsGetStepsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], StepsGetStepsQueryParams.prototype, "offset", void 0);
    return StepsGetStepsQueryParams;
}(SpeakeasyBase));
export { StepsGetStepsQueryParams };
var StepsGetStepsRequest = /** @class */ (function (_super) {
    __extends(StepsGetStepsRequest, _super);
    function StepsGetStepsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StepsGetStepsQueryParams)
    ], StepsGetStepsRequest.prototype, "queryParams", void 0);
    return StepsGetStepsRequest;
}(SpeakeasyBase));
export { StepsGetStepsRequest };
var StepsGetStepsResponse = /** @class */ (function (_super) {
    __extends(StepsGetStepsResponse, _super);
    function StepsGetStepsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], StepsGetStepsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseBuildSystemSharedDtoStep)
    ], StepsGetStepsResponse.prototype, "apiPagedResponseBuildSystemSharedDtoStep", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StepsGetStepsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StepsGetStepsResponse.prototype, "statusCode", void 0);
    return StepsGetStepsResponse;
}(SpeakeasyBase));
export { StepsGetStepsResponse };
