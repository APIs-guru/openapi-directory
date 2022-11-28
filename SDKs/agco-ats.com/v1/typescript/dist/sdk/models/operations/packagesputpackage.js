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
var PackagesPutPackagePathParams = /** @class */ (function (_super) {
    __extends(PackagesPutPackagePathParams, _super);
    function PackagesPutPackagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" }),
        __metadata("design:type", String)
    ], PackagesPutPackagePathParams.prototype, "id", void 0);
    return PackagesPutPackagePathParams;
}(SpeakeasyBase));
export { PackagesPutPackagePathParams };
var PackagesPutPackageRequests = /** @class */ (function (_super) {
    __extends(PackagesPutPackageRequests, _super);
    function PackagesPutPackageRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PackagesPutPackageRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PackagesPutPackageRequests.prototype, "textXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateSystemModelsPackage)
    ], PackagesPutPackageRequests.prototype, "updateSystemModelsPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.UpdateSystemModelsPackage)
    ], PackagesPutPackageRequests.prototype, "updateSystemModelsPackage1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateSystemModelsPackage)
    ], PackagesPutPackageRequests.prototype, "updateSystemModelsPackage2", void 0);
    return PackagesPutPackageRequests;
}(SpeakeasyBase));
export { PackagesPutPackageRequests };
var PackagesPutPackageRequest = /** @class */ (function (_super) {
    __extends(PackagesPutPackageRequest, _super);
    function PackagesPutPackageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PackagesPutPackagePathParams)
    ], PackagesPutPackageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PackagesPutPackageRequests)
    ], PackagesPutPackageRequest.prototype, "request", void 0);
    return PackagesPutPackageRequest;
}(SpeakeasyBase));
export { PackagesPutPackageRequest };
var PackagesPutPackageResponse = /** @class */ (function (_super) {
    __extends(PackagesPutPackageResponse, _super);
    function PackagesPutPackageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PackagesPutPackageResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PackagesPutPackageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PackagesPutPackageResponse.prototype, "statusCode", void 0);
    return PackagesPutPackageResponse;
}(SpeakeasyBase));
export { PackagesPutPackageResponse };
