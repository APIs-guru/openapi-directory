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
export var GetDeleteVolumeActionEnum;
(function (GetDeleteVolumeActionEnum) {
    GetDeleteVolumeActionEnum["DeleteVolume"] = "DeleteVolume";
})(GetDeleteVolumeActionEnum || (GetDeleteVolumeActionEnum = {}));
export var GetDeleteVolumeVersionEnum;
(function (GetDeleteVolumeVersionEnum) {
    GetDeleteVolumeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteVolumeVersionEnum || (GetDeleteVolumeVersionEnum = {}));
var GetDeleteVolumeQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteVolumeQueryParams, _super);
    function GetDeleteVolumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteVolumeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteVolumeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteVolumeQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VolumeId" }),
        __metadata("design:type", String)
    ], GetDeleteVolumeQueryParams.prototype, "volumeId", void 0);
    return GetDeleteVolumeQueryParams;
}(SpeakeasyBase));
export { GetDeleteVolumeQueryParams };
var GetDeleteVolumeHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteVolumeHeaders, _super);
    function GetDeleteVolumeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteVolumeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteVolumeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteVolumeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteVolumeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteVolumeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteVolumeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteVolumeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteVolumeHeaders;
}(SpeakeasyBase));
export { GetDeleteVolumeHeaders };
var GetDeleteVolumeRequest = /** @class */ (function (_super) {
    __extends(GetDeleteVolumeRequest, _super);
    function GetDeleteVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteVolumeQueryParams)
    ], GetDeleteVolumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteVolumeHeaders)
    ], GetDeleteVolumeRequest.prototype, "headers", void 0);
    return GetDeleteVolumeRequest;
}(SpeakeasyBase));
export { GetDeleteVolumeRequest };
var GetDeleteVolumeResponse = /** @class */ (function (_super) {
    __extends(GetDeleteVolumeResponse, _super);
    function GetDeleteVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteVolumeResponse.prototype, "statusCode", void 0);
    return GetDeleteVolumeResponse;
}(SpeakeasyBase));
export { GetDeleteVolumeResponse };
