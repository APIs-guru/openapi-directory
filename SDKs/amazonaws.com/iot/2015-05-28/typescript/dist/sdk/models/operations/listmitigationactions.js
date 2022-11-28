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
export var ListMitigationActionsActionTypeEnum;
(function (ListMitigationActionsActionTypeEnum) {
    ListMitigationActionsActionTypeEnum["UpdateDeviceCertificate"] = "UPDATE_DEVICE_CERTIFICATE";
    ListMitigationActionsActionTypeEnum["UpdateCaCertificate"] = "UPDATE_CA_CERTIFICATE";
    ListMitigationActionsActionTypeEnum["AddThingsToThingGroup"] = "ADD_THINGS_TO_THING_GROUP";
    ListMitigationActionsActionTypeEnum["ReplaceDefaultPolicyVersion"] = "REPLACE_DEFAULT_POLICY_VERSION";
    ListMitigationActionsActionTypeEnum["EnableIotLogging"] = "ENABLE_IOT_LOGGING";
    ListMitigationActionsActionTypeEnum["PublishFindingToSns"] = "PUBLISH_FINDING_TO_SNS";
})(ListMitigationActionsActionTypeEnum || (ListMitigationActionsActionTypeEnum = {}));
var ListMitigationActionsQueryParams = /** @class */ (function (_super) {
    __extends(ListMitigationActionsQueryParams, _super);
    function ListMitigationActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=actionType" }),
        __metadata("design:type", String)
    ], ListMitigationActionsQueryParams.prototype, "actionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListMitigationActionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListMitigationActionsQueryParams.prototype, "nextToken", void 0);
    return ListMitigationActionsQueryParams;
}(SpeakeasyBase));
export { ListMitigationActionsQueryParams };
var ListMitigationActionsHeaders = /** @class */ (function (_super) {
    __extends(ListMitigationActionsHeaders, _super);
    function ListMitigationActionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListMitigationActionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListMitigationActionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListMitigationActionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListMitigationActionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListMitigationActionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListMitigationActionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListMitigationActionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListMitigationActionsHeaders;
}(SpeakeasyBase));
export { ListMitigationActionsHeaders };
var ListMitigationActionsRequest = /** @class */ (function (_super) {
    __extends(ListMitigationActionsRequest, _super);
    function ListMitigationActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMitigationActionsQueryParams)
    ], ListMitigationActionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMitigationActionsHeaders)
    ], ListMitigationActionsRequest.prototype, "headers", void 0);
    return ListMitigationActionsRequest;
}(SpeakeasyBase));
export { ListMitigationActionsRequest };
var ListMitigationActionsResponse = /** @class */ (function (_super) {
    __extends(ListMitigationActionsResponse, _super);
    function ListMitigationActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMitigationActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListMitigationActionsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListMitigationActionsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMitigationActionsResponse)
    ], ListMitigationActionsResponse.prototype, "listMitigationActionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMitigationActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListMitigationActionsResponse.prototype, "throttlingException", void 0);
    return ListMitigationActionsResponse;
}(SpeakeasyBase));
export { ListMitigationActionsResponse };
