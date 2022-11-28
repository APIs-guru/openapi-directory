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
export var CreateCustomRoutingAcceleratorXAmzTargetEnum;
(function (CreateCustomRoutingAcceleratorXAmzTargetEnum) {
    CreateCustomRoutingAcceleratorXAmzTargetEnum["GlobalAcceleratorV20180706CreateCustomRoutingAccelerator"] = "GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator";
})(CreateCustomRoutingAcceleratorXAmzTargetEnum || (CreateCustomRoutingAcceleratorXAmzTargetEnum = {}));
var CreateCustomRoutingAcceleratorHeaders = /** @class */ (function (_super) {
    __extends(CreateCustomRoutingAcceleratorHeaders, _super);
    function CreateCustomRoutingAcceleratorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingAcceleratorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingAcceleratorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingAcceleratorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingAcceleratorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingAcceleratorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingAcceleratorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingAcceleratorHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingAcceleratorHeaders.prototype, "xAmzTarget", void 0);
    return CreateCustomRoutingAcceleratorHeaders;
}(SpeakeasyBase));
export { CreateCustomRoutingAcceleratorHeaders };
var CreateCustomRoutingAcceleratorRequest = /** @class */ (function (_super) {
    __extends(CreateCustomRoutingAcceleratorRequest, _super);
    function CreateCustomRoutingAcceleratorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomRoutingAcceleratorHeaders)
    ], CreateCustomRoutingAcceleratorRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateCustomRoutingAcceleratorRequest)
    ], CreateCustomRoutingAcceleratorRequest.prototype, "request", void 0);
    return CreateCustomRoutingAcceleratorRequest;
}(SpeakeasyBase));
export { CreateCustomRoutingAcceleratorRequest };
var CreateCustomRoutingAcceleratorResponse = /** @class */ (function (_super) {
    __extends(CreateCustomRoutingAcceleratorResponse, _super);
    function CreateCustomRoutingAcceleratorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingAcceleratorResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCustomRoutingAcceleratorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateCustomRoutingAcceleratorResponse)
    ], CreateCustomRoutingAcceleratorResponse.prototype, "createCustomRoutingAcceleratorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingAcceleratorResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingAcceleratorResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingAcceleratorResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCustomRoutingAcceleratorResponse.prototype, "statusCode", void 0);
    return CreateCustomRoutingAcceleratorResponse;
}(SpeakeasyBase));
export { CreateCustomRoutingAcceleratorResponse };
