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
export var ModifyEventSubscriptionXAmzTargetEnum;
(function (ModifyEventSubscriptionXAmzTargetEnum) {
    ModifyEventSubscriptionXAmzTargetEnum["AmazonDmSv20160101ModifyEventSubscription"] = "AmazonDMSv20160101.ModifyEventSubscription";
})(ModifyEventSubscriptionXAmzTargetEnum || (ModifyEventSubscriptionXAmzTargetEnum = {}));
var ModifyEventSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(ModifyEventSubscriptionHeaders, _super);
    function ModifyEventSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ModifyEventSubscriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ModifyEventSubscriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ModifyEventSubscriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ModifyEventSubscriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ModifyEventSubscriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ModifyEventSubscriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ModifyEventSubscriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ModifyEventSubscriptionHeaders.prototype, "xAmzTarget", void 0);
    return ModifyEventSubscriptionHeaders;
}(SpeakeasyBase));
export { ModifyEventSubscriptionHeaders };
var ModifyEventSubscriptionRequest = /** @class */ (function (_super) {
    __extends(ModifyEventSubscriptionRequest, _super);
    function ModifyEventSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ModifyEventSubscriptionHeaders)
    ], ModifyEventSubscriptionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyEventSubscriptionMessage)
    ], ModifyEventSubscriptionRequest.prototype, "request", void 0);
    return ModifyEventSubscriptionRequest;
}(SpeakeasyBase));
export { ModifyEventSubscriptionRequest };
var ModifyEventSubscriptionResponse = /** @class */ (function (_super) {
    __extends(ModifyEventSubscriptionResponse, _super);
    function ModifyEventSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ModifyEventSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ModifyEventSubscriptionResponse.prototype, "kmsAccessDeniedFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ModifyEventSubscriptionResponse.prototype, "kmsDisabledFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ModifyEventSubscriptionResponse.prototype, "kmsInvalidStateFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ModifyEventSubscriptionResponse.prototype, "kmsNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ModifyEventSubscriptionResponse.prototype, "kmsThrottlingFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ModifyEventSubscriptionResponse)
    ], ModifyEventSubscriptionResponse.prototype, "modifyEventSubscriptionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ModifyEventSubscriptionResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ModifyEventSubscriptionResponse.prototype, "resourceQuotaExceededFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ModifyEventSubscriptionResponse.prototype, "snsInvalidTopicFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ModifyEventSubscriptionResponse.prototype, "snsNoAuthorizationFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ModifyEventSubscriptionResponse.prototype, "statusCode", void 0);
    return ModifyEventSubscriptionResponse;
}(SpeakeasyBase));
export { ModifyEventSubscriptionResponse };
