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
var ListApplicationRevisionsQueryParams = /** @class */ (function (_super) {
    __extends(ListApplicationRevisionsQueryParams, _super);
    function ListApplicationRevisionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListApplicationRevisionsQueryParams.prototype, "nextToken", void 0);
    return ListApplicationRevisionsQueryParams;
}(SpeakeasyBase));
export { ListApplicationRevisionsQueryParams };
export var ListApplicationRevisionsXAmzTargetEnum;
(function (ListApplicationRevisionsXAmzTargetEnum) {
    ListApplicationRevisionsXAmzTargetEnum["CodeDeploy20141006ListApplicationRevisions"] = "CodeDeploy_20141006.ListApplicationRevisions";
})(ListApplicationRevisionsXAmzTargetEnum || (ListApplicationRevisionsXAmzTargetEnum = {}));
var ListApplicationRevisionsHeaders = /** @class */ (function (_super) {
    __extends(ListApplicationRevisionsHeaders, _super);
    function ListApplicationRevisionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListApplicationRevisionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListApplicationRevisionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListApplicationRevisionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListApplicationRevisionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListApplicationRevisionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListApplicationRevisionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListApplicationRevisionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListApplicationRevisionsHeaders.prototype, "xAmzTarget", void 0);
    return ListApplicationRevisionsHeaders;
}(SpeakeasyBase));
export { ListApplicationRevisionsHeaders };
var ListApplicationRevisionsRequest = /** @class */ (function (_super) {
    __extends(ListApplicationRevisionsRequest, _super);
    function ListApplicationRevisionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListApplicationRevisionsQueryParams)
    ], ListApplicationRevisionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListApplicationRevisionsHeaders)
    ], ListApplicationRevisionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListApplicationRevisionsInput)
    ], ListApplicationRevisionsRequest.prototype, "request", void 0);
    return ListApplicationRevisionsRequest;
}(SpeakeasyBase));
export { ListApplicationRevisionsRequest };
var ListApplicationRevisionsResponse = /** @class */ (function (_super) {
    __extends(ListApplicationRevisionsResponse, _super);
    function ListApplicationRevisionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApplicationRevisionsResponse.prototype, "applicationDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApplicationRevisionsResponse.prototype, "applicationNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApplicationRevisionsResponse.prototype, "bucketNameFilterRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListApplicationRevisionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApplicationRevisionsResponse.prototype, "invalidApplicationNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApplicationRevisionsResponse.prototype, "invalidBucketNameFilterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApplicationRevisionsResponse.prototype, "invalidDeployedStateFilterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApplicationRevisionsResponse.prototype, "invalidKeyPrefixFilterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApplicationRevisionsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApplicationRevisionsResponse.prototype, "invalidSortByException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApplicationRevisionsResponse.prototype, "invalidSortOrderException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListApplicationRevisionsOutput)
    ], ListApplicationRevisionsResponse.prototype, "listApplicationRevisionsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListApplicationRevisionsResponse.prototype, "statusCode", void 0);
    return ListApplicationRevisionsResponse;
}(SpeakeasyBase));
export { ListApplicationRevisionsResponse };
