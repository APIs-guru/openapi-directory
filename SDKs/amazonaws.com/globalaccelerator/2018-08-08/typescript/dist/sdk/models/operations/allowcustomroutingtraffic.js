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
export var AllowCustomRoutingTrafficXAmzTargetEnum;
(function (AllowCustomRoutingTrafficXAmzTargetEnum) {
    AllowCustomRoutingTrafficXAmzTargetEnum["GlobalAcceleratorV20180706AllowCustomRoutingTraffic"] = "GlobalAccelerator_V20180706.AllowCustomRoutingTraffic";
})(AllowCustomRoutingTrafficXAmzTargetEnum || (AllowCustomRoutingTrafficXAmzTargetEnum = {}));
var AllowCustomRoutingTrafficHeaders = /** @class */ (function (_super) {
    __extends(AllowCustomRoutingTrafficHeaders, _super);
    function AllowCustomRoutingTrafficHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AllowCustomRoutingTrafficHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AllowCustomRoutingTrafficHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AllowCustomRoutingTrafficHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AllowCustomRoutingTrafficHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AllowCustomRoutingTrafficHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AllowCustomRoutingTrafficHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AllowCustomRoutingTrafficHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AllowCustomRoutingTrafficHeaders.prototype, "xAmzTarget", void 0);
    return AllowCustomRoutingTrafficHeaders;
}(SpeakeasyBase));
export { AllowCustomRoutingTrafficHeaders };
var AllowCustomRoutingTrafficRequest = /** @class */ (function (_super) {
    __extends(AllowCustomRoutingTrafficRequest, _super);
    function AllowCustomRoutingTrafficRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AllowCustomRoutingTrafficHeaders)
    ], AllowCustomRoutingTrafficRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AllowCustomRoutingTrafficRequest)
    ], AllowCustomRoutingTrafficRequest.prototype, "request", void 0);
    return AllowCustomRoutingTrafficRequest;
}(SpeakeasyBase));
export { AllowCustomRoutingTrafficRequest };
var AllowCustomRoutingTrafficResponse = /** @class */ (function (_super) {
    __extends(AllowCustomRoutingTrafficResponse, _super);
    function AllowCustomRoutingTrafficResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AllowCustomRoutingTrafficResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AllowCustomRoutingTrafficResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AllowCustomRoutingTrafficResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AllowCustomRoutingTrafficResponse.prototype, "statusCode", void 0);
    return AllowCustomRoutingTrafficResponse;
}(SpeakeasyBase));
export { AllowCustomRoutingTrafficResponse };
