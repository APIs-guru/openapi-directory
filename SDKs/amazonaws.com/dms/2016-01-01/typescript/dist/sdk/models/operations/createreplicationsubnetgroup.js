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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var CreateReplicationSubnetGroupXAmzTargetEnum;
(function (CreateReplicationSubnetGroupXAmzTargetEnum) {
    CreateReplicationSubnetGroupXAmzTargetEnum["AmazonDmSv20160101CreateReplicationSubnetGroup"] = "AmazonDMSv20160101.CreateReplicationSubnetGroup";
})(CreateReplicationSubnetGroupXAmzTargetEnum || (CreateReplicationSubnetGroupXAmzTargetEnum = {}));
var CreateReplicationSubnetGroupHeaders = /** @class */ (function (_super) {
    __extends(CreateReplicationSubnetGroupHeaders, _super);
    function CreateReplicationSubnetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateReplicationSubnetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateReplicationSubnetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateReplicationSubnetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateReplicationSubnetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateReplicationSubnetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateReplicationSubnetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateReplicationSubnetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateReplicationSubnetGroupHeaders.prototype, "xAmzTarget", void 0);
    return CreateReplicationSubnetGroupHeaders;
}(SpeakeasyBase));
export { CreateReplicationSubnetGroupHeaders };
var CreateReplicationSubnetGroupRequest = /** @class */ (function (_super) {
    __extends(CreateReplicationSubnetGroupRequest, _super);
    function CreateReplicationSubnetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateReplicationSubnetGroupHeaders)
    ], CreateReplicationSubnetGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateReplicationSubnetGroupMessage)
    ], CreateReplicationSubnetGroupRequest.prototype, "request", void 0);
    return CreateReplicationSubnetGroupRequest;
}(SpeakeasyBase));
export { CreateReplicationSubnetGroupRequest };
var CreateReplicationSubnetGroupResponse = /** @class */ (function (_super) {
    __extends(CreateReplicationSubnetGroupResponse, _super);
    function CreateReplicationSubnetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationSubnetGroupResponse.prototype, "accessDeniedFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateReplicationSubnetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateReplicationSubnetGroupResponse)
    ], CreateReplicationSubnetGroupResponse.prototype, "createReplicationSubnetGroupResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationSubnetGroupResponse.prototype, "invalidSubnet", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationSubnetGroupResponse.prototype, "replicationSubnetGroupDoesNotCoverEnoughAZs", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationSubnetGroupResponse.prototype, "resourceAlreadyExistsFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationSubnetGroupResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationSubnetGroupResponse.prototype, "resourceQuotaExceededFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateReplicationSubnetGroupResponse.prototype, "statusCode", void 0);
    return CreateReplicationSubnetGroupResponse;
}(SpeakeasyBase));
export { CreateReplicationSubnetGroupResponse };
