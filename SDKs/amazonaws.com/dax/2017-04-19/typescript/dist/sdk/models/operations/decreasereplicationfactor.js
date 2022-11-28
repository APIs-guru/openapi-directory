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
export var DecreaseReplicationFactorXAmzTargetEnum;
(function (DecreaseReplicationFactorXAmzTargetEnum) {
    DecreaseReplicationFactorXAmzTargetEnum["AmazonDaxv3DecreaseReplicationFactor"] = "AmazonDAXV3.DecreaseReplicationFactor";
})(DecreaseReplicationFactorXAmzTargetEnum || (DecreaseReplicationFactorXAmzTargetEnum = {}));
var DecreaseReplicationFactorHeaders = /** @class */ (function (_super) {
    __extends(DecreaseReplicationFactorHeaders, _super);
    function DecreaseReplicationFactorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DecreaseReplicationFactorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DecreaseReplicationFactorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DecreaseReplicationFactorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DecreaseReplicationFactorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DecreaseReplicationFactorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DecreaseReplicationFactorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DecreaseReplicationFactorHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DecreaseReplicationFactorHeaders.prototype, "xAmzTarget", void 0);
    return DecreaseReplicationFactorHeaders;
}(SpeakeasyBase));
export { DecreaseReplicationFactorHeaders };
var DecreaseReplicationFactorRequest = /** @class */ (function (_super) {
    __extends(DecreaseReplicationFactorRequest, _super);
    function DecreaseReplicationFactorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DecreaseReplicationFactorHeaders)
    ], DecreaseReplicationFactorRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DecreaseReplicationFactorRequest)
    ], DecreaseReplicationFactorRequest.prototype, "request", void 0);
    return DecreaseReplicationFactorRequest;
}(SpeakeasyBase));
export { DecreaseReplicationFactorRequest };
var DecreaseReplicationFactorResponse = /** @class */ (function (_super) {
    __extends(DecreaseReplicationFactorResponse, _super);
    function DecreaseReplicationFactorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DecreaseReplicationFactorResponse.prototype, "clusterNotFoundFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DecreaseReplicationFactorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DecreaseReplicationFactorResponse)
    ], DecreaseReplicationFactorResponse.prototype, "decreaseReplicationFactorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DecreaseReplicationFactorResponse.prototype, "invalidClusterStateFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DecreaseReplicationFactorResponse.prototype, "invalidParameterCombinationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DecreaseReplicationFactorResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DecreaseReplicationFactorResponse.prototype, "nodeNotFoundFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DecreaseReplicationFactorResponse.prototype, "serviceLinkedRoleNotFoundFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DecreaseReplicationFactorResponse.prototype, "statusCode", void 0);
    return DecreaseReplicationFactorResponse;
}(SpeakeasyBase));
export { DecreaseReplicationFactorResponse };
