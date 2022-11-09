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
export var GetDescribeImageAttributeActionEnum;
(function (GetDescribeImageAttributeActionEnum) {
    GetDescribeImageAttributeActionEnum["DescribeImageAttribute"] = "DescribeImageAttribute";
})(GetDescribeImageAttributeActionEnum || (GetDescribeImageAttributeActionEnum = {}));
export var GetDescribeImageAttributeAttributeEnum;
(function (GetDescribeImageAttributeAttributeEnum) {
    GetDescribeImageAttributeAttributeEnum["Description"] = "description";
    GetDescribeImageAttributeAttributeEnum["Kernel"] = "kernel";
    GetDescribeImageAttributeAttributeEnum["Ramdisk"] = "ramdisk";
    GetDescribeImageAttributeAttributeEnum["LaunchPermission"] = "launchPermission";
    GetDescribeImageAttributeAttributeEnum["ProductCodes"] = "productCodes";
    GetDescribeImageAttributeAttributeEnum["BlockDeviceMapping"] = "blockDeviceMapping";
    GetDescribeImageAttributeAttributeEnum["SriovNetSupport"] = "sriovNetSupport";
    GetDescribeImageAttributeAttributeEnum["BootMode"] = "bootMode";
})(GetDescribeImageAttributeAttributeEnum || (GetDescribeImageAttributeAttributeEnum = {}));
export var GetDescribeImageAttributeVersionEnum;
(function (GetDescribeImageAttributeVersionEnum) {
    GetDescribeImageAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeImageAttributeVersionEnum || (GetDescribeImageAttributeVersionEnum = {}));
var GetDescribeImageAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeImageAttributeQueryParams, _super);
    function GetDescribeImageAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeQueryParams.prototype, "attribute", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribeImageAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ImageId" }),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeQueryParams.prototype, "imageId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeQueryParams.prototype, "version", void 0);
    return GetDescribeImageAttributeQueryParams;
}(SpeakeasyBase));
export { GetDescribeImageAttributeQueryParams };
var GetDescribeImageAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeImageAttributeHeaders, _super);
    function GetDescribeImageAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeImageAttributeHeaders;
}(SpeakeasyBase));
export { GetDescribeImageAttributeHeaders };
var GetDescribeImageAttributeRequest = /** @class */ (function (_super) {
    __extends(GetDescribeImageAttributeRequest, _super);
    function GetDescribeImageAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeImageAttributeQueryParams)
    ], GetDescribeImageAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeImageAttributeHeaders)
    ], GetDescribeImageAttributeRequest.prototype, "headers", void 0);
    return GetDescribeImageAttributeRequest;
}(SpeakeasyBase));
export { GetDescribeImageAttributeRequest };
var GetDescribeImageAttributeResponse = /** @class */ (function (_super) {
    __extends(GetDescribeImageAttributeResponse, _super);
    function GetDescribeImageAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeImageAttributeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeImageAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeImageAttributeResponse.prototype, "statusCode", void 0);
    return GetDescribeImageAttributeResponse;
}(SpeakeasyBase));
export { GetDescribeImageAttributeResponse };
