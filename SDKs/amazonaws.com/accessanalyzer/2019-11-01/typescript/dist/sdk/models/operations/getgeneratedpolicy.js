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
var GetGeneratedPolicyPathParams = /** @class */ (function (_super) {
    __extends(GetGeneratedPolicyPathParams, _super);
    function GetGeneratedPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], GetGeneratedPolicyPathParams.prototype, "jobId", void 0);
    return GetGeneratedPolicyPathParams;
}(SpeakeasyBase));
export { GetGeneratedPolicyPathParams };
var GetGeneratedPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetGeneratedPolicyQueryParams, _super);
    function GetGeneratedPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeResourcePlaceholders" }),
        __metadata("design:type", Boolean)
    ], GetGeneratedPolicyQueryParams.prototype, "includeResourcePlaceholders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeServiceLevelTemplate" }),
        __metadata("design:type", Boolean)
    ], GetGeneratedPolicyQueryParams.prototype, "includeServiceLevelTemplate", void 0);
    return GetGeneratedPolicyQueryParams;
}(SpeakeasyBase));
export { GetGeneratedPolicyQueryParams };
var GetGeneratedPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetGeneratedPolicyHeaders, _super);
    function GetGeneratedPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGeneratedPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGeneratedPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGeneratedPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGeneratedPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGeneratedPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGeneratedPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGeneratedPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGeneratedPolicyHeaders;
}(SpeakeasyBase));
export { GetGeneratedPolicyHeaders };
var GetGeneratedPolicyRequest = /** @class */ (function (_super) {
    __extends(GetGeneratedPolicyRequest, _super);
    function GetGeneratedPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGeneratedPolicyPathParams)
    ], GetGeneratedPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGeneratedPolicyQueryParams)
    ], GetGeneratedPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGeneratedPolicyHeaders)
    ], GetGeneratedPolicyRequest.prototype, "headers", void 0);
    return GetGeneratedPolicyRequest;
}(SpeakeasyBase));
export { GetGeneratedPolicyRequest };
var GetGeneratedPolicyResponse = /** @class */ (function (_super) {
    __extends(GetGeneratedPolicyResponse, _super);
    function GetGeneratedPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetGeneratedPolicyResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGeneratedPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetGeneratedPolicyResponse)
    ], GetGeneratedPolicyResponse.prototype, "getGeneratedPolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetGeneratedPolicyResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGeneratedPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetGeneratedPolicyResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetGeneratedPolicyResponse.prototype, "validationException", void 0);
    return GetGeneratedPolicyResponse;
}(SpeakeasyBase));
export { GetGeneratedPolicyResponse };
