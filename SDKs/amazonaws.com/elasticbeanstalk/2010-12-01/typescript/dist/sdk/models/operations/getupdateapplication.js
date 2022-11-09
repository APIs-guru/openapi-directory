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
export var GetUpdateApplicationActionEnum;
(function (GetUpdateApplicationActionEnum) {
    GetUpdateApplicationActionEnum["UpdateApplication"] = "UpdateApplication";
})(GetUpdateApplicationActionEnum || (GetUpdateApplicationActionEnum = {}));
export var GetUpdateApplicationVersionEnum;
(function (GetUpdateApplicationVersionEnum) {
    GetUpdateApplicationVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetUpdateApplicationVersionEnum || (GetUpdateApplicationVersionEnum = {}));
var GetUpdateApplicationQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateApplicationQueryParams, _super);
    function GetUpdateApplicationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateApplicationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" }),
        __metadata("design:type", String)
    ], GetUpdateApplicationQueryParams.prototype, "applicationName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Description" }),
        __metadata("design:type", String)
    ], GetUpdateApplicationQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateApplicationQueryParams.prototype, "version", void 0);
    return GetUpdateApplicationQueryParams;
}(SpeakeasyBase));
export { GetUpdateApplicationQueryParams };
var GetUpdateApplicationHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateApplicationHeaders, _super);
    function GetUpdateApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateApplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateApplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateApplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateApplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateApplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateApplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateApplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateApplicationHeaders;
}(SpeakeasyBase));
export { GetUpdateApplicationHeaders };
var GetUpdateApplicationRequest = /** @class */ (function (_super) {
    __extends(GetUpdateApplicationRequest, _super);
    function GetUpdateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateApplicationQueryParams)
    ], GetUpdateApplicationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateApplicationHeaders)
    ], GetUpdateApplicationRequest.prototype, "headers", void 0);
    return GetUpdateApplicationRequest;
}(SpeakeasyBase));
export { GetUpdateApplicationRequest };
var GetUpdateApplicationResponse = /** @class */ (function (_super) {
    __extends(GetUpdateApplicationResponse, _super);
    function GetUpdateApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateApplicationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUpdateApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUpdateApplicationResponse.prototype, "statusCode", void 0);
    return GetUpdateApplicationResponse;
}(SpeakeasyBase));
export { GetUpdateApplicationResponse };
