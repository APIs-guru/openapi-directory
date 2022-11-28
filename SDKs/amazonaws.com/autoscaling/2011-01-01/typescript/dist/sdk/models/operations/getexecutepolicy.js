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
export var GetExecutePolicyActionEnum;
(function (GetExecutePolicyActionEnum) {
    GetExecutePolicyActionEnum["ExecutePolicy"] = "ExecutePolicy";
})(GetExecutePolicyActionEnum || (GetExecutePolicyActionEnum = {}));
export var GetExecutePolicyVersionEnum;
(function (GetExecutePolicyVersionEnum) {
    GetExecutePolicyVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetExecutePolicyVersionEnum || (GetExecutePolicyVersionEnum = {}));
var GetExecutePolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetExecutePolicyQueryParams, _super);
    function GetExecutePolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetExecutePolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetExecutePolicyQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BreachThreshold" }),
        __metadata("design:type", Number)
    ], GetExecutePolicyQueryParams.prototype, "breachThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HonorCooldown" }),
        __metadata("design:type", Boolean)
    ], GetExecutePolicyQueryParams.prototype, "honorCooldown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MetricValue" }),
        __metadata("design:type", Number)
    ], GetExecutePolicyQueryParams.prototype, "metricValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetExecutePolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetExecutePolicyQueryParams.prototype, "version", void 0);
    return GetExecutePolicyQueryParams;
}(SpeakeasyBase));
export { GetExecutePolicyQueryParams };
var GetExecutePolicyHeaders = /** @class */ (function (_super) {
    __extends(GetExecutePolicyHeaders, _super);
    function GetExecutePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetExecutePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetExecutePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetExecutePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetExecutePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetExecutePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetExecutePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetExecutePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetExecutePolicyHeaders;
}(SpeakeasyBase));
export { GetExecutePolicyHeaders };
var GetExecutePolicyRequest = /** @class */ (function (_super) {
    __extends(GetExecutePolicyRequest, _super);
    function GetExecutePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExecutePolicyQueryParams)
    ], GetExecutePolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExecutePolicyHeaders)
    ], GetExecutePolicyRequest.prototype, "headers", void 0);
    return GetExecutePolicyRequest;
}(SpeakeasyBase));
export { GetExecutePolicyRequest };
var GetExecutePolicyResponse = /** @class */ (function (_super) {
    __extends(GetExecutePolicyResponse, _super);
    function GetExecutePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetExecutePolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetExecutePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetExecutePolicyResponse.prototype, "statusCode", void 0);
    return GetExecutePolicyResponse;
}(SpeakeasyBase));
export { GetExecutePolicyResponse };
