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
var UpdateJobQueueHeaders = /** @class */ (function (_super) {
    __extends(UpdateJobQueueHeaders, _super);
    function UpdateJobQueueHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateJobQueueHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateJobQueueHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateJobQueueHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateJobQueueHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateJobQueueHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateJobQueueHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateJobQueueHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateJobQueueHeaders;
}(SpeakeasyBase));
export { UpdateJobQueueHeaders };
export var UpdateJobQueueRequestBodyStateEnum;
(function (UpdateJobQueueRequestBodyStateEnum) {
    UpdateJobQueueRequestBodyStateEnum["Enabled"] = "ENABLED";
    UpdateJobQueueRequestBodyStateEnum["Disabled"] = "DISABLED";
})(UpdateJobQueueRequestBodyStateEnum || (UpdateJobQueueRequestBodyStateEnum = {}));
var UpdateJobQueueRequestBody = /** @class */ (function (_super) {
    __extends(UpdateJobQueueRequestBody, _super);
    function UpdateJobQueueRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=computeEnvironmentOrder", elemType: shared.ComputeEnvironmentOrder }),
        __metadata("design:type", Array)
    ], UpdateJobQueueRequestBody.prototype, "computeEnvironmentOrder", void 0);
    __decorate([
        Metadata({ data: "json, name=jobQueue" }),
        __metadata("design:type", String)
    ], UpdateJobQueueRequestBody.prototype, "jobQueue", void 0);
    __decorate([
        Metadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], UpdateJobQueueRequestBody.prototype, "priority", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], UpdateJobQueueRequestBody.prototype, "state", void 0);
    return UpdateJobQueueRequestBody;
}(SpeakeasyBase));
export { UpdateJobQueueRequestBody };
var UpdateJobQueueRequest = /** @class */ (function (_super) {
    __extends(UpdateJobQueueRequest, _super);
    function UpdateJobQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateJobQueueHeaders)
    ], UpdateJobQueueRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateJobQueueRequestBody)
    ], UpdateJobQueueRequest.prototype, "request", void 0);
    return UpdateJobQueueRequest;
}(SpeakeasyBase));
export { UpdateJobQueueRequest };
var UpdateJobQueueResponse = /** @class */ (function (_super) {
    __extends(UpdateJobQueueResponse, _super);
    function UpdateJobQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateJobQueueResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateJobQueueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateJobQueueResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateJobQueueResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateJobQueueResponse)
    ], UpdateJobQueueResponse.prototype, "updateJobQueueResponse", void 0);
    return UpdateJobQueueResponse;
}(SpeakeasyBase));
export { UpdateJobQueueResponse };
