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
var GetUsagePlanPathParams = /** @class */ (function (_super) {
    __extends(GetUsagePlanPathParams, _super);
    function GetUsagePlanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=usageplanId" }),
        __metadata("design:type", String)
    ], GetUsagePlanPathParams.prototype, "usageplanId", void 0);
    return GetUsagePlanPathParams;
}(SpeakeasyBase));
export { GetUsagePlanPathParams };
var GetUsagePlanHeaders = /** @class */ (function (_super) {
    __extends(GetUsagePlanHeaders, _super);
    function GetUsagePlanHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUsagePlanHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUsagePlanHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUsagePlanHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUsagePlanHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUsagePlanHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUsagePlanHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUsagePlanHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUsagePlanHeaders;
}(SpeakeasyBase));
export { GetUsagePlanHeaders };
var GetUsagePlanRequest = /** @class */ (function (_super) {
    __extends(GetUsagePlanRequest, _super);
    function GetUsagePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUsagePlanPathParams)
    ], GetUsagePlanRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetUsagePlanHeaders)
    ], GetUsagePlanRequest.prototype, "headers", void 0);
    return GetUsagePlanRequest;
}(SpeakeasyBase));
export { GetUsagePlanRequest };
var GetUsagePlanResponse = /** @class */ (function (_super) {
    __extends(GetUsagePlanResponse, _super);
    function GetUsagePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetUsagePlanResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUsagePlanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetUsagePlanResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUsagePlanResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetUsagePlanResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetUsagePlanResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UsagePlan)
    ], GetUsagePlanResponse.prototype, "usagePlan", void 0);
    return GetUsagePlanResponse;
}(SpeakeasyBase));
export { GetUsagePlanResponse };
