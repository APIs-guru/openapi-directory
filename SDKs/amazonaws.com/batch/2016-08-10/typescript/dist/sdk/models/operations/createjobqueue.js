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
var CreateJobQueueHeaders = /** @class */ (function (_super) {
    __extends(CreateJobQueueHeaders, _super);
    function CreateJobQueueHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateJobQueueHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateJobQueueHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateJobQueueHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateJobQueueHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateJobQueueHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateJobQueueHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateJobQueueHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateJobQueueHeaders;
}(SpeakeasyBase));
export { CreateJobQueueHeaders };
export var CreateJobQueueRequestBodyStateEnum;
(function (CreateJobQueueRequestBodyStateEnum) {
    CreateJobQueueRequestBodyStateEnum["Enabled"] = "ENABLED";
    CreateJobQueueRequestBodyStateEnum["Disabled"] = "DISABLED";
})(CreateJobQueueRequestBodyStateEnum || (CreateJobQueueRequestBodyStateEnum = {}));
var CreateJobQueueRequestBody = /** @class */ (function (_super) {
    __extends(CreateJobQueueRequestBody, _super);
    function CreateJobQueueRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeEnvironmentOrder", elemType: shared.ComputeEnvironmentOrder }),
        __metadata("design:type", Array)
    ], CreateJobQueueRequestBody.prototype, "computeEnvironmentOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobQueueName" }),
        __metadata("design:type", String)
    ], CreateJobQueueRequestBody.prototype, "jobQueueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateJobQueueRequestBody.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CreateJobQueueRequestBody.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateJobQueueRequestBody.prototype, "tags", void 0);
    return CreateJobQueueRequestBody;
}(SpeakeasyBase));
export { CreateJobQueueRequestBody };
var CreateJobQueueRequest = /** @class */ (function (_super) {
    __extends(CreateJobQueueRequest, _super);
    function CreateJobQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateJobQueueHeaders)
    ], CreateJobQueueRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateJobQueueRequestBody)
    ], CreateJobQueueRequest.prototype, "request", void 0);
    return CreateJobQueueRequest;
}(SpeakeasyBase));
export { CreateJobQueueRequest };
var CreateJobQueueResponse = /** @class */ (function (_super) {
    __extends(CreateJobQueueResponse, _super);
    function CreateJobQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobQueueResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateJobQueueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateJobQueueResponse)
    ], CreateJobQueueResponse.prototype, "createJobQueueResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobQueueResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateJobQueueResponse.prototype, "statusCode", void 0);
    return CreateJobQueueResponse;
}(SpeakeasyBase));
export { CreateJobQueueResponse };
