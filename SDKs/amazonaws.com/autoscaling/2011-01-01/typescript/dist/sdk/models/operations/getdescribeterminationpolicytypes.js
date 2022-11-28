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
export var GetDescribeTerminationPolicyTypesActionEnum;
(function (GetDescribeTerminationPolicyTypesActionEnum) {
    GetDescribeTerminationPolicyTypesActionEnum["DescribeTerminationPolicyTypes"] = "DescribeTerminationPolicyTypes";
})(GetDescribeTerminationPolicyTypesActionEnum || (GetDescribeTerminationPolicyTypesActionEnum = {}));
export var GetDescribeTerminationPolicyTypesVersionEnum;
(function (GetDescribeTerminationPolicyTypesVersionEnum) {
    GetDescribeTerminationPolicyTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeTerminationPolicyTypesVersionEnum || (GetDescribeTerminationPolicyTypesVersionEnum = {}));
var GetDescribeTerminationPolicyTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeTerminationPolicyTypesQueryParams, _super);
    function GetDescribeTerminationPolicyTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeTerminationPolicyTypesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeTerminationPolicyTypesQueryParams.prototype, "version", void 0);
    return GetDescribeTerminationPolicyTypesQueryParams;
}(SpeakeasyBase));
export { GetDescribeTerminationPolicyTypesQueryParams };
var GetDescribeTerminationPolicyTypesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeTerminationPolicyTypesHeaders, _super);
    function GetDescribeTerminationPolicyTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeTerminationPolicyTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeTerminationPolicyTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeTerminationPolicyTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeTerminationPolicyTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeTerminationPolicyTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeTerminationPolicyTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeTerminationPolicyTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeTerminationPolicyTypesHeaders;
}(SpeakeasyBase));
export { GetDescribeTerminationPolicyTypesHeaders };
var GetDescribeTerminationPolicyTypesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeTerminationPolicyTypesRequest, _super);
    function GetDescribeTerminationPolicyTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeTerminationPolicyTypesQueryParams)
    ], GetDescribeTerminationPolicyTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeTerminationPolicyTypesHeaders)
    ], GetDescribeTerminationPolicyTypesRequest.prototype, "headers", void 0);
    return GetDescribeTerminationPolicyTypesRequest;
}(SpeakeasyBase));
export { GetDescribeTerminationPolicyTypesRequest };
var GetDescribeTerminationPolicyTypesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeTerminationPolicyTypesResponse, _super);
    function GetDescribeTerminationPolicyTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeTerminationPolicyTypesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeTerminationPolicyTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeTerminationPolicyTypesResponse.prototype, "statusCode", void 0);
    return GetDescribeTerminationPolicyTypesResponse;
}(SpeakeasyBase));
export { GetDescribeTerminationPolicyTypesResponse };
