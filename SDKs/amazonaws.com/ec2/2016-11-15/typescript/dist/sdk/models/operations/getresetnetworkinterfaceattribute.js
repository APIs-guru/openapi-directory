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
export var GetResetNetworkInterfaceAttributeActionEnum;
(function (GetResetNetworkInterfaceAttributeActionEnum) {
    GetResetNetworkInterfaceAttributeActionEnum["ResetNetworkInterfaceAttribute"] = "ResetNetworkInterfaceAttribute";
})(GetResetNetworkInterfaceAttributeActionEnum || (GetResetNetworkInterfaceAttributeActionEnum = {}));
export var GetResetNetworkInterfaceAttributeVersionEnum;
(function (GetResetNetworkInterfaceAttributeVersionEnum) {
    GetResetNetworkInterfaceAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetResetNetworkInterfaceAttributeVersionEnum || (GetResetNetworkInterfaceAttributeVersionEnum = {}));
var GetResetNetworkInterfaceAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetResetNetworkInterfaceAttributeQueryParams, _super);
    function GetResetNetworkInterfaceAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetResetNetworkInterfaceAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceDestCheck" }),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeQueryParams.prototype, "sourceDestCheck", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeQueryParams.prototype, "version", void 0);
    return GetResetNetworkInterfaceAttributeQueryParams;
}(SpeakeasyBase));
export { GetResetNetworkInterfaceAttributeQueryParams };
var GetResetNetworkInterfaceAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetResetNetworkInterfaceAttributeHeaders, _super);
    function GetResetNetworkInterfaceAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResetNetworkInterfaceAttributeHeaders;
}(SpeakeasyBase));
export { GetResetNetworkInterfaceAttributeHeaders };
var GetResetNetworkInterfaceAttributeRequest = /** @class */ (function (_super) {
    __extends(GetResetNetworkInterfaceAttributeRequest, _super);
    function GetResetNetworkInterfaceAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetResetNetworkInterfaceAttributeQueryParams)
    ], GetResetNetworkInterfaceAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetResetNetworkInterfaceAttributeHeaders)
    ], GetResetNetworkInterfaceAttributeRequest.prototype, "headers", void 0);
    return GetResetNetworkInterfaceAttributeRequest;
}(SpeakeasyBase));
export { GetResetNetworkInterfaceAttributeRequest };
var GetResetNetworkInterfaceAttributeResponse = /** @class */ (function (_super) {
    __extends(GetResetNetworkInterfaceAttributeResponse, _super);
    function GetResetNetworkInterfaceAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetResetNetworkInterfaceAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetResetNetworkInterfaceAttributeResponse.prototype, "statusCode", void 0);
    return GetResetNetworkInterfaceAttributeResponse;
}(SpeakeasyBase));
export { GetResetNetworkInterfaceAttributeResponse };
