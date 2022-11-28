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
export var UpdateTableReplicaAutoScalingXAmzTargetEnum;
(function (UpdateTableReplicaAutoScalingXAmzTargetEnum) {
    UpdateTableReplicaAutoScalingXAmzTargetEnum["DynamoDb20120810UpdateTableReplicaAutoScaling"] = "DynamoDB_20120810.UpdateTableReplicaAutoScaling";
})(UpdateTableReplicaAutoScalingXAmzTargetEnum || (UpdateTableReplicaAutoScalingXAmzTargetEnum = {}));
var UpdateTableReplicaAutoScalingHeaders = /** @class */ (function (_super) {
    __extends(UpdateTableReplicaAutoScalingHeaders, _super);
    function UpdateTableReplicaAutoScalingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateTableReplicaAutoScalingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateTableReplicaAutoScalingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateTableReplicaAutoScalingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateTableReplicaAutoScalingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateTableReplicaAutoScalingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateTableReplicaAutoScalingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateTableReplicaAutoScalingHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateTableReplicaAutoScalingHeaders.prototype, "xAmzTarget", void 0);
    return UpdateTableReplicaAutoScalingHeaders;
}(SpeakeasyBase));
export { UpdateTableReplicaAutoScalingHeaders };
var UpdateTableReplicaAutoScalingRequest = /** @class */ (function (_super) {
    __extends(UpdateTableReplicaAutoScalingRequest, _super);
    function UpdateTableReplicaAutoScalingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTableReplicaAutoScalingHeaders)
    ], UpdateTableReplicaAutoScalingRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateTableReplicaAutoScalingInput)
    ], UpdateTableReplicaAutoScalingRequest.prototype, "request", void 0);
    return UpdateTableReplicaAutoScalingRequest;
}(SpeakeasyBase));
export { UpdateTableReplicaAutoScalingRequest };
var UpdateTableReplicaAutoScalingResponse = /** @class */ (function (_super) {
    __extends(UpdateTableReplicaAutoScalingResponse, _super);
    function UpdateTableReplicaAutoScalingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTableReplicaAutoScalingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTableReplicaAutoScalingResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTableReplicaAutoScalingResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTableReplicaAutoScalingResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTableReplicaAutoScalingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateTableReplicaAutoScalingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateTableReplicaAutoScalingOutput)
    ], UpdateTableReplicaAutoScalingResponse.prototype, "updateTableReplicaAutoScalingOutput", void 0);
    return UpdateTableReplicaAutoScalingResponse;
}(SpeakeasyBase));
export { UpdateTableReplicaAutoScalingResponse };
