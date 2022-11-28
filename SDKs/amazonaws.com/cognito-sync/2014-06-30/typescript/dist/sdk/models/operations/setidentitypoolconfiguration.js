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
var SetIdentityPoolConfigurationPathParams = /** @class */ (function (_super) {
    __extends(SetIdentityPoolConfigurationPathParams, _super);
    function SetIdentityPoolConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationPathParams.prototype, "identityPoolId", void 0);
    return SetIdentityPoolConfigurationPathParams;
}(SpeakeasyBase));
export { SetIdentityPoolConfigurationPathParams };
var SetIdentityPoolConfigurationHeaders = /** @class */ (function (_super) {
    __extends(SetIdentityPoolConfigurationHeaders, _super);
    function SetIdentityPoolConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SetIdentityPoolConfigurationHeaders;
}(SpeakeasyBase));
export { SetIdentityPoolConfigurationHeaders };
// SetIdentityPoolConfigurationRequestBodyCognitoStreams
/**
 * Configuration options for configure Cognito streams.
**/
var SetIdentityPoolConfigurationRequestBodyCognitoStreams = /** @class */ (function (_super) {
    __extends(SetIdentityPoolConfigurationRequestBodyCognitoStreams, _super);
    function SetIdentityPoolConfigurationRequestBodyCognitoStreams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationRequestBodyCognitoStreams.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamName" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationRequestBodyCognitoStreams.prototype, "streamName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamingStatus" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationRequestBodyCognitoStreams.prototype, "streamingStatus", void 0);
    return SetIdentityPoolConfigurationRequestBodyCognitoStreams;
}(SpeakeasyBase));
export { SetIdentityPoolConfigurationRequestBodyCognitoStreams };
// SetIdentityPoolConfigurationRequestBodyPushSync
/**
 * Configuration options to be applied to the identity pool.
**/
var SetIdentityPoolConfigurationRequestBodyPushSync = /** @class */ (function (_super) {
    __extends(SetIdentityPoolConfigurationRequestBodyPushSync, _super);
    function SetIdentityPoolConfigurationRequestBodyPushSync() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationArns" }),
        __metadata("design:type", Array)
    ], SetIdentityPoolConfigurationRequestBodyPushSync.prototype, "applicationArns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationRequestBodyPushSync.prototype, "roleArn", void 0);
    return SetIdentityPoolConfigurationRequestBodyPushSync;
}(SpeakeasyBase));
export { SetIdentityPoolConfigurationRequestBodyPushSync };
var SetIdentityPoolConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(SetIdentityPoolConfigurationRequestBody, _super);
    function SetIdentityPoolConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CognitoStreams" }),
        __metadata("design:type", SetIdentityPoolConfigurationRequestBodyCognitoStreams)
    ], SetIdentityPoolConfigurationRequestBody.prototype, "cognitoStreams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PushSync" }),
        __metadata("design:type", SetIdentityPoolConfigurationRequestBodyPushSync)
    ], SetIdentityPoolConfigurationRequestBody.prototype, "pushSync", void 0);
    return SetIdentityPoolConfigurationRequestBody;
}(SpeakeasyBase));
export { SetIdentityPoolConfigurationRequestBody };
var SetIdentityPoolConfigurationRequest = /** @class */ (function (_super) {
    __extends(SetIdentityPoolConfigurationRequest, _super);
    function SetIdentityPoolConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetIdentityPoolConfigurationPathParams)
    ], SetIdentityPoolConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetIdentityPoolConfigurationHeaders)
    ], SetIdentityPoolConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetIdentityPoolConfigurationRequestBody)
    ], SetIdentityPoolConfigurationRequest.prototype, "request", void 0);
    return SetIdentityPoolConfigurationRequest;
}(SpeakeasyBase));
export { SetIdentityPoolConfigurationRequest };
var SetIdentityPoolConfigurationResponse = /** @class */ (function (_super) {
    __extends(SetIdentityPoolConfigurationResponse, _super);
    function SetIdentityPoolConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetIdentityPoolConfigurationResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetIdentityPoolConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetIdentityPoolConfigurationResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetIdentityPoolConfigurationResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetIdentityPoolConfigurationResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetIdentityPoolConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SetIdentityPoolConfigurationResponse)
    ], SetIdentityPoolConfigurationResponse.prototype, "setIdentityPoolConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetIdentityPoolConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetIdentityPoolConfigurationResponse.prototype, "tooManyRequestsException", void 0);
    return SetIdentityPoolConfigurationResponse;
}(SpeakeasyBase));
export { SetIdentityPoolConfigurationResponse };
