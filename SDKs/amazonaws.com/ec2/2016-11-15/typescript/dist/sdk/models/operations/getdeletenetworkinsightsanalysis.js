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
export var GetDeleteNetworkInsightsAnalysisActionEnum;
(function (GetDeleteNetworkInsightsAnalysisActionEnum) {
    GetDeleteNetworkInsightsAnalysisActionEnum["DeleteNetworkInsightsAnalysis"] = "DeleteNetworkInsightsAnalysis";
})(GetDeleteNetworkInsightsAnalysisActionEnum || (GetDeleteNetworkInsightsAnalysisActionEnum = {}));
export var GetDeleteNetworkInsightsAnalysisVersionEnum;
(function (GetDeleteNetworkInsightsAnalysisVersionEnum) {
    GetDeleteNetworkInsightsAnalysisVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteNetworkInsightsAnalysisVersionEnum || (GetDeleteNetworkInsightsAnalysisVersionEnum = {}));
var GetDeleteNetworkInsightsAnalysisQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInsightsAnalysisQueryParams, _super);
    function GetDeleteNetworkInsightsAnalysisQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInsightsAnalysisQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteNetworkInsightsAnalysisQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInsightsAnalysisId" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInsightsAnalysisQueryParams.prototype, "networkInsightsAnalysisId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInsightsAnalysisQueryParams.prototype, "version", void 0);
    return GetDeleteNetworkInsightsAnalysisQueryParams;
}(SpeakeasyBase));
export { GetDeleteNetworkInsightsAnalysisQueryParams };
var GetDeleteNetworkInsightsAnalysisHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInsightsAnalysisHeaders, _super);
    function GetDeleteNetworkInsightsAnalysisHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInsightsAnalysisHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInsightsAnalysisHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInsightsAnalysisHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInsightsAnalysisHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInsightsAnalysisHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInsightsAnalysisHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInsightsAnalysisHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteNetworkInsightsAnalysisHeaders;
}(SpeakeasyBase));
export { GetDeleteNetworkInsightsAnalysisHeaders };
var GetDeleteNetworkInsightsAnalysisRequest = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInsightsAnalysisRequest, _super);
    function GetDeleteNetworkInsightsAnalysisRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteNetworkInsightsAnalysisQueryParams)
    ], GetDeleteNetworkInsightsAnalysisRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteNetworkInsightsAnalysisHeaders)
    ], GetDeleteNetworkInsightsAnalysisRequest.prototype, "headers", void 0);
    return GetDeleteNetworkInsightsAnalysisRequest;
}(SpeakeasyBase));
export { GetDeleteNetworkInsightsAnalysisRequest };
var GetDeleteNetworkInsightsAnalysisResponse = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInsightsAnalysisResponse, _super);
    function GetDeleteNetworkInsightsAnalysisResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteNetworkInsightsAnalysisResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteNetworkInsightsAnalysisResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteNetworkInsightsAnalysisResponse.prototype, "statusCode", void 0);
    return GetDeleteNetworkInsightsAnalysisResponse;
}(SpeakeasyBase));
export { GetDeleteNetworkInsightsAnalysisResponse };
