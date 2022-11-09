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
var SetDataRetrievalPolicyPathParams = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyPathParams, _super);
    function SetDataRetrievalPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyPathParams.prototype, "accountId", void 0);
    return SetDataRetrievalPolicyPathParams;
}(SpeakeasyBase));
export { SetDataRetrievalPolicyPathParams };
var SetDataRetrievalPolicyHeaders = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyHeaders, _super);
    function SetDataRetrievalPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SetDataRetrievalPolicyHeaders;
}(SpeakeasyBase));
export { SetDataRetrievalPolicyHeaders };
// SetDataRetrievalPolicyRequestBodyPolicy
/**
 * Data retrieval policy.
**/
var SetDataRetrievalPolicyRequestBodyPolicy = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyRequestBodyPolicy, _super);
    function SetDataRetrievalPolicyRequestBodyPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Rules", elemType: shared.DataRetrievalRule }),
        __metadata("design:type", Array)
    ], SetDataRetrievalPolicyRequestBodyPolicy.prototype, "rules", void 0);
    return SetDataRetrievalPolicyRequestBodyPolicy;
}(SpeakeasyBase));
export { SetDataRetrievalPolicyRequestBodyPolicy };
var SetDataRetrievalPolicyRequestBody = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyRequestBody, _super);
    function SetDataRetrievalPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Policy" }),
        __metadata("design:type", SetDataRetrievalPolicyRequestBodyPolicy)
    ], SetDataRetrievalPolicyRequestBody.prototype, "policy", void 0);
    return SetDataRetrievalPolicyRequestBody;
}(SpeakeasyBase));
export { SetDataRetrievalPolicyRequestBody };
var SetDataRetrievalPolicyRequest = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyRequest, _super);
    function SetDataRetrievalPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SetDataRetrievalPolicyPathParams)
    ], SetDataRetrievalPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SetDataRetrievalPolicyHeaders)
    ], SetDataRetrievalPolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetDataRetrievalPolicyRequestBody)
    ], SetDataRetrievalPolicyRequest.prototype, "request", void 0);
    return SetDataRetrievalPolicyRequest;
}(SpeakeasyBase));
export { SetDataRetrievalPolicyRequest };
var SetDataRetrievalPolicyResponse = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyResponse, _super);
    function SetDataRetrievalPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SetDataRetrievalPolicyResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SetDataRetrievalPolicyResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SetDataRetrievalPolicyResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SetDataRetrievalPolicyResponse.prototype, "statusCode", void 0);
    return SetDataRetrievalPolicyResponse;
}(SpeakeasyBase));
export { SetDataRetrievalPolicyResponse };
