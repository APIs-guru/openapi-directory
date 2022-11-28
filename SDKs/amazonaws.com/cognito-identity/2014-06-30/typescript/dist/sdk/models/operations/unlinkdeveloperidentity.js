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
export var UnlinkDeveloperIdentityXAmzTargetEnum;
(function (UnlinkDeveloperIdentityXAmzTargetEnum) {
    UnlinkDeveloperIdentityXAmzTargetEnum["AwsCognitoIdentityServiceUnlinkDeveloperIdentity"] = "AWSCognitoIdentityService.UnlinkDeveloperIdentity";
})(UnlinkDeveloperIdentityXAmzTargetEnum || (UnlinkDeveloperIdentityXAmzTargetEnum = {}));
var UnlinkDeveloperIdentityHeaders = /** @class */ (function (_super) {
    __extends(UnlinkDeveloperIdentityHeaders, _super);
    function UnlinkDeveloperIdentityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UnlinkDeveloperIdentityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UnlinkDeveloperIdentityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UnlinkDeveloperIdentityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UnlinkDeveloperIdentityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UnlinkDeveloperIdentityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UnlinkDeveloperIdentityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UnlinkDeveloperIdentityHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UnlinkDeveloperIdentityHeaders.prototype, "xAmzTarget", void 0);
    return UnlinkDeveloperIdentityHeaders;
}(SpeakeasyBase));
export { UnlinkDeveloperIdentityHeaders };
var UnlinkDeveloperIdentityRequest = /** @class */ (function (_super) {
    __extends(UnlinkDeveloperIdentityRequest, _super);
    function UnlinkDeveloperIdentityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnlinkDeveloperIdentityHeaders)
    ], UnlinkDeveloperIdentityRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UnlinkDeveloperIdentityInput)
    ], UnlinkDeveloperIdentityRequest.prototype, "request", void 0);
    return UnlinkDeveloperIdentityRequest;
}(SpeakeasyBase));
export { UnlinkDeveloperIdentityRequest };
var UnlinkDeveloperIdentityResponse = /** @class */ (function (_super) {
    __extends(UnlinkDeveloperIdentityResponse, _super);
    function UnlinkDeveloperIdentityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UnlinkDeveloperIdentityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UnlinkDeveloperIdentityResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UnlinkDeveloperIdentityResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UnlinkDeveloperIdentityResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UnlinkDeveloperIdentityResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UnlinkDeveloperIdentityResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UnlinkDeveloperIdentityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UnlinkDeveloperIdentityResponse.prototype, "tooManyRequestsException", void 0);
    return UnlinkDeveloperIdentityResponse;
}(SpeakeasyBase));
export { UnlinkDeveloperIdentityResponse };
