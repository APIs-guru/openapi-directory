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
export var GetGetPredictiveScalingForecastActionEnum;
(function (GetGetPredictiveScalingForecastActionEnum) {
    GetGetPredictiveScalingForecastActionEnum["GetPredictiveScalingForecast"] = "GetPredictiveScalingForecast";
})(GetGetPredictiveScalingForecastActionEnum || (GetGetPredictiveScalingForecastActionEnum = {}));
export var GetGetPredictiveScalingForecastVersionEnum;
(function (GetGetPredictiveScalingForecastVersionEnum) {
    GetGetPredictiveScalingForecastVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetGetPredictiveScalingForecastVersionEnum || (GetGetPredictiveScalingForecastVersionEnum = {}));
var GetGetPredictiveScalingForecastQueryParams = /** @class */ (function (_super) {
    __extends(GetGetPredictiveScalingForecastQueryParams, _super);
    function GetGetPredictiveScalingForecastQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndTime" }),
        __metadata("design:type", Date)
    ], GetGetPredictiveScalingForecastQueryParams.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastQueryParams.prototype, "policyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" }),
        __metadata("design:type", Date)
    ], GetGetPredictiveScalingForecastQueryParams.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastQueryParams.prototype, "version", void 0);
    return GetGetPredictiveScalingForecastQueryParams;
}(SpeakeasyBase));
export { GetGetPredictiveScalingForecastQueryParams };
var GetGetPredictiveScalingForecastHeaders = /** @class */ (function (_super) {
    __extends(GetGetPredictiveScalingForecastHeaders, _super);
    function GetGetPredictiveScalingForecastHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetPredictiveScalingForecastHeaders;
}(SpeakeasyBase));
export { GetGetPredictiveScalingForecastHeaders };
var GetGetPredictiveScalingForecastRequest = /** @class */ (function (_super) {
    __extends(GetGetPredictiveScalingForecastRequest, _super);
    function GetGetPredictiveScalingForecastRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetPredictiveScalingForecastQueryParams)
    ], GetGetPredictiveScalingForecastRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetPredictiveScalingForecastHeaders)
    ], GetGetPredictiveScalingForecastRequest.prototype, "headers", void 0);
    return GetGetPredictiveScalingForecastRequest;
}(SpeakeasyBase));
export { GetGetPredictiveScalingForecastRequest };
var GetGetPredictiveScalingForecastResponse = /** @class */ (function (_super) {
    __extends(GetGetPredictiveScalingForecastResponse, _super);
    function GetGetPredictiveScalingForecastResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetPredictiveScalingForecastResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetPredictiveScalingForecastResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetPredictiveScalingForecastResponse.prototype, "statusCode", void 0);
    return GetGetPredictiveScalingForecastResponse;
}(SpeakeasyBase));
export { GetGetPredictiveScalingForecastResponse };
