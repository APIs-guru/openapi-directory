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
export var GetReleaseAddressActionEnum;
(function (GetReleaseAddressActionEnum) {
    GetReleaseAddressActionEnum["ReleaseAddress"] = "ReleaseAddress";
})(GetReleaseAddressActionEnum || (GetReleaseAddressActionEnum = {}));
export var GetReleaseAddressVersionEnum;
(function (GetReleaseAddressVersionEnum) {
    GetReleaseAddressVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetReleaseAddressVersionEnum || (GetReleaseAddressVersionEnum = {}));
var GetReleaseAddressQueryParams = /** @class */ (function (_super) {
    __extends(GetReleaseAddressQueryParams, _super);
    function GetReleaseAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetReleaseAddressQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllocationId" }),
        __metadata("design:type", String)
    ], GetReleaseAddressQueryParams.prototype, "allocationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetReleaseAddressQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkBorderGroup" }),
        __metadata("design:type", String)
    ], GetReleaseAddressQueryParams.prototype, "networkBorderGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PublicIp" }),
        __metadata("design:type", String)
    ], GetReleaseAddressQueryParams.prototype, "publicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetReleaseAddressQueryParams.prototype, "version", void 0);
    return GetReleaseAddressQueryParams;
}(SpeakeasyBase));
export { GetReleaseAddressQueryParams };
var GetReleaseAddressHeaders = /** @class */ (function (_super) {
    __extends(GetReleaseAddressHeaders, _super);
    function GetReleaseAddressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetReleaseAddressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetReleaseAddressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetReleaseAddressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetReleaseAddressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetReleaseAddressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetReleaseAddressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetReleaseAddressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetReleaseAddressHeaders;
}(SpeakeasyBase));
export { GetReleaseAddressHeaders };
var GetReleaseAddressRequest = /** @class */ (function (_super) {
    __extends(GetReleaseAddressRequest, _super);
    function GetReleaseAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReleaseAddressQueryParams)
    ], GetReleaseAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReleaseAddressHeaders)
    ], GetReleaseAddressRequest.prototype, "headers", void 0);
    return GetReleaseAddressRequest;
}(SpeakeasyBase));
export { GetReleaseAddressRequest };
var GetReleaseAddressResponse = /** @class */ (function (_super) {
    __extends(GetReleaseAddressResponse, _super);
    function GetReleaseAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReleaseAddressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReleaseAddressResponse.prototype, "statusCode", void 0);
    return GetReleaseAddressResponse;
}(SpeakeasyBase));
export { GetReleaseAddressResponse };
