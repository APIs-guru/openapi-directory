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
export var GetDescribeFpgaImageAttributeActionEnum;
(function (GetDescribeFpgaImageAttributeActionEnum) {
    GetDescribeFpgaImageAttributeActionEnum["DescribeFpgaImageAttribute"] = "DescribeFpgaImageAttribute";
})(GetDescribeFpgaImageAttributeActionEnum || (GetDescribeFpgaImageAttributeActionEnum = {}));
export var GetDescribeFpgaImageAttributeAttributeEnum;
(function (GetDescribeFpgaImageAttributeAttributeEnum) {
    GetDescribeFpgaImageAttributeAttributeEnum["Description"] = "description";
    GetDescribeFpgaImageAttributeAttributeEnum["Name"] = "name";
    GetDescribeFpgaImageAttributeAttributeEnum["LoadPermission"] = "loadPermission";
    GetDescribeFpgaImageAttributeAttributeEnum["ProductCodes"] = "productCodes";
})(GetDescribeFpgaImageAttributeAttributeEnum || (GetDescribeFpgaImageAttributeAttributeEnum = {}));
export var GetDescribeFpgaImageAttributeVersionEnum;
(function (GetDescribeFpgaImageAttributeVersionEnum) {
    GetDescribeFpgaImageAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeFpgaImageAttributeVersionEnum || (GetDescribeFpgaImageAttributeVersionEnum = {}));
var GetDescribeFpgaImageAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeFpgaImageAttributeQueryParams, _super);
    function GetDescribeFpgaImageAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeQueryParams.prototype, "attribute", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribeFpgaImageAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FpgaImageId" }),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeQueryParams.prototype, "fpgaImageId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeQueryParams.prototype, "version", void 0);
    return GetDescribeFpgaImageAttributeQueryParams;
}(SpeakeasyBase));
export { GetDescribeFpgaImageAttributeQueryParams };
var GetDescribeFpgaImageAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeFpgaImageAttributeHeaders, _super);
    function GetDescribeFpgaImageAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeFpgaImageAttributeHeaders;
}(SpeakeasyBase));
export { GetDescribeFpgaImageAttributeHeaders };
var GetDescribeFpgaImageAttributeRequest = /** @class */ (function (_super) {
    __extends(GetDescribeFpgaImageAttributeRequest, _super);
    function GetDescribeFpgaImageAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeFpgaImageAttributeQueryParams)
    ], GetDescribeFpgaImageAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeFpgaImageAttributeHeaders)
    ], GetDescribeFpgaImageAttributeRequest.prototype, "headers", void 0);
    return GetDescribeFpgaImageAttributeRequest;
}(SpeakeasyBase));
export { GetDescribeFpgaImageAttributeRequest };
var GetDescribeFpgaImageAttributeResponse = /** @class */ (function (_super) {
    __extends(GetDescribeFpgaImageAttributeResponse, _super);
    function GetDescribeFpgaImageAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeFpgaImageAttributeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeFpgaImageAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeFpgaImageAttributeResponse.prototype, "statusCode", void 0);
    return GetDescribeFpgaImageAttributeResponse;
}(SpeakeasyBase));
export { GetDescribeFpgaImageAttributeResponse };
