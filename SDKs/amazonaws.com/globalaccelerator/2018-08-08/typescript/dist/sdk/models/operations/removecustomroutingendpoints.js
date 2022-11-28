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
export var RemoveCustomRoutingEndpointsXAmzTargetEnum;
(function (RemoveCustomRoutingEndpointsXAmzTargetEnum) {
    RemoveCustomRoutingEndpointsXAmzTargetEnum["GlobalAcceleratorV20180706RemoveCustomRoutingEndpoints"] = "GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints";
})(RemoveCustomRoutingEndpointsXAmzTargetEnum || (RemoveCustomRoutingEndpointsXAmzTargetEnum = {}));
var RemoveCustomRoutingEndpointsHeaders = /** @class */ (function (_super) {
    __extends(RemoveCustomRoutingEndpointsHeaders, _super);
    function RemoveCustomRoutingEndpointsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RemoveCustomRoutingEndpointsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RemoveCustomRoutingEndpointsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RemoveCustomRoutingEndpointsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RemoveCustomRoutingEndpointsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RemoveCustomRoutingEndpointsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RemoveCustomRoutingEndpointsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RemoveCustomRoutingEndpointsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], RemoveCustomRoutingEndpointsHeaders.prototype, "xAmzTarget", void 0);
    return RemoveCustomRoutingEndpointsHeaders;
}(SpeakeasyBase));
export { RemoveCustomRoutingEndpointsHeaders };
var RemoveCustomRoutingEndpointsRequest = /** @class */ (function (_super) {
    __extends(RemoveCustomRoutingEndpointsRequest, _super);
    function RemoveCustomRoutingEndpointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveCustomRoutingEndpointsHeaders)
    ], RemoveCustomRoutingEndpointsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveCustomRoutingEndpointsRequest)
    ], RemoveCustomRoutingEndpointsRequest.prototype, "request", void 0);
    return RemoveCustomRoutingEndpointsRequest;
}(SpeakeasyBase));
export { RemoveCustomRoutingEndpointsRequest };
var RemoveCustomRoutingEndpointsResponse = /** @class */ (function (_super) {
    __extends(RemoveCustomRoutingEndpointsResponse, _super);
    function RemoveCustomRoutingEndpointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveCustomRoutingEndpointsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveCustomRoutingEndpointsResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveCustomRoutingEndpointsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveCustomRoutingEndpointsResponse.prototype, "endpointGroupNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveCustomRoutingEndpointsResponse.prototype, "endpointNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveCustomRoutingEndpointsResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveCustomRoutingEndpointsResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveCustomRoutingEndpointsResponse.prototype, "statusCode", void 0);
    return RemoveCustomRoutingEndpointsResponse;
}(SpeakeasyBase));
export { RemoveCustomRoutingEndpointsResponse };
