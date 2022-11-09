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
var CreateFargateProfilePathParams = /** @class */ (function (_super) {
    __extends(CreateFargateProfilePathParams, _super);
    function CreateFargateProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CreateFargateProfilePathParams.prototype, "name", void 0);
    return CreateFargateProfilePathParams;
}(SpeakeasyBase));
export { CreateFargateProfilePathParams };
var CreateFargateProfileHeaders = /** @class */ (function (_super) {
    __extends(CreateFargateProfileHeaders, _super);
    function CreateFargateProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFargateProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFargateProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFargateProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFargateProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFargateProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFargateProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFargateProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateFargateProfileHeaders;
}(SpeakeasyBase));
export { CreateFargateProfileHeaders };
var CreateFargateProfileRequestBody = /** @class */ (function (_super) {
    __extends(CreateFargateProfileRequestBody, _super);
    function CreateFargateProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateFargateProfileRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=fargateProfileName" }),
        __metadata("design:type", String)
    ], CreateFargateProfileRequestBody.prototype, "fargateProfileName", void 0);
    __decorate([
        Metadata({ data: "json, name=podExecutionRoleArn" }),
        __metadata("design:type", String)
    ], CreateFargateProfileRequestBody.prototype, "podExecutionRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=selectors", elemType: shared.FargateProfileSelector }),
        __metadata("design:type", Array)
    ], CreateFargateProfileRequestBody.prototype, "selectors", void 0);
    __decorate([
        Metadata({ data: "json, name=subnets" }),
        __metadata("design:type", Array)
    ], CreateFargateProfileRequestBody.prototype, "subnets", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateFargateProfileRequestBody.prototype, "tags", void 0);
    return CreateFargateProfileRequestBody;
}(SpeakeasyBase));
export { CreateFargateProfileRequestBody };
var CreateFargateProfileRequest = /** @class */ (function (_super) {
    __extends(CreateFargateProfileRequest, _super);
    function CreateFargateProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateFargateProfilePathParams)
    ], CreateFargateProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateFargateProfileHeaders)
    ], CreateFargateProfileRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFargateProfileRequestBody)
    ], CreateFargateProfileRequest.prototype, "request", void 0);
    return CreateFargateProfileRequest;
}(SpeakeasyBase));
export { CreateFargateProfileRequest };
var CreateFargateProfileResponse = /** @class */ (function (_super) {
    __extends(CreateFargateProfileResponse, _super);
    function CreateFargateProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFargateProfileResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateFargateProfileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateFargateProfileResponse)
    ], CreateFargateProfileResponse.prototype, "createFargateProfileResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFargateProfileResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFargateProfileResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFargateProfileResponse.prototype, "resourceLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFargateProfileResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateFargateProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFargateProfileResponse.prototype, "unsupportedAvailabilityZoneException", void 0);
    return CreateFargateProfileResponse;
}(SpeakeasyBase));
export { CreateFargateProfileResponse };
