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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var GetImportVolumeActionEnum;
(function (GetImportVolumeActionEnum) {
    GetImportVolumeActionEnum["ImportVolume"] = "ImportVolume";
})(GetImportVolumeActionEnum || (GetImportVolumeActionEnum = {}));
// GetImportVolumeImage
/**
 * Describes a disk image.
**/
var GetImportVolumeImage = /** @class */ (function (_super) {
    __extends(GetImportVolumeImage, _super);
    function GetImportVolumeImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=Bytes" }),
        __metadata("design:type", Number)
    ], GetImportVolumeImage.prototype, "bytes", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=Format" }),
        __metadata("design:type", String)
    ], GetImportVolumeImage.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=ImportManifestUrl" }),
        __metadata("design:type", String)
    ], GetImportVolumeImage.prototype, "importManifestUrl", void 0);
    return GetImportVolumeImage;
}(SpeakeasyBase));
export { GetImportVolumeImage };
export var GetImportVolumeVersionEnum;
(function (GetImportVolumeVersionEnum) {
    GetImportVolumeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetImportVolumeVersionEnum || (GetImportVolumeVersionEnum = {}));
// GetImportVolumeVolume
/**
 * Describes an EBS volume.
**/
var GetImportVolumeVolume = /** @class */ (function (_super) {
    __extends(GetImportVolumeVolume, _super);
    function GetImportVolumeVolume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=Size" }),
        __metadata("design:type", Number)
    ], GetImportVolumeVolume.prototype, "size", void 0);
    return GetImportVolumeVolume;
}(SpeakeasyBase));
export { GetImportVolumeVolume };
var GetImportVolumeQueryParams = /** @class */ (function (_super) {
    __extends(GetImportVolumeQueryParams, _super);
    function GetImportVolumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetImportVolumeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], GetImportVolumeQueryParams.prototype, "availabilityZone", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Description" }),
        __metadata("design:type", String)
    ], GetImportVolumeQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetImportVolumeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Image" }),
        __metadata("design:type", GetImportVolumeImage)
    ], GetImportVolumeQueryParams.prototype, "image", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetImportVolumeQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Volume" }),
        __metadata("design:type", GetImportVolumeVolume)
    ], GetImportVolumeQueryParams.prototype, "volume", void 0);
    return GetImportVolumeQueryParams;
}(SpeakeasyBase));
export { GetImportVolumeQueryParams };
var GetImportVolumeHeaders = /** @class */ (function (_super) {
    __extends(GetImportVolumeHeaders, _super);
    function GetImportVolumeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetImportVolumeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetImportVolumeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetImportVolumeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetImportVolumeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetImportVolumeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetImportVolumeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetImportVolumeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetImportVolumeHeaders;
}(SpeakeasyBase));
export { GetImportVolumeHeaders };
var GetImportVolumeRequest = /** @class */ (function (_super) {
    __extends(GetImportVolumeRequest, _super);
    function GetImportVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetImportVolumeQueryParams)
    ], GetImportVolumeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetImportVolumeHeaders)
    ], GetImportVolumeRequest.prototype, "headers", void 0);
    return GetImportVolumeRequest;
}(SpeakeasyBase));
export { GetImportVolumeRequest };
var GetImportVolumeResponse = /** @class */ (function (_super) {
    __extends(GetImportVolumeResponse, _super);
    function GetImportVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetImportVolumeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetImportVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetImportVolumeResponse.prototype, "statusCode", void 0);
    return GetImportVolumeResponse;
}(SpeakeasyBase));
export { GetImportVolumeResponse };
