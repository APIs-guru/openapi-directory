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
var DeleteDynamicThingGroupPathParams = /** @class */ (function (_super) {
    __extends(DeleteDynamicThingGroupPathParams, _super);
    function DeleteDynamicThingGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingGroupName" }),
        __metadata("design:type", String)
    ], DeleteDynamicThingGroupPathParams.prototype, "thingGroupName", void 0);
    return DeleteDynamicThingGroupPathParams;
}(SpeakeasyBase));
export { DeleteDynamicThingGroupPathParams };
var DeleteDynamicThingGroupQueryParams = /** @class */ (function (_super) {
    __extends(DeleteDynamicThingGroupQueryParams, _super);
    function DeleteDynamicThingGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expectedVersion" }),
        __metadata("design:type", Number)
    ], DeleteDynamicThingGroupQueryParams.prototype, "expectedVersion", void 0);
    return DeleteDynamicThingGroupQueryParams;
}(SpeakeasyBase));
export { DeleteDynamicThingGroupQueryParams };
var DeleteDynamicThingGroupHeaders = /** @class */ (function (_super) {
    __extends(DeleteDynamicThingGroupHeaders, _super);
    function DeleteDynamicThingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteDynamicThingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteDynamicThingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteDynamicThingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteDynamicThingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteDynamicThingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteDynamicThingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteDynamicThingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteDynamicThingGroupHeaders;
}(SpeakeasyBase));
export { DeleteDynamicThingGroupHeaders };
var DeleteDynamicThingGroupRequest = /** @class */ (function (_super) {
    __extends(DeleteDynamicThingGroupRequest, _super);
    function DeleteDynamicThingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDynamicThingGroupPathParams)
    ], DeleteDynamicThingGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDynamicThingGroupQueryParams)
    ], DeleteDynamicThingGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDynamicThingGroupHeaders)
    ], DeleteDynamicThingGroupRequest.prototype, "headers", void 0);
    return DeleteDynamicThingGroupRequest;
}(SpeakeasyBase));
export { DeleteDynamicThingGroupRequest };
var DeleteDynamicThingGroupResponse = /** @class */ (function (_super) {
    __extends(DeleteDynamicThingGroupResponse, _super);
    function DeleteDynamicThingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDynamicThingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteDynamicThingGroupResponse.prototype, "deleteDynamicThingGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteDynamicThingGroupResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteDynamicThingGroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDynamicThingGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteDynamicThingGroupResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteDynamicThingGroupResponse.prototype, "versionConflictException", void 0);
    return DeleteDynamicThingGroupResponse;
}(SpeakeasyBase));
export { DeleteDynamicThingGroupResponse };
