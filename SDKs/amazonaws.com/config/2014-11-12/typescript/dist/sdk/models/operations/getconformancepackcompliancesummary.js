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
var GetConformancePackComplianceSummaryQueryParams = /** @class */ (function (_super) {
    __extends(GetConformancePackComplianceSummaryQueryParams, _super);
    function GetConformancePackComplianceSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceSummaryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceSummaryQueryParams.prototype, "nextToken", void 0);
    return GetConformancePackComplianceSummaryQueryParams;
}(SpeakeasyBase));
export { GetConformancePackComplianceSummaryQueryParams };
export var GetConformancePackComplianceSummaryXAmzTargetEnum;
(function (GetConformancePackComplianceSummaryXAmzTargetEnum) {
    GetConformancePackComplianceSummaryXAmzTargetEnum["StarlingDoveServiceGetConformancePackComplianceSummary"] = "StarlingDoveService.GetConformancePackComplianceSummary";
})(GetConformancePackComplianceSummaryXAmzTargetEnum || (GetConformancePackComplianceSummaryXAmzTargetEnum = {}));
var GetConformancePackComplianceSummaryHeaders = /** @class */ (function (_super) {
    __extends(GetConformancePackComplianceSummaryHeaders, _super);
    function GetConformancePackComplianceSummaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceSummaryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceSummaryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceSummaryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceSummaryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceSummaryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceSummaryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceSummaryHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetConformancePackComplianceSummaryHeaders.prototype, "xAmzTarget", void 0);
    return GetConformancePackComplianceSummaryHeaders;
}(SpeakeasyBase));
export { GetConformancePackComplianceSummaryHeaders };
var GetConformancePackComplianceSummaryRequest = /** @class */ (function (_super) {
    __extends(GetConformancePackComplianceSummaryRequest, _super);
    function GetConformancePackComplianceSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConformancePackComplianceSummaryQueryParams)
    ], GetConformancePackComplianceSummaryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConformancePackComplianceSummaryHeaders)
    ], GetConformancePackComplianceSummaryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetConformancePackComplianceSummaryRequest)
    ], GetConformancePackComplianceSummaryRequest.prototype, "request", void 0);
    return GetConformancePackComplianceSummaryRequest;
}(SpeakeasyBase));
export { GetConformancePackComplianceSummaryRequest };
var GetConformancePackComplianceSummaryResponse = /** @class */ (function (_super) {
    __extends(GetConformancePackComplianceSummaryResponse, _super);
    function GetConformancePackComplianceSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConformancePackComplianceSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetConformancePackComplianceSummaryResponse)
    ], GetConformancePackComplianceSummaryResponse.prototype, "getConformancePackComplianceSummaryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConformancePackComplianceSummaryResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConformancePackComplianceSummaryResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConformancePackComplianceSummaryResponse.prototype, "noSuchConformancePackException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConformancePackComplianceSummaryResponse.prototype, "statusCode", void 0);
    return GetConformancePackComplianceSummaryResponse;
}(SpeakeasyBase));
export { GetConformancePackComplianceSummaryResponse };
