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
export var UpdateCustomRoutingListenerXAmzTargetEnum;
(function (UpdateCustomRoutingListenerXAmzTargetEnum) {
    UpdateCustomRoutingListenerXAmzTargetEnum["GlobalAcceleratorV20180706UpdateCustomRoutingListener"] = "GlobalAccelerator_V20180706.UpdateCustomRoutingListener";
})(UpdateCustomRoutingListenerXAmzTargetEnum || (UpdateCustomRoutingListenerXAmzTargetEnum = {}));
var UpdateCustomRoutingListenerHeaders = /** @class */ (function (_super) {
    __extends(UpdateCustomRoutingListenerHeaders, _super);
    function UpdateCustomRoutingListenerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateCustomRoutingListenerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateCustomRoutingListenerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateCustomRoutingListenerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateCustomRoutingListenerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateCustomRoutingListenerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateCustomRoutingListenerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateCustomRoutingListenerHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateCustomRoutingListenerHeaders.prototype, "xAmzTarget", void 0);
    return UpdateCustomRoutingListenerHeaders;
}(SpeakeasyBase));
export { UpdateCustomRoutingListenerHeaders };
var UpdateCustomRoutingListenerRequest = /** @class */ (function (_super) {
    __extends(UpdateCustomRoutingListenerRequest, _super);
    function UpdateCustomRoutingListenerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCustomRoutingListenerHeaders)
    ], UpdateCustomRoutingListenerRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateCustomRoutingListenerRequest)
    ], UpdateCustomRoutingListenerRequest.prototype, "request", void 0);
    return UpdateCustomRoutingListenerRequest;
}(SpeakeasyBase));
export { UpdateCustomRoutingListenerRequest };
var UpdateCustomRoutingListenerResponse = /** @class */ (function (_super) {
    __extends(UpdateCustomRoutingListenerResponse, _super);
    function UpdateCustomRoutingListenerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCustomRoutingListenerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCustomRoutingListenerResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCustomRoutingListenerResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCustomRoutingListenerResponse.prototype, "invalidPortRangeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCustomRoutingListenerResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCustomRoutingListenerResponse.prototype, "listenerNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCustomRoutingListenerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateCustomRoutingListenerResponse)
    ], UpdateCustomRoutingListenerResponse.prototype, "updateCustomRoutingListenerResponse", void 0);
    return UpdateCustomRoutingListenerResponse;
}(SpeakeasyBase));
export { UpdateCustomRoutingListenerResponse };
