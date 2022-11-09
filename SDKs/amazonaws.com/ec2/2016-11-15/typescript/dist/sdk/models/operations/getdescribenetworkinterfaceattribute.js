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
export var GetDescribeNetworkInterfaceAttributeActionEnum;
(function (GetDescribeNetworkInterfaceAttributeActionEnum) {
    GetDescribeNetworkInterfaceAttributeActionEnum["DescribeNetworkInterfaceAttribute"] = "DescribeNetworkInterfaceAttribute";
})(GetDescribeNetworkInterfaceAttributeActionEnum || (GetDescribeNetworkInterfaceAttributeActionEnum = {}));
export var GetDescribeNetworkInterfaceAttributeAttributeEnum;
(function (GetDescribeNetworkInterfaceAttributeAttributeEnum) {
    GetDescribeNetworkInterfaceAttributeAttributeEnum["Description"] = "description";
    GetDescribeNetworkInterfaceAttributeAttributeEnum["GroupSet"] = "groupSet";
    GetDescribeNetworkInterfaceAttributeAttributeEnum["SourceDestCheck"] = "sourceDestCheck";
    GetDescribeNetworkInterfaceAttributeAttributeEnum["Attachment"] = "attachment";
})(GetDescribeNetworkInterfaceAttributeAttributeEnum || (GetDescribeNetworkInterfaceAttributeAttributeEnum = {}));
export var GetDescribeNetworkInterfaceAttributeVersionEnum;
(function (GetDescribeNetworkInterfaceAttributeVersionEnum) {
    GetDescribeNetworkInterfaceAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeNetworkInterfaceAttributeVersionEnum || (GetDescribeNetworkInterfaceAttributeVersionEnum = {}));
var GetDescribeNetworkInterfaceAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeNetworkInterfaceAttributeQueryParams, _super);
    function GetDescribeNetworkInterfaceAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeQueryParams.prototype, "attribute", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribeNetworkInterfaceAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeQueryParams.prototype, "version", void 0);
    return GetDescribeNetworkInterfaceAttributeQueryParams;
}(SpeakeasyBase));
export { GetDescribeNetworkInterfaceAttributeQueryParams };
var GetDescribeNetworkInterfaceAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeNetworkInterfaceAttributeHeaders, _super);
    function GetDescribeNetworkInterfaceAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeNetworkInterfaceAttributeHeaders;
}(SpeakeasyBase));
export { GetDescribeNetworkInterfaceAttributeHeaders };
var GetDescribeNetworkInterfaceAttributeRequest = /** @class */ (function (_super) {
    __extends(GetDescribeNetworkInterfaceAttributeRequest, _super);
    function GetDescribeNetworkInterfaceAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeNetworkInterfaceAttributeQueryParams)
    ], GetDescribeNetworkInterfaceAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeNetworkInterfaceAttributeHeaders)
    ], GetDescribeNetworkInterfaceAttributeRequest.prototype, "headers", void 0);
    return GetDescribeNetworkInterfaceAttributeRequest;
}(SpeakeasyBase));
export { GetDescribeNetworkInterfaceAttributeRequest };
var GetDescribeNetworkInterfaceAttributeResponse = /** @class */ (function (_super) {
    __extends(GetDescribeNetworkInterfaceAttributeResponse, _super);
    function GetDescribeNetworkInterfaceAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeNetworkInterfaceAttributeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeNetworkInterfaceAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeNetworkInterfaceAttributeResponse.prototype, "statusCode", void 0);
    return GetDescribeNetworkInterfaceAttributeResponse;
}(SpeakeasyBase));
export { GetDescribeNetworkInterfaceAttributeResponse };
