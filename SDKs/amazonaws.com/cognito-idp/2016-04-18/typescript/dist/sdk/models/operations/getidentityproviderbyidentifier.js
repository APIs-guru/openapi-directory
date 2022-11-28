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
export var GetIdentityProviderByIdentifierXAmzTargetEnum;
(function (GetIdentityProviderByIdentifierXAmzTargetEnum) {
    GetIdentityProviderByIdentifierXAmzTargetEnum["AwsCognitoIdentityProviderServiceGetIdentityProviderByIdentifier"] = "AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier";
})(GetIdentityProviderByIdentifierXAmzTargetEnum || (GetIdentityProviderByIdentifierXAmzTargetEnum = {}));
var GetIdentityProviderByIdentifierHeaders = /** @class */ (function (_super) {
    __extends(GetIdentityProviderByIdentifierHeaders, _super);
    function GetIdentityProviderByIdentifierHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetIdentityProviderByIdentifierHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetIdentityProviderByIdentifierHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetIdentityProviderByIdentifierHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetIdentityProviderByIdentifierHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetIdentityProviderByIdentifierHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetIdentityProviderByIdentifierHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetIdentityProviderByIdentifierHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetIdentityProviderByIdentifierHeaders.prototype, "xAmzTarget", void 0);
    return GetIdentityProviderByIdentifierHeaders;
}(SpeakeasyBase));
export { GetIdentityProviderByIdentifierHeaders };
var GetIdentityProviderByIdentifierRequest = /** @class */ (function (_super) {
    __extends(GetIdentityProviderByIdentifierRequest, _super);
    function GetIdentityProviderByIdentifierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIdentityProviderByIdentifierHeaders)
    ], GetIdentityProviderByIdentifierRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIdentityProviderByIdentifierRequest)
    ], GetIdentityProviderByIdentifierRequest.prototype, "request", void 0);
    return GetIdentityProviderByIdentifierRequest;
}(SpeakeasyBase));
export { GetIdentityProviderByIdentifierRequest };
var GetIdentityProviderByIdentifierResponse = /** @class */ (function (_super) {
    __extends(GetIdentityProviderByIdentifierResponse, _super);
    function GetIdentityProviderByIdentifierResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIdentityProviderByIdentifierResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetIdentityProviderByIdentifierResponse)
    ], GetIdentityProviderByIdentifierResponse.prototype, "getIdentityProviderByIdentifierResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIdentityProviderByIdentifierResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIdentityProviderByIdentifierResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIdentityProviderByIdentifierResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIdentityProviderByIdentifierResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIdentityProviderByIdentifierResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIdentityProviderByIdentifierResponse.prototype, "tooManyRequestsException", void 0);
    return GetIdentityProviderByIdentifierResponse;
}(SpeakeasyBase));
export { GetIdentityProviderByIdentifierResponse };
