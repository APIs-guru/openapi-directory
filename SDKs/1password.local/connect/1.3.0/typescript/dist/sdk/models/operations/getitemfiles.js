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
var GetItemFilesPathParams = /** @class */ (function (_super) {
    __extends(GetItemFilesPathParams, _super);
    function GetItemFilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" }),
        __metadata("design:type", String)
    ], GetItemFilesPathParams.prototype, "itemUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" }),
        __metadata("design:type", String)
    ], GetItemFilesPathParams.prototype, "vaultUuid", void 0);
    return GetItemFilesPathParams;
}(SpeakeasyBase));
export { GetItemFilesPathParams };
var GetItemFilesQueryParams = /** @class */ (function (_super) {
    __extends(GetItemFilesQueryParams, _super);
    function GetItemFilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline_files" }),
        __metadata("design:type", Boolean)
    ], GetItemFilesQueryParams.prototype, "inlineFiles", void 0);
    return GetItemFilesQueryParams;
}(SpeakeasyBase));
export { GetItemFilesQueryParams };
var GetItemFilesSecurity = /** @class */ (function (_super) {
    __extends(GetItemFilesSecurity, _super);
    function GetItemFilesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeConnectToken)
    ], GetItemFilesSecurity.prototype, "connectToken", void 0);
    return GetItemFilesSecurity;
}(SpeakeasyBase));
export { GetItemFilesSecurity };
var GetItemFilesRequest = /** @class */ (function (_super) {
    __extends(GetItemFilesRequest, _super);
    function GetItemFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemFilesPathParams)
    ], GetItemFilesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemFilesQueryParams)
    ], GetItemFilesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemFilesSecurity)
    ], GetItemFilesRequest.prototype, "security", void 0);
    return GetItemFilesRequest;
}(SpeakeasyBase));
export { GetItemFilesRequest };
var GetItemFilesResponse = /** @class */ (function (_super) {
    __extends(GetItemFilesResponse, _super);
    function GetItemFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemFilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetItemFilesResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.File }),
        __metadata("design:type", Array)
    ], GetItemFilesResponse.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemFilesResponse.prototype, "statusCode", void 0);
    return GetItemFilesResponse;
}(SpeakeasyBase));
export { GetItemFilesResponse };
