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
export var GetSwapEnvironmentCnamEsActionEnum;
(function (GetSwapEnvironmentCnamEsActionEnum) {
    GetSwapEnvironmentCnamEsActionEnum["SwapEnvironmentCnamEs"] = "SwapEnvironmentCNAMEs";
})(GetSwapEnvironmentCnamEsActionEnum || (GetSwapEnvironmentCnamEsActionEnum = {}));
export var GetSwapEnvironmentCnamEsVersionEnum;
(function (GetSwapEnvironmentCnamEsVersionEnum) {
    GetSwapEnvironmentCnamEsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetSwapEnvironmentCnamEsVersionEnum || (GetSwapEnvironmentCnamEsVersionEnum = {}));
var GetSwapEnvironmentCnamEsQueryParams = /** @class */ (function (_super) {
    __extends(GetSwapEnvironmentCnamEsQueryParams, _super);
    function GetSwapEnvironmentCnamEsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DestinationEnvironmentId" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsQueryParams.prototype, "destinationEnvironmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DestinationEnvironmentName" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsQueryParams.prototype, "destinationEnvironmentName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceEnvironmentId" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsQueryParams.prototype, "sourceEnvironmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceEnvironmentName" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsQueryParams.prototype, "sourceEnvironmentName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsQueryParams.prototype, "version", void 0);
    return GetSwapEnvironmentCnamEsQueryParams;
}(SpeakeasyBase));
export { GetSwapEnvironmentCnamEsQueryParams };
var GetSwapEnvironmentCnamEsHeaders = /** @class */ (function (_super) {
    __extends(GetSwapEnvironmentCnamEsHeaders, _super);
    function GetSwapEnvironmentCnamEsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSwapEnvironmentCnamEsHeaders;
}(SpeakeasyBase));
export { GetSwapEnvironmentCnamEsHeaders };
var GetSwapEnvironmentCnamEsRequest = /** @class */ (function (_super) {
    __extends(GetSwapEnvironmentCnamEsRequest, _super);
    function GetSwapEnvironmentCnamEsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSwapEnvironmentCnamEsQueryParams)
    ], GetSwapEnvironmentCnamEsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSwapEnvironmentCnamEsHeaders)
    ], GetSwapEnvironmentCnamEsRequest.prototype, "headers", void 0);
    return GetSwapEnvironmentCnamEsRequest;
}(SpeakeasyBase));
export { GetSwapEnvironmentCnamEsRequest };
var GetSwapEnvironmentCnamEsResponse = /** @class */ (function (_super) {
    __extends(GetSwapEnvironmentCnamEsResponse, _super);
    function GetSwapEnvironmentCnamEsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSwapEnvironmentCnamEsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSwapEnvironmentCnamEsResponse.prototype, "statusCode", void 0);
    return GetSwapEnvironmentCnamEsResponse;
}(SpeakeasyBase));
export { GetSwapEnvironmentCnamEsResponse };
