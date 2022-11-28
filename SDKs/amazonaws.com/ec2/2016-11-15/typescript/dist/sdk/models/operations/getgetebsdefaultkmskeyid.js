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
export var GetGetEbsDefaultKmsKeyIdActionEnum;
(function (GetGetEbsDefaultKmsKeyIdActionEnum) {
    GetGetEbsDefaultKmsKeyIdActionEnum["GetEbsDefaultKmsKeyId"] = "GetEbsDefaultKmsKeyId";
})(GetGetEbsDefaultKmsKeyIdActionEnum || (GetGetEbsDefaultKmsKeyIdActionEnum = {}));
export var GetGetEbsDefaultKmsKeyIdVersionEnum;
(function (GetGetEbsDefaultKmsKeyIdVersionEnum) {
    GetGetEbsDefaultKmsKeyIdVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetGetEbsDefaultKmsKeyIdVersionEnum || (GetGetEbsDefaultKmsKeyIdVersionEnum = {}));
var GetGetEbsDefaultKmsKeyIdQueryParams = /** @class */ (function (_super) {
    __extends(GetGetEbsDefaultKmsKeyIdQueryParams, _super);
    function GetGetEbsDefaultKmsKeyIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetEbsDefaultKmsKeyIdQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetGetEbsDefaultKmsKeyIdQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetEbsDefaultKmsKeyIdQueryParams.prototype, "version", void 0);
    return GetGetEbsDefaultKmsKeyIdQueryParams;
}(SpeakeasyBase));
export { GetGetEbsDefaultKmsKeyIdQueryParams };
var GetGetEbsDefaultKmsKeyIdHeaders = /** @class */ (function (_super) {
    __extends(GetGetEbsDefaultKmsKeyIdHeaders, _super);
    function GetGetEbsDefaultKmsKeyIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetEbsDefaultKmsKeyIdHeaders;
}(SpeakeasyBase));
export { GetGetEbsDefaultKmsKeyIdHeaders };
var GetGetEbsDefaultKmsKeyIdRequest = /** @class */ (function (_super) {
    __extends(GetGetEbsDefaultKmsKeyIdRequest, _super);
    function GetGetEbsDefaultKmsKeyIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetEbsDefaultKmsKeyIdQueryParams)
    ], GetGetEbsDefaultKmsKeyIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetEbsDefaultKmsKeyIdHeaders)
    ], GetGetEbsDefaultKmsKeyIdRequest.prototype, "headers", void 0);
    return GetGetEbsDefaultKmsKeyIdRequest;
}(SpeakeasyBase));
export { GetGetEbsDefaultKmsKeyIdRequest };
var GetGetEbsDefaultKmsKeyIdResponse = /** @class */ (function (_super) {
    __extends(GetGetEbsDefaultKmsKeyIdResponse, _super);
    function GetGetEbsDefaultKmsKeyIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetEbsDefaultKmsKeyIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetEbsDefaultKmsKeyIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetEbsDefaultKmsKeyIdResponse.prototype, "statusCode", void 0);
    return GetGetEbsDefaultKmsKeyIdResponse;
}(SpeakeasyBase));
export { GetGetEbsDefaultKmsKeyIdResponse };
