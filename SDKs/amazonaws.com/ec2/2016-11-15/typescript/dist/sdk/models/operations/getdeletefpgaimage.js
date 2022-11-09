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
export var GetDeleteFpgaImageActionEnum;
(function (GetDeleteFpgaImageActionEnum) {
    GetDeleteFpgaImageActionEnum["DeleteFpgaImage"] = "DeleteFpgaImage";
})(GetDeleteFpgaImageActionEnum || (GetDeleteFpgaImageActionEnum = {}));
export var GetDeleteFpgaImageVersionEnum;
(function (GetDeleteFpgaImageVersionEnum) {
    GetDeleteFpgaImageVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteFpgaImageVersionEnum || (GetDeleteFpgaImageVersionEnum = {}));
var GetDeleteFpgaImageQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteFpgaImageQueryParams, _super);
    function GetDeleteFpgaImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteFpgaImageQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteFpgaImageQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FpgaImageId" }),
        __metadata("design:type", String)
    ], GetDeleteFpgaImageQueryParams.prototype, "fpgaImageId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteFpgaImageQueryParams.prototype, "version", void 0);
    return GetDeleteFpgaImageQueryParams;
}(SpeakeasyBase));
export { GetDeleteFpgaImageQueryParams };
var GetDeleteFpgaImageHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteFpgaImageHeaders, _super);
    function GetDeleteFpgaImageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteFpgaImageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteFpgaImageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteFpgaImageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteFpgaImageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteFpgaImageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteFpgaImageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteFpgaImageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteFpgaImageHeaders;
}(SpeakeasyBase));
export { GetDeleteFpgaImageHeaders };
var GetDeleteFpgaImageRequest = /** @class */ (function (_super) {
    __extends(GetDeleteFpgaImageRequest, _super);
    function GetDeleteFpgaImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteFpgaImageQueryParams)
    ], GetDeleteFpgaImageRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteFpgaImageHeaders)
    ], GetDeleteFpgaImageRequest.prototype, "headers", void 0);
    return GetDeleteFpgaImageRequest;
}(SpeakeasyBase));
export { GetDeleteFpgaImageRequest };
var GetDeleteFpgaImageResponse = /** @class */ (function (_super) {
    __extends(GetDeleteFpgaImageResponse, _super);
    function GetDeleteFpgaImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteFpgaImageResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteFpgaImageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteFpgaImageResponse.prototype, "statusCode", void 0);
    return GetDeleteFpgaImageResponse;
}(SpeakeasyBase));
export { GetDeleteFpgaImageResponse };
