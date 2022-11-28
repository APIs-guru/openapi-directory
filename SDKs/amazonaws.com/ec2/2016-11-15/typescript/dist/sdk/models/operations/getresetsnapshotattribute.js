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
export var GetResetSnapshotAttributeActionEnum;
(function (GetResetSnapshotAttributeActionEnum) {
    GetResetSnapshotAttributeActionEnum["ResetSnapshotAttribute"] = "ResetSnapshotAttribute";
})(GetResetSnapshotAttributeActionEnum || (GetResetSnapshotAttributeActionEnum = {}));
export var GetResetSnapshotAttributeAttributeEnum;
(function (GetResetSnapshotAttributeAttributeEnum) {
    GetResetSnapshotAttributeAttributeEnum["ProductCodes"] = "productCodes";
    GetResetSnapshotAttributeAttributeEnum["CreateVolumePermission"] = "createVolumePermission";
})(GetResetSnapshotAttributeAttributeEnum || (GetResetSnapshotAttributeAttributeEnum = {}));
export var GetResetSnapshotAttributeVersionEnum;
(function (GetResetSnapshotAttributeVersionEnum) {
    GetResetSnapshotAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetResetSnapshotAttributeVersionEnum || (GetResetSnapshotAttributeVersionEnum = {}));
var GetResetSnapshotAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetResetSnapshotAttributeQueryParams, _super);
    function GetResetSnapshotAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeQueryParams.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetResetSnapshotAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotId" }),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeQueryParams.prototype, "snapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeQueryParams.prototype, "version", void 0);
    return GetResetSnapshotAttributeQueryParams;
}(SpeakeasyBase));
export { GetResetSnapshotAttributeQueryParams };
var GetResetSnapshotAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetResetSnapshotAttributeHeaders, _super);
    function GetResetSnapshotAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResetSnapshotAttributeHeaders;
}(SpeakeasyBase));
export { GetResetSnapshotAttributeHeaders };
var GetResetSnapshotAttributeRequest = /** @class */ (function (_super) {
    __extends(GetResetSnapshotAttributeRequest, _super);
    function GetResetSnapshotAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResetSnapshotAttributeQueryParams)
    ], GetResetSnapshotAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResetSnapshotAttributeHeaders)
    ], GetResetSnapshotAttributeRequest.prototype, "headers", void 0);
    return GetResetSnapshotAttributeRequest;
}(SpeakeasyBase));
export { GetResetSnapshotAttributeRequest };
var GetResetSnapshotAttributeResponse = /** @class */ (function (_super) {
    __extends(GetResetSnapshotAttributeResponse, _super);
    function GetResetSnapshotAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResetSnapshotAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResetSnapshotAttributeResponse.prototype, "statusCode", void 0);
    return GetResetSnapshotAttributeResponse;
}(SpeakeasyBase));
export { GetResetSnapshotAttributeResponse };
