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
export var ListV2LoggingLevelsTargetTypeEnum;
(function (ListV2LoggingLevelsTargetTypeEnum) {
    ListV2LoggingLevelsTargetTypeEnum["Default"] = "DEFAULT";
    ListV2LoggingLevelsTargetTypeEnum["ThingGroup"] = "THING_GROUP";
})(ListV2LoggingLevelsTargetTypeEnum || (ListV2LoggingLevelsTargetTypeEnum = {}));
var ListV2LoggingLevelsQueryParams = /** @class */ (function (_super) {
    __extends(ListV2LoggingLevelsQueryParams, _super);
    function ListV2LoggingLevelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListV2LoggingLevelsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListV2LoggingLevelsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetType" }),
        __metadata("design:type", String)
    ], ListV2LoggingLevelsQueryParams.prototype, "targetType", void 0);
    return ListV2LoggingLevelsQueryParams;
}(SpeakeasyBase));
export { ListV2LoggingLevelsQueryParams };
var ListV2LoggingLevelsHeaders = /** @class */ (function (_super) {
    __extends(ListV2LoggingLevelsHeaders, _super);
    function ListV2LoggingLevelsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListV2LoggingLevelsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListV2LoggingLevelsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListV2LoggingLevelsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListV2LoggingLevelsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListV2LoggingLevelsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListV2LoggingLevelsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListV2LoggingLevelsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListV2LoggingLevelsHeaders;
}(SpeakeasyBase));
export { ListV2LoggingLevelsHeaders };
var ListV2LoggingLevelsRequest = /** @class */ (function (_super) {
    __extends(ListV2LoggingLevelsRequest, _super);
    function ListV2LoggingLevelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListV2LoggingLevelsQueryParams)
    ], ListV2LoggingLevelsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListV2LoggingLevelsHeaders)
    ], ListV2LoggingLevelsRequest.prototype, "headers", void 0);
    return ListV2LoggingLevelsRequest;
}(SpeakeasyBase));
export { ListV2LoggingLevelsRequest };
var ListV2LoggingLevelsResponse = /** @class */ (function (_super) {
    __extends(ListV2LoggingLevelsResponse, _super);
    function ListV2LoggingLevelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListV2LoggingLevelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListV2LoggingLevelsResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListV2LoggingLevelsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListV2LoggingLevelsResponse)
    ], ListV2LoggingLevelsResponse.prototype, "listV2LoggingLevelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListV2LoggingLevelsResponse.prototype, "notConfiguredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListV2LoggingLevelsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListV2LoggingLevelsResponse.prototype, "statusCode", void 0);
    return ListV2LoggingLevelsResponse;
}(SpeakeasyBase));
export { ListV2LoggingLevelsResponse };
