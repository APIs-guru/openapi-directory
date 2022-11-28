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
export var AllocatePublicVirtualInterfaceXAmzTargetEnum;
(function (AllocatePublicVirtualInterfaceXAmzTargetEnum) {
    AllocatePublicVirtualInterfaceXAmzTargetEnum["OvertureServiceAllocatePublicVirtualInterface"] = "OvertureService.AllocatePublicVirtualInterface";
})(AllocatePublicVirtualInterfaceXAmzTargetEnum || (AllocatePublicVirtualInterfaceXAmzTargetEnum = {}));
var AllocatePublicVirtualInterfaceHeaders = /** @class */ (function (_super) {
    __extends(AllocatePublicVirtualInterfaceHeaders, _super);
    function AllocatePublicVirtualInterfaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AllocatePublicVirtualInterfaceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AllocatePublicVirtualInterfaceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AllocatePublicVirtualInterfaceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AllocatePublicVirtualInterfaceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AllocatePublicVirtualInterfaceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AllocatePublicVirtualInterfaceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AllocatePublicVirtualInterfaceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AllocatePublicVirtualInterfaceHeaders.prototype, "xAmzTarget", void 0);
    return AllocatePublicVirtualInterfaceHeaders;
}(SpeakeasyBase));
export { AllocatePublicVirtualInterfaceHeaders };
var AllocatePublicVirtualInterfaceRequest = /** @class */ (function (_super) {
    __extends(AllocatePublicVirtualInterfaceRequest, _super);
    function AllocatePublicVirtualInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AllocatePublicVirtualInterfaceHeaders)
    ], AllocatePublicVirtualInterfaceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AllocatePublicVirtualInterfaceRequest)
    ], AllocatePublicVirtualInterfaceRequest.prototype, "request", void 0);
    return AllocatePublicVirtualInterfaceRequest;
}(SpeakeasyBase));
export { AllocatePublicVirtualInterfaceRequest };
var AllocatePublicVirtualInterfaceResponse = /** @class */ (function (_super) {
    __extends(AllocatePublicVirtualInterfaceResponse, _super);
    function AllocatePublicVirtualInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AllocatePublicVirtualInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AllocatePublicVirtualInterfaceResponse.prototype, "directConnectClientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AllocatePublicVirtualInterfaceResponse.prototype, "directConnectServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AllocatePublicVirtualInterfaceResponse.prototype, "duplicateTagKeysException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AllocatePublicVirtualInterfaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AllocatePublicVirtualInterfaceResponse.prototype, "tooManyTagsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VirtualInterface)
    ], AllocatePublicVirtualInterfaceResponse.prototype, "virtualInterface", void 0);
    return AllocatePublicVirtualInterfaceResponse;
}(SpeakeasyBase));
export { AllocatePublicVirtualInterfaceResponse };
