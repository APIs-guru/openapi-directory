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
export var CreateReplicationInstanceXAmzTargetEnum;
(function (CreateReplicationInstanceXAmzTargetEnum) {
    CreateReplicationInstanceXAmzTargetEnum["AmazonDmSv20160101CreateReplicationInstance"] = "AmazonDMSv20160101.CreateReplicationInstance";
})(CreateReplicationInstanceXAmzTargetEnum || (CreateReplicationInstanceXAmzTargetEnum = {}));
var CreateReplicationInstanceHeaders = /** @class */ (function (_super) {
    __extends(CreateReplicationInstanceHeaders, _super);
    function CreateReplicationInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceHeaders.prototype, "xAmzTarget", void 0);
    return CreateReplicationInstanceHeaders;
}(SpeakeasyBase));
export { CreateReplicationInstanceHeaders };
var CreateReplicationInstanceRequest = /** @class */ (function (_super) {
    __extends(CreateReplicationInstanceRequest, _super);
    function CreateReplicationInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateReplicationInstanceHeaders)
    ], CreateReplicationInstanceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateReplicationInstanceMessage)
    ], CreateReplicationInstanceRequest.prototype, "request", void 0);
    return CreateReplicationInstanceRequest;
}(SpeakeasyBase));
export { CreateReplicationInstanceRequest };
var CreateReplicationInstanceResponse = /** @class */ (function (_super) {
    __extends(CreateReplicationInstanceResponse, _super);
    function CreateReplicationInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationInstanceResponse.prototype, "accessDeniedFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateReplicationInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateReplicationInstanceResponse)
    ], CreateReplicationInstanceResponse.prototype, "createReplicationInstanceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationInstanceResponse.prototype, "insufficientResourceCapacityFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationInstanceResponse.prototype, "invalidResourceStateFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationInstanceResponse.prototype, "invalidSubnet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationInstanceResponse.prototype, "kmsKeyNotAccessibleFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationInstanceResponse.prototype, "replicationSubnetGroupDoesNotCoverEnoughAZs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationInstanceResponse.prototype, "resourceAlreadyExistsFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationInstanceResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationInstanceResponse.prototype, "resourceQuotaExceededFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateReplicationInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationInstanceResponse.prototype, "storageQuotaExceededFault", void 0);
    return CreateReplicationInstanceResponse;
}(SpeakeasyBase));
export { CreateReplicationInstanceResponse };
