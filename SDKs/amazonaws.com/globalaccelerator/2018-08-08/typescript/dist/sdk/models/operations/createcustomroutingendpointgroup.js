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
export var CreateCustomRoutingEndpointGroupXAmzTargetEnum;
(function (CreateCustomRoutingEndpointGroupXAmzTargetEnum) {
    CreateCustomRoutingEndpointGroupXAmzTargetEnum["GlobalAcceleratorV20180706CreateCustomRoutingEndpointGroup"] = "GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup";
})(CreateCustomRoutingEndpointGroupXAmzTargetEnum || (CreateCustomRoutingEndpointGroupXAmzTargetEnum = {}));
var CreateCustomRoutingEndpointGroupHeaders = /** @class */ (function (_super) {
    __extends(CreateCustomRoutingEndpointGroupHeaders, _super);
    function CreateCustomRoutingEndpointGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingEndpointGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingEndpointGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingEndpointGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingEndpointGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingEndpointGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingEndpointGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingEndpointGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateCustomRoutingEndpointGroupHeaders.prototype, "xAmzTarget", void 0);
    return CreateCustomRoutingEndpointGroupHeaders;
}(SpeakeasyBase));
export { CreateCustomRoutingEndpointGroupHeaders };
var CreateCustomRoutingEndpointGroupRequest = /** @class */ (function (_super) {
    __extends(CreateCustomRoutingEndpointGroupRequest, _super);
    function CreateCustomRoutingEndpointGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomRoutingEndpointGroupHeaders)
    ], CreateCustomRoutingEndpointGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateCustomRoutingEndpointGroupRequest)
    ], CreateCustomRoutingEndpointGroupRequest.prototype, "request", void 0);
    return CreateCustomRoutingEndpointGroupRequest;
}(SpeakeasyBase));
export { CreateCustomRoutingEndpointGroupRequest };
var CreateCustomRoutingEndpointGroupResponse = /** @class */ (function (_super) {
    __extends(CreateCustomRoutingEndpointGroupResponse, _super);
    function CreateCustomRoutingEndpointGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingEndpointGroupResponse.prototype, "acceleratorNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingEndpointGroupResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCustomRoutingEndpointGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateCustomRoutingEndpointGroupResponse)
    ], CreateCustomRoutingEndpointGroupResponse.prototype, "createCustomRoutingEndpointGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingEndpointGroupResponse.prototype, "endpointGroupAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingEndpointGroupResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingEndpointGroupResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingEndpointGroupResponse.prototype, "invalidPortRangeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingEndpointGroupResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomRoutingEndpointGroupResponse.prototype, "listenerNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCustomRoutingEndpointGroupResponse.prototype, "statusCode", void 0);
    return CreateCustomRoutingEndpointGroupResponse;
}(SpeakeasyBase));
export { CreateCustomRoutingEndpointGroupResponse };
