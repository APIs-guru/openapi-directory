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
export var GetGetInstanceProfileActionEnum;
(function (GetGetInstanceProfileActionEnum) {
    GetGetInstanceProfileActionEnum["GetInstanceProfile"] = "GetInstanceProfile";
})(GetGetInstanceProfileActionEnum || (GetGetInstanceProfileActionEnum = {}));
export var GetGetInstanceProfileVersionEnum;
(function (GetGetInstanceProfileVersionEnum) {
    GetGetInstanceProfileVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetInstanceProfileVersionEnum || (GetGetInstanceProfileVersionEnum = {}));
var GetGetInstanceProfileQueryParams = /** @class */ (function (_super) {
    __extends(GetGetInstanceProfileQueryParams, _super);
    function GetGetInstanceProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetInstanceProfileQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceProfileName" }),
        __metadata("design:type", String)
    ], GetGetInstanceProfileQueryParams.prototype, "instanceProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetInstanceProfileQueryParams.prototype, "version", void 0);
    return GetGetInstanceProfileQueryParams;
}(SpeakeasyBase));
export { GetGetInstanceProfileQueryParams };
var GetGetInstanceProfileHeaders = /** @class */ (function (_super) {
    __extends(GetGetInstanceProfileHeaders, _super);
    function GetGetInstanceProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetInstanceProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetInstanceProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetInstanceProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetInstanceProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetInstanceProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetInstanceProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetInstanceProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetInstanceProfileHeaders;
}(SpeakeasyBase));
export { GetGetInstanceProfileHeaders };
var GetGetInstanceProfileRequest = /** @class */ (function (_super) {
    __extends(GetGetInstanceProfileRequest, _super);
    function GetGetInstanceProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetInstanceProfileQueryParams)
    ], GetGetInstanceProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetInstanceProfileHeaders)
    ], GetGetInstanceProfileRequest.prototype, "headers", void 0);
    return GetGetInstanceProfileRequest;
}(SpeakeasyBase));
export { GetGetInstanceProfileRequest };
var GetGetInstanceProfileResponse = /** @class */ (function (_super) {
    __extends(GetGetInstanceProfileResponse, _super);
    function GetGetInstanceProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetInstanceProfileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetInstanceProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetInstanceProfileResponse.prototype, "statusCode", void 0);
    return GetGetInstanceProfileResponse;
}(SpeakeasyBase));
export { GetGetInstanceProfileResponse };
