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
import * as shared from "../shared";
var CreateUsagePlanHeaders = /** @class */ (function (_super) {
    __extends(CreateUsagePlanHeaders, _super);
    function CreateUsagePlanHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateUsagePlanHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateUsagePlanHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateUsagePlanHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateUsagePlanHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateUsagePlanHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateUsagePlanHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateUsagePlanHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateUsagePlanHeaders;
}(SpeakeasyBase));
export { CreateUsagePlanHeaders };
// CreateUsagePlanRequestBodyQuota
/**
 * Quotas configured for a usage plan.
**/
var CreateUsagePlanRequestBodyQuota = /** @class */ (function (_super) {
    __extends(CreateUsagePlanRequestBodyQuota, _super);
    function CreateUsagePlanRequestBodyQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], CreateUsagePlanRequestBodyQuota.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], CreateUsagePlanRequestBodyQuota.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "json, name=period" }),
        __metadata("design:type", String)
    ], CreateUsagePlanRequestBodyQuota.prototype, "period", void 0);
    return CreateUsagePlanRequestBodyQuota;
}(SpeakeasyBase));
export { CreateUsagePlanRequestBodyQuota };
// CreateUsagePlanRequestBodyThrottle
/**
 *  The API request rate limits.
**/
var CreateUsagePlanRequestBodyThrottle = /** @class */ (function (_super) {
    __extends(CreateUsagePlanRequestBodyThrottle, _super);
    function CreateUsagePlanRequestBodyThrottle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=burstLimit" }),
        __metadata("design:type", Number)
    ], CreateUsagePlanRequestBodyThrottle.prototype, "burstLimit", void 0);
    __decorate([
        Metadata({ data: "json, name=rateLimit" }),
        __metadata("design:type", Number)
    ], CreateUsagePlanRequestBodyThrottle.prototype, "rateLimit", void 0);
    return CreateUsagePlanRequestBodyThrottle;
}(SpeakeasyBase));
export { CreateUsagePlanRequestBodyThrottle };
var CreateUsagePlanRequestBody = /** @class */ (function (_super) {
    __extends(CreateUsagePlanRequestBody, _super);
    function CreateUsagePlanRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=apiStages", elemType: shared.ApiStage }),
        __metadata("design:type", Array)
    ], CreateUsagePlanRequestBody.prototype, "apiStages", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateUsagePlanRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateUsagePlanRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=quota" }),
        __metadata("design:type", CreateUsagePlanRequestBodyQuota)
    ], CreateUsagePlanRequestBody.prototype, "quota", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateUsagePlanRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=throttle" }),
        __metadata("design:type", CreateUsagePlanRequestBodyThrottle)
    ], CreateUsagePlanRequestBody.prototype, "throttle", void 0);
    return CreateUsagePlanRequestBody;
}(SpeakeasyBase));
export { CreateUsagePlanRequestBody };
var CreateUsagePlanRequest = /** @class */ (function (_super) {
    __extends(CreateUsagePlanRequest, _super);
    function CreateUsagePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUsagePlanHeaders)
    ], CreateUsagePlanRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateUsagePlanRequestBody)
    ], CreateUsagePlanRequest.prototype, "request", void 0);
    return CreateUsagePlanRequest;
}(SpeakeasyBase));
export { CreateUsagePlanRequest };
var CreateUsagePlanResponse = /** @class */ (function (_super) {
    __extends(CreateUsagePlanResponse, _super);
    function CreateUsagePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateUsagePlanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateUsagePlanResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UsagePlan)
    ], CreateUsagePlanResponse.prototype, "usagePlan", void 0);
    return CreateUsagePlanResponse;
}(SpeakeasyBase));
export { CreateUsagePlanResponse };
