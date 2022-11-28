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
export var PutOrganizationConfigRuleXAmzTargetEnum;
(function (PutOrganizationConfigRuleXAmzTargetEnum) {
    PutOrganizationConfigRuleXAmzTargetEnum["StarlingDoveServicePutOrganizationConfigRule"] = "StarlingDoveService.PutOrganizationConfigRule";
})(PutOrganizationConfigRuleXAmzTargetEnum || (PutOrganizationConfigRuleXAmzTargetEnum = {}));
var PutOrganizationConfigRuleHeaders = /** @class */ (function (_super) {
    __extends(PutOrganizationConfigRuleHeaders, _super);
    function PutOrganizationConfigRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutOrganizationConfigRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutOrganizationConfigRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutOrganizationConfigRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutOrganizationConfigRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutOrganizationConfigRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutOrganizationConfigRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutOrganizationConfigRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], PutOrganizationConfigRuleHeaders.prototype, "xAmzTarget", void 0);
    return PutOrganizationConfigRuleHeaders;
}(SpeakeasyBase));
export { PutOrganizationConfigRuleHeaders };
var PutOrganizationConfigRuleRequest = /** @class */ (function (_super) {
    __extends(PutOrganizationConfigRuleRequest, _super);
    function PutOrganizationConfigRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutOrganizationConfigRuleHeaders)
    ], PutOrganizationConfigRuleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PutOrganizationConfigRuleRequest)
    ], PutOrganizationConfigRuleRequest.prototype, "request", void 0);
    return PutOrganizationConfigRuleRequest;
}(SpeakeasyBase));
export { PutOrganizationConfigRuleRequest };
var PutOrganizationConfigRuleResponse = /** @class */ (function (_super) {
    __extends(PutOrganizationConfigRuleResponse, _super);
    function PutOrganizationConfigRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutOrganizationConfigRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutOrganizationConfigRuleResponse.prototype, "insufficientPermissionsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutOrganizationConfigRuleResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutOrganizationConfigRuleResponse.prototype, "maxNumberOfOrganizationConfigRulesExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutOrganizationConfigRuleResponse.prototype, "noAvailableOrganizationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutOrganizationConfigRuleResponse.prototype, "organizationAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutOrganizationConfigRuleResponse.prototype, "organizationAllFeaturesNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutOrganizationConfigRuleResponse)
    ], PutOrganizationConfigRuleResponse.prototype, "putOrganizationConfigRuleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutOrganizationConfigRuleResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutOrganizationConfigRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutOrganizationConfigRuleResponse.prototype, "validationException", void 0);
    return PutOrganizationConfigRuleResponse;
}(SpeakeasyBase));
export { PutOrganizationConfigRuleResponse };
