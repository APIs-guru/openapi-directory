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
var ListUserPoolClientsQueryParams = /** @class */ (function (_super) {
    __extends(ListUserPoolClientsQueryParams, _super);
    function ListUserPoolClientsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListUserPoolClientsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListUserPoolClientsQueryParams.prototype, "nextToken", void 0);
    return ListUserPoolClientsQueryParams;
}(SpeakeasyBase));
export { ListUserPoolClientsQueryParams };
export var ListUserPoolClientsXAmzTargetEnum;
(function (ListUserPoolClientsXAmzTargetEnum) {
    ListUserPoolClientsXAmzTargetEnum["AwsCognitoIdentityProviderServiceListUserPoolClients"] = "AWSCognitoIdentityProviderService.ListUserPoolClients";
})(ListUserPoolClientsXAmzTargetEnum || (ListUserPoolClientsXAmzTargetEnum = {}));
var ListUserPoolClientsHeaders = /** @class */ (function (_super) {
    __extends(ListUserPoolClientsHeaders, _super);
    function ListUserPoolClientsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListUserPoolClientsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListUserPoolClientsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListUserPoolClientsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListUserPoolClientsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListUserPoolClientsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListUserPoolClientsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListUserPoolClientsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListUserPoolClientsHeaders.prototype, "xAmzTarget", void 0);
    return ListUserPoolClientsHeaders;
}(SpeakeasyBase));
export { ListUserPoolClientsHeaders };
var ListUserPoolClientsRequest = /** @class */ (function (_super) {
    __extends(ListUserPoolClientsRequest, _super);
    function ListUserPoolClientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUserPoolClientsQueryParams)
    ], ListUserPoolClientsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUserPoolClientsHeaders)
    ], ListUserPoolClientsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListUserPoolClientsRequest)
    ], ListUserPoolClientsRequest.prototype, "request", void 0);
    return ListUserPoolClientsRequest;
}(SpeakeasyBase));
export { ListUserPoolClientsRequest };
var ListUserPoolClientsResponse = /** @class */ (function (_super) {
    __extends(ListUserPoolClientsResponse, _super);
    function ListUserPoolClientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUserPoolClientsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListUserPoolClientsResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListUserPoolClientsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListUserPoolClientsResponse)
    ], ListUserPoolClientsResponse.prototype, "listUserPoolClientsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListUserPoolClientsResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListUserPoolClientsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListUserPoolClientsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListUserPoolClientsResponse.prototype, "tooManyRequestsException", void 0);
    return ListUserPoolClientsResponse;
}(SpeakeasyBase));
export { ListUserPoolClientsResponse };
