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
var ListIdentityPoolsQueryParams = /** @class */ (function (_super) {
    __extends(ListIdentityPoolsQueryParams, _super);
    function ListIdentityPoolsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListIdentityPoolsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListIdentityPoolsQueryParams.prototype, "nextToken", void 0);
    return ListIdentityPoolsQueryParams;
}(SpeakeasyBase));
export { ListIdentityPoolsQueryParams };
export var ListIdentityPoolsXAmzTargetEnum;
(function (ListIdentityPoolsXAmzTargetEnum) {
    ListIdentityPoolsXAmzTargetEnum["AwsCognitoIdentityServiceListIdentityPools"] = "AWSCognitoIdentityService.ListIdentityPools";
})(ListIdentityPoolsXAmzTargetEnum || (ListIdentityPoolsXAmzTargetEnum = {}));
var ListIdentityPoolsHeaders = /** @class */ (function (_super) {
    __extends(ListIdentityPoolsHeaders, _super);
    function ListIdentityPoolsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListIdentityPoolsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListIdentityPoolsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListIdentityPoolsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListIdentityPoolsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListIdentityPoolsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListIdentityPoolsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListIdentityPoolsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListIdentityPoolsHeaders.prototype, "xAmzTarget", void 0);
    return ListIdentityPoolsHeaders;
}(SpeakeasyBase));
export { ListIdentityPoolsHeaders };
var ListIdentityPoolsRequest = /** @class */ (function (_super) {
    __extends(ListIdentityPoolsRequest, _super);
    function ListIdentityPoolsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListIdentityPoolsQueryParams)
    ], ListIdentityPoolsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIdentityPoolsHeaders)
    ], ListIdentityPoolsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListIdentityPoolsInput)
    ], ListIdentityPoolsRequest.prototype, "request", void 0);
    return ListIdentityPoolsRequest;
}(SpeakeasyBase));
export { ListIdentityPoolsRequest };
var ListIdentityPoolsResponse = /** @class */ (function (_super) {
    __extends(ListIdentityPoolsResponse, _super);
    function ListIdentityPoolsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListIdentityPoolsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListIdentityPoolsResponse.prototype, "internalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListIdentityPoolsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListIdentityPoolsResponse)
    ], ListIdentityPoolsResponse.prototype, "listIdentityPoolsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListIdentityPoolsResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListIdentityPoolsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListIdentityPoolsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListIdentityPoolsResponse.prototype, "tooManyRequestsException", void 0);
    return ListIdentityPoolsResponse;
}(SpeakeasyBase));
export { ListIdentityPoolsResponse };
