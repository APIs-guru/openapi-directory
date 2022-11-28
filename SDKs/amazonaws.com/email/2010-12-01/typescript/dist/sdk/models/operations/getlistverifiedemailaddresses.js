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
export var GetListVerifiedEmailAddressesActionEnum;
(function (GetListVerifiedEmailAddressesActionEnum) {
    GetListVerifiedEmailAddressesActionEnum["ListVerifiedEmailAddresses"] = "ListVerifiedEmailAddresses";
})(GetListVerifiedEmailAddressesActionEnum || (GetListVerifiedEmailAddressesActionEnum = {}));
export var GetListVerifiedEmailAddressesVersionEnum;
(function (GetListVerifiedEmailAddressesVersionEnum) {
    GetListVerifiedEmailAddressesVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetListVerifiedEmailAddressesVersionEnum || (GetListVerifiedEmailAddressesVersionEnum = {}));
var GetListVerifiedEmailAddressesQueryParams = /** @class */ (function (_super) {
    __extends(GetListVerifiedEmailAddressesQueryParams, _super);
    function GetListVerifiedEmailAddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListVerifiedEmailAddressesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListVerifiedEmailAddressesQueryParams.prototype, "version", void 0);
    return GetListVerifiedEmailAddressesQueryParams;
}(SpeakeasyBase));
export { GetListVerifiedEmailAddressesQueryParams };
var GetListVerifiedEmailAddressesHeaders = /** @class */ (function (_super) {
    __extends(GetListVerifiedEmailAddressesHeaders, _super);
    function GetListVerifiedEmailAddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListVerifiedEmailAddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListVerifiedEmailAddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListVerifiedEmailAddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListVerifiedEmailAddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListVerifiedEmailAddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListVerifiedEmailAddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListVerifiedEmailAddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListVerifiedEmailAddressesHeaders;
}(SpeakeasyBase));
export { GetListVerifiedEmailAddressesHeaders };
var GetListVerifiedEmailAddressesRequest = /** @class */ (function (_super) {
    __extends(GetListVerifiedEmailAddressesRequest, _super);
    function GetListVerifiedEmailAddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListVerifiedEmailAddressesQueryParams)
    ], GetListVerifiedEmailAddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListVerifiedEmailAddressesHeaders)
    ], GetListVerifiedEmailAddressesRequest.prototype, "headers", void 0);
    return GetListVerifiedEmailAddressesRequest;
}(SpeakeasyBase));
export { GetListVerifiedEmailAddressesRequest };
var GetListVerifiedEmailAddressesResponse = /** @class */ (function (_super) {
    __extends(GetListVerifiedEmailAddressesResponse, _super);
    function GetListVerifiedEmailAddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListVerifiedEmailAddressesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListVerifiedEmailAddressesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListVerifiedEmailAddressesResponse.prototype, "statusCode", void 0);
    return GetListVerifiedEmailAddressesResponse;
}(SpeakeasyBase));
export { GetListVerifiedEmailAddressesResponse };
