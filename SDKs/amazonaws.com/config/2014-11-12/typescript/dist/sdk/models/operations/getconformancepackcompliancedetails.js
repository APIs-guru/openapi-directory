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
import * as shared from "../shared";
var GetConformancePackComplianceDetailsQueryParams = /** @class */ (function (_super) {
    __extends(GetConformancePackComplianceDetailsQueryParams, _super);
    function GetConformancePackComplianceDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceDetailsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceDetailsQueryParams.prototype, "nextToken", void 0);
    return GetConformancePackComplianceDetailsQueryParams;
}(SpeakeasyBase));
export { GetConformancePackComplianceDetailsQueryParams };
export var GetConformancePackComplianceDetailsXAmzTargetEnum;
(function (GetConformancePackComplianceDetailsXAmzTargetEnum) {
    GetConformancePackComplianceDetailsXAmzTargetEnum["StarlingDoveServiceGetConformancePackComplianceDetails"] = "StarlingDoveService.GetConformancePackComplianceDetails";
})(GetConformancePackComplianceDetailsXAmzTargetEnum || (GetConformancePackComplianceDetailsXAmzTargetEnum = {}));
var GetConformancePackComplianceDetailsHeaders = /** @class */ (function (_super) {
    __extends(GetConformancePackComplianceDetailsHeaders, _super);
    function GetConformancePackComplianceDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceDetailsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceDetailsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceDetailsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceDetailsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceDetailsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceDetailsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceDetailsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceDetailsHeaders.prototype, "xAmzTarget", void 0);
    return GetConformancePackComplianceDetailsHeaders;
}(SpeakeasyBase));
export { GetConformancePackComplianceDetailsHeaders };
var GetConformancePackComplianceDetailsRequest = /** @class */ (function (_super) {
    __extends(GetConformancePackComplianceDetailsRequest, _super);
    function GetConformancePackComplianceDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConformancePackComplianceDetailsQueryParams)
    ], GetConformancePackComplianceDetailsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConformancePackComplianceDetailsHeaders)
    ], GetConformancePackComplianceDetailsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetConformancePackComplianceDetailsRequest)
    ], GetConformancePackComplianceDetailsRequest.prototype, "request", void 0);
    return GetConformancePackComplianceDetailsRequest;
}(SpeakeasyBase));
export { GetConformancePackComplianceDetailsRequest };
var GetConformancePackComplianceDetailsResponse = /** @class */ (function (_super) {
    __extends(GetConformancePackComplianceDetailsResponse, _super);
    function GetConformancePackComplianceDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConformancePackComplianceDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetConformancePackComplianceDetailsResponse)
    ], GetConformancePackComplianceDetailsResponse.prototype, "getConformancePackComplianceDetailsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConformancePackComplianceDetailsResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConformancePackComplianceDetailsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConformancePackComplianceDetailsResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConformancePackComplianceDetailsResponse.prototype, "noSuchConfigRuleInConformancePackException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConformancePackComplianceDetailsResponse.prototype, "noSuchConformancePackException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConformancePackComplianceDetailsResponse.prototype, "statusCode", void 0);
    return GetConformancePackComplianceDetailsResponse;
}(SpeakeasyBase));
export { GetConformancePackComplianceDetailsResponse };
