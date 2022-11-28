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
var GetExclusionsPreviewQueryParams = /** @class */ (function (_super) {
    __extends(GetExclusionsPreviewQueryParams, _super);
    function GetExclusionsPreviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], GetExclusionsPreviewQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetExclusionsPreviewQueryParams.prototype, "nextToken", void 0);
    return GetExclusionsPreviewQueryParams;
}(SpeakeasyBase));
export { GetExclusionsPreviewQueryParams };
export var GetExclusionsPreviewXAmzTargetEnum;
(function (GetExclusionsPreviewXAmzTargetEnum) {
    GetExclusionsPreviewXAmzTargetEnum["InspectorServiceGetExclusionsPreview"] = "InspectorService.GetExclusionsPreview";
})(GetExclusionsPreviewXAmzTargetEnum || (GetExclusionsPreviewXAmzTargetEnum = {}));
var GetExclusionsPreviewHeaders = /** @class */ (function (_super) {
    __extends(GetExclusionsPreviewHeaders, _super);
    function GetExclusionsPreviewHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetExclusionsPreviewHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetExclusionsPreviewHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetExclusionsPreviewHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetExclusionsPreviewHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetExclusionsPreviewHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetExclusionsPreviewHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetExclusionsPreviewHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetExclusionsPreviewHeaders.prototype, "xAmzTarget", void 0);
    return GetExclusionsPreviewHeaders;
}(SpeakeasyBase));
export { GetExclusionsPreviewHeaders };
var GetExclusionsPreviewRequest = /** @class */ (function (_super) {
    __extends(GetExclusionsPreviewRequest, _super);
    function GetExclusionsPreviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExclusionsPreviewQueryParams)
    ], GetExclusionsPreviewRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExclusionsPreviewHeaders)
    ], GetExclusionsPreviewRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetExclusionsPreviewRequest)
    ], GetExclusionsPreviewRequest.prototype, "request", void 0);
    return GetExclusionsPreviewRequest;
}(SpeakeasyBase));
export { GetExclusionsPreviewRequest };
var GetExclusionsPreviewResponse = /** @class */ (function (_super) {
    __extends(GetExclusionsPreviewResponse, _super);
    function GetExclusionsPreviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetExclusionsPreviewResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetExclusionsPreviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetExclusionsPreviewResponse)
    ], GetExclusionsPreviewResponse.prototype, "getExclusionsPreviewResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetExclusionsPreviewResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetExclusionsPreviewResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetExclusionsPreviewResponse.prototype, "noSuchEntityException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetExclusionsPreviewResponse.prototype, "statusCode", void 0);
    return GetExclusionsPreviewResponse;
}(SpeakeasyBase));
export { GetExclusionsPreviewResponse };
