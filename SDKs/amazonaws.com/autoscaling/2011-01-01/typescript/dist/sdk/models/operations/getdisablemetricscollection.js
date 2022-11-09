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
export var GetDisableMetricsCollectionActionEnum;
(function (GetDisableMetricsCollectionActionEnum) {
    GetDisableMetricsCollectionActionEnum["DisableMetricsCollection"] = "DisableMetricsCollection";
})(GetDisableMetricsCollectionActionEnum || (GetDisableMetricsCollectionActionEnum = {}));
export var GetDisableMetricsCollectionVersionEnum;
(function (GetDisableMetricsCollectionVersionEnum) {
    GetDisableMetricsCollectionVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDisableMetricsCollectionVersionEnum || (GetDisableMetricsCollectionVersionEnum = {}));
var GetDisableMetricsCollectionQueryParams = /** @class */ (function (_super) {
    __extends(GetDisableMetricsCollectionQueryParams, _super);
    function GetDisableMetricsCollectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisableMetricsCollectionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetDisableMetricsCollectionQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Metrics" }),
        __metadata("design:type", Array)
    ], GetDisableMetricsCollectionQueryParams.prototype, "metrics", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisableMetricsCollectionQueryParams.prototype, "version", void 0);
    return GetDisableMetricsCollectionQueryParams;
}(SpeakeasyBase));
export { GetDisableMetricsCollectionQueryParams };
var GetDisableMetricsCollectionHeaders = /** @class */ (function (_super) {
    __extends(GetDisableMetricsCollectionHeaders, _super);
    function GetDisableMetricsCollectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisableMetricsCollectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisableMetricsCollectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisableMetricsCollectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisableMetricsCollectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisableMetricsCollectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisableMetricsCollectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisableMetricsCollectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisableMetricsCollectionHeaders;
}(SpeakeasyBase));
export { GetDisableMetricsCollectionHeaders };
var GetDisableMetricsCollectionRequest = /** @class */ (function (_super) {
    __extends(GetDisableMetricsCollectionRequest, _super);
    function GetDisableMetricsCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDisableMetricsCollectionQueryParams)
    ], GetDisableMetricsCollectionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDisableMetricsCollectionHeaders)
    ], GetDisableMetricsCollectionRequest.prototype, "headers", void 0);
    return GetDisableMetricsCollectionRequest;
}(SpeakeasyBase));
export { GetDisableMetricsCollectionRequest };
var GetDisableMetricsCollectionResponse = /** @class */ (function (_super) {
    __extends(GetDisableMetricsCollectionResponse, _super);
    function GetDisableMetricsCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisableMetricsCollectionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDisableMetricsCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDisableMetricsCollectionResponse.prototype, "statusCode", void 0);
    return GetDisableMetricsCollectionResponse;
}(SpeakeasyBase));
export { GetDisableMetricsCollectionResponse };
