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
export var DeprovisionByoipCidrXAmzTargetEnum;
(function (DeprovisionByoipCidrXAmzTargetEnum) {
    DeprovisionByoipCidrXAmzTargetEnum["GlobalAcceleratorV20180706DeprovisionByoipCidr"] = "GlobalAccelerator_V20180706.DeprovisionByoipCidr";
})(DeprovisionByoipCidrXAmzTargetEnum || (DeprovisionByoipCidrXAmzTargetEnum = {}));
var DeprovisionByoipCidrHeaders = /** @class */ (function (_super) {
    __extends(DeprovisionByoipCidrHeaders, _super);
    function DeprovisionByoipCidrHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeprovisionByoipCidrHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeprovisionByoipCidrHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeprovisionByoipCidrHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeprovisionByoipCidrHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeprovisionByoipCidrHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeprovisionByoipCidrHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeprovisionByoipCidrHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeprovisionByoipCidrHeaders.prototype, "xAmzTarget", void 0);
    return DeprovisionByoipCidrHeaders;
}(SpeakeasyBase));
export { DeprovisionByoipCidrHeaders };
var DeprovisionByoipCidrRequest = /** @class */ (function (_super) {
    __extends(DeprovisionByoipCidrRequest, _super);
    function DeprovisionByoipCidrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeprovisionByoipCidrHeaders)
    ], DeprovisionByoipCidrRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeprovisionByoipCidrRequest)
    ], DeprovisionByoipCidrRequest.prototype, "request", void 0);
    return DeprovisionByoipCidrRequest;
}(SpeakeasyBase));
export { DeprovisionByoipCidrRequest };
var DeprovisionByoipCidrResponse = /** @class */ (function (_super) {
    __extends(DeprovisionByoipCidrResponse, _super);
    function DeprovisionByoipCidrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeprovisionByoipCidrResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeprovisionByoipCidrResponse.prototype, "byoipCidrNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeprovisionByoipCidrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeprovisionByoipCidrResponse)
    ], DeprovisionByoipCidrResponse.prototype, "deprovisionByoipCidrResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeprovisionByoipCidrResponse.prototype, "incorrectCidrStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeprovisionByoipCidrResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeprovisionByoipCidrResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeprovisionByoipCidrResponse.prototype, "statusCode", void 0);
    return DeprovisionByoipCidrResponse;
}(SpeakeasyBase));
export { DeprovisionByoipCidrResponse };
