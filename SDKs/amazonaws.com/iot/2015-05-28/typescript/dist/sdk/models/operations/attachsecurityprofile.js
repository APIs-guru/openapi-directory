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
var AttachSecurityProfilePathParams = /** @class */ (function (_super) {
    __extends(AttachSecurityProfilePathParams, _super);
    function AttachSecurityProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityProfileName" }),
        __metadata("design:type", String)
    ], AttachSecurityProfilePathParams.prototype, "securityProfileName", void 0);
    return AttachSecurityProfilePathParams;
}(SpeakeasyBase));
export { AttachSecurityProfilePathParams };
var AttachSecurityProfileQueryParams = /** @class */ (function (_super) {
    __extends(AttachSecurityProfileQueryParams, _super);
    function AttachSecurityProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=securityProfileTargetArn" }),
        __metadata("design:type", String)
    ], AttachSecurityProfileQueryParams.prototype, "securityProfileTargetArn", void 0);
    return AttachSecurityProfileQueryParams;
}(SpeakeasyBase));
export { AttachSecurityProfileQueryParams };
var AttachSecurityProfileHeaders = /** @class */ (function (_super) {
    __extends(AttachSecurityProfileHeaders, _super);
    function AttachSecurityProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AttachSecurityProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AttachSecurityProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AttachSecurityProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AttachSecurityProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AttachSecurityProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AttachSecurityProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AttachSecurityProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AttachSecurityProfileHeaders;
}(SpeakeasyBase));
export { AttachSecurityProfileHeaders };
var AttachSecurityProfileRequest = /** @class */ (function (_super) {
    __extends(AttachSecurityProfileRequest, _super);
    function AttachSecurityProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttachSecurityProfilePathParams)
    ], AttachSecurityProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttachSecurityProfileQueryParams)
    ], AttachSecurityProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttachSecurityProfileHeaders)
    ], AttachSecurityProfileRequest.prototype, "headers", void 0);
    return AttachSecurityProfileRequest;
}(SpeakeasyBase));
export { AttachSecurityProfileRequest };
var AttachSecurityProfileResponse = /** @class */ (function (_super) {
    __extends(AttachSecurityProfileResponse, _super);
    function AttachSecurityProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AttachSecurityProfileResponse.prototype, "attachSecurityProfileResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AttachSecurityProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachSecurityProfileResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachSecurityProfileResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachSecurityProfileResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachSecurityProfileResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AttachSecurityProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachSecurityProfileResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachSecurityProfileResponse.prototype, "versionConflictException", void 0);
    return AttachSecurityProfileResponse;
}(SpeakeasyBase));
export { AttachSecurityProfileResponse };
