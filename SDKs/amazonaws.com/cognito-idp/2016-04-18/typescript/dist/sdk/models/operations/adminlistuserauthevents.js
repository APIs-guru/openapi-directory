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
var AdminListUserAuthEventsQueryParams = /** @class */ (function (_super) {
    __extends(AdminListUserAuthEventsQueryParams, _super);
    function AdminListUserAuthEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], AdminListUserAuthEventsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], AdminListUserAuthEventsQueryParams.prototype, "nextToken", void 0);
    return AdminListUserAuthEventsQueryParams;
}(SpeakeasyBase));
export { AdminListUserAuthEventsQueryParams };
export var AdminListUserAuthEventsXAmzTargetEnum;
(function (AdminListUserAuthEventsXAmzTargetEnum) {
    AdminListUserAuthEventsXAmzTargetEnum["AwsCognitoIdentityProviderServiceAdminListUserAuthEvents"] = "AWSCognitoIdentityProviderService.AdminListUserAuthEvents";
})(AdminListUserAuthEventsXAmzTargetEnum || (AdminListUserAuthEventsXAmzTargetEnum = {}));
var AdminListUserAuthEventsHeaders = /** @class */ (function (_super) {
    __extends(AdminListUserAuthEventsHeaders, _super);
    function AdminListUserAuthEventsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AdminListUserAuthEventsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AdminListUserAuthEventsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AdminListUserAuthEventsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AdminListUserAuthEventsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AdminListUserAuthEventsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AdminListUserAuthEventsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AdminListUserAuthEventsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AdminListUserAuthEventsHeaders.prototype, "xAmzTarget", void 0);
    return AdminListUserAuthEventsHeaders;
}(SpeakeasyBase));
export { AdminListUserAuthEventsHeaders };
var AdminListUserAuthEventsRequest = /** @class */ (function (_super) {
    __extends(AdminListUserAuthEventsRequest, _super);
    function AdminListUserAuthEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminListUserAuthEventsQueryParams)
    ], AdminListUserAuthEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminListUserAuthEventsHeaders)
    ], AdminListUserAuthEventsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AdminListUserAuthEventsRequest)
    ], AdminListUserAuthEventsRequest.prototype, "request", void 0);
    return AdminListUserAuthEventsRequest;
}(SpeakeasyBase));
export { AdminListUserAuthEventsRequest };
var AdminListUserAuthEventsResponse = /** @class */ (function (_super) {
    __extends(AdminListUserAuthEventsResponse, _super);
    function AdminListUserAuthEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdminListUserAuthEventsResponse)
    ], AdminListUserAuthEventsResponse.prototype, "adminListUserAuthEventsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminListUserAuthEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminListUserAuthEventsResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminListUserAuthEventsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminListUserAuthEventsResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminListUserAuthEventsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminListUserAuthEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminListUserAuthEventsResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminListUserAuthEventsResponse.prototype, "userNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AdminListUserAuthEventsResponse.prototype, "userPoolAddOnNotEnabledException", void 0);
    return AdminListUserAuthEventsResponse;
}(SpeakeasyBase));
export { AdminListUserAuthEventsResponse };
