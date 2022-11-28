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
export var DeleteV2LoggingLevelTargetTypeEnum;
(function (DeleteV2LoggingLevelTargetTypeEnum) {
    DeleteV2LoggingLevelTargetTypeEnum["Default"] = "DEFAULT";
    DeleteV2LoggingLevelTargetTypeEnum["ThingGroup"] = "THING_GROUP";
})(DeleteV2LoggingLevelTargetTypeEnum || (DeleteV2LoggingLevelTargetTypeEnum = {}));
var DeleteV2LoggingLevelQueryParams = /** @class */ (function (_super) {
    __extends(DeleteV2LoggingLevelQueryParams, _super);
    function DeleteV2LoggingLevelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetName" }),
        __metadata("design:type", String)
    ], DeleteV2LoggingLevelQueryParams.prototype, "targetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetType" }),
        __metadata("design:type", String)
    ], DeleteV2LoggingLevelQueryParams.prototype, "targetType", void 0);
    return DeleteV2LoggingLevelQueryParams;
}(SpeakeasyBase));
export { DeleteV2LoggingLevelQueryParams };
var DeleteV2LoggingLevelHeaders = /** @class */ (function (_super) {
    __extends(DeleteV2LoggingLevelHeaders, _super);
    function DeleteV2LoggingLevelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteV2LoggingLevelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteV2LoggingLevelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteV2LoggingLevelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteV2LoggingLevelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteV2LoggingLevelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteV2LoggingLevelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteV2LoggingLevelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteV2LoggingLevelHeaders;
}(SpeakeasyBase));
export { DeleteV2LoggingLevelHeaders };
var DeleteV2LoggingLevelRequest = /** @class */ (function (_super) {
    __extends(DeleteV2LoggingLevelRequest, _super);
    function DeleteV2LoggingLevelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteV2LoggingLevelQueryParams)
    ], DeleteV2LoggingLevelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteV2LoggingLevelHeaders)
    ], DeleteV2LoggingLevelRequest.prototype, "headers", void 0);
    return DeleteV2LoggingLevelRequest;
}(SpeakeasyBase));
export { DeleteV2LoggingLevelRequest };
var DeleteV2LoggingLevelResponse = /** @class */ (function (_super) {
    __extends(DeleteV2LoggingLevelResponse, _super);
    function DeleteV2LoggingLevelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteV2LoggingLevelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteV2LoggingLevelResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteV2LoggingLevelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteV2LoggingLevelResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteV2LoggingLevelResponse.prototype, "statusCode", void 0);
    return DeleteV2LoggingLevelResponse;
}(SpeakeasyBase));
export { DeleteV2LoggingLevelResponse };
