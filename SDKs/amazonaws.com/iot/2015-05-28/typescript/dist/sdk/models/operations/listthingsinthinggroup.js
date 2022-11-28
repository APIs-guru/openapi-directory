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
var ListThingsInThingGroupPathParams = /** @class */ (function (_super) {
    __extends(ListThingsInThingGroupPathParams, _super);
    function ListThingsInThingGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingGroupName" }),
        __metadata("design:type", String)
    ], ListThingsInThingGroupPathParams.prototype, "thingGroupName", void 0);
    return ListThingsInThingGroupPathParams;
}(SpeakeasyBase));
export { ListThingsInThingGroupPathParams };
var ListThingsInThingGroupQueryParams = /** @class */ (function (_super) {
    __extends(ListThingsInThingGroupQueryParams, _super);
    function ListThingsInThingGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListThingsInThingGroupQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListThingsInThingGroupQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" }),
        __metadata("design:type", Boolean)
    ], ListThingsInThingGroupQueryParams.prototype, "recursive", void 0);
    return ListThingsInThingGroupQueryParams;
}(SpeakeasyBase));
export { ListThingsInThingGroupQueryParams };
var ListThingsInThingGroupHeaders = /** @class */ (function (_super) {
    __extends(ListThingsInThingGroupHeaders, _super);
    function ListThingsInThingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListThingsInThingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListThingsInThingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListThingsInThingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListThingsInThingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListThingsInThingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListThingsInThingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListThingsInThingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListThingsInThingGroupHeaders;
}(SpeakeasyBase));
export { ListThingsInThingGroupHeaders };
var ListThingsInThingGroupRequest = /** @class */ (function (_super) {
    __extends(ListThingsInThingGroupRequest, _super);
    function ListThingsInThingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListThingsInThingGroupPathParams)
    ], ListThingsInThingGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListThingsInThingGroupQueryParams)
    ], ListThingsInThingGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListThingsInThingGroupHeaders)
    ], ListThingsInThingGroupRequest.prototype, "headers", void 0);
    return ListThingsInThingGroupRequest;
}(SpeakeasyBase));
export { ListThingsInThingGroupRequest };
var ListThingsInThingGroupResponse = /** @class */ (function (_super) {
    __extends(ListThingsInThingGroupResponse, _super);
    function ListThingsInThingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListThingsInThingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingsInThingGroupResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingsInThingGroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListThingsInThingGroupResponse)
    ], ListThingsInThingGroupResponse.prototype, "listThingsInThingGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingsInThingGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListThingsInThingGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListThingsInThingGroupResponse.prototype, "throttlingException", void 0);
    return ListThingsInThingGroupResponse;
}(SpeakeasyBase));
export { ListThingsInThingGroupResponse };
