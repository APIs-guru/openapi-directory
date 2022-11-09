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
var GetQuantumTaskPathParams = /** @class */ (function (_super) {
    __extends(GetQuantumTaskPathParams, _super);
    function GetQuantumTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=quantumTaskArn" }),
        __metadata("design:type", String)
    ], GetQuantumTaskPathParams.prototype, "quantumTaskArn", void 0);
    return GetQuantumTaskPathParams;
}(SpeakeasyBase));
export { GetQuantumTaskPathParams };
var GetQuantumTaskHeaders = /** @class */ (function (_super) {
    __extends(GetQuantumTaskHeaders, _super);
    function GetQuantumTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetQuantumTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetQuantumTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetQuantumTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetQuantumTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetQuantumTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetQuantumTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetQuantumTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetQuantumTaskHeaders;
}(SpeakeasyBase));
export { GetQuantumTaskHeaders };
var GetQuantumTaskRequest = /** @class */ (function (_super) {
    __extends(GetQuantumTaskRequest, _super);
    function GetQuantumTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetQuantumTaskPathParams)
    ], GetQuantumTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetQuantumTaskHeaders)
    ], GetQuantumTaskRequest.prototype, "headers", void 0);
    return GetQuantumTaskRequest;
}(SpeakeasyBase));
export { GetQuantumTaskRequest };
var GetQuantumTaskResponse = /** @class */ (function (_super) {
    __extends(GetQuantumTaskResponse, _super);
    function GetQuantumTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetQuantumTaskResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetQuantumTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetQuantumTaskResponse)
    ], GetQuantumTaskResponse.prototype, "getQuantumTaskResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetQuantumTaskResponse.prototype, "internalServiceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetQuantumTaskResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetQuantumTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetQuantumTaskResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetQuantumTaskResponse.prototype, "validationException", void 0);
    return GetQuantumTaskResponse;
}(SpeakeasyBase));
export { GetQuantumTaskResponse };
