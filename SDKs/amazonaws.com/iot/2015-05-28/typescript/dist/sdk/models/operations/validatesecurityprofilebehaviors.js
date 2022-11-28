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
var ValidateSecurityProfileBehaviorsHeaders = /** @class */ (function (_super) {
    __extends(ValidateSecurityProfileBehaviorsHeaders, _super);
    function ValidateSecurityProfileBehaviorsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ValidateSecurityProfileBehaviorsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ValidateSecurityProfileBehaviorsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ValidateSecurityProfileBehaviorsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ValidateSecurityProfileBehaviorsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ValidateSecurityProfileBehaviorsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ValidateSecurityProfileBehaviorsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ValidateSecurityProfileBehaviorsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ValidateSecurityProfileBehaviorsHeaders;
}(SpeakeasyBase));
export { ValidateSecurityProfileBehaviorsHeaders };
var ValidateSecurityProfileBehaviorsRequestBody = /** @class */ (function (_super) {
    __extends(ValidateSecurityProfileBehaviorsRequestBody, _super);
    function ValidateSecurityProfileBehaviorsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=behaviors", elemType: shared.Behavior }),
        __metadata("design:type", Array)
    ], ValidateSecurityProfileBehaviorsRequestBody.prototype, "behaviors", void 0);
    return ValidateSecurityProfileBehaviorsRequestBody;
}(SpeakeasyBase));
export { ValidateSecurityProfileBehaviorsRequestBody };
var ValidateSecurityProfileBehaviorsRequest = /** @class */ (function (_super) {
    __extends(ValidateSecurityProfileBehaviorsRequest, _super);
    function ValidateSecurityProfileBehaviorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ValidateSecurityProfileBehaviorsHeaders)
    ], ValidateSecurityProfileBehaviorsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ValidateSecurityProfileBehaviorsRequestBody)
    ], ValidateSecurityProfileBehaviorsRequest.prototype, "request", void 0);
    return ValidateSecurityProfileBehaviorsRequest;
}(SpeakeasyBase));
export { ValidateSecurityProfileBehaviorsRequest };
var ValidateSecurityProfileBehaviorsResponse = /** @class */ (function (_super) {
    __extends(ValidateSecurityProfileBehaviorsResponse, _super);
    function ValidateSecurityProfileBehaviorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ValidateSecurityProfileBehaviorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ValidateSecurityProfileBehaviorsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ValidateSecurityProfileBehaviorsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ValidateSecurityProfileBehaviorsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ValidateSecurityProfileBehaviorsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidateSecurityProfileBehaviorsResponse)
    ], ValidateSecurityProfileBehaviorsResponse.prototype, "validateSecurityProfileBehaviorsResponse", void 0);
    return ValidateSecurityProfileBehaviorsResponse;
}(SpeakeasyBase));
export { ValidateSecurityProfileBehaviorsResponse };
