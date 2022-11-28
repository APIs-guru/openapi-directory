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
export var DeleteMatchmakingRuleSetXAmzTargetEnum;
(function (DeleteMatchmakingRuleSetXAmzTargetEnum) {
    DeleteMatchmakingRuleSetXAmzTargetEnum["GameLiftDeleteMatchmakingRuleSet"] = "GameLift.DeleteMatchmakingRuleSet";
})(DeleteMatchmakingRuleSetXAmzTargetEnum || (DeleteMatchmakingRuleSetXAmzTargetEnum = {}));
var DeleteMatchmakingRuleSetHeaders = /** @class */ (function (_super) {
    __extends(DeleteMatchmakingRuleSetHeaders, _super);
    function DeleteMatchmakingRuleSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteMatchmakingRuleSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteMatchmakingRuleSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteMatchmakingRuleSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteMatchmakingRuleSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteMatchmakingRuleSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteMatchmakingRuleSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteMatchmakingRuleSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteMatchmakingRuleSetHeaders.prototype, "xAmzTarget", void 0);
    return DeleteMatchmakingRuleSetHeaders;
}(SpeakeasyBase));
export { DeleteMatchmakingRuleSetHeaders };
var DeleteMatchmakingRuleSetRequest = /** @class */ (function (_super) {
    __extends(DeleteMatchmakingRuleSetRequest, _super);
    function DeleteMatchmakingRuleSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMatchmakingRuleSetHeaders)
    ], DeleteMatchmakingRuleSetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteMatchmakingRuleSetInput)
    ], DeleteMatchmakingRuleSetRequest.prototype, "request", void 0);
    return DeleteMatchmakingRuleSetRequest;
}(SpeakeasyBase));
export { DeleteMatchmakingRuleSetRequest };
var DeleteMatchmakingRuleSetResponse = /** @class */ (function (_super) {
    __extends(DeleteMatchmakingRuleSetResponse, _super);
    function DeleteMatchmakingRuleSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteMatchmakingRuleSetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteMatchmakingRuleSetResponse.prototype, "deleteMatchmakingRuleSetOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteMatchmakingRuleSetResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteMatchmakingRuleSetResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteMatchmakingRuleSetResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteMatchmakingRuleSetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteMatchmakingRuleSetResponse.prototype, "taggingFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteMatchmakingRuleSetResponse.prototype, "unsupportedRegionException", void 0);
    return DeleteMatchmakingRuleSetResponse;
}(SpeakeasyBase));
export { DeleteMatchmakingRuleSetResponse };
