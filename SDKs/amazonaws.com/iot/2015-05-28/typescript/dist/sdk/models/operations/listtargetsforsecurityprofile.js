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
var ListTargetsForSecurityProfilePathParams = /** @class */ (function (_super) {
    __extends(ListTargetsForSecurityProfilePathParams, _super);
    function ListTargetsForSecurityProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityProfileName" }),
        __metadata("design:type", String)
    ], ListTargetsForSecurityProfilePathParams.prototype, "securityProfileName", void 0);
    return ListTargetsForSecurityProfilePathParams;
}(SpeakeasyBase));
export { ListTargetsForSecurityProfilePathParams };
var ListTargetsForSecurityProfileQueryParams = /** @class */ (function (_super) {
    __extends(ListTargetsForSecurityProfileQueryParams, _super);
    function ListTargetsForSecurityProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListTargetsForSecurityProfileQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListTargetsForSecurityProfileQueryParams.prototype, "nextToken", void 0);
    return ListTargetsForSecurityProfileQueryParams;
}(SpeakeasyBase));
export { ListTargetsForSecurityProfileQueryParams };
var ListTargetsForSecurityProfileHeaders = /** @class */ (function (_super) {
    __extends(ListTargetsForSecurityProfileHeaders, _super);
    function ListTargetsForSecurityProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTargetsForSecurityProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTargetsForSecurityProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTargetsForSecurityProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTargetsForSecurityProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTargetsForSecurityProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTargetsForSecurityProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTargetsForSecurityProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListTargetsForSecurityProfileHeaders;
}(SpeakeasyBase));
export { ListTargetsForSecurityProfileHeaders };
var ListTargetsForSecurityProfileRequest = /** @class */ (function (_super) {
    __extends(ListTargetsForSecurityProfileRequest, _super);
    function ListTargetsForSecurityProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTargetsForSecurityProfilePathParams)
    ], ListTargetsForSecurityProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTargetsForSecurityProfileQueryParams)
    ], ListTargetsForSecurityProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTargetsForSecurityProfileHeaders)
    ], ListTargetsForSecurityProfileRequest.prototype, "headers", void 0);
    return ListTargetsForSecurityProfileRequest;
}(SpeakeasyBase));
export { ListTargetsForSecurityProfileRequest };
var ListTargetsForSecurityProfileResponse = /** @class */ (function (_super) {
    __extends(ListTargetsForSecurityProfileResponse, _super);
    function ListTargetsForSecurityProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTargetsForSecurityProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTargetsForSecurityProfileResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTargetsForSecurityProfileResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTargetsForSecurityProfileResponse)
    ], ListTargetsForSecurityProfileResponse.prototype, "listTargetsForSecurityProfileResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTargetsForSecurityProfileResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTargetsForSecurityProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTargetsForSecurityProfileResponse.prototype, "throttlingException", void 0);
    return ListTargetsForSecurityProfileResponse;
}(SpeakeasyBase));
export { ListTargetsForSecurityProfileResponse };
