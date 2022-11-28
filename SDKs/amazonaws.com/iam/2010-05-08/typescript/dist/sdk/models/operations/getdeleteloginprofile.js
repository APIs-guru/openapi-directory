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
export var GetDeleteLoginProfileActionEnum;
(function (GetDeleteLoginProfileActionEnum) {
    GetDeleteLoginProfileActionEnum["DeleteLoginProfile"] = "DeleteLoginProfile";
})(GetDeleteLoginProfileActionEnum || (GetDeleteLoginProfileActionEnum = {}));
export var GetDeleteLoginProfileVersionEnum;
(function (GetDeleteLoginProfileVersionEnum) {
    GetDeleteLoginProfileVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDeleteLoginProfileVersionEnum || (GetDeleteLoginProfileVersionEnum = {}));
var GetDeleteLoginProfileQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteLoginProfileQueryParams, _super);
    function GetDeleteLoginProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteLoginProfileQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetDeleteLoginProfileQueryParams.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteLoginProfileQueryParams.prototype, "version", void 0);
    return GetDeleteLoginProfileQueryParams;
}(SpeakeasyBase));
export { GetDeleteLoginProfileQueryParams };
var GetDeleteLoginProfileHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteLoginProfileHeaders, _super);
    function GetDeleteLoginProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteLoginProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteLoginProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteLoginProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteLoginProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteLoginProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteLoginProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteLoginProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteLoginProfileHeaders;
}(SpeakeasyBase));
export { GetDeleteLoginProfileHeaders };
var GetDeleteLoginProfileRequest = /** @class */ (function (_super) {
    __extends(GetDeleteLoginProfileRequest, _super);
    function GetDeleteLoginProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLoginProfileQueryParams)
    ], GetDeleteLoginProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLoginProfileHeaders)
    ], GetDeleteLoginProfileRequest.prototype, "headers", void 0);
    return GetDeleteLoginProfileRequest;
}(SpeakeasyBase));
export { GetDeleteLoginProfileRequest };
var GetDeleteLoginProfileResponse = /** @class */ (function (_super) {
    __extends(GetDeleteLoginProfileResponse, _super);
    function GetDeleteLoginProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteLoginProfileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteLoginProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteLoginProfileResponse.prototype, "statusCode", void 0);
    return GetDeleteLoginProfileResponse;
}(SpeakeasyBase));
export { GetDeleteLoginProfileResponse };
