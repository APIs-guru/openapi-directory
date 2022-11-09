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
export var GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum;
(function (GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum) {
    GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum["AwsCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentity"] = "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity";
})(GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum || (GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum = {}));
var GetOpenIdTokenForDeveloperIdentityHeaders = /** @class */ (function (_super) {
    __extends(GetOpenIdTokenForDeveloperIdentityHeaders, _super);
    function GetOpenIdTokenForDeveloperIdentityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetOpenIdTokenForDeveloperIdentityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetOpenIdTokenForDeveloperIdentityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetOpenIdTokenForDeveloperIdentityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetOpenIdTokenForDeveloperIdentityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetOpenIdTokenForDeveloperIdentityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetOpenIdTokenForDeveloperIdentityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetOpenIdTokenForDeveloperIdentityHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetOpenIdTokenForDeveloperIdentityHeaders.prototype, "xAmzTarget", void 0);
    return GetOpenIdTokenForDeveloperIdentityHeaders;
}(SpeakeasyBase));
export { GetOpenIdTokenForDeveloperIdentityHeaders };
var GetOpenIdTokenForDeveloperIdentityRequest = /** @class */ (function (_super) {
    __extends(GetOpenIdTokenForDeveloperIdentityRequest, _super);
    function GetOpenIdTokenForDeveloperIdentityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetOpenIdTokenForDeveloperIdentityHeaders)
    ], GetOpenIdTokenForDeveloperIdentityRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetOpenIdTokenForDeveloperIdentityInput)
    ], GetOpenIdTokenForDeveloperIdentityRequest.prototype, "request", void 0);
    return GetOpenIdTokenForDeveloperIdentityRequest;
}(SpeakeasyBase));
export { GetOpenIdTokenForDeveloperIdentityRequest };
var GetOpenIdTokenForDeveloperIdentityResponse = /** @class */ (function (_super) {
    __extends(GetOpenIdTokenForDeveloperIdentityResponse, _super);
    function GetOpenIdTokenForDeveloperIdentityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetOpenIdTokenForDeveloperIdentityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetOpenIdTokenForDeveloperIdentityResponse.prototype, "developerUserAlreadyRegisteredException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetOpenIdTokenForDeveloperIdentityResponse)
    ], GetOpenIdTokenForDeveloperIdentityResponse.prototype, "getOpenIdTokenForDeveloperIdentityResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetOpenIdTokenForDeveloperIdentityResponse.prototype, "internalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetOpenIdTokenForDeveloperIdentityResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetOpenIdTokenForDeveloperIdentityResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetOpenIdTokenForDeveloperIdentityResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetOpenIdTokenForDeveloperIdentityResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetOpenIdTokenForDeveloperIdentityResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetOpenIdTokenForDeveloperIdentityResponse.prototype, "tooManyRequestsException", void 0);
    return GetOpenIdTokenForDeveloperIdentityResponse;
}(SpeakeasyBase));
export { GetOpenIdTokenForDeveloperIdentityResponse };
