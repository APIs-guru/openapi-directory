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
var UpdateRecordsPathParams = /** @class */ (function (_super) {
    __extends(UpdateRecordsPathParams, _super);
    function UpdateRecordsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DatasetName" }),
        __metadata("design:type", String)
    ], UpdateRecordsPathParams.prototype, "datasetName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityId" }),
        __metadata("design:type", String)
    ], UpdateRecordsPathParams.prototype, "identityId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" }),
        __metadata("design:type", String)
    ], UpdateRecordsPathParams.prototype, "identityPoolId", void 0);
    return UpdateRecordsPathParams;
}(SpeakeasyBase));
export { UpdateRecordsPathParams };
var UpdateRecordsHeaders = /** @class */ (function (_super) {
    __extends(UpdateRecordsHeaders, _super);
    function UpdateRecordsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateRecordsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateRecordsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateRecordsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateRecordsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateRecordsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateRecordsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateRecordsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-amz-Client-Context" }),
        __metadata("design:type", String)
    ], UpdateRecordsHeaders.prototype, "xAmzClientContext", void 0);
    return UpdateRecordsHeaders;
}(SpeakeasyBase));
export { UpdateRecordsHeaders };
var UpdateRecordsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateRecordsRequestBody, _super);
    function UpdateRecordsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DeviceId" }),
        __metadata("design:type", String)
    ], UpdateRecordsRequestBody.prototype, "deviceId", void 0);
    __decorate([
        Metadata({ data: "json, name=RecordPatches", elemType: shared.RecordPatch }),
        __metadata("design:type", Array)
    ], UpdateRecordsRequestBody.prototype, "recordPatches", void 0);
    __decorate([
        Metadata({ data: "json, name=SyncSessionToken" }),
        __metadata("design:type", String)
    ], UpdateRecordsRequestBody.prototype, "syncSessionToken", void 0);
    return UpdateRecordsRequestBody;
}(SpeakeasyBase));
export { UpdateRecordsRequestBody };
var UpdateRecordsRequest = /** @class */ (function (_super) {
    __extends(UpdateRecordsRequest, _super);
    function UpdateRecordsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRecordsPathParams)
    ], UpdateRecordsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRecordsHeaders)
    ], UpdateRecordsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateRecordsRequestBody)
    ], UpdateRecordsRequest.prototype, "request", void 0);
    return UpdateRecordsRequest;
}(SpeakeasyBase));
export { UpdateRecordsRequest };
var UpdateRecordsResponse = /** @class */ (function (_super) {
    __extends(UpdateRecordsResponse, _super);
    function UpdateRecordsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRecordsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRecordsResponse.prototype, "internalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRecordsResponse.prototype, "invalidLambdaFunctionOutputException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRecordsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRecordsResponse.prototype, "lambdaThrottledException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRecordsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRecordsResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRecordsResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRecordsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateRecordsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRecordsResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateRecordsResponse)
    ], UpdateRecordsResponse.prototype, "updateRecordsResponse", void 0);
    return UpdateRecordsResponse;
}(SpeakeasyBase));
export { UpdateRecordsResponse };
