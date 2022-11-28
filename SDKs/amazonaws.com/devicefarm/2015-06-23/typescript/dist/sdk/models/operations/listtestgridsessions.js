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
var ListTestGridSessionsQueryParams = /** @class */ (function (_super) {
    __extends(ListTestGridSessionsQueryParams, _super);
    function ListTestGridSessionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResult" }),
        __metadata("design:type", String)
    ], ListTestGridSessionsQueryParams.prototype, "maxResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListTestGridSessionsQueryParams.prototype, "nextToken", void 0);
    return ListTestGridSessionsQueryParams;
}(SpeakeasyBase));
export { ListTestGridSessionsQueryParams };
export var ListTestGridSessionsXAmzTargetEnum;
(function (ListTestGridSessionsXAmzTargetEnum) {
    ListTestGridSessionsXAmzTargetEnum["DeviceFarm20150623ListTestGridSessions"] = "DeviceFarm_20150623.ListTestGridSessions";
})(ListTestGridSessionsXAmzTargetEnum || (ListTestGridSessionsXAmzTargetEnum = {}));
var ListTestGridSessionsHeaders = /** @class */ (function (_super) {
    __extends(ListTestGridSessionsHeaders, _super);
    function ListTestGridSessionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTestGridSessionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTestGridSessionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTestGridSessionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTestGridSessionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTestGridSessionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTestGridSessionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTestGridSessionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListTestGridSessionsHeaders.prototype, "xAmzTarget", void 0);
    return ListTestGridSessionsHeaders;
}(SpeakeasyBase));
export { ListTestGridSessionsHeaders };
var ListTestGridSessionsRequest = /** @class */ (function (_super) {
    __extends(ListTestGridSessionsRequest, _super);
    function ListTestGridSessionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTestGridSessionsQueryParams)
    ], ListTestGridSessionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTestGridSessionsHeaders)
    ], ListTestGridSessionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListTestGridSessionsRequest)
    ], ListTestGridSessionsRequest.prototype, "request", void 0);
    return ListTestGridSessionsRequest;
}(SpeakeasyBase));
export { ListTestGridSessionsRequest };
var ListTestGridSessionsResponse = /** @class */ (function (_super) {
    __extends(ListTestGridSessionsResponse, _super);
    function ListTestGridSessionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTestGridSessionsResponse.prototype, "argumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTestGridSessionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTestGridSessionsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTestGridSessionsResult)
    ], ListTestGridSessionsResponse.prototype, "listTestGridSessionsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTestGridSessionsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTestGridSessionsResponse.prototype, "statusCode", void 0);
    return ListTestGridSessionsResponse;
}(SpeakeasyBase));
export { ListTestGridSessionsResponse };
