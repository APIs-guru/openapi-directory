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
export var GetDescribeSnapshotAttributeActionEnum;
(function (GetDescribeSnapshotAttributeActionEnum) {
    GetDescribeSnapshotAttributeActionEnum["DescribeSnapshotAttribute"] = "DescribeSnapshotAttribute";
})(GetDescribeSnapshotAttributeActionEnum || (GetDescribeSnapshotAttributeActionEnum = {}));
export var GetDescribeSnapshotAttributeAttributeEnum;
(function (GetDescribeSnapshotAttributeAttributeEnum) {
    GetDescribeSnapshotAttributeAttributeEnum["ProductCodes"] = "productCodes";
    GetDescribeSnapshotAttributeAttributeEnum["CreateVolumePermission"] = "createVolumePermission";
})(GetDescribeSnapshotAttributeAttributeEnum || (GetDescribeSnapshotAttributeAttributeEnum = {}));
export var GetDescribeSnapshotAttributeVersionEnum;
(function (GetDescribeSnapshotAttributeVersionEnum) {
    GetDescribeSnapshotAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeSnapshotAttributeVersionEnum || (GetDescribeSnapshotAttributeVersionEnum = {}));
var GetDescribeSnapshotAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeSnapshotAttributeQueryParams, _super);
    function GetDescribeSnapshotAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeQueryParams.prototype, "attribute", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribeSnapshotAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotId" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeQueryParams.prototype, "snapshotId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeQueryParams.prototype, "version", void 0);
    return GetDescribeSnapshotAttributeQueryParams;
}(SpeakeasyBase));
export { GetDescribeSnapshotAttributeQueryParams };
var GetDescribeSnapshotAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeSnapshotAttributeHeaders, _super);
    function GetDescribeSnapshotAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeSnapshotAttributeHeaders;
}(SpeakeasyBase));
export { GetDescribeSnapshotAttributeHeaders };
var GetDescribeSnapshotAttributeRequest = /** @class */ (function (_super) {
    __extends(GetDescribeSnapshotAttributeRequest, _super);
    function GetDescribeSnapshotAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeSnapshotAttributeQueryParams)
    ], GetDescribeSnapshotAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeSnapshotAttributeHeaders)
    ], GetDescribeSnapshotAttributeRequest.prototype, "headers", void 0);
    return GetDescribeSnapshotAttributeRequest;
}(SpeakeasyBase));
export { GetDescribeSnapshotAttributeRequest };
var GetDescribeSnapshotAttributeResponse = /** @class */ (function (_super) {
    __extends(GetDescribeSnapshotAttributeResponse, _super);
    function GetDescribeSnapshotAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeSnapshotAttributeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeSnapshotAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeSnapshotAttributeResponse.prototype, "statusCode", void 0);
    return GetDescribeSnapshotAttributeResponse;
}(SpeakeasyBase));
export { GetDescribeSnapshotAttributeResponse };
