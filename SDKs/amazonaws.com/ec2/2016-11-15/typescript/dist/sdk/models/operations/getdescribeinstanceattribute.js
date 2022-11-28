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
export var GetDescribeInstanceAttributeActionEnum;
(function (GetDescribeInstanceAttributeActionEnum) {
    GetDescribeInstanceAttributeActionEnum["DescribeInstanceAttribute"] = "DescribeInstanceAttribute";
})(GetDescribeInstanceAttributeActionEnum || (GetDescribeInstanceAttributeActionEnum = {}));
export var GetDescribeInstanceAttributeAttributeEnum;
(function (GetDescribeInstanceAttributeAttributeEnum) {
    GetDescribeInstanceAttributeAttributeEnum["InstanceType"] = "instanceType";
    GetDescribeInstanceAttributeAttributeEnum["Kernel"] = "kernel";
    GetDescribeInstanceAttributeAttributeEnum["Ramdisk"] = "ramdisk";
    GetDescribeInstanceAttributeAttributeEnum["UserData"] = "userData";
    GetDescribeInstanceAttributeAttributeEnum["DisableApiTermination"] = "disableApiTermination";
    GetDescribeInstanceAttributeAttributeEnum["InstanceInitiatedShutdownBehavior"] = "instanceInitiatedShutdownBehavior";
    GetDescribeInstanceAttributeAttributeEnum["RootDeviceName"] = "rootDeviceName";
    GetDescribeInstanceAttributeAttributeEnum["BlockDeviceMapping"] = "blockDeviceMapping";
    GetDescribeInstanceAttributeAttributeEnum["ProductCodes"] = "productCodes";
    GetDescribeInstanceAttributeAttributeEnum["SourceDestCheck"] = "sourceDestCheck";
    GetDescribeInstanceAttributeAttributeEnum["GroupSet"] = "groupSet";
    GetDescribeInstanceAttributeAttributeEnum["EbsOptimized"] = "ebsOptimized";
    GetDescribeInstanceAttributeAttributeEnum["SriovNetSupport"] = "sriovNetSupport";
    GetDescribeInstanceAttributeAttributeEnum["EnaSupport"] = "enaSupport";
    GetDescribeInstanceAttributeAttributeEnum["EnclaveOptions"] = "enclaveOptions";
})(GetDescribeInstanceAttributeAttributeEnum || (GetDescribeInstanceAttributeAttributeEnum = {}));
export var GetDescribeInstanceAttributeVersionEnum;
(function (GetDescribeInstanceAttributeVersionEnum) {
    GetDescribeInstanceAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeInstanceAttributeVersionEnum || (GetDescribeInstanceAttributeVersionEnum = {}));
var GetDescribeInstanceAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeInstanceAttributeQueryParams, _super);
    function GetDescribeInstanceAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeQueryParams.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribeInstanceAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeQueryParams.prototype, "version", void 0);
    return GetDescribeInstanceAttributeQueryParams;
}(SpeakeasyBase));
export { GetDescribeInstanceAttributeQueryParams };
var GetDescribeInstanceAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeInstanceAttributeHeaders, _super);
    function GetDescribeInstanceAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeInstanceAttributeHeaders;
}(SpeakeasyBase));
export { GetDescribeInstanceAttributeHeaders };
var GetDescribeInstanceAttributeRequest = /** @class */ (function (_super) {
    __extends(GetDescribeInstanceAttributeRequest, _super);
    function GetDescribeInstanceAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeInstanceAttributeQueryParams)
    ], GetDescribeInstanceAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeInstanceAttributeHeaders)
    ], GetDescribeInstanceAttributeRequest.prototype, "headers", void 0);
    return GetDescribeInstanceAttributeRequest;
}(SpeakeasyBase));
export { GetDescribeInstanceAttributeRequest };
var GetDescribeInstanceAttributeResponse = /** @class */ (function (_super) {
    __extends(GetDescribeInstanceAttributeResponse, _super);
    function GetDescribeInstanceAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeInstanceAttributeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeInstanceAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeInstanceAttributeResponse.prototype, "statusCode", void 0);
    return GetDescribeInstanceAttributeResponse;
}(SpeakeasyBase));
export { GetDescribeInstanceAttributeResponse };
