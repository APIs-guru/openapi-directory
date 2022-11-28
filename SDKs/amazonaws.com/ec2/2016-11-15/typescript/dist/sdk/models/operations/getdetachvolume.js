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
export var GetDetachVolumeActionEnum;
(function (GetDetachVolumeActionEnum) {
    GetDetachVolumeActionEnum["DetachVolume"] = "DetachVolume";
})(GetDetachVolumeActionEnum || (GetDetachVolumeActionEnum = {}));
export var GetDetachVolumeVersionEnum;
(function (GetDetachVolumeVersionEnum) {
    GetDetachVolumeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDetachVolumeVersionEnum || (GetDetachVolumeVersionEnum = {}));
var GetDetachVolumeQueryParams = /** @class */ (function (_super) {
    __extends(GetDetachVolumeQueryParams, _super);
    function GetDetachVolumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDetachVolumeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Device" }),
        __metadata("design:type", String)
    ], GetDetachVolumeQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDetachVolumeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Force" }),
        __metadata("design:type", Boolean)
    ], GetDetachVolumeQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetDetachVolumeQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDetachVolumeQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VolumeId" }),
        __metadata("design:type", String)
    ], GetDetachVolumeQueryParams.prototype, "volumeId", void 0);
    return GetDetachVolumeQueryParams;
}(SpeakeasyBase));
export { GetDetachVolumeQueryParams };
var GetDetachVolumeHeaders = /** @class */ (function (_super) {
    __extends(GetDetachVolumeHeaders, _super);
    function GetDetachVolumeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDetachVolumeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDetachVolumeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDetachVolumeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDetachVolumeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDetachVolumeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDetachVolumeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDetachVolumeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDetachVolumeHeaders;
}(SpeakeasyBase));
export { GetDetachVolumeHeaders };
var GetDetachVolumeRequest = /** @class */ (function (_super) {
    __extends(GetDetachVolumeRequest, _super);
    function GetDetachVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDetachVolumeQueryParams)
    ], GetDetachVolumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDetachVolumeHeaders)
    ], GetDetachVolumeRequest.prototype, "headers", void 0);
    return GetDetachVolumeRequest;
}(SpeakeasyBase));
export { GetDetachVolumeRequest };
var GetDetachVolumeResponse = /** @class */ (function (_super) {
    __extends(GetDetachVolumeResponse, _super);
    function GetDetachVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDetachVolumeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDetachVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDetachVolumeResponse.prototype, "statusCode", void 0);
    return GetDetachVolumeResponse;
}(SpeakeasyBase));
export { GetDetachVolumeResponse };
