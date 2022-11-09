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
var CreateAssessmentFrameworkHeaders = /** @class */ (function (_super) {
    __extends(CreateAssessmentFrameworkHeaders, _super);
    function CreateAssessmentFrameworkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAssessmentFrameworkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAssessmentFrameworkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAssessmentFrameworkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAssessmentFrameworkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAssessmentFrameworkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAssessmentFrameworkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAssessmentFrameworkHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAssessmentFrameworkHeaders;
}(SpeakeasyBase));
export { CreateAssessmentFrameworkHeaders };
var CreateAssessmentFrameworkRequestBody = /** @class */ (function (_super) {
    __extends(CreateAssessmentFrameworkRequestBody, _super);
    function CreateAssessmentFrameworkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=complianceType" }),
        __metadata("design:type", String)
    ], CreateAssessmentFrameworkRequestBody.prototype, "complianceType", void 0);
    __decorate([
        Metadata({ data: "json, name=controlSets", elemType: shared.CreateAssessmentFrameworkControlSet }),
        __metadata("design:type", Array)
    ], CreateAssessmentFrameworkRequestBody.prototype, "controlSets", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateAssessmentFrameworkRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateAssessmentFrameworkRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateAssessmentFrameworkRequestBody.prototype, "tags", void 0);
    return CreateAssessmentFrameworkRequestBody;
}(SpeakeasyBase));
export { CreateAssessmentFrameworkRequestBody };
var CreateAssessmentFrameworkRequest = /** @class */ (function (_super) {
    __extends(CreateAssessmentFrameworkRequest, _super);
    function CreateAssessmentFrameworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateAssessmentFrameworkHeaders)
    ], CreateAssessmentFrameworkRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAssessmentFrameworkRequestBody)
    ], CreateAssessmentFrameworkRequest.prototype, "request", void 0);
    return CreateAssessmentFrameworkRequest;
}(SpeakeasyBase));
export { CreateAssessmentFrameworkRequest };
var CreateAssessmentFrameworkResponse = /** @class */ (function (_super) {
    __extends(CreateAssessmentFrameworkResponse, _super);
    function CreateAssessmentFrameworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssessmentFrameworkResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateAssessmentFrameworkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateAssessmentFrameworkResponse)
    ], CreateAssessmentFrameworkResponse.prototype, "createAssessmentFrameworkResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssessmentFrameworkResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssessmentFrameworkResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateAssessmentFrameworkResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssessmentFrameworkResponse.prototype, "validationException", void 0);
    return CreateAssessmentFrameworkResponse;
}(SpeakeasyBase));
export { CreateAssessmentFrameworkResponse };
