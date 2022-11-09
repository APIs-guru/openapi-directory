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
export var GetDescribeEnvironmentHealthActionEnum;
(function (GetDescribeEnvironmentHealthActionEnum) {
    GetDescribeEnvironmentHealthActionEnum["DescribeEnvironmentHealth"] = "DescribeEnvironmentHealth";
})(GetDescribeEnvironmentHealthActionEnum || (GetDescribeEnvironmentHealthActionEnum = {}));
export var GetDescribeEnvironmentHealthVersionEnum;
(function (GetDescribeEnvironmentHealthVersionEnum) {
    GetDescribeEnvironmentHealthVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDescribeEnvironmentHealthVersionEnum || (GetDescribeEnvironmentHealthVersionEnum = {}));
var GetDescribeEnvironmentHealthQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentHealthQueryParams, _super);
    function GetDescribeEnvironmentHealthQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" }),
        __metadata("design:type", Array)
    ], GetDescribeEnvironmentHealthQueryParams.prototype, "attributeNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthQueryParams.prototype, "environmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthQueryParams.prototype, "environmentName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthQueryParams.prototype, "version", void 0);
    return GetDescribeEnvironmentHealthQueryParams;
}(SpeakeasyBase));
export { GetDescribeEnvironmentHealthQueryParams };
var GetDescribeEnvironmentHealthHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentHealthHeaders, _super);
    function GetDescribeEnvironmentHealthHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeEnvironmentHealthHeaders;
}(SpeakeasyBase));
export { GetDescribeEnvironmentHealthHeaders };
var GetDescribeEnvironmentHealthRequest = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentHealthRequest, _super);
    function GetDescribeEnvironmentHealthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeEnvironmentHealthQueryParams)
    ], GetDescribeEnvironmentHealthRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeEnvironmentHealthHeaders)
    ], GetDescribeEnvironmentHealthRequest.prototype, "headers", void 0);
    return GetDescribeEnvironmentHealthRequest;
}(SpeakeasyBase));
export { GetDescribeEnvironmentHealthRequest };
var GetDescribeEnvironmentHealthResponse = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentHealthResponse, _super);
    function GetDescribeEnvironmentHealthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeEnvironmentHealthResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentHealthResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeEnvironmentHealthResponse.prototype, "statusCode", void 0);
    return GetDescribeEnvironmentHealthResponse;
}(SpeakeasyBase));
export { GetDescribeEnvironmentHealthResponse };
