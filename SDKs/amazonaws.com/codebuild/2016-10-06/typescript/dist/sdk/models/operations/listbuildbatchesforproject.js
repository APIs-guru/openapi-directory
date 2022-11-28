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
var ListBuildBatchesForProjectQueryParams = /** @class */ (function (_super) {
    __extends(ListBuildBatchesForProjectQueryParams, _super);
    function ListBuildBatchesForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListBuildBatchesForProjectQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListBuildBatchesForProjectQueryParams.prototype, "nextToken", void 0);
    return ListBuildBatchesForProjectQueryParams;
}(SpeakeasyBase));
export { ListBuildBatchesForProjectQueryParams };
export var ListBuildBatchesForProjectXAmzTargetEnum;
(function (ListBuildBatchesForProjectXAmzTargetEnum) {
    ListBuildBatchesForProjectXAmzTargetEnum["CodeBuild20161006ListBuildBatchesForProject"] = "CodeBuild_20161006.ListBuildBatchesForProject";
})(ListBuildBatchesForProjectXAmzTargetEnum || (ListBuildBatchesForProjectXAmzTargetEnum = {}));
var ListBuildBatchesForProjectHeaders = /** @class */ (function (_super) {
    __extends(ListBuildBatchesForProjectHeaders, _super);
    function ListBuildBatchesForProjectHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListBuildBatchesForProjectHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListBuildBatchesForProjectHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListBuildBatchesForProjectHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListBuildBatchesForProjectHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListBuildBatchesForProjectHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListBuildBatchesForProjectHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListBuildBatchesForProjectHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListBuildBatchesForProjectHeaders.prototype, "xAmzTarget", void 0);
    return ListBuildBatchesForProjectHeaders;
}(SpeakeasyBase));
export { ListBuildBatchesForProjectHeaders };
var ListBuildBatchesForProjectRequest = /** @class */ (function (_super) {
    __extends(ListBuildBatchesForProjectRequest, _super);
    function ListBuildBatchesForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuildBatchesForProjectQueryParams)
    ], ListBuildBatchesForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuildBatchesForProjectHeaders)
    ], ListBuildBatchesForProjectRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListBuildBatchesForProjectInput)
    ], ListBuildBatchesForProjectRequest.prototype, "request", void 0);
    return ListBuildBatchesForProjectRequest;
}(SpeakeasyBase));
export { ListBuildBatchesForProjectRequest };
var ListBuildBatchesForProjectResponse = /** @class */ (function (_super) {
    __extends(ListBuildBatchesForProjectResponse, _super);
    function ListBuildBatchesForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBuildBatchesForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBuildBatchesForProjectResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBuildBatchesForProjectOutput)
    ], ListBuildBatchesForProjectResponse.prototype, "listBuildBatchesForProjectOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBuildBatchesForProjectResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListBuildBatchesForProjectResponse.prototype, "statusCode", void 0);
    return ListBuildBatchesForProjectResponse;
}(SpeakeasyBase));
export { ListBuildBatchesForProjectResponse };
