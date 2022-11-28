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
export var GetGetCredentialReportActionEnum;
(function (GetGetCredentialReportActionEnum) {
    GetGetCredentialReportActionEnum["GetCredentialReport"] = "GetCredentialReport";
})(GetGetCredentialReportActionEnum || (GetGetCredentialReportActionEnum = {}));
export var GetGetCredentialReportVersionEnum;
(function (GetGetCredentialReportVersionEnum) {
    GetGetCredentialReportVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetCredentialReportVersionEnum || (GetGetCredentialReportVersionEnum = {}));
var GetGetCredentialReportQueryParams = /** @class */ (function (_super) {
    __extends(GetGetCredentialReportQueryParams, _super);
    function GetGetCredentialReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetCredentialReportQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetCredentialReportQueryParams.prototype, "version", void 0);
    return GetGetCredentialReportQueryParams;
}(SpeakeasyBase));
export { GetGetCredentialReportQueryParams };
var GetGetCredentialReportHeaders = /** @class */ (function (_super) {
    __extends(GetGetCredentialReportHeaders, _super);
    function GetGetCredentialReportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetCredentialReportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetCredentialReportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetCredentialReportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetCredentialReportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetCredentialReportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetCredentialReportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetCredentialReportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetCredentialReportHeaders;
}(SpeakeasyBase));
export { GetGetCredentialReportHeaders };
var GetGetCredentialReportRequest = /** @class */ (function (_super) {
    __extends(GetGetCredentialReportRequest, _super);
    function GetGetCredentialReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetCredentialReportQueryParams)
    ], GetGetCredentialReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetCredentialReportHeaders)
    ], GetGetCredentialReportRequest.prototype, "headers", void 0);
    return GetGetCredentialReportRequest;
}(SpeakeasyBase));
export { GetGetCredentialReportRequest };
var GetGetCredentialReportResponse = /** @class */ (function (_super) {
    __extends(GetGetCredentialReportResponse, _super);
    function GetGetCredentialReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetCredentialReportResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetCredentialReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetCredentialReportResponse.prototype, "statusCode", void 0);
    return GetGetCredentialReportResponse;
}(SpeakeasyBase));
export { GetGetCredentialReportResponse };
