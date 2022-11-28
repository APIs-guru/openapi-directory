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
export var GetModifyTargetGroupActionEnum;
(function (GetModifyTargetGroupActionEnum) {
    GetModifyTargetGroupActionEnum["ModifyTargetGroup"] = "ModifyTargetGroup";
})(GetModifyTargetGroupActionEnum || (GetModifyTargetGroupActionEnum = {}));
export var GetModifyTargetGroupHealthCheckProtocolEnum;
(function (GetModifyTargetGroupHealthCheckProtocolEnum) {
    GetModifyTargetGroupHealthCheckProtocolEnum["Http"] = "HTTP";
    GetModifyTargetGroupHealthCheckProtocolEnum["Https"] = "HTTPS";
    GetModifyTargetGroupHealthCheckProtocolEnum["Tcp"] = "TCP";
    GetModifyTargetGroupHealthCheckProtocolEnum["Tls"] = "TLS";
    GetModifyTargetGroupHealthCheckProtocolEnum["Udp"] = "UDP";
    GetModifyTargetGroupHealthCheckProtocolEnum["TcpUdp"] = "TCP_UDP";
    GetModifyTargetGroupHealthCheckProtocolEnum["Geneve"] = "GENEVE";
})(GetModifyTargetGroupHealthCheckProtocolEnum || (GetModifyTargetGroupHealthCheckProtocolEnum = {}));
// GetModifyTargetGroupMatcher
/**
 * The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
**/
var GetModifyTargetGroupMatcher = /** @class */ (function (_super) {
    __extends(GetModifyTargetGroupMatcher, _super);
    function GetModifyTargetGroupMatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=GrpcCode" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupMatcher.prototype, "grpcCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=HttpCode" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupMatcher.prototype, "httpCode", void 0);
    return GetModifyTargetGroupMatcher;
}(SpeakeasyBase));
export { GetModifyTargetGroupMatcher };
export var GetModifyTargetGroupVersionEnum;
(function (GetModifyTargetGroupVersionEnum) {
    GetModifyTargetGroupVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetModifyTargetGroupVersionEnum || (GetModifyTargetGroupVersionEnum = {}));
var GetModifyTargetGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyTargetGroupQueryParams, _super);
    function GetModifyTargetGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckEnabled" }),
        __metadata("design:type", Boolean)
    ], GetModifyTargetGroupQueryParams.prototype, "healthCheckEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckIntervalSeconds" }),
        __metadata("design:type", Number)
    ], GetModifyTargetGroupQueryParams.prototype, "healthCheckIntervalSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckPath" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupQueryParams.prototype, "healthCheckPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckPort" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupQueryParams.prototype, "healthCheckPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckProtocol" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupQueryParams.prototype, "healthCheckProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckTimeoutSeconds" }),
        __metadata("design:type", Number)
    ], GetModifyTargetGroupQueryParams.prototype, "healthCheckTimeoutSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthyThresholdCount" }),
        __metadata("design:type", Number)
    ], GetModifyTargetGroupQueryParams.prototype, "healthyThresholdCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Matcher" }),
        __metadata("design:type", GetModifyTargetGroupMatcher)
    ], GetModifyTargetGroupQueryParams.prototype, "matcher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetGroupArn" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupQueryParams.prototype, "targetGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UnhealthyThresholdCount" }),
        __metadata("design:type", Number)
    ], GetModifyTargetGroupQueryParams.prototype, "unhealthyThresholdCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupQueryParams.prototype, "version", void 0);
    return GetModifyTargetGroupQueryParams;
}(SpeakeasyBase));
export { GetModifyTargetGroupQueryParams };
var GetModifyTargetGroupHeaders = /** @class */ (function (_super) {
    __extends(GetModifyTargetGroupHeaders, _super);
    function GetModifyTargetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyTargetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyTargetGroupHeaders;
}(SpeakeasyBase));
export { GetModifyTargetGroupHeaders };
var GetModifyTargetGroupRequest = /** @class */ (function (_super) {
    __extends(GetModifyTargetGroupRequest, _super);
    function GetModifyTargetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyTargetGroupQueryParams)
    ], GetModifyTargetGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyTargetGroupHeaders)
    ], GetModifyTargetGroupRequest.prototype, "headers", void 0);
    return GetModifyTargetGroupRequest;
}(SpeakeasyBase));
export { GetModifyTargetGroupRequest };
var GetModifyTargetGroupResponse = /** @class */ (function (_super) {
    __extends(GetModifyTargetGroupResponse, _super);
    function GetModifyTargetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyTargetGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyTargetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyTargetGroupResponse.prototype, "statusCode", void 0);
    return GetModifyTargetGroupResponse;
}(SpeakeasyBase));
export { GetModifyTargetGroupResponse };
