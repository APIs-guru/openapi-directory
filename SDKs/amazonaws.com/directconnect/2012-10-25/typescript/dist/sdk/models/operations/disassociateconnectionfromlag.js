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
export var DisassociateConnectionFromLagXAmzTargetEnum;
(function (DisassociateConnectionFromLagXAmzTargetEnum) {
    DisassociateConnectionFromLagXAmzTargetEnum["OvertureServiceDisassociateConnectionFromLag"] = "OvertureService.DisassociateConnectionFromLag";
})(DisassociateConnectionFromLagXAmzTargetEnum || (DisassociateConnectionFromLagXAmzTargetEnum = {}));
var DisassociateConnectionFromLagHeaders = /** @class */ (function (_super) {
    __extends(DisassociateConnectionFromLagHeaders, _super);
    function DisassociateConnectionFromLagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateConnectionFromLagHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateConnectionFromLagHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateConnectionFromLagHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateConnectionFromLagHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateConnectionFromLagHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateConnectionFromLagHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateConnectionFromLagHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DisassociateConnectionFromLagHeaders.prototype, "xAmzTarget", void 0);
    return DisassociateConnectionFromLagHeaders;
}(SpeakeasyBase));
export { DisassociateConnectionFromLagHeaders };
var DisassociateConnectionFromLagRequest = /** @class */ (function (_super) {
    __extends(DisassociateConnectionFromLagRequest, _super);
    function DisassociateConnectionFromLagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisassociateConnectionFromLagHeaders)
    ], DisassociateConnectionFromLagRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DisassociateConnectionFromLagRequest)
    ], DisassociateConnectionFromLagRequest.prototype, "request", void 0);
    return DisassociateConnectionFromLagRequest;
}(SpeakeasyBase));
export { DisassociateConnectionFromLagRequest };
var DisassociateConnectionFromLagResponse = /** @class */ (function (_super) {
    __extends(DisassociateConnectionFromLagResponse, _super);
    function DisassociateConnectionFromLagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Connection)
    ], DisassociateConnectionFromLagResponse.prototype, "connection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisassociateConnectionFromLagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateConnectionFromLagResponse.prototype, "directConnectClientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateConnectionFromLagResponse.prototype, "directConnectServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisassociateConnectionFromLagResponse.prototype, "statusCode", void 0);
    return DisassociateConnectionFromLagResponse;
}(SpeakeasyBase));
export { DisassociateConnectionFromLagResponse };
