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
export var GetResetInstanceAttributeActionEnum;
(function (GetResetInstanceAttributeActionEnum) {
    GetResetInstanceAttributeActionEnum["ResetInstanceAttribute"] = "ResetInstanceAttribute";
})(GetResetInstanceAttributeActionEnum || (GetResetInstanceAttributeActionEnum = {}));
export var GetResetInstanceAttributeAttributeEnum;
(function (GetResetInstanceAttributeAttributeEnum) {
    GetResetInstanceAttributeAttributeEnum["InstanceType"] = "instanceType";
    GetResetInstanceAttributeAttributeEnum["Kernel"] = "kernel";
    GetResetInstanceAttributeAttributeEnum["Ramdisk"] = "ramdisk";
    GetResetInstanceAttributeAttributeEnum["UserData"] = "userData";
    GetResetInstanceAttributeAttributeEnum["DisableApiTermination"] = "disableApiTermination";
    GetResetInstanceAttributeAttributeEnum["InstanceInitiatedShutdownBehavior"] = "instanceInitiatedShutdownBehavior";
    GetResetInstanceAttributeAttributeEnum["RootDeviceName"] = "rootDeviceName";
    GetResetInstanceAttributeAttributeEnum["BlockDeviceMapping"] = "blockDeviceMapping";
    GetResetInstanceAttributeAttributeEnum["ProductCodes"] = "productCodes";
    GetResetInstanceAttributeAttributeEnum["SourceDestCheck"] = "sourceDestCheck";
    GetResetInstanceAttributeAttributeEnum["GroupSet"] = "groupSet";
    GetResetInstanceAttributeAttributeEnum["EbsOptimized"] = "ebsOptimized";
    GetResetInstanceAttributeAttributeEnum["SriovNetSupport"] = "sriovNetSupport";
    GetResetInstanceAttributeAttributeEnum["EnaSupport"] = "enaSupport";
    GetResetInstanceAttributeAttributeEnum["EnclaveOptions"] = "enclaveOptions";
})(GetResetInstanceAttributeAttributeEnum || (GetResetInstanceAttributeAttributeEnum = {}));
export var GetResetInstanceAttributeVersionEnum;
(function (GetResetInstanceAttributeVersionEnum) {
    GetResetInstanceAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetResetInstanceAttributeVersionEnum || (GetResetInstanceAttributeVersionEnum = {}));
var GetResetInstanceAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetResetInstanceAttributeQueryParams, _super);
    function GetResetInstanceAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeQueryParams.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetResetInstanceAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeQueryParams.prototype, "version", void 0);
    return GetResetInstanceAttributeQueryParams;
}(SpeakeasyBase));
export { GetResetInstanceAttributeQueryParams };
var GetResetInstanceAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetResetInstanceAttributeHeaders, _super);
    function GetResetInstanceAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResetInstanceAttributeHeaders;
}(SpeakeasyBase));
export { GetResetInstanceAttributeHeaders };
var GetResetInstanceAttributeRequest = /** @class */ (function (_super) {
    __extends(GetResetInstanceAttributeRequest, _super);
    function GetResetInstanceAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResetInstanceAttributeQueryParams)
    ], GetResetInstanceAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResetInstanceAttributeHeaders)
    ], GetResetInstanceAttributeRequest.prototype, "headers", void 0);
    return GetResetInstanceAttributeRequest;
}(SpeakeasyBase));
export { GetResetInstanceAttributeRequest };
var GetResetInstanceAttributeResponse = /** @class */ (function (_super) {
    __extends(GetResetInstanceAttributeResponse, _super);
    function GetResetInstanceAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResetInstanceAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResetInstanceAttributeResponse.prototype, "statusCode", void 0);
    return GetResetInstanceAttributeResponse;
}(SpeakeasyBase));
export { GetResetInstanceAttributeResponse };
