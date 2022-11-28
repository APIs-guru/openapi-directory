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
export var ConfirmTransitVirtualInterfaceXAmzTargetEnum;
(function (ConfirmTransitVirtualInterfaceXAmzTargetEnum) {
    ConfirmTransitVirtualInterfaceXAmzTargetEnum["OvertureServiceConfirmTransitVirtualInterface"] = "OvertureService.ConfirmTransitVirtualInterface";
})(ConfirmTransitVirtualInterfaceXAmzTargetEnum || (ConfirmTransitVirtualInterfaceXAmzTargetEnum = {}));
var ConfirmTransitVirtualInterfaceHeaders = /** @class */ (function (_super) {
    __extends(ConfirmTransitVirtualInterfaceHeaders, _super);
    function ConfirmTransitVirtualInterfaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ConfirmTransitVirtualInterfaceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ConfirmTransitVirtualInterfaceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ConfirmTransitVirtualInterfaceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ConfirmTransitVirtualInterfaceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ConfirmTransitVirtualInterfaceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ConfirmTransitVirtualInterfaceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ConfirmTransitVirtualInterfaceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ConfirmTransitVirtualInterfaceHeaders.prototype, "xAmzTarget", void 0);
    return ConfirmTransitVirtualInterfaceHeaders;
}(SpeakeasyBase));
export { ConfirmTransitVirtualInterfaceHeaders };
var ConfirmTransitVirtualInterfaceRequest = /** @class */ (function (_super) {
    __extends(ConfirmTransitVirtualInterfaceRequest, _super);
    function ConfirmTransitVirtualInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfirmTransitVirtualInterfaceHeaders)
    ], ConfirmTransitVirtualInterfaceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConfirmTransitVirtualInterfaceRequest)
    ], ConfirmTransitVirtualInterfaceRequest.prototype, "request", void 0);
    return ConfirmTransitVirtualInterfaceRequest;
}(SpeakeasyBase));
export { ConfirmTransitVirtualInterfaceRequest };
var ConfirmTransitVirtualInterfaceResponse = /** @class */ (function (_super) {
    __extends(ConfirmTransitVirtualInterfaceResponse, _super);
    function ConfirmTransitVirtualInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConfirmTransitVirtualInterfaceResponse)
    ], ConfirmTransitVirtualInterfaceResponse.prototype, "confirmTransitVirtualInterfaceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmTransitVirtualInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ConfirmTransitVirtualInterfaceResponse.prototype, "directConnectClientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ConfirmTransitVirtualInterfaceResponse.prototype, "directConnectServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfirmTransitVirtualInterfaceResponse.prototype, "statusCode", void 0);
    return ConfirmTransitVirtualInterfaceResponse;
}(SpeakeasyBase));
export { ConfirmTransitVirtualInterfaceResponse };
