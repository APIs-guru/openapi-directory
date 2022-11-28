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
var ListTestGridProjectsQueryParams = /** @class */ (function (_super) {
    __extends(ListTestGridProjectsQueryParams, _super);
    function ListTestGridProjectsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResult" }),
        __metadata("design:type", String)
    ], ListTestGridProjectsQueryParams.prototype, "maxResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListTestGridProjectsQueryParams.prototype, "nextToken", void 0);
    return ListTestGridProjectsQueryParams;
}(SpeakeasyBase));
export { ListTestGridProjectsQueryParams };
export var ListTestGridProjectsXAmzTargetEnum;
(function (ListTestGridProjectsXAmzTargetEnum) {
    ListTestGridProjectsXAmzTargetEnum["DeviceFarm20150623ListTestGridProjects"] = "DeviceFarm_20150623.ListTestGridProjects";
})(ListTestGridProjectsXAmzTargetEnum || (ListTestGridProjectsXAmzTargetEnum = {}));
var ListTestGridProjectsHeaders = /** @class */ (function (_super) {
    __extends(ListTestGridProjectsHeaders, _super);
    function ListTestGridProjectsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTestGridProjectsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTestGridProjectsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTestGridProjectsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTestGridProjectsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTestGridProjectsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTestGridProjectsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTestGridProjectsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListTestGridProjectsHeaders.prototype, "xAmzTarget", void 0);
    return ListTestGridProjectsHeaders;
}(SpeakeasyBase));
export { ListTestGridProjectsHeaders };
var ListTestGridProjectsRequest = /** @class */ (function (_super) {
    __extends(ListTestGridProjectsRequest, _super);
    function ListTestGridProjectsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTestGridProjectsQueryParams)
    ], ListTestGridProjectsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTestGridProjectsHeaders)
    ], ListTestGridProjectsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListTestGridProjectsRequest)
    ], ListTestGridProjectsRequest.prototype, "request", void 0);
    return ListTestGridProjectsRequest;
}(SpeakeasyBase));
export { ListTestGridProjectsRequest };
var ListTestGridProjectsResponse = /** @class */ (function (_super) {
    __extends(ListTestGridProjectsResponse, _super);
    function ListTestGridProjectsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTestGridProjectsResponse.prototype, "argumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTestGridProjectsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTestGridProjectsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTestGridProjectsResult)
    ], ListTestGridProjectsResponse.prototype, "listTestGridProjectsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTestGridProjectsResponse.prototype, "statusCode", void 0);
    return ListTestGridProjectsResponse;
}(SpeakeasyBase));
export { ListTestGridProjectsResponse };
