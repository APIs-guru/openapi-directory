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
var PutFileSystemPolicyPathParams = /** @class */ (function (_super) {
    __extends(PutFileSystemPolicyPathParams, _super);
    function PutFileSystemPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" }),
        __metadata("design:type", String)
    ], PutFileSystemPolicyPathParams.prototype, "fileSystemId", void 0);
    return PutFileSystemPolicyPathParams;
}(SpeakeasyBase));
export { PutFileSystemPolicyPathParams };
var PutFileSystemPolicyHeaders = /** @class */ (function (_super) {
    __extends(PutFileSystemPolicyHeaders, _super);
    function PutFileSystemPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutFileSystemPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutFileSystemPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutFileSystemPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutFileSystemPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutFileSystemPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutFileSystemPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutFileSystemPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutFileSystemPolicyHeaders;
}(SpeakeasyBase));
export { PutFileSystemPolicyHeaders };
var PutFileSystemPolicyRequestBody = /** @class */ (function (_super) {
    __extends(PutFileSystemPolicyRequestBody, _super);
    function PutFileSystemPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BypassPolicyLockoutSafetyCheck" }),
        __metadata("design:type", Boolean)
    ], PutFileSystemPolicyRequestBody.prototype, "bypassPolicyLockoutSafetyCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Policy" }),
        __metadata("design:type", String)
    ], PutFileSystemPolicyRequestBody.prototype, "policy", void 0);
    return PutFileSystemPolicyRequestBody;
}(SpeakeasyBase));
export { PutFileSystemPolicyRequestBody };
var PutFileSystemPolicyRequest = /** @class */ (function (_super) {
    __extends(PutFileSystemPolicyRequest, _super);
    function PutFileSystemPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFileSystemPolicyPathParams)
    ], PutFileSystemPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFileSystemPolicyHeaders)
    ], PutFileSystemPolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutFileSystemPolicyRequestBody)
    ], PutFileSystemPolicyRequest.prototype, "request", void 0);
    return PutFileSystemPolicyRequest;
}(SpeakeasyBase));
export { PutFileSystemPolicyRequest };
var PutFileSystemPolicyResponse = /** @class */ (function (_super) {
    __extends(PutFileSystemPolicyResponse, _super);
    function PutFileSystemPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutFileSystemPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFileSystemPolicyResponse.prototype, "fileSystemNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileSystemPolicyDescription)
    ], PutFileSystemPolicyResponse.prototype, "fileSystemPolicyDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFileSystemPolicyResponse.prototype, "incorrectFileSystemLifeCycleState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFileSystemPolicyResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFileSystemPolicyResponse.prototype, "invalidPolicyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutFileSystemPolicyResponse.prototype, "statusCode", void 0);
    return PutFileSystemPolicyResponse;
}(SpeakeasyBase));
export { PutFileSystemPolicyResponse };
