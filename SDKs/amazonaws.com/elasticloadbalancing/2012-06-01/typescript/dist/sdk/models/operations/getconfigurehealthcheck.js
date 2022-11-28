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
export var GetConfigureHealthCheckActionEnum;
(function (GetConfigureHealthCheckActionEnum) {
    GetConfigureHealthCheckActionEnum["ConfigureHealthCheck"] = "ConfigureHealthCheck";
})(GetConfigureHealthCheckActionEnum || (GetConfigureHealthCheckActionEnum = {}));
// GetConfigureHealthCheckHealthCheck
/**
 * Information about a health check.
**/
var GetConfigureHealthCheckHealthCheck = /** @class */ (function (_super) {
    __extends(GetConfigureHealthCheckHealthCheck, _super);
    function GetConfigureHealthCheckHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=HealthyThreshold" }),
        __metadata("design:type", Number)
    ], GetConfigureHealthCheckHealthCheck.prototype, "healthyThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=Interval" }),
        __metadata("design:type", Number)
    ], GetConfigureHealthCheckHealthCheck.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=Target" }),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckHealthCheck.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=Timeout" }),
        __metadata("design:type", Number)
    ], GetConfigureHealthCheckHealthCheck.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=UnhealthyThreshold" }),
        __metadata("design:type", Number)
    ], GetConfigureHealthCheckHealthCheck.prototype, "unhealthyThreshold", void 0);
    return GetConfigureHealthCheckHealthCheck;
}(SpeakeasyBase));
export { GetConfigureHealthCheckHealthCheck };
export var GetConfigureHealthCheckVersionEnum;
(function (GetConfigureHealthCheckVersionEnum) {
    GetConfigureHealthCheckVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetConfigureHealthCheckVersionEnum || (GetConfigureHealthCheckVersionEnum = {}));
var GetConfigureHealthCheckQueryParams = /** @class */ (function (_super) {
    __extends(GetConfigureHealthCheckQueryParams, _super);
    function GetConfigureHealthCheckQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheck" }),
        __metadata("design:type", GetConfigureHealthCheckHealthCheck)
    ], GetConfigureHealthCheckQueryParams.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckQueryParams.prototype, "loadBalancerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckQueryParams.prototype, "version", void 0);
    return GetConfigureHealthCheckQueryParams;
}(SpeakeasyBase));
export { GetConfigureHealthCheckQueryParams };
var GetConfigureHealthCheckHeaders = /** @class */ (function (_super) {
    __extends(GetConfigureHealthCheckHeaders, _super);
    function GetConfigureHealthCheckHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetConfigureHealthCheckHeaders;
}(SpeakeasyBase));
export { GetConfigureHealthCheckHeaders };
var GetConfigureHealthCheckRequest = /** @class */ (function (_super) {
    __extends(GetConfigureHealthCheckRequest, _super);
    function GetConfigureHealthCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConfigureHealthCheckQueryParams)
    ], GetConfigureHealthCheckRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConfigureHealthCheckHeaders)
    ], GetConfigureHealthCheckRequest.prototype, "headers", void 0);
    return GetConfigureHealthCheckRequest;
}(SpeakeasyBase));
export { GetConfigureHealthCheckRequest };
var GetConfigureHealthCheckResponse = /** @class */ (function (_super) {
    __extends(GetConfigureHealthCheckResponse, _super);
    function GetConfigureHealthCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetConfigureHealthCheckResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConfigureHealthCheckResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConfigureHealthCheckResponse.prototype, "statusCode", void 0);
    return GetConfigureHealthCheckResponse;
}(SpeakeasyBase));
export { GetConfigureHealthCheckResponse };
