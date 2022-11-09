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
export var GetDescribeStopwordOptionsActionEnum;
(function (GetDescribeStopwordOptionsActionEnum) {
    GetDescribeStopwordOptionsActionEnum["DescribeStopwordOptions"] = "DescribeStopwordOptions";
})(GetDescribeStopwordOptionsActionEnum || (GetDescribeStopwordOptionsActionEnum = {}));
export var GetDescribeStopwordOptionsVersionEnum;
(function (GetDescribeStopwordOptionsVersionEnum) {
    GetDescribeStopwordOptionsVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(GetDescribeStopwordOptionsVersionEnum || (GetDescribeStopwordOptionsVersionEnum = {}));
var GetDescribeStopwordOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeStopwordOptionsQueryParams, _super);
    function GetDescribeStopwordOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeStopwordOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDescribeStopwordOptionsQueryParams.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeStopwordOptionsQueryParams.prototype, "version", void 0);
    return GetDescribeStopwordOptionsQueryParams;
}(SpeakeasyBase));
export { GetDescribeStopwordOptionsQueryParams };
var GetDescribeStopwordOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeStopwordOptionsHeaders, _super);
    function GetDescribeStopwordOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeStopwordOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeStopwordOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeStopwordOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeStopwordOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeStopwordOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeStopwordOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeStopwordOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeStopwordOptionsHeaders;
}(SpeakeasyBase));
export { GetDescribeStopwordOptionsHeaders };
var GetDescribeStopwordOptionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeStopwordOptionsRequest, _super);
    function GetDescribeStopwordOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeStopwordOptionsQueryParams)
    ], GetDescribeStopwordOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeStopwordOptionsHeaders)
    ], GetDescribeStopwordOptionsRequest.prototype, "headers", void 0);
    return GetDescribeStopwordOptionsRequest;
}(SpeakeasyBase));
export { GetDescribeStopwordOptionsRequest };
var GetDescribeStopwordOptionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeStopwordOptionsResponse, _super);
    function GetDescribeStopwordOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeStopwordOptionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeStopwordOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeStopwordOptionsResponse.prototype, "statusCode", void 0);
    return GetDescribeStopwordOptionsResponse;
}(SpeakeasyBase));
export { GetDescribeStopwordOptionsResponse };
