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
export var GetModifyVolumeAttributeActionEnum;
(function (GetModifyVolumeAttributeActionEnum) {
    GetModifyVolumeAttributeActionEnum["ModifyVolumeAttribute"] = "ModifyVolumeAttribute";
})(GetModifyVolumeAttributeActionEnum || (GetModifyVolumeAttributeActionEnum = {}));
// GetModifyVolumeAttributeAutoEnableIo
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
var GetModifyVolumeAttributeAutoEnableIo = /** @class */ (function (_super) {
    __extends(GetModifyVolumeAttributeAutoEnableIo, _super);
    function GetModifyVolumeAttributeAutoEnableIo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=Value" }),
        __metadata("design:type", Boolean)
    ], GetModifyVolumeAttributeAutoEnableIo.prototype, "value", void 0);
    return GetModifyVolumeAttributeAutoEnableIo;
}(SpeakeasyBase));
export { GetModifyVolumeAttributeAutoEnableIo };
export var GetModifyVolumeAttributeVersionEnum;
(function (GetModifyVolumeAttributeVersionEnum) {
    GetModifyVolumeAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyVolumeAttributeVersionEnum || (GetModifyVolumeAttributeVersionEnum = {}));
var GetModifyVolumeAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyVolumeAttributeQueryParams, _super);
    function GetModifyVolumeAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyVolumeAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoEnableIO" }),
        __metadata("design:type", GetModifyVolumeAttributeAutoEnableIo)
    ], GetModifyVolumeAttributeQueryParams.prototype, "autoEnableIo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyVolumeAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyVolumeAttributeQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VolumeId" }),
        __metadata("design:type", String)
    ], GetModifyVolumeAttributeQueryParams.prototype, "volumeId", void 0);
    return GetModifyVolumeAttributeQueryParams;
}(SpeakeasyBase));
export { GetModifyVolumeAttributeQueryParams };
var GetModifyVolumeAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetModifyVolumeAttributeHeaders, _super);
    function GetModifyVolumeAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyVolumeAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyVolumeAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyVolumeAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyVolumeAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyVolumeAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyVolumeAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyVolumeAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyVolumeAttributeHeaders;
}(SpeakeasyBase));
export { GetModifyVolumeAttributeHeaders };
var GetModifyVolumeAttributeRequest = /** @class */ (function (_super) {
    __extends(GetModifyVolumeAttributeRequest, _super);
    function GetModifyVolumeAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVolumeAttributeQueryParams)
    ], GetModifyVolumeAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVolumeAttributeHeaders)
    ], GetModifyVolumeAttributeRequest.prototype, "headers", void 0);
    return GetModifyVolumeAttributeRequest;
}(SpeakeasyBase));
export { GetModifyVolumeAttributeRequest };
var GetModifyVolumeAttributeResponse = /** @class */ (function (_super) {
    __extends(GetModifyVolumeAttributeResponse, _super);
    function GetModifyVolumeAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyVolumeAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyVolumeAttributeResponse.prototype, "statusCode", void 0);
    return GetModifyVolumeAttributeResponse;
}(SpeakeasyBase));
export { GetModifyVolumeAttributeResponse };
