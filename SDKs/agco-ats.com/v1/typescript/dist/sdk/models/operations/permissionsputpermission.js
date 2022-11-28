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
var PermissionsPutPermissionPathParams = /** @class */ (function (_super) {
    __extends(PermissionsPutPermissionPathParams, _super);
    function PermissionsPutPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PermissionsPutPermissionPathParams.prototype, "id", void 0);
    return PermissionsPutPermissionPathParams;
}(SpeakeasyBase));
export { PermissionsPutPermissionPathParams };
var PermissionsPutPermissionRequests = /** @class */ (function (_super) {
    __extends(PermissionsPutPermissionRequests, _super);
    function PermissionsPutPermissionRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiModelsPermission)
    ], PermissionsPutPermissionRequests.prototype, "apiModelsPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ApiModelsPermission)
    ], PermissionsPutPermissionRequests.prototype, "apiModelsPermission1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApiModelsPermission)
    ], PermissionsPutPermissionRequests.prototype, "apiModelsPermission2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PermissionsPutPermissionRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PermissionsPutPermissionRequests.prototype, "textXml", void 0);
    return PermissionsPutPermissionRequests;
}(SpeakeasyBase));
export { PermissionsPutPermissionRequests };
var PermissionsPutPermissionRequest = /** @class */ (function (_super) {
    __extends(PermissionsPutPermissionRequest, _super);
    function PermissionsPutPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PermissionsPutPermissionPathParams)
    ], PermissionsPutPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PermissionsPutPermissionRequests)
    ], PermissionsPutPermissionRequest.prototype, "request", void 0);
    return PermissionsPutPermissionRequest;
}(SpeakeasyBase));
export { PermissionsPutPermissionRequest };
var PermissionsPutPermissionResponse = /** @class */ (function (_super) {
    __extends(PermissionsPutPermissionResponse, _super);
    function PermissionsPutPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PermissionsPutPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PermissionsPutPermissionResponse.prototype, "statusCode", void 0);
    return PermissionsPutPermissionResponse;
}(SpeakeasyBase));
export { PermissionsPutPermissionResponse };
