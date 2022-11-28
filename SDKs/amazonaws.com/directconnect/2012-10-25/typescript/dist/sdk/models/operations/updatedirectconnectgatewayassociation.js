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
export var UpdateDirectConnectGatewayAssociationXAmzTargetEnum;
(function (UpdateDirectConnectGatewayAssociationXAmzTargetEnum) {
    UpdateDirectConnectGatewayAssociationXAmzTargetEnum["OvertureServiceUpdateDirectConnectGatewayAssociation"] = "OvertureService.UpdateDirectConnectGatewayAssociation";
})(UpdateDirectConnectGatewayAssociationXAmzTargetEnum || (UpdateDirectConnectGatewayAssociationXAmzTargetEnum = {}));
var UpdateDirectConnectGatewayAssociationHeaders = /** @class */ (function (_super) {
    __extends(UpdateDirectConnectGatewayAssociationHeaders, _super);
    function UpdateDirectConnectGatewayAssociationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDirectConnectGatewayAssociationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDirectConnectGatewayAssociationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDirectConnectGatewayAssociationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDirectConnectGatewayAssociationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDirectConnectGatewayAssociationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDirectConnectGatewayAssociationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDirectConnectGatewayAssociationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateDirectConnectGatewayAssociationHeaders.prototype, "xAmzTarget", void 0);
    return UpdateDirectConnectGatewayAssociationHeaders;
}(SpeakeasyBase));
export { UpdateDirectConnectGatewayAssociationHeaders };
var UpdateDirectConnectGatewayAssociationRequest = /** @class */ (function (_super) {
    __extends(UpdateDirectConnectGatewayAssociationRequest, _super);
    function UpdateDirectConnectGatewayAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDirectConnectGatewayAssociationHeaders)
    ], UpdateDirectConnectGatewayAssociationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateDirectConnectGatewayAssociationRequest)
    ], UpdateDirectConnectGatewayAssociationRequest.prototype, "request", void 0);
    return UpdateDirectConnectGatewayAssociationRequest;
}(SpeakeasyBase));
export { UpdateDirectConnectGatewayAssociationRequest };
var UpdateDirectConnectGatewayAssociationResponse = /** @class */ (function (_super) {
    __extends(UpdateDirectConnectGatewayAssociationResponse, _super);
    function UpdateDirectConnectGatewayAssociationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDirectConnectGatewayAssociationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDirectConnectGatewayAssociationResponse.prototype, "directConnectClientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDirectConnectGatewayAssociationResponse.prototype, "directConnectServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDirectConnectGatewayAssociationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateDirectConnectGatewayAssociationResult)
    ], UpdateDirectConnectGatewayAssociationResponse.prototype, "updateDirectConnectGatewayAssociationResult", void 0);
    return UpdateDirectConnectGatewayAssociationResponse;
}(SpeakeasyBase));
export { UpdateDirectConnectGatewayAssociationResponse };
