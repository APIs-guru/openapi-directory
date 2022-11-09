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
var UpdateSettingsHeaders = /** @class */ (function (_super) {
    __extends(UpdateSettingsHeaders, _super);
    function UpdateSettingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSettingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSettingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSettingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSettingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSettingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSettingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSettingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSettingsHeaders;
}(SpeakeasyBase));
export { UpdateSettingsHeaders };
// UpdateSettingsRequestBodyDefaultAssessmentReportsDestination
/**
 *  The location in which Audit Manager saves assessment reports for the given assessment.
**/
var UpdateSettingsRequestBodyDefaultAssessmentReportsDestination = /** @class */ (function (_super) {
    __extends(UpdateSettingsRequestBodyDefaultAssessmentReportsDestination, _super);
    function UpdateSettingsRequestBodyDefaultAssessmentReportsDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], UpdateSettingsRequestBodyDefaultAssessmentReportsDestination.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "json, name=destinationType" }),
        __metadata("design:type", String)
    ], UpdateSettingsRequestBodyDefaultAssessmentReportsDestination.prototype, "destinationType", void 0);
    return UpdateSettingsRequestBodyDefaultAssessmentReportsDestination;
}(SpeakeasyBase));
export { UpdateSettingsRequestBodyDefaultAssessmentReportsDestination };
var UpdateSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSettingsRequestBody, _super);
    function UpdateSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=defaultAssessmentReportsDestination" }),
        __metadata("design:type", UpdateSettingsRequestBodyDefaultAssessmentReportsDestination)
    ], UpdateSettingsRequestBody.prototype, "defaultAssessmentReportsDestination", void 0);
    __decorate([
        Metadata({ data: "json, name=defaultProcessOwners", elemType: shared.Role }),
        __metadata("design:type", Array)
    ], UpdateSettingsRequestBody.prototype, "defaultProcessOwners", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKey" }),
        __metadata("design:type", String)
    ], UpdateSettingsRequestBody.prototype, "kmsKey", void 0);
    __decorate([
        Metadata({ data: "json, name=snsTopic" }),
        __metadata("design:type", String)
    ], UpdateSettingsRequestBody.prototype, "snsTopic", void 0);
    return UpdateSettingsRequestBody;
}(SpeakeasyBase));
export { UpdateSettingsRequestBody };
var UpdateSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateSettingsRequest, _super);
    function UpdateSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSettingsHeaders)
    ], UpdateSettingsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSettingsRequestBody)
    ], UpdateSettingsRequest.prototype, "request", void 0);
    return UpdateSettingsRequest;
}(SpeakeasyBase));
export { UpdateSettingsRequest };
var UpdateSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateSettingsResponse, _super);
    function UpdateSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateSettingsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateSettingsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateSettingsResponse)
    ], UpdateSettingsResponse.prototype, "updateSettingsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateSettingsResponse.prototype, "validationException", void 0);
    return UpdateSettingsResponse;
}(SpeakeasyBase));
export { UpdateSettingsResponse };
