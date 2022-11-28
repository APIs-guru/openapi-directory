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
export var ModifyReplicationSubnetGroupXAmzTargetEnum;
(function (ModifyReplicationSubnetGroupXAmzTargetEnum) {
    ModifyReplicationSubnetGroupXAmzTargetEnum["AmazonDmSv20160101ModifyReplicationSubnetGroup"] = "AmazonDMSv20160101.ModifyReplicationSubnetGroup";
})(ModifyReplicationSubnetGroupXAmzTargetEnum || (ModifyReplicationSubnetGroupXAmzTargetEnum = {}));
var ModifyReplicationSubnetGroupHeaders = /** @class */ (function (_super) {
    __extends(ModifyReplicationSubnetGroupHeaders, _super);
    function ModifyReplicationSubnetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ModifyReplicationSubnetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ModifyReplicationSubnetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ModifyReplicationSubnetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ModifyReplicationSubnetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ModifyReplicationSubnetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ModifyReplicationSubnetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ModifyReplicationSubnetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ModifyReplicationSubnetGroupHeaders.prototype, "xAmzTarget", void 0);
    return ModifyReplicationSubnetGroupHeaders;
}(SpeakeasyBase));
export { ModifyReplicationSubnetGroupHeaders };
var ModifyReplicationSubnetGroupRequest = /** @class */ (function (_super) {
    __extends(ModifyReplicationSubnetGroupRequest, _super);
    function ModifyReplicationSubnetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifyReplicationSubnetGroupHeaders)
    ], ModifyReplicationSubnetGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyReplicationSubnetGroupMessage)
    ], ModifyReplicationSubnetGroupRequest.prototype, "request", void 0);
    return ModifyReplicationSubnetGroupRequest;
}(SpeakeasyBase));
export { ModifyReplicationSubnetGroupRequest };
var ModifyReplicationSubnetGroupResponse = /** @class */ (function (_super) {
    __extends(ModifyReplicationSubnetGroupResponse, _super);
    function ModifyReplicationSubnetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyReplicationSubnetGroupResponse.prototype, "accessDeniedFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifyReplicationSubnetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyReplicationSubnetGroupResponse.prototype, "invalidSubnet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ModifyReplicationSubnetGroupResponse)
    ], ModifyReplicationSubnetGroupResponse.prototype, "modifyReplicationSubnetGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyReplicationSubnetGroupResponse.prototype, "replicationSubnetGroupDoesNotCoverEnoughAZs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyReplicationSubnetGroupResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyReplicationSubnetGroupResponse.prototype, "resourceQuotaExceededFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifyReplicationSubnetGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyReplicationSubnetGroupResponse.prototype, "subnetAlreadyInUse", void 0);
    return ModifyReplicationSubnetGroupResponse;
}(SpeakeasyBase));
export { ModifyReplicationSubnetGroupResponse };
