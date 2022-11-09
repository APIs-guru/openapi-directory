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
export var GetDescribePoliciesActionEnum;
(function (GetDescribePoliciesActionEnum) {
    GetDescribePoliciesActionEnum["DescribePolicies"] = "DescribePolicies";
})(GetDescribePoliciesActionEnum || (GetDescribePoliciesActionEnum = {}));
export var GetDescribePoliciesVersionEnum;
(function (GetDescribePoliciesVersionEnum) {
    GetDescribePoliciesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribePoliciesVersionEnum || (GetDescribePoliciesVersionEnum = {}));
var GetDescribePoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribePoliciesQueryParams, _super);
    function GetDescribePoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribePoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetDescribePoliciesQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribePoliciesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribePoliciesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyNames" }),
        __metadata("design:type", Array)
    ], GetDescribePoliciesQueryParams.prototype, "policyNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyTypes" }),
        __metadata("design:type", Array)
    ], GetDescribePoliciesQueryParams.prototype, "policyTypes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribePoliciesQueryParams.prototype, "version", void 0);
    return GetDescribePoliciesQueryParams;
}(SpeakeasyBase));
export { GetDescribePoliciesQueryParams };
var GetDescribePoliciesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribePoliciesHeaders, _super);
    function GetDescribePoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribePoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribePoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribePoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribePoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribePoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribePoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribePoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribePoliciesHeaders;
}(SpeakeasyBase));
export { GetDescribePoliciesHeaders };
var GetDescribePoliciesRequest = /** @class */ (function (_super) {
    __extends(GetDescribePoliciesRequest, _super);
    function GetDescribePoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribePoliciesQueryParams)
    ], GetDescribePoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribePoliciesHeaders)
    ], GetDescribePoliciesRequest.prototype, "headers", void 0);
    return GetDescribePoliciesRequest;
}(SpeakeasyBase));
export { GetDescribePoliciesRequest };
var GetDescribePoliciesResponse = /** @class */ (function (_super) {
    __extends(GetDescribePoliciesResponse, _super);
    function GetDescribePoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribePoliciesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribePoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribePoliciesResponse.prototype, "statusCode", void 0);
    return GetDescribePoliciesResponse;
}(SpeakeasyBase));
export { GetDescribePoliciesResponse };
