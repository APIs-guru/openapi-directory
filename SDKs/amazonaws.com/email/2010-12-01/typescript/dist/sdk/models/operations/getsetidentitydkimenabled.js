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
export var GetSetIdentityDkimEnabledActionEnum;
(function (GetSetIdentityDkimEnabledActionEnum) {
    GetSetIdentityDkimEnabledActionEnum["SetIdentityDkimEnabled"] = "SetIdentityDkimEnabled";
})(GetSetIdentityDkimEnabledActionEnum || (GetSetIdentityDkimEnabledActionEnum = {}));
export var GetSetIdentityDkimEnabledVersionEnum;
(function (GetSetIdentityDkimEnabledVersionEnum) {
    GetSetIdentityDkimEnabledVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetSetIdentityDkimEnabledVersionEnum || (GetSetIdentityDkimEnabledVersionEnum = {}));
var GetSetIdentityDkimEnabledQueryParams = /** @class */ (function (_super) {
    __extends(GetSetIdentityDkimEnabledQueryParams, _super);
    function GetSetIdentityDkimEnabledQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetIdentityDkimEnabledQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DkimEnabled" }),
        __metadata("design:type", Boolean)
    ], GetSetIdentityDkimEnabledQueryParams.prototype, "dkimEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], GetSetIdentityDkimEnabledQueryParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetIdentityDkimEnabledQueryParams.prototype, "version", void 0);
    return GetSetIdentityDkimEnabledQueryParams;
}(SpeakeasyBase));
export { GetSetIdentityDkimEnabledQueryParams };
var GetSetIdentityDkimEnabledHeaders = /** @class */ (function (_super) {
    __extends(GetSetIdentityDkimEnabledHeaders, _super);
    function GetSetIdentityDkimEnabledHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetIdentityDkimEnabledHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetIdentityDkimEnabledHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetIdentityDkimEnabledHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetIdentityDkimEnabledHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetIdentityDkimEnabledHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetIdentityDkimEnabledHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetIdentityDkimEnabledHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetIdentityDkimEnabledHeaders;
}(SpeakeasyBase));
export { GetSetIdentityDkimEnabledHeaders };
var GetSetIdentityDkimEnabledRequest = /** @class */ (function (_super) {
    __extends(GetSetIdentityDkimEnabledRequest, _super);
    function GetSetIdentityDkimEnabledRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetIdentityDkimEnabledQueryParams)
    ], GetSetIdentityDkimEnabledRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetIdentityDkimEnabledHeaders)
    ], GetSetIdentityDkimEnabledRequest.prototype, "headers", void 0);
    return GetSetIdentityDkimEnabledRequest;
}(SpeakeasyBase));
export { GetSetIdentityDkimEnabledRequest };
var GetSetIdentityDkimEnabledResponse = /** @class */ (function (_super) {
    __extends(GetSetIdentityDkimEnabledResponse, _super);
    function GetSetIdentityDkimEnabledResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetIdentityDkimEnabledResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetIdentityDkimEnabledResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetIdentityDkimEnabledResponse.prototype, "statusCode", void 0);
    return GetSetIdentityDkimEnabledResponse;
}(SpeakeasyBase));
export { GetSetIdentityDkimEnabledResponse };
