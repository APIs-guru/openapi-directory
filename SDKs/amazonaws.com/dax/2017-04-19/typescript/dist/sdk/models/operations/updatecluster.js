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
export var UpdateClusterXAmzTargetEnum;
(function (UpdateClusterXAmzTargetEnum) {
    UpdateClusterXAmzTargetEnum["AmazonDaxv3UpdateCluster"] = "AmazonDAXV3.UpdateCluster";
})(UpdateClusterXAmzTargetEnum || (UpdateClusterXAmzTargetEnum = {}));
var UpdateClusterHeaders = /** @class */ (function (_super) {
    __extends(UpdateClusterHeaders, _super);
    function UpdateClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateClusterHeaders.prototype, "xAmzTarget", void 0);
    return UpdateClusterHeaders;
}(SpeakeasyBase));
export { UpdateClusterHeaders };
var UpdateClusterRequest = /** @class */ (function (_super) {
    __extends(UpdateClusterRequest, _super);
    function UpdateClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateClusterHeaders)
    ], UpdateClusterRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateClusterRequest)
    ], UpdateClusterRequest.prototype, "request", void 0);
    return UpdateClusterRequest;
}(SpeakeasyBase));
export { UpdateClusterRequest };
var UpdateClusterResponse = /** @class */ (function (_super) {
    __extends(UpdateClusterResponse, _super);
    function UpdateClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateClusterResponse.prototype, "clusterNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateClusterResponse.prototype, "invalidClusterStateFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateClusterResponse.prototype, "invalidParameterCombinationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateClusterResponse.prototype, "invalidParameterGroupStateFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateClusterResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateClusterResponse.prototype, "parameterGroupNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateClusterResponse.prototype, "serviceLinkedRoleNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateClusterResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateClusterResponse)
    ], UpdateClusterResponse.prototype, "updateClusterResponse", void 0);
    return UpdateClusterResponse;
}(SpeakeasyBase));
export { UpdateClusterResponse };
