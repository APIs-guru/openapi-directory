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
export var GetDisableEbsEncryptionByDefaultActionEnum;
(function (GetDisableEbsEncryptionByDefaultActionEnum) {
    GetDisableEbsEncryptionByDefaultActionEnum["DisableEbsEncryptionByDefault"] = "DisableEbsEncryptionByDefault";
})(GetDisableEbsEncryptionByDefaultActionEnum || (GetDisableEbsEncryptionByDefaultActionEnum = {}));
export var GetDisableEbsEncryptionByDefaultVersionEnum;
(function (GetDisableEbsEncryptionByDefaultVersionEnum) {
    GetDisableEbsEncryptionByDefaultVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDisableEbsEncryptionByDefaultVersionEnum || (GetDisableEbsEncryptionByDefaultVersionEnum = {}));
var GetDisableEbsEncryptionByDefaultQueryParams = /** @class */ (function (_super) {
    __extends(GetDisableEbsEncryptionByDefaultQueryParams, _super);
    function GetDisableEbsEncryptionByDefaultQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisableEbsEncryptionByDefaultQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDisableEbsEncryptionByDefaultQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisableEbsEncryptionByDefaultQueryParams.prototype, "version", void 0);
    return GetDisableEbsEncryptionByDefaultQueryParams;
}(SpeakeasyBase));
export { GetDisableEbsEncryptionByDefaultQueryParams };
var GetDisableEbsEncryptionByDefaultHeaders = /** @class */ (function (_super) {
    __extends(GetDisableEbsEncryptionByDefaultHeaders, _super);
    function GetDisableEbsEncryptionByDefaultHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisableEbsEncryptionByDefaultHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisableEbsEncryptionByDefaultHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisableEbsEncryptionByDefaultHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisableEbsEncryptionByDefaultHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisableEbsEncryptionByDefaultHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisableEbsEncryptionByDefaultHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisableEbsEncryptionByDefaultHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisableEbsEncryptionByDefaultHeaders;
}(SpeakeasyBase));
export { GetDisableEbsEncryptionByDefaultHeaders };
var GetDisableEbsEncryptionByDefaultRequest = /** @class */ (function (_super) {
    __extends(GetDisableEbsEncryptionByDefaultRequest, _super);
    function GetDisableEbsEncryptionByDefaultRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableEbsEncryptionByDefaultQueryParams)
    ], GetDisableEbsEncryptionByDefaultRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableEbsEncryptionByDefaultHeaders)
    ], GetDisableEbsEncryptionByDefaultRequest.prototype, "headers", void 0);
    return GetDisableEbsEncryptionByDefaultRequest;
}(SpeakeasyBase));
export { GetDisableEbsEncryptionByDefaultRequest };
var GetDisableEbsEncryptionByDefaultResponse = /** @class */ (function (_super) {
    __extends(GetDisableEbsEncryptionByDefaultResponse, _super);
    function GetDisableEbsEncryptionByDefaultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisableEbsEncryptionByDefaultResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisableEbsEncryptionByDefaultResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisableEbsEncryptionByDefaultResponse.prototype, "statusCode", void 0);
    return GetDisableEbsEncryptionByDefaultResponse;
}(SpeakeasyBase));
export { GetDisableEbsEncryptionByDefaultResponse };
