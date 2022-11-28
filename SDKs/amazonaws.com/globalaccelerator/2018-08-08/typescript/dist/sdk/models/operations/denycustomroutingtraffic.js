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
export var DenyCustomRoutingTrafficXAmzTargetEnum;
(function (DenyCustomRoutingTrafficXAmzTargetEnum) {
    DenyCustomRoutingTrafficXAmzTargetEnum["GlobalAcceleratorV20180706DenyCustomRoutingTraffic"] = "GlobalAccelerator_V20180706.DenyCustomRoutingTraffic";
})(DenyCustomRoutingTrafficXAmzTargetEnum || (DenyCustomRoutingTrafficXAmzTargetEnum = {}));
var DenyCustomRoutingTrafficHeaders = /** @class */ (function (_super) {
    __extends(DenyCustomRoutingTrafficHeaders, _super);
    function DenyCustomRoutingTrafficHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DenyCustomRoutingTrafficHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DenyCustomRoutingTrafficHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DenyCustomRoutingTrafficHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DenyCustomRoutingTrafficHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DenyCustomRoutingTrafficHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DenyCustomRoutingTrafficHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DenyCustomRoutingTrafficHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DenyCustomRoutingTrafficHeaders.prototype, "xAmzTarget", void 0);
    return DenyCustomRoutingTrafficHeaders;
}(SpeakeasyBase));
export { DenyCustomRoutingTrafficHeaders };
var DenyCustomRoutingTrafficRequest = /** @class */ (function (_super) {
    __extends(DenyCustomRoutingTrafficRequest, _super);
    function DenyCustomRoutingTrafficRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DenyCustomRoutingTrafficHeaders)
    ], DenyCustomRoutingTrafficRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DenyCustomRoutingTrafficRequest)
    ], DenyCustomRoutingTrafficRequest.prototype, "request", void 0);
    return DenyCustomRoutingTrafficRequest;
}(SpeakeasyBase));
export { DenyCustomRoutingTrafficRequest };
var DenyCustomRoutingTrafficResponse = /** @class */ (function (_super) {
    __extends(DenyCustomRoutingTrafficResponse, _super);
    function DenyCustomRoutingTrafficResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DenyCustomRoutingTrafficResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DenyCustomRoutingTrafficResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DenyCustomRoutingTrafficResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DenyCustomRoutingTrafficResponse.prototype, "statusCode", void 0);
    return DenyCustomRoutingTrafficResponse;
}(SpeakeasyBase));
export { DenyCustomRoutingTrafficResponse };
