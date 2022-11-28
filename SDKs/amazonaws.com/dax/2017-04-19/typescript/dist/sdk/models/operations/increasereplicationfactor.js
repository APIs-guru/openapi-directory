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
export var IncreaseReplicationFactorXAmzTargetEnum;
(function (IncreaseReplicationFactorXAmzTargetEnum) {
    IncreaseReplicationFactorXAmzTargetEnum["AmazonDaxv3IncreaseReplicationFactor"] = "AmazonDAXV3.IncreaseReplicationFactor";
})(IncreaseReplicationFactorXAmzTargetEnum || (IncreaseReplicationFactorXAmzTargetEnum = {}));
var IncreaseReplicationFactorHeaders = /** @class */ (function (_super) {
    __extends(IncreaseReplicationFactorHeaders, _super);
    function IncreaseReplicationFactorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], IncreaseReplicationFactorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], IncreaseReplicationFactorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], IncreaseReplicationFactorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], IncreaseReplicationFactorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], IncreaseReplicationFactorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], IncreaseReplicationFactorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], IncreaseReplicationFactorHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], IncreaseReplicationFactorHeaders.prototype, "xAmzTarget", void 0);
    return IncreaseReplicationFactorHeaders;
}(SpeakeasyBase));
export { IncreaseReplicationFactorHeaders };
var IncreaseReplicationFactorRequest = /** @class */ (function (_super) {
    __extends(IncreaseReplicationFactorRequest, _super);
    function IncreaseReplicationFactorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IncreaseReplicationFactorHeaders)
    ], IncreaseReplicationFactorRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IncreaseReplicationFactorRequest)
    ], IncreaseReplicationFactorRequest.prototype, "request", void 0);
    return IncreaseReplicationFactorRequest;
}(SpeakeasyBase));
export { IncreaseReplicationFactorRequest };
var IncreaseReplicationFactorResponse = /** @class */ (function (_super) {
    __extends(IncreaseReplicationFactorResponse, _super);
    function IncreaseReplicationFactorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], IncreaseReplicationFactorResponse.prototype, "clusterNotFoundFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IncreaseReplicationFactorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IncreaseReplicationFactorResponse)
    ], IncreaseReplicationFactorResponse.prototype, "increaseReplicationFactorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], IncreaseReplicationFactorResponse.prototype, "insufficientClusterCapacityFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], IncreaseReplicationFactorResponse.prototype, "invalidClusterStateFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], IncreaseReplicationFactorResponse.prototype, "invalidParameterCombinationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], IncreaseReplicationFactorResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], IncreaseReplicationFactorResponse.prototype, "invalidVpcNetworkStateFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], IncreaseReplicationFactorResponse.prototype, "nodeQuotaForClusterExceededFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], IncreaseReplicationFactorResponse.prototype, "nodeQuotaForCustomerExceededFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], IncreaseReplicationFactorResponse.prototype, "serviceLinkedRoleNotFoundFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IncreaseReplicationFactorResponse.prototype, "statusCode", void 0);
    return IncreaseReplicationFactorResponse;
}(SpeakeasyBase));
export { IncreaseReplicationFactorResponse };
