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
var GetApiV2PackageTypesIdPathParams = /** @class */ (function (_super) {
    __extends(GetApiV2PackageTypesIdPathParams, _super);
    function GetApiV2PackageTypesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" }),
        __metadata("design:type", String)
    ], GetApiV2PackageTypesIdPathParams.prototype, "id", void 0);
    return GetApiV2PackageTypesIdPathParams;
}(SpeakeasyBase));
export { GetApiV2PackageTypesIdPathParams };
var GetApiV2PackageTypesIdRequest = /** @class */ (function (_super) {
    __extends(GetApiV2PackageTypesIdRequest, _super);
    function GetApiV2PackageTypesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2PackageTypesIdPathParams)
    ], GetApiV2PackageTypesIdRequest.prototype, "pathParams", void 0);
    return GetApiV2PackageTypesIdRequest;
}(SpeakeasyBase));
export { GetApiV2PackageTypesIdRequest };
var GetApiV2PackageTypesIdResponse = /** @class */ (function (_super) {
    __extends(GetApiV2PackageTypesIdResponse, _super);
    function GetApiV2PackageTypesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], GetApiV2PackageTypesIdResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiV2PackageTypesIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV2PackageTypesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV2PackageTypesIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateSystemModelsPackageType)
    ], GetApiV2PackageTypesIdResponse.prototype, "updateSystemModelsPackageType", void 0);
    return GetApiV2PackageTypesIdResponse;
}(SpeakeasyBase));
export { GetApiV2PackageTypesIdResponse };
