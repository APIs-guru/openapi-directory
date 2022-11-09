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
var ResolveComponentCandidatesHeaders = /** @class */ (function (_super) {
    __extends(ResolveComponentCandidatesHeaders, _super);
    function ResolveComponentCandidatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ResolveComponentCandidatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ResolveComponentCandidatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ResolveComponentCandidatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ResolveComponentCandidatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ResolveComponentCandidatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ResolveComponentCandidatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ResolveComponentCandidatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ResolveComponentCandidatesHeaders;
}(SpeakeasyBase));
export { ResolveComponentCandidatesHeaders };
// ResolveComponentCandidatesRequestBodyPlatform
/**
 * Contains information about a platform that a component supports.
**/
var ResolveComponentCandidatesRequestBodyPlatform = /** @class */ (function (_super) {
    __extends(ResolveComponentCandidatesRequestBodyPlatform, _super);
    function ResolveComponentCandidatesRequestBodyPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], ResolveComponentCandidatesRequestBodyPlatform.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ResolveComponentCandidatesRequestBodyPlatform.prototype, "name", void 0);
    return ResolveComponentCandidatesRequestBodyPlatform;
}(SpeakeasyBase));
export { ResolveComponentCandidatesRequestBodyPlatform };
var ResolveComponentCandidatesRequestBody = /** @class */ (function (_super) {
    __extends(ResolveComponentCandidatesRequestBody, _super);
    function ResolveComponentCandidatesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=componentCandidates", elemType: shared.ComponentCandidate }),
        __metadata("design:type", Array)
    ], ResolveComponentCandidatesRequestBody.prototype, "componentCandidates", void 0);
    __decorate([
        Metadata({ data: "json, name=platform" }),
        __metadata("design:type", ResolveComponentCandidatesRequestBodyPlatform)
    ], ResolveComponentCandidatesRequestBody.prototype, "platform", void 0);
    return ResolveComponentCandidatesRequestBody;
}(SpeakeasyBase));
export { ResolveComponentCandidatesRequestBody };
var ResolveComponentCandidatesRequest = /** @class */ (function (_super) {
    __extends(ResolveComponentCandidatesRequest, _super);
    function ResolveComponentCandidatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ResolveComponentCandidatesHeaders)
    ], ResolveComponentCandidatesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ResolveComponentCandidatesRequestBody)
    ], ResolveComponentCandidatesRequest.prototype, "request", void 0);
    return ResolveComponentCandidatesRequest;
}(SpeakeasyBase));
export { ResolveComponentCandidatesRequest };
var ResolveComponentCandidatesResponse = /** @class */ (function (_super) {
    __extends(ResolveComponentCandidatesResponse, _super);
    function ResolveComponentCandidatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ResolveComponentCandidatesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ResolveComponentCandidatesResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ResolveComponentCandidatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ResolveComponentCandidatesResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ResolveComponentCandidatesResponse)
    ], ResolveComponentCandidatesResponse.prototype, "resolveComponentCandidatesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ResolveComponentCandidatesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ResolveComponentCandidatesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ResolveComponentCandidatesResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ResolveComponentCandidatesResponse.prototype, "validationException", void 0);
    return ResolveComponentCandidatesResponse;
}(SpeakeasyBase));
export { ResolveComponentCandidatesResponse };
