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
var CancelQuantumTaskPathParams = /** @class */ (function (_super) {
    __extends(CancelQuantumTaskPathParams, _super);
    function CancelQuantumTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=quantumTaskArn" }),
        __metadata("design:type", String)
    ], CancelQuantumTaskPathParams.prototype, "quantumTaskArn", void 0);
    return CancelQuantumTaskPathParams;
}(SpeakeasyBase));
export { CancelQuantumTaskPathParams };
var CancelQuantumTaskHeaders = /** @class */ (function (_super) {
    __extends(CancelQuantumTaskHeaders, _super);
    function CancelQuantumTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CancelQuantumTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CancelQuantumTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CancelQuantumTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CancelQuantumTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CancelQuantumTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CancelQuantumTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CancelQuantumTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CancelQuantumTaskHeaders;
}(SpeakeasyBase));
export { CancelQuantumTaskHeaders };
var CancelQuantumTaskRequestBody = /** @class */ (function (_super) {
    __extends(CancelQuantumTaskRequestBody, _super);
    function CancelQuantumTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CancelQuantumTaskRequestBody.prototype, "clientToken", void 0);
    return CancelQuantumTaskRequestBody;
}(SpeakeasyBase));
export { CancelQuantumTaskRequestBody };
var CancelQuantumTaskRequest = /** @class */ (function (_super) {
    __extends(CancelQuantumTaskRequest, _super);
    function CancelQuantumTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CancelQuantumTaskPathParams)
    ], CancelQuantumTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CancelQuantumTaskHeaders)
    ], CancelQuantumTaskRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CancelQuantumTaskRequestBody)
    ], CancelQuantumTaskRequest.prototype, "request", void 0);
    return CancelQuantumTaskRequest;
}(SpeakeasyBase));
export { CancelQuantumTaskRequest };
var CancelQuantumTaskResponse = /** @class */ (function (_super) {
    __extends(CancelQuantumTaskResponse, _super);
    function CancelQuantumTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelQuantumTaskResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CancelQuantumTaskResponse)
    ], CancelQuantumTaskResponse.prototype, "cancelQuantumTaskResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelQuantumTaskResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CancelQuantumTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelQuantumTaskResponse.prototype, "internalServiceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelQuantumTaskResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CancelQuantumTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelQuantumTaskResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelQuantumTaskResponse.prototype, "validationException", void 0);
    return CancelQuantumTaskResponse;
}(SpeakeasyBase));
export { CancelQuantumTaskResponse };
