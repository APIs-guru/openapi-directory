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
export var GetDisableFastSnapshotRestoresActionEnum;
(function (GetDisableFastSnapshotRestoresActionEnum) {
    GetDisableFastSnapshotRestoresActionEnum["DisableFastSnapshotRestores"] = "DisableFastSnapshotRestores";
})(GetDisableFastSnapshotRestoresActionEnum || (GetDisableFastSnapshotRestoresActionEnum = {}));
export var GetDisableFastSnapshotRestoresVersionEnum;
(function (GetDisableFastSnapshotRestoresVersionEnum) {
    GetDisableFastSnapshotRestoresVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDisableFastSnapshotRestoresVersionEnum || (GetDisableFastSnapshotRestoresVersionEnum = {}));
var GetDisableFastSnapshotRestoresQueryParams = /** @class */ (function (_super) {
    __extends(GetDisableFastSnapshotRestoresQueryParams, _super);
    function GetDisableFastSnapshotRestoresQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisableFastSnapshotRestoresQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" }),
        __metadata("design:type", Array)
    ], GetDisableFastSnapshotRestoresQueryParams.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDisableFastSnapshotRestoresQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceSnapshotId" }),
        __metadata("design:type", Array)
    ], GetDisableFastSnapshotRestoresQueryParams.prototype, "sourceSnapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisableFastSnapshotRestoresQueryParams.prototype, "version", void 0);
    return GetDisableFastSnapshotRestoresQueryParams;
}(SpeakeasyBase));
export { GetDisableFastSnapshotRestoresQueryParams };
var GetDisableFastSnapshotRestoresHeaders = /** @class */ (function (_super) {
    __extends(GetDisableFastSnapshotRestoresHeaders, _super);
    function GetDisableFastSnapshotRestoresHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisableFastSnapshotRestoresHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisableFastSnapshotRestoresHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisableFastSnapshotRestoresHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisableFastSnapshotRestoresHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisableFastSnapshotRestoresHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisableFastSnapshotRestoresHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisableFastSnapshotRestoresHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisableFastSnapshotRestoresHeaders;
}(SpeakeasyBase));
export { GetDisableFastSnapshotRestoresHeaders };
var GetDisableFastSnapshotRestoresRequest = /** @class */ (function (_super) {
    __extends(GetDisableFastSnapshotRestoresRequest, _super);
    function GetDisableFastSnapshotRestoresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableFastSnapshotRestoresQueryParams)
    ], GetDisableFastSnapshotRestoresRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableFastSnapshotRestoresHeaders)
    ], GetDisableFastSnapshotRestoresRequest.prototype, "headers", void 0);
    return GetDisableFastSnapshotRestoresRequest;
}(SpeakeasyBase));
export { GetDisableFastSnapshotRestoresRequest };
var GetDisableFastSnapshotRestoresResponse = /** @class */ (function (_super) {
    __extends(GetDisableFastSnapshotRestoresResponse, _super);
    function GetDisableFastSnapshotRestoresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisableFastSnapshotRestoresResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisableFastSnapshotRestoresResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisableFastSnapshotRestoresResponse.prototype, "statusCode", void 0);
    return GetDisableFastSnapshotRestoresResponse;
}(SpeakeasyBase));
export { GetDisableFastSnapshotRestoresResponse };
