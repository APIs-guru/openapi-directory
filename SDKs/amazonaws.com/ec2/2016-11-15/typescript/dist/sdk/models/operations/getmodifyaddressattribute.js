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
export var GetModifyAddressAttributeActionEnum;
(function (GetModifyAddressAttributeActionEnum) {
    GetModifyAddressAttributeActionEnum["ModifyAddressAttribute"] = "ModifyAddressAttribute";
})(GetModifyAddressAttributeActionEnum || (GetModifyAddressAttributeActionEnum = {}));
export var GetModifyAddressAttributeVersionEnum;
(function (GetModifyAddressAttributeVersionEnum) {
    GetModifyAddressAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyAddressAttributeVersionEnum || (GetModifyAddressAttributeVersionEnum = {}));
var GetModifyAddressAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyAddressAttributeQueryParams, _super);
    function GetModifyAddressAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AllocationId" }),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeQueryParams.prototype, "allocationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeQueryParams.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyAddressAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeQueryParams.prototype, "version", void 0);
    return GetModifyAddressAttributeQueryParams;
}(SpeakeasyBase));
export { GetModifyAddressAttributeQueryParams };
var GetModifyAddressAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetModifyAddressAttributeHeaders, _super);
    function GetModifyAddressAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyAddressAttributeHeaders;
}(SpeakeasyBase));
export { GetModifyAddressAttributeHeaders };
var GetModifyAddressAttributeRequest = /** @class */ (function (_super) {
    __extends(GetModifyAddressAttributeRequest, _super);
    function GetModifyAddressAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyAddressAttributeQueryParams)
    ], GetModifyAddressAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyAddressAttributeHeaders)
    ], GetModifyAddressAttributeRequest.prototype, "headers", void 0);
    return GetModifyAddressAttributeRequest;
}(SpeakeasyBase));
export { GetModifyAddressAttributeRequest };
var GetModifyAddressAttributeResponse = /** @class */ (function (_super) {
    __extends(GetModifyAddressAttributeResponse, _super);
    function GetModifyAddressAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyAddressAttributeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyAddressAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyAddressAttributeResponse.prototype, "statusCode", void 0);
    return GetModifyAddressAttributeResponse;
}(SpeakeasyBase));
export { GetModifyAddressAttributeResponse };
