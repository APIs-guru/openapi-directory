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
export var UpdateServicePrimaryTaskSetXAmzTargetEnum;
(function (UpdateServicePrimaryTaskSetXAmzTargetEnum) {
    UpdateServicePrimaryTaskSetXAmzTargetEnum["AmazonEc2ContainerServiceV20141113UpdateServicePrimaryTaskSet"] = "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet";
})(UpdateServicePrimaryTaskSetXAmzTargetEnum || (UpdateServicePrimaryTaskSetXAmzTargetEnum = {}));
var UpdateServicePrimaryTaskSetHeaders = /** @class */ (function (_super) {
    __extends(UpdateServicePrimaryTaskSetHeaders, _super);
    function UpdateServicePrimaryTaskSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateServicePrimaryTaskSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateServicePrimaryTaskSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateServicePrimaryTaskSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateServicePrimaryTaskSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateServicePrimaryTaskSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateServicePrimaryTaskSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateServicePrimaryTaskSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateServicePrimaryTaskSetHeaders.prototype, "xAmzTarget", void 0);
    return UpdateServicePrimaryTaskSetHeaders;
}(SpeakeasyBase));
export { UpdateServicePrimaryTaskSetHeaders };
var UpdateServicePrimaryTaskSetRequest = /** @class */ (function (_super) {
    __extends(UpdateServicePrimaryTaskSetRequest, _super);
    function UpdateServicePrimaryTaskSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateServicePrimaryTaskSetHeaders)
    ], UpdateServicePrimaryTaskSetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateServicePrimaryTaskSetRequest)
    ], UpdateServicePrimaryTaskSetRequest.prototype, "request", void 0);
    return UpdateServicePrimaryTaskSetRequest;
}(SpeakeasyBase));
export { UpdateServicePrimaryTaskSetRequest };
var UpdateServicePrimaryTaskSetResponse = /** @class */ (function (_super) {
    __extends(UpdateServicePrimaryTaskSetResponse, _super);
    function UpdateServicePrimaryTaskSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "clusterNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "serviceNotActiveException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "serviceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "taskSetNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "unsupportedFeatureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateServicePrimaryTaskSetResponse)
    ], UpdateServicePrimaryTaskSetResponse.prototype, "updateServicePrimaryTaskSetResponse", void 0);
    return UpdateServicePrimaryTaskSetResponse;
}(SpeakeasyBase));
export { UpdateServicePrimaryTaskSetResponse };
