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
export var DeleteVpcPeeringAuthorizationXAmzTargetEnum;
(function (DeleteVpcPeeringAuthorizationXAmzTargetEnum) {
    DeleteVpcPeeringAuthorizationXAmzTargetEnum["GameLiftDeleteVpcPeeringAuthorization"] = "GameLift.DeleteVpcPeeringAuthorization";
})(DeleteVpcPeeringAuthorizationXAmzTargetEnum || (DeleteVpcPeeringAuthorizationXAmzTargetEnum = {}));
var DeleteVpcPeeringAuthorizationHeaders = /** @class */ (function (_super) {
    __extends(DeleteVpcPeeringAuthorizationHeaders, _super);
    function DeleteVpcPeeringAuthorizationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteVpcPeeringAuthorizationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteVpcPeeringAuthorizationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteVpcPeeringAuthorizationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteVpcPeeringAuthorizationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteVpcPeeringAuthorizationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteVpcPeeringAuthorizationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteVpcPeeringAuthorizationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteVpcPeeringAuthorizationHeaders.prototype, "xAmzTarget", void 0);
    return DeleteVpcPeeringAuthorizationHeaders;
}(SpeakeasyBase));
export { DeleteVpcPeeringAuthorizationHeaders };
var DeleteVpcPeeringAuthorizationRequest = /** @class */ (function (_super) {
    __extends(DeleteVpcPeeringAuthorizationRequest, _super);
    function DeleteVpcPeeringAuthorizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVpcPeeringAuthorizationHeaders)
    ], DeleteVpcPeeringAuthorizationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteVpcPeeringAuthorizationInput)
    ], DeleteVpcPeeringAuthorizationRequest.prototype, "request", void 0);
    return DeleteVpcPeeringAuthorizationRequest;
}(SpeakeasyBase));
export { DeleteVpcPeeringAuthorizationRequest };
var DeleteVpcPeeringAuthorizationResponse = /** @class */ (function (_super) {
    __extends(DeleteVpcPeeringAuthorizationResponse, _super);
    function DeleteVpcPeeringAuthorizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteVpcPeeringAuthorizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteVpcPeeringAuthorizationResponse.prototype, "deleteVpcPeeringAuthorizationOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteVpcPeeringAuthorizationResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteVpcPeeringAuthorizationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteVpcPeeringAuthorizationResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteVpcPeeringAuthorizationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteVpcPeeringAuthorizationResponse.prototype, "unauthorizedException", void 0);
    return DeleteVpcPeeringAuthorizationResponse;
}(SpeakeasyBase));
export { DeleteVpcPeeringAuthorizationResponse };
