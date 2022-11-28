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
export var GetCopyImageActionEnum;
(function (GetCopyImageActionEnum) {
    GetCopyImageActionEnum["CopyImage"] = "CopyImage";
})(GetCopyImageActionEnum || (GetCopyImageActionEnum = {}));
export var GetCopyImageVersionEnum;
(function (GetCopyImageVersionEnum) {
    GetCopyImageVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCopyImageVersionEnum || (GetCopyImageVersionEnum = {}));
var GetCopyImageQueryParams = /** @class */ (function (_super) {
    __extends(GetCopyImageQueryParams, _super);
    function GetCopyImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCopyImageQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientToken" }),
        __metadata("design:type", String)
    ], GetCopyImageQueryParams.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" }),
        __metadata("design:type", String)
    ], GetCopyImageQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationOutpostArn" }),
        __metadata("design:type", String)
    ], GetCopyImageQueryParams.prototype, "destinationOutpostArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCopyImageQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Encrypted" }),
        __metadata("design:type", Boolean)
    ], GetCopyImageQueryParams.prototype, "encrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" }),
        __metadata("design:type", String)
    ], GetCopyImageQueryParams.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Name" }),
        __metadata("design:type", String)
    ], GetCopyImageQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceImageId" }),
        __metadata("design:type", String)
    ], GetCopyImageQueryParams.prototype, "sourceImageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceRegion" }),
        __metadata("design:type", String)
    ], GetCopyImageQueryParams.prototype, "sourceRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCopyImageQueryParams.prototype, "version", void 0);
    return GetCopyImageQueryParams;
}(SpeakeasyBase));
export { GetCopyImageQueryParams };
var GetCopyImageHeaders = /** @class */ (function (_super) {
    __extends(GetCopyImageHeaders, _super);
    function GetCopyImageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCopyImageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCopyImageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCopyImageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCopyImageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCopyImageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCopyImageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCopyImageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCopyImageHeaders;
}(SpeakeasyBase));
export { GetCopyImageHeaders };
var GetCopyImageRequest = /** @class */ (function (_super) {
    __extends(GetCopyImageRequest, _super);
    function GetCopyImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCopyImageQueryParams)
    ], GetCopyImageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCopyImageHeaders)
    ], GetCopyImageRequest.prototype, "headers", void 0);
    return GetCopyImageRequest;
}(SpeakeasyBase));
export { GetCopyImageRequest };
var GetCopyImageResponse = /** @class */ (function (_super) {
    __extends(GetCopyImageResponse, _super);
    function GetCopyImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCopyImageResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCopyImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCopyImageResponse.prototype, "statusCode", void 0);
    return GetCopyImageResponse;
}(SpeakeasyBase));
export { GetCopyImageResponse };
