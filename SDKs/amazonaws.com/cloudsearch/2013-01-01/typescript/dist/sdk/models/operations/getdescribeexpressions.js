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
export var GetDescribeExpressionsActionEnum;
(function (GetDescribeExpressionsActionEnum) {
    GetDescribeExpressionsActionEnum["DescribeExpressions"] = "DescribeExpressions";
})(GetDescribeExpressionsActionEnum || (GetDescribeExpressionsActionEnum = {}));
export var GetDescribeExpressionsVersionEnum;
(function (GetDescribeExpressionsVersionEnum) {
    GetDescribeExpressionsVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(GetDescribeExpressionsVersionEnum || (GetDescribeExpressionsVersionEnum = {}));
var GetDescribeExpressionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeExpressionsQueryParams, _super);
    function GetDescribeExpressionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeExpressionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Deployed" }),
        __metadata("design:type", Boolean)
    ], GetDescribeExpressionsQueryParams.prototype, "deployed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDescribeExpressionsQueryParams.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExpressionNames" }),
        __metadata("design:type", Array)
    ], GetDescribeExpressionsQueryParams.prototype, "expressionNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeExpressionsQueryParams.prototype, "version", void 0);
    return GetDescribeExpressionsQueryParams;
}(SpeakeasyBase));
export { GetDescribeExpressionsQueryParams };
var GetDescribeExpressionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeExpressionsHeaders, _super);
    function GetDescribeExpressionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeExpressionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeExpressionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeExpressionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeExpressionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeExpressionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeExpressionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeExpressionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeExpressionsHeaders;
}(SpeakeasyBase));
export { GetDescribeExpressionsHeaders };
var GetDescribeExpressionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeExpressionsRequest, _super);
    function GetDescribeExpressionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeExpressionsQueryParams)
    ], GetDescribeExpressionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeExpressionsHeaders)
    ], GetDescribeExpressionsRequest.prototype, "headers", void 0);
    return GetDescribeExpressionsRequest;
}(SpeakeasyBase));
export { GetDescribeExpressionsRequest };
var GetDescribeExpressionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeExpressionsResponse, _super);
    function GetDescribeExpressionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeExpressionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeExpressionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeExpressionsResponse.prototype, "statusCode", void 0);
    return GetDescribeExpressionsResponse;
}(SpeakeasyBase));
export { GetDescribeExpressionsResponse };
