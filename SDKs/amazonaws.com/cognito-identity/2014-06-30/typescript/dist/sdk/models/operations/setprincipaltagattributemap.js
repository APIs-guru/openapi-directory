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
export var SetPrincipalTagAttributeMapXAmzTargetEnum;
(function (SetPrincipalTagAttributeMapXAmzTargetEnum) {
    SetPrincipalTagAttributeMapXAmzTargetEnum["AwsCognitoIdentityServiceSetPrincipalTagAttributeMap"] = "AWSCognitoIdentityService.SetPrincipalTagAttributeMap";
})(SetPrincipalTagAttributeMapXAmzTargetEnum || (SetPrincipalTagAttributeMapXAmzTargetEnum = {}));
var SetPrincipalTagAttributeMapHeaders = /** @class */ (function (_super) {
    __extends(SetPrincipalTagAttributeMapHeaders, _super);
    function SetPrincipalTagAttributeMapHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SetPrincipalTagAttributeMapHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SetPrincipalTagAttributeMapHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SetPrincipalTagAttributeMapHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SetPrincipalTagAttributeMapHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SetPrincipalTagAttributeMapHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SetPrincipalTagAttributeMapHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SetPrincipalTagAttributeMapHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], SetPrincipalTagAttributeMapHeaders.prototype, "xAmzTarget", void 0);
    return SetPrincipalTagAttributeMapHeaders;
}(SpeakeasyBase));
export { SetPrincipalTagAttributeMapHeaders };
var SetPrincipalTagAttributeMapRequest = /** @class */ (function (_super) {
    __extends(SetPrincipalTagAttributeMapRequest, _super);
    function SetPrincipalTagAttributeMapRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetPrincipalTagAttributeMapHeaders)
    ], SetPrincipalTagAttributeMapRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetPrincipalTagAttributeMapInput)
    ], SetPrincipalTagAttributeMapRequest.prototype, "request", void 0);
    return SetPrincipalTagAttributeMapRequest;
}(SpeakeasyBase));
export { SetPrincipalTagAttributeMapRequest };
var SetPrincipalTagAttributeMapResponse = /** @class */ (function (_super) {
    __extends(SetPrincipalTagAttributeMapResponse, _super);
    function SetPrincipalTagAttributeMapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetPrincipalTagAttributeMapResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetPrincipalTagAttributeMapResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetPrincipalTagAttributeMapResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetPrincipalTagAttributeMapResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetPrincipalTagAttributeMapResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SetPrincipalTagAttributeMapResponse)
    ], SetPrincipalTagAttributeMapResponse.prototype, "setPrincipalTagAttributeMapResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetPrincipalTagAttributeMapResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetPrincipalTagAttributeMapResponse.prototype, "tooManyRequestsException", void 0);
    return SetPrincipalTagAttributeMapResponse;
}(SpeakeasyBase));
export { SetPrincipalTagAttributeMapResponse };
