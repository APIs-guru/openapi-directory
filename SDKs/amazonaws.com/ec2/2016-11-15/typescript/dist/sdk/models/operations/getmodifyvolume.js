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
export var GetModifyVolumeActionEnum;
(function (GetModifyVolumeActionEnum) {
    GetModifyVolumeActionEnum["ModifyVolume"] = "ModifyVolume";
})(GetModifyVolumeActionEnum || (GetModifyVolumeActionEnum = {}));
export var GetModifyVolumeVersionEnum;
(function (GetModifyVolumeVersionEnum) {
    GetModifyVolumeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyVolumeVersionEnum || (GetModifyVolumeVersionEnum = {}));
export var GetModifyVolumeVolumeTypeEnum;
(function (GetModifyVolumeVolumeTypeEnum) {
    GetModifyVolumeVolumeTypeEnum["Standard"] = "standard";
    GetModifyVolumeVolumeTypeEnum["Io1"] = "io1";
    GetModifyVolumeVolumeTypeEnum["Io2"] = "io2";
    GetModifyVolumeVolumeTypeEnum["Gp2"] = "gp2";
    GetModifyVolumeVolumeTypeEnum["Sc1"] = "sc1";
    GetModifyVolumeVolumeTypeEnum["St1"] = "st1";
    GetModifyVolumeVolumeTypeEnum["Gp3"] = "gp3";
})(GetModifyVolumeVolumeTypeEnum || (GetModifyVolumeVolumeTypeEnum = {}));
var GetModifyVolumeQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyVolumeQueryParams, _super);
    function GetModifyVolumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyVolumeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyVolumeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Iops" }),
        __metadata("design:type", Number)
    ], GetModifyVolumeQueryParams.prototype, "iops", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MultiAttachEnabled" }),
        __metadata("design:type", Boolean)
    ], GetModifyVolumeQueryParams.prototype, "multiAttachEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Size" }),
        __metadata("design:type", Number)
    ], GetModifyVolumeQueryParams.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Throughput" }),
        __metadata("design:type", Number)
    ], GetModifyVolumeQueryParams.prototype, "throughput", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyVolumeQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VolumeId" }),
        __metadata("design:type", String)
    ], GetModifyVolumeQueryParams.prototype, "volumeId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VolumeType" }),
        __metadata("design:type", String)
    ], GetModifyVolumeQueryParams.prototype, "volumeType", void 0);
    return GetModifyVolumeQueryParams;
}(SpeakeasyBase));
export { GetModifyVolumeQueryParams };
var GetModifyVolumeHeaders = /** @class */ (function (_super) {
    __extends(GetModifyVolumeHeaders, _super);
    function GetModifyVolumeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyVolumeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyVolumeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyVolumeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyVolumeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyVolumeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyVolumeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyVolumeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyVolumeHeaders;
}(SpeakeasyBase));
export { GetModifyVolumeHeaders };
var GetModifyVolumeRequest = /** @class */ (function (_super) {
    __extends(GetModifyVolumeRequest, _super);
    function GetModifyVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyVolumeQueryParams)
    ], GetModifyVolumeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyVolumeHeaders)
    ], GetModifyVolumeRequest.prototype, "headers", void 0);
    return GetModifyVolumeRequest;
}(SpeakeasyBase));
export { GetModifyVolumeRequest };
var GetModifyVolumeResponse = /** @class */ (function (_super) {
    __extends(GetModifyVolumeResponse, _super);
    function GetModifyVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyVolumeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyVolumeResponse.prototype, "statusCode", void 0);
    return GetModifyVolumeResponse;
}(SpeakeasyBase));
export { GetModifyVolumeResponse };
