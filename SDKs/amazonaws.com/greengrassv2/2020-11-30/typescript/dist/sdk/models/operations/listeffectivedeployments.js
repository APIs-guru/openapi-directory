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
var ListEffectiveDeploymentsPathParams = /** @class */ (function (_super) {
    __extends(ListEffectiveDeploymentsPathParams, _super);
    function ListEffectiveDeploymentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=coreDeviceThingName" }),
        __metadata("design:type", String)
    ], ListEffectiveDeploymentsPathParams.prototype, "coreDeviceThingName", void 0);
    return ListEffectiveDeploymentsPathParams;
}(SpeakeasyBase));
export { ListEffectiveDeploymentsPathParams };
var ListEffectiveDeploymentsQueryParams = /** @class */ (function (_super) {
    __extends(ListEffectiveDeploymentsQueryParams, _super);
    function ListEffectiveDeploymentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListEffectiveDeploymentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListEffectiveDeploymentsQueryParams.prototype, "nextToken", void 0);
    return ListEffectiveDeploymentsQueryParams;
}(SpeakeasyBase));
export { ListEffectiveDeploymentsQueryParams };
var ListEffectiveDeploymentsHeaders = /** @class */ (function (_super) {
    __extends(ListEffectiveDeploymentsHeaders, _super);
    function ListEffectiveDeploymentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListEffectiveDeploymentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListEffectiveDeploymentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListEffectiveDeploymentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListEffectiveDeploymentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListEffectiveDeploymentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListEffectiveDeploymentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListEffectiveDeploymentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListEffectiveDeploymentsHeaders;
}(SpeakeasyBase));
export { ListEffectiveDeploymentsHeaders };
var ListEffectiveDeploymentsRequest = /** @class */ (function (_super) {
    __extends(ListEffectiveDeploymentsRequest, _super);
    function ListEffectiveDeploymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEffectiveDeploymentsPathParams)
    ], ListEffectiveDeploymentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEffectiveDeploymentsQueryParams)
    ], ListEffectiveDeploymentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEffectiveDeploymentsHeaders)
    ], ListEffectiveDeploymentsRequest.prototype, "headers", void 0);
    return ListEffectiveDeploymentsRequest;
}(SpeakeasyBase));
export { ListEffectiveDeploymentsRequest };
var ListEffectiveDeploymentsResponse = /** @class */ (function (_super) {
    __extends(ListEffectiveDeploymentsResponse, _super);
    function ListEffectiveDeploymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListEffectiveDeploymentsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListEffectiveDeploymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListEffectiveDeploymentsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListEffectiveDeploymentsResponse)
    ], ListEffectiveDeploymentsResponse.prototype, "listEffectiveDeploymentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListEffectiveDeploymentsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListEffectiveDeploymentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListEffectiveDeploymentsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListEffectiveDeploymentsResponse.prototype, "validationException", void 0);
    return ListEffectiveDeploymentsResponse;
}(SpeakeasyBase));
export { ListEffectiveDeploymentsResponse };
