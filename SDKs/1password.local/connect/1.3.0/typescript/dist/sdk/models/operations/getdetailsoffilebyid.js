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
var GetDetailsOfFileByIdPathParams = /** @class */ (function (_super) {
    __extends(GetDetailsOfFileByIdPathParams, _super);
    function GetDetailsOfFileByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileUuid" }),
        __metadata("design:type", String)
    ], GetDetailsOfFileByIdPathParams.prototype, "fileUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" }),
        __metadata("design:type", String)
    ], GetDetailsOfFileByIdPathParams.prototype, "itemUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" }),
        __metadata("design:type", String)
    ], GetDetailsOfFileByIdPathParams.prototype, "vaultUuid", void 0);
    return GetDetailsOfFileByIdPathParams;
}(SpeakeasyBase));
export { GetDetailsOfFileByIdPathParams };
var GetDetailsOfFileByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetDetailsOfFileByIdQueryParams, _super);
    function GetDetailsOfFileByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline_files" }),
        __metadata("design:type", Boolean)
    ], GetDetailsOfFileByIdQueryParams.prototype, "inlineFiles", void 0);
    return GetDetailsOfFileByIdQueryParams;
}(SpeakeasyBase));
export { GetDetailsOfFileByIdQueryParams };
var GetDetailsOfFileByIdSecurity = /** @class */ (function (_super) {
    __extends(GetDetailsOfFileByIdSecurity, _super);
    function GetDetailsOfFileByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeConnectToken)
    ], GetDetailsOfFileByIdSecurity.prototype, "connectToken", void 0);
    return GetDetailsOfFileByIdSecurity;
}(SpeakeasyBase));
export { GetDetailsOfFileByIdSecurity };
var GetDetailsOfFileByIdRequest = /** @class */ (function (_super) {
    __extends(GetDetailsOfFileByIdRequest, _super);
    function GetDetailsOfFileByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDetailsOfFileByIdPathParams)
    ], GetDetailsOfFileByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDetailsOfFileByIdQueryParams)
    ], GetDetailsOfFileByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDetailsOfFileByIdSecurity)
    ], GetDetailsOfFileByIdRequest.prototype, "security", void 0);
    return GetDetailsOfFileByIdRequest;
}(SpeakeasyBase));
export { GetDetailsOfFileByIdRequest };
var GetDetailsOfFileByIdResponse = /** @class */ (function (_super) {
    __extends(GetDetailsOfFileByIdResponse, _super);
    function GetDetailsOfFileByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDetailsOfFileByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetDetailsOfFileByIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], GetDetailsOfFileByIdResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDetailsOfFileByIdResponse.prototype, "statusCode", void 0);
    return GetDetailsOfFileByIdResponse;
}(SpeakeasyBase));
export { GetDetailsOfFileByIdResponse };
