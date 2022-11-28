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
export var DeleteDirectConnectGatewayXAmzTargetEnum;
(function (DeleteDirectConnectGatewayXAmzTargetEnum) {
    DeleteDirectConnectGatewayXAmzTargetEnum["OvertureServiceDeleteDirectConnectGateway"] = "OvertureService.DeleteDirectConnectGateway";
})(DeleteDirectConnectGatewayXAmzTargetEnum || (DeleteDirectConnectGatewayXAmzTargetEnum = {}));
var DeleteDirectConnectGatewayHeaders = /** @class */ (function (_super) {
    __extends(DeleteDirectConnectGatewayHeaders, _super);
    function DeleteDirectConnectGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteDirectConnectGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteDirectConnectGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteDirectConnectGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteDirectConnectGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteDirectConnectGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteDirectConnectGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteDirectConnectGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteDirectConnectGatewayHeaders.prototype, "xAmzTarget", void 0);
    return DeleteDirectConnectGatewayHeaders;
}(SpeakeasyBase));
export { DeleteDirectConnectGatewayHeaders };
var DeleteDirectConnectGatewayRequest = /** @class */ (function (_super) {
    __extends(DeleteDirectConnectGatewayRequest, _super);
    function DeleteDirectConnectGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDirectConnectGatewayHeaders)
    ], DeleteDirectConnectGatewayRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteDirectConnectGatewayRequest)
    ], DeleteDirectConnectGatewayRequest.prototype, "request", void 0);
    return DeleteDirectConnectGatewayRequest;
}(SpeakeasyBase));
export { DeleteDirectConnectGatewayRequest };
var DeleteDirectConnectGatewayResponse = /** @class */ (function (_super) {
    __extends(DeleteDirectConnectGatewayResponse, _super);
    function DeleteDirectConnectGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDirectConnectGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteDirectConnectGatewayResult)
    ], DeleteDirectConnectGatewayResponse.prototype, "deleteDirectConnectGatewayResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteDirectConnectGatewayResponse.prototype, "directConnectClientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteDirectConnectGatewayResponse.prototype, "directConnectServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDirectConnectGatewayResponse.prototype, "statusCode", void 0);
    return DeleteDirectConnectGatewayResponse;
}(SpeakeasyBase));
export { DeleteDirectConnectGatewayResponse };
