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
var ListTestGridSessionActionsQueryParams = /** @class */ (function (_super) {
    __extends(ListTestGridSessionActionsQueryParams, _super);
    function ListTestGridSessionActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResult" }),
        __metadata("design:type", String)
    ], ListTestGridSessionActionsQueryParams.prototype, "maxResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListTestGridSessionActionsQueryParams.prototype, "nextToken", void 0);
    return ListTestGridSessionActionsQueryParams;
}(SpeakeasyBase));
export { ListTestGridSessionActionsQueryParams };
export var ListTestGridSessionActionsXAmzTargetEnum;
(function (ListTestGridSessionActionsXAmzTargetEnum) {
    ListTestGridSessionActionsXAmzTargetEnum["DeviceFarm20150623ListTestGridSessionActions"] = "DeviceFarm_20150623.ListTestGridSessionActions";
})(ListTestGridSessionActionsXAmzTargetEnum || (ListTestGridSessionActionsXAmzTargetEnum = {}));
var ListTestGridSessionActionsHeaders = /** @class */ (function (_super) {
    __extends(ListTestGridSessionActionsHeaders, _super);
    function ListTestGridSessionActionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTestGridSessionActionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTestGridSessionActionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTestGridSessionActionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTestGridSessionActionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTestGridSessionActionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTestGridSessionActionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTestGridSessionActionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListTestGridSessionActionsHeaders.prototype, "xAmzTarget", void 0);
    return ListTestGridSessionActionsHeaders;
}(SpeakeasyBase));
export { ListTestGridSessionActionsHeaders };
var ListTestGridSessionActionsRequest = /** @class */ (function (_super) {
    __extends(ListTestGridSessionActionsRequest, _super);
    function ListTestGridSessionActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTestGridSessionActionsQueryParams)
    ], ListTestGridSessionActionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTestGridSessionActionsHeaders)
    ], ListTestGridSessionActionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListTestGridSessionActionsRequest)
    ], ListTestGridSessionActionsRequest.prototype, "request", void 0);
    return ListTestGridSessionActionsRequest;
}(SpeakeasyBase));
export { ListTestGridSessionActionsRequest };
var ListTestGridSessionActionsResponse = /** @class */ (function (_super) {
    __extends(ListTestGridSessionActionsResponse, _super);
    function ListTestGridSessionActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTestGridSessionActionsResponse.prototype, "argumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTestGridSessionActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTestGridSessionActionsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTestGridSessionActionsResult)
    ], ListTestGridSessionActionsResponse.prototype, "listTestGridSessionActionsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTestGridSessionActionsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTestGridSessionActionsResponse.prototype, "statusCode", void 0);
    return ListTestGridSessionActionsResponse;
}(SpeakeasyBase));
export { ListTestGridSessionActionsResponse };
