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
export var DescribeDirectConnectGatewaysXAmzTargetEnum;
(function (DescribeDirectConnectGatewaysXAmzTargetEnum) {
    DescribeDirectConnectGatewaysXAmzTargetEnum["OvertureServiceDescribeDirectConnectGateways"] = "OvertureService.DescribeDirectConnectGateways";
})(DescribeDirectConnectGatewaysXAmzTargetEnum || (DescribeDirectConnectGatewaysXAmzTargetEnum = {}));
var DescribeDirectConnectGatewaysHeaders = /** @class */ (function (_super) {
    __extends(DescribeDirectConnectGatewaysHeaders, _super);
    function DescribeDirectConnectGatewaysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeDirectConnectGatewaysHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeDirectConnectGatewaysHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeDirectConnectGatewaysHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeDirectConnectGatewaysHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeDirectConnectGatewaysHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeDirectConnectGatewaysHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeDirectConnectGatewaysHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeDirectConnectGatewaysHeaders.prototype, "xAmzTarget", void 0);
    return DescribeDirectConnectGatewaysHeaders;
}(SpeakeasyBase));
export { DescribeDirectConnectGatewaysHeaders };
var DescribeDirectConnectGatewaysRequest = /** @class */ (function (_super) {
    __extends(DescribeDirectConnectGatewaysRequest, _super);
    function DescribeDirectConnectGatewaysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeDirectConnectGatewaysHeaders)
    ], DescribeDirectConnectGatewaysRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeDirectConnectGatewaysRequest)
    ], DescribeDirectConnectGatewaysRequest.prototype, "request", void 0);
    return DescribeDirectConnectGatewaysRequest;
}(SpeakeasyBase));
export { DescribeDirectConnectGatewaysRequest };
var DescribeDirectConnectGatewaysResponse = /** @class */ (function (_super) {
    __extends(DescribeDirectConnectGatewaysResponse, _super);
    function DescribeDirectConnectGatewaysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeDirectConnectGatewaysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeDirectConnectGatewaysResult)
    ], DescribeDirectConnectGatewaysResponse.prototype, "describeDirectConnectGatewaysResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDirectConnectGatewaysResponse.prototype, "directConnectClientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDirectConnectGatewaysResponse.prototype, "directConnectServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeDirectConnectGatewaysResponse.prototype, "statusCode", void 0);
    return DescribeDirectConnectGatewaysResponse;
}(SpeakeasyBase));
export { DescribeDirectConnectGatewaysResponse };
