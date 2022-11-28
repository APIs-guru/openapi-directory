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
var ListThingGroupsForThingPathParams = /** @class */ (function (_super) {
    __extends(ListThingGroupsForThingPathParams, _super);
    function ListThingGroupsForThingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingName" }),
        __metadata("design:type", String)
    ], ListThingGroupsForThingPathParams.prototype, "thingName", void 0);
    return ListThingGroupsForThingPathParams;
}(SpeakeasyBase));
export { ListThingGroupsForThingPathParams };
var ListThingGroupsForThingQueryParams = /** @class */ (function (_super) {
    __extends(ListThingGroupsForThingQueryParams, _super);
    function ListThingGroupsForThingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListThingGroupsForThingQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListThingGroupsForThingQueryParams.prototype, "nextToken", void 0);
    return ListThingGroupsForThingQueryParams;
}(SpeakeasyBase));
export { ListThingGroupsForThingQueryParams };
var ListThingGroupsForThingHeaders = /** @class */ (function (_super) {
    __extends(ListThingGroupsForThingHeaders, _super);
    function ListThingGroupsForThingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListThingGroupsForThingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListThingGroupsForThingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListThingGroupsForThingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListThingGroupsForThingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListThingGroupsForThingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListThingGroupsForThingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListThingGroupsForThingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListThingGroupsForThingHeaders;
}(SpeakeasyBase));
export { ListThingGroupsForThingHeaders };
var ListThingGroupsForThingRequest = /** @class */ (function (_super) {
    __extends(ListThingGroupsForThingRequest, _super);
    function ListThingGroupsForThingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListThingGroupsForThingPathParams)
    ], ListThingGroupsForThingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListThingGroupsForThingQueryParams)
    ], ListThingGroupsForThingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListThingGroupsForThingHeaders)
    ], ListThingGroupsForThingRequest.prototype, "headers", void 0);
    return ListThingGroupsForThingRequest;
}(SpeakeasyBase));
export { ListThingGroupsForThingRequest };
var ListThingGroupsForThingResponse = /** @class */ (function (_super) {
    __extends(ListThingGroupsForThingResponse, _super);
    function ListThingGroupsForThingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListThingGroupsForThingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingGroupsForThingResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingGroupsForThingResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListThingGroupsForThingResponse)
    ], ListThingGroupsForThingResponse.prototype, "listThingGroupsForThingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingGroupsForThingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListThingGroupsForThingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingGroupsForThingResponse.prototype, "throttlingException", void 0);
    return ListThingGroupsForThingResponse;
}(SpeakeasyBase));
export { ListThingGroupsForThingResponse };
