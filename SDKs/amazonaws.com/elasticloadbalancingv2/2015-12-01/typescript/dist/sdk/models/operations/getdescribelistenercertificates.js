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
export var GetDescribeListenerCertificatesActionEnum;
(function (GetDescribeListenerCertificatesActionEnum) {
    GetDescribeListenerCertificatesActionEnum["DescribeListenerCertificates"] = "DescribeListenerCertificates";
})(GetDescribeListenerCertificatesActionEnum || (GetDescribeListenerCertificatesActionEnum = {}));
export var GetDescribeListenerCertificatesVersionEnum;
(function (GetDescribeListenerCertificatesVersionEnum) {
    GetDescribeListenerCertificatesVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetDescribeListenerCertificatesVersionEnum || (GetDescribeListenerCertificatesVersionEnum = {}));
var GetDescribeListenerCertificatesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeListenerCertificatesQueryParams, _super);
    function GetDescribeListenerCertificatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ListenerArn" }),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesQueryParams.prototype, "listenerArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], GetDescribeListenerCertificatesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesQueryParams.prototype, "version", void 0);
    return GetDescribeListenerCertificatesQueryParams;
}(SpeakeasyBase));
export { GetDescribeListenerCertificatesQueryParams };
var GetDescribeListenerCertificatesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeListenerCertificatesHeaders, _super);
    function GetDescribeListenerCertificatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeListenerCertificatesHeaders;
}(SpeakeasyBase));
export { GetDescribeListenerCertificatesHeaders };
var GetDescribeListenerCertificatesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeListenerCertificatesRequest, _super);
    function GetDescribeListenerCertificatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeListenerCertificatesQueryParams)
    ], GetDescribeListenerCertificatesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeListenerCertificatesHeaders)
    ], GetDescribeListenerCertificatesRequest.prototype, "headers", void 0);
    return GetDescribeListenerCertificatesRequest;
}(SpeakeasyBase));
export { GetDescribeListenerCertificatesRequest };
var GetDescribeListenerCertificatesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeListenerCertificatesResponse, _super);
    function GetDescribeListenerCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeListenerCertificatesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeListenerCertificatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeListenerCertificatesResponse.prototype, "statusCode", void 0);
    return GetDescribeListenerCertificatesResponse;
}(SpeakeasyBase));
export { GetDescribeListenerCertificatesResponse };
