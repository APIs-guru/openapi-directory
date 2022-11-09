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
var GetSdkPathParams = /** @class */ (function (_super) {
    __extends(GetSdkPathParams, _super);
    function GetSdkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], GetSdkPathParams.prototype, "restapiId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=sdk_type" }),
        __metadata("design:type", String)
    ], GetSdkPathParams.prototype, "sdkType", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=stage_name" }),
        __metadata("design:type", String)
    ], GetSdkPathParams.prototype, "stageName", void 0);
    return GetSdkPathParams;
}(SpeakeasyBase));
export { GetSdkPathParams };
var GetSdkQueryParams = /** @class */ (function (_super) {
    __extends(GetSdkQueryParams, _super);
    function GetSdkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameters" }),
        __metadata("design:type", Map)
    ], GetSdkQueryParams.prototype, "parameters", void 0);
    return GetSdkQueryParams;
}(SpeakeasyBase));
export { GetSdkQueryParams };
var GetSdkHeaders = /** @class */ (function (_super) {
    __extends(GetSdkHeaders, _super);
    function GetSdkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSdkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSdkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSdkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSdkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSdkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSdkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSdkHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSdkHeaders;
}(SpeakeasyBase));
export { GetSdkHeaders };
var GetSdkRequest = /** @class */ (function (_super) {
    __extends(GetSdkRequest, _super);
    function GetSdkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSdkPathParams)
    ], GetSdkRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSdkQueryParams)
    ], GetSdkRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSdkHeaders)
    ], GetSdkRequest.prototype, "headers", void 0);
    return GetSdkRequest;
}(SpeakeasyBase));
export { GetSdkRequest };
var GetSdkResponse = /** @class */ (function (_super) {
    __extends(GetSdkResponse, _super);
    function GetSdkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSdkResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSdkResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSdkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSdkResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSdkResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SdkResponse)
    ], GetSdkResponse.prototype, "sdkResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSdkResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSdkResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSdkResponse.prototype, "unauthorizedException", void 0);
    return GetSdkResponse;
}(SpeakeasyBase));
export { GetSdkResponse };
