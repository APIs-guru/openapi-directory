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
export var UpdateScalingPlanXAmzTargetEnum;
(function (UpdateScalingPlanXAmzTargetEnum) {
    UpdateScalingPlanXAmzTargetEnum["AnyScaleScalingPlannerFrontendServiceUpdateScalingPlan"] = "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan";
})(UpdateScalingPlanXAmzTargetEnum || (UpdateScalingPlanXAmzTargetEnum = {}));
var UpdateScalingPlanHeaders = /** @class */ (function (_super) {
    __extends(UpdateScalingPlanHeaders, _super);
    function UpdateScalingPlanHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateScalingPlanHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateScalingPlanHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateScalingPlanHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateScalingPlanHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateScalingPlanHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateScalingPlanHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateScalingPlanHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateScalingPlanHeaders.prototype, "xAmzTarget", void 0);
    return UpdateScalingPlanHeaders;
}(SpeakeasyBase));
export { UpdateScalingPlanHeaders };
var UpdateScalingPlanRequest = /** @class */ (function (_super) {
    __extends(UpdateScalingPlanRequest, _super);
    function UpdateScalingPlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateScalingPlanHeaders)
    ], UpdateScalingPlanRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateScalingPlanRequest)
    ], UpdateScalingPlanRequest.prototype, "request", void 0);
    return UpdateScalingPlanRequest;
}(SpeakeasyBase));
export { UpdateScalingPlanRequest };
var UpdateScalingPlanResponse = /** @class */ (function (_super) {
    __extends(UpdateScalingPlanResponse, _super);
    function UpdateScalingPlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateScalingPlanResponse.prototype, "concurrentUpdateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateScalingPlanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateScalingPlanResponse.prototype, "internalServiceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateScalingPlanResponse.prototype, "objectNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateScalingPlanResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], UpdateScalingPlanResponse.prototype, "updateScalingPlanResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateScalingPlanResponse.prototype, "validationException", void 0);
    return UpdateScalingPlanResponse;
}(SpeakeasyBase));
export { UpdateScalingPlanResponse };
