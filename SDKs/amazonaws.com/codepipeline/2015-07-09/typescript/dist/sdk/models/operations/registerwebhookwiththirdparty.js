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
export var RegisterWebhookWithThirdPartyXAmzTargetEnum;
(function (RegisterWebhookWithThirdPartyXAmzTargetEnum) {
    RegisterWebhookWithThirdPartyXAmzTargetEnum["CodePipeline20150709RegisterWebhookWithThirdParty"] = "CodePipeline_20150709.RegisterWebhookWithThirdParty";
})(RegisterWebhookWithThirdPartyXAmzTargetEnum || (RegisterWebhookWithThirdPartyXAmzTargetEnum = {}));
var RegisterWebhookWithThirdPartyHeaders = /** @class */ (function (_super) {
    __extends(RegisterWebhookWithThirdPartyHeaders, _super);
    function RegisterWebhookWithThirdPartyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RegisterWebhookWithThirdPartyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RegisterWebhookWithThirdPartyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RegisterWebhookWithThirdPartyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RegisterWebhookWithThirdPartyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RegisterWebhookWithThirdPartyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RegisterWebhookWithThirdPartyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RegisterWebhookWithThirdPartyHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], RegisterWebhookWithThirdPartyHeaders.prototype, "xAmzTarget", void 0);
    return RegisterWebhookWithThirdPartyHeaders;
}(SpeakeasyBase));
export { RegisterWebhookWithThirdPartyHeaders };
var RegisterWebhookWithThirdPartyRequest = /** @class */ (function (_super) {
    __extends(RegisterWebhookWithThirdPartyRequest, _super);
    function RegisterWebhookWithThirdPartyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegisterWebhookWithThirdPartyHeaders)
    ], RegisterWebhookWithThirdPartyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RegisterWebhookWithThirdPartyInput)
    ], RegisterWebhookWithThirdPartyRequest.prototype, "request", void 0);
    return RegisterWebhookWithThirdPartyRequest;
}(SpeakeasyBase));
export { RegisterWebhookWithThirdPartyRequest };
var RegisterWebhookWithThirdPartyResponse = /** @class */ (function (_super) {
    __extends(RegisterWebhookWithThirdPartyResponse, _super);
    function RegisterWebhookWithThirdPartyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RegisterWebhookWithThirdPartyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RegisterWebhookWithThirdPartyResponse.prototype, "registerWebhookWithThirdPartyOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RegisterWebhookWithThirdPartyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterWebhookWithThirdPartyResponse.prototype, "validationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterWebhookWithThirdPartyResponse.prototype, "webhookNotFoundException", void 0);
    return RegisterWebhookWithThirdPartyResponse;
}(SpeakeasyBase));
export { RegisterWebhookWithThirdPartyResponse };
