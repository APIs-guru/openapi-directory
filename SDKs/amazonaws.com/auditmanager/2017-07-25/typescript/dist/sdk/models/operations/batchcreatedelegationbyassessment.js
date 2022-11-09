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
var BatchCreateDelegationByAssessmentPathParams = /** @class */ (function (_super) {
    __extends(BatchCreateDelegationByAssessmentPathParams, _super);
    function BatchCreateDelegationByAssessmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], BatchCreateDelegationByAssessmentPathParams.prototype, "assessmentId", void 0);
    return BatchCreateDelegationByAssessmentPathParams;
}(SpeakeasyBase));
export { BatchCreateDelegationByAssessmentPathParams };
var BatchCreateDelegationByAssessmentHeaders = /** @class */ (function (_super) {
    __extends(BatchCreateDelegationByAssessmentHeaders, _super);
    function BatchCreateDelegationByAssessmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchCreateDelegationByAssessmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchCreateDelegationByAssessmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchCreateDelegationByAssessmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchCreateDelegationByAssessmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchCreateDelegationByAssessmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchCreateDelegationByAssessmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchCreateDelegationByAssessmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchCreateDelegationByAssessmentHeaders;
}(SpeakeasyBase));
export { BatchCreateDelegationByAssessmentHeaders };
var BatchCreateDelegationByAssessmentRequestBody = /** @class */ (function (_super) {
    __extends(BatchCreateDelegationByAssessmentRequestBody, _super);
    function BatchCreateDelegationByAssessmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=createDelegationRequests", elemType: shared.CreateDelegationRequest }),
        __metadata("design:type", Array)
    ], BatchCreateDelegationByAssessmentRequestBody.prototype, "createDelegationRequests", void 0);
    return BatchCreateDelegationByAssessmentRequestBody;
}(SpeakeasyBase));
export { BatchCreateDelegationByAssessmentRequestBody };
var BatchCreateDelegationByAssessmentRequest = /** @class */ (function (_super) {
    __extends(BatchCreateDelegationByAssessmentRequest, _super);
    function BatchCreateDelegationByAssessmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchCreateDelegationByAssessmentPathParams)
    ], BatchCreateDelegationByAssessmentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BatchCreateDelegationByAssessmentHeaders)
    ], BatchCreateDelegationByAssessmentRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchCreateDelegationByAssessmentRequestBody)
    ], BatchCreateDelegationByAssessmentRequest.prototype, "request", void 0);
    return BatchCreateDelegationByAssessmentRequest;
}(SpeakeasyBase));
export { BatchCreateDelegationByAssessmentRequest };
var BatchCreateDelegationByAssessmentResponse = /** @class */ (function (_super) {
    __extends(BatchCreateDelegationByAssessmentResponse, _super);
    function BatchCreateDelegationByAssessmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchCreateDelegationByAssessmentResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchCreateDelegationByAssessmentResponse)
    ], BatchCreateDelegationByAssessmentResponse.prototype, "batchCreateDelegationByAssessmentResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchCreateDelegationByAssessmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchCreateDelegationByAssessmentResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchCreateDelegationByAssessmentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchCreateDelegationByAssessmentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchCreateDelegationByAssessmentResponse.prototype, "validationException", void 0);
    return BatchCreateDelegationByAssessmentResponse;
}(SpeakeasyBase));
export { BatchCreateDelegationByAssessmentResponse };
