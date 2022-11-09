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
export var GetDescribeLifecycleHookTypesActionEnum;
(function (GetDescribeLifecycleHookTypesActionEnum) {
    GetDescribeLifecycleHookTypesActionEnum["DescribeLifecycleHookTypes"] = "DescribeLifecycleHookTypes";
})(GetDescribeLifecycleHookTypesActionEnum || (GetDescribeLifecycleHookTypesActionEnum = {}));
export var GetDescribeLifecycleHookTypesVersionEnum;
(function (GetDescribeLifecycleHookTypesVersionEnum) {
    GetDescribeLifecycleHookTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeLifecycleHookTypesVersionEnum || (GetDescribeLifecycleHookTypesVersionEnum = {}));
var GetDescribeLifecycleHookTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeLifecycleHookTypesQueryParams, _super);
    function GetDescribeLifecycleHookTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHookTypesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHookTypesQueryParams.prototype, "version", void 0);
    return GetDescribeLifecycleHookTypesQueryParams;
}(SpeakeasyBase));
export { GetDescribeLifecycleHookTypesQueryParams };
var GetDescribeLifecycleHookTypesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeLifecycleHookTypesHeaders, _super);
    function GetDescribeLifecycleHookTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHookTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHookTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHookTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHookTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHookTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHookTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHookTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeLifecycleHookTypesHeaders;
}(SpeakeasyBase));
export { GetDescribeLifecycleHookTypesHeaders };
var GetDescribeLifecycleHookTypesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeLifecycleHookTypesRequest, _super);
    function GetDescribeLifecycleHookTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeLifecycleHookTypesQueryParams)
    ], GetDescribeLifecycleHookTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeLifecycleHookTypesHeaders)
    ], GetDescribeLifecycleHookTypesRequest.prototype, "headers", void 0);
    return GetDescribeLifecycleHookTypesRequest;
}(SpeakeasyBase));
export { GetDescribeLifecycleHookTypesRequest };
var GetDescribeLifecycleHookTypesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeLifecycleHookTypesResponse, _super);
    function GetDescribeLifecycleHookTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeLifecycleHookTypesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHookTypesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeLifecycleHookTypesResponse.prototype, "statusCode", void 0);
    return GetDescribeLifecycleHookTypesResponse;
}(SpeakeasyBase));
export { GetDescribeLifecycleHookTypesResponse };
