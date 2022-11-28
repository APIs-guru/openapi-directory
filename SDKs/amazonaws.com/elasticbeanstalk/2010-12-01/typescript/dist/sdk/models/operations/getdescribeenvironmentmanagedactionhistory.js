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
export var GetDescribeEnvironmentManagedActionHistoryActionEnum;
(function (GetDescribeEnvironmentManagedActionHistoryActionEnum) {
    GetDescribeEnvironmentManagedActionHistoryActionEnum["DescribeEnvironmentManagedActionHistory"] = "DescribeEnvironmentManagedActionHistory";
})(GetDescribeEnvironmentManagedActionHistoryActionEnum || (GetDescribeEnvironmentManagedActionHistoryActionEnum = {}));
export var GetDescribeEnvironmentManagedActionHistoryVersionEnum;
(function (GetDescribeEnvironmentManagedActionHistoryVersionEnum) {
    GetDescribeEnvironmentManagedActionHistoryVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDescribeEnvironmentManagedActionHistoryVersionEnum || (GetDescribeEnvironmentManagedActionHistoryVersionEnum = {}));
var GetDescribeEnvironmentManagedActionHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentManagedActionHistoryQueryParams, _super);
    function GetDescribeEnvironmentManagedActionHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryQueryParams.prototype, "environmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryQueryParams.prototype, "environmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetDescribeEnvironmentManagedActionHistoryQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryQueryParams.prototype, "version", void 0);
    return GetDescribeEnvironmentManagedActionHistoryQueryParams;
}(SpeakeasyBase));
export { GetDescribeEnvironmentManagedActionHistoryQueryParams };
var GetDescribeEnvironmentManagedActionHistoryHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentManagedActionHistoryHeaders, _super);
    function GetDescribeEnvironmentManagedActionHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeEnvironmentManagedActionHistoryHeaders;
}(SpeakeasyBase));
export { GetDescribeEnvironmentManagedActionHistoryHeaders };
var GetDescribeEnvironmentManagedActionHistoryRequest = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentManagedActionHistoryRequest, _super);
    function GetDescribeEnvironmentManagedActionHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeEnvironmentManagedActionHistoryQueryParams)
    ], GetDescribeEnvironmentManagedActionHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeEnvironmentManagedActionHistoryHeaders)
    ], GetDescribeEnvironmentManagedActionHistoryRequest.prototype, "headers", void 0);
    return GetDescribeEnvironmentManagedActionHistoryRequest;
}(SpeakeasyBase));
export { GetDescribeEnvironmentManagedActionHistoryRequest };
var GetDescribeEnvironmentManagedActionHistoryResponse = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentManagedActionHistoryResponse, _super);
    function GetDescribeEnvironmentManagedActionHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeEnvironmentManagedActionHistoryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentManagedActionHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeEnvironmentManagedActionHistoryResponse.prototype, "statusCode", void 0);
    return GetDescribeEnvironmentManagedActionHistoryResponse;
}(SpeakeasyBase));
export { GetDescribeEnvironmentManagedActionHistoryResponse };
