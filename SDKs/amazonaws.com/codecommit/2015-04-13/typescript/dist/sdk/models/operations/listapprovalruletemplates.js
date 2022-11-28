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
var ListApprovalRuleTemplatesQueryParams = /** @class */ (function (_super) {
    __extends(ListApprovalRuleTemplatesQueryParams, _super);
    function ListApprovalRuleTemplatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListApprovalRuleTemplatesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListApprovalRuleTemplatesQueryParams.prototype, "nextToken", void 0);
    return ListApprovalRuleTemplatesQueryParams;
}(SpeakeasyBase));
export { ListApprovalRuleTemplatesQueryParams };
export var ListApprovalRuleTemplatesXAmzTargetEnum;
(function (ListApprovalRuleTemplatesXAmzTargetEnum) {
    ListApprovalRuleTemplatesXAmzTargetEnum["CodeCommit20150413ListApprovalRuleTemplates"] = "CodeCommit_20150413.ListApprovalRuleTemplates";
})(ListApprovalRuleTemplatesXAmzTargetEnum || (ListApprovalRuleTemplatesXAmzTargetEnum = {}));
var ListApprovalRuleTemplatesHeaders = /** @class */ (function (_super) {
    __extends(ListApprovalRuleTemplatesHeaders, _super);
    function ListApprovalRuleTemplatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListApprovalRuleTemplatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListApprovalRuleTemplatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListApprovalRuleTemplatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListApprovalRuleTemplatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListApprovalRuleTemplatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListApprovalRuleTemplatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListApprovalRuleTemplatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListApprovalRuleTemplatesHeaders.prototype, "xAmzTarget", void 0);
    return ListApprovalRuleTemplatesHeaders;
}(SpeakeasyBase));
export { ListApprovalRuleTemplatesHeaders };
var ListApprovalRuleTemplatesRequest = /** @class */ (function (_super) {
    __extends(ListApprovalRuleTemplatesRequest, _super);
    function ListApprovalRuleTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListApprovalRuleTemplatesQueryParams)
    ], ListApprovalRuleTemplatesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListApprovalRuleTemplatesHeaders)
    ], ListApprovalRuleTemplatesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListApprovalRuleTemplatesInput)
    ], ListApprovalRuleTemplatesRequest.prototype, "request", void 0);
    return ListApprovalRuleTemplatesRequest;
}(SpeakeasyBase));
export { ListApprovalRuleTemplatesRequest };
var ListApprovalRuleTemplatesResponse = /** @class */ (function (_super) {
    __extends(ListApprovalRuleTemplatesResponse, _super);
    function ListApprovalRuleTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListApprovalRuleTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApprovalRuleTemplatesResponse.prototype, "invalidContinuationTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListApprovalRuleTemplatesResponse.prototype, "invalidMaxResultsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListApprovalRuleTemplatesOutput)
    ], ListApprovalRuleTemplatesResponse.prototype, "listApprovalRuleTemplatesOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListApprovalRuleTemplatesResponse.prototype, "statusCode", void 0);
    return ListApprovalRuleTemplatesResponse;
}(SpeakeasyBase));
export { ListApprovalRuleTemplatesResponse };
