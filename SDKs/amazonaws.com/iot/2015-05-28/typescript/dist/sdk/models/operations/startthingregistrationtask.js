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
var StartThingRegistrationTaskHeaders = /** @class */ (function (_super) {
    __extends(StartThingRegistrationTaskHeaders, _super);
    function StartThingRegistrationTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartThingRegistrationTaskHeaders;
}(SpeakeasyBase));
export { StartThingRegistrationTaskHeaders };
var StartThingRegistrationTaskRequestBody = /** @class */ (function (_super) {
    __extends(StartThingRegistrationTaskRequestBody, _super);
    function StartThingRegistrationTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputFileBucket" }),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskRequestBody.prototype, "inputFileBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputFileKey" }),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskRequestBody.prototype, "inputFileKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskRequestBody.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateBody" }),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskRequestBody.prototype, "templateBody", void 0);
    return StartThingRegistrationTaskRequestBody;
}(SpeakeasyBase));
export { StartThingRegistrationTaskRequestBody };
var StartThingRegistrationTaskRequest = /** @class */ (function (_super) {
    __extends(StartThingRegistrationTaskRequest, _super);
    function StartThingRegistrationTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartThingRegistrationTaskHeaders)
    ], StartThingRegistrationTaskRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartThingRegistrationTaskRequestBody)
    ], StartThingRegistrationTaskRequest.prototype, "request", void 0);
    return StartThingRegistrationTaskRequest;
}(SpeakeasyBase));
export { StartThingRegistrationTaskRequest };
var StartThingRegistrationTaskResponse = /** @class */ (function (_super) {
    __extends(StartThingRegistrationTaskResponse, _super);
    function StartThingRegistrationTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartThingRegistrationTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartThingRegistrationTaskResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartThingRegistrationTaskResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartThingRegistrationTaskResponse)
    ], StartThingRegistrationTaskResponse.prototype, "startThingRegistrationTaskResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartThingRegistrationTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartThingRegistrationTaskResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartThingRegistrationTaskResponse.prototype, "unauthorizedException", void 0);
    return StartThingRegistrationTaskResponse;
}(SpeakeasyBase));
export { StartThingRegistrationTaskResponse };
