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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var DownloadFileByIdPathParams = /** @class */ (function (_super) {
    __extends(DownloadFileByIdPathParams, _super);
    function DownloadFileByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=fileUuid" }),
        __metadata("design:type", String)
    ], DownloadFileByIdPathParams.prototype, "fileUuid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" }),
        __metadata("design:type", String)
    ], DownloadFileByIdPathParams.prototype, "itemUuid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" }),
        __metadata("design:type", String)
    ], DownloadFileByIdPathParams.prototype, "vaultUuid", void 0);
    return DownloadFileByIdPathParams;
}(SpeakeasyBase));
export { DownloadFileByIdPathParams };
var DownloadFileByIdSecurity = /** @class */ (function (_super) {
    __extends(DownloadFileByIdSecurity, _super);
    function DownloadFileByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeConnectToken)
    ], DownloadFileByIdSecurity.prototype, "connectToken", void 0);
    return DownloadFileByIdSecurity;
}(SpeakeasyBase));
export { DownloadFileByIdSecurity };
var DownloadFileByIdRequest = /** @class */ (function (_super) {
    __extends(DownloadFileByIdRequest, _super);
    function DownloadFileByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DownloadFileByIdPathParams)
    ], DownloadFileByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DownloadFileByIdSecurity)
    ], DownloadFileByIdRequest.prototype, "security", void 0);
    return DownloadFileByIdRequest;
}(SpeakeasyBase));
export { DownloadFileByIdRequest };
var DownloadFileByIdResponse = /** @class */ (function (_super) {
    __extends(DownloadFileByIdResponse, _super);
    function DownloadFileByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DownloadFileByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], DownloadFileByIdResponse.prototype, "downloadFileById200ApplicationOctetStreamBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], DownloadFileByIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DownloadFileByIdResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DownloadFileByIdResponse.prototype, "statusCode", void 0);
    return DownloadFileByIdResponse;
}(SpeakeasyBase));
export { DownloadFileByIdResponse };
