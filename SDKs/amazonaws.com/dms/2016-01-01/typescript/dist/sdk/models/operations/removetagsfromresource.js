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
export var RemoveTagsFromResourceXAmzTargetEnum;
(function (RemoveTagsFromResourceXAmzTargetEnum) {
    RemoveTagsFromResourceXAmzTargetEnum["AmazonDmSv20160101RemoveTagsFromResource"] = "AmazonDMSv20160101.RemoveTagsFromResource";
})(RemoveTagsFromResourceXAmzTargetEnum || (RemoveTagsFromResourceXAmzTargetEnum = {}));
var RemoveTagsFromResourceHeaders = /** @class */ (function (_super) {
    __extends(RemoveTagsFromResourceHeaders, _super);
    function RemoveTagsFromResourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RemoveTagsFromResourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RemoveTagsFromResourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RemoveTagsFromResourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RemoveTagsFromResourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RemoveTagsFromResourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RemoveTagsFromResourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RemoveTagsFromResourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], RemoveTagsFromResourceHeaders.prototype, "xAmzTarget", void 0);
    return RemoveTagsFromResourceHeaders;
}(SpeakeasyBase));
export { RemoveTagsFromResourceHeaders };
var RemoveTagsFromResourceRequest = /** @class */ (function (_super) {
    __extends(RemoveTagsFromResourceRequest, _super);
    function RemoveTagsFromResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveTagsFromResourceHeaders)
    ], RemoveTagsFromResourceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveTagsFromResourceMessage)
    ], RemoveTagsFromResourceRequest.prototype, "request", void 0);
    return RemoveTagsFromResourceRequest;
}(SpeakeasyBase));
export { RemoveTagsFromResourceRequest };
var RemoveTagsFromResourceResponse = /** @class */ (function (_super) {
    __extends(RemoveTagsFromResourceResponse, _super);
    function RemoveTagsFromResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveTagsFromResourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RemoveTagsFromResourceResponse.prototype, "removeTagsFromResourceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveTagsFromResourceResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveTagsFromResourceResponse.prototype, "statusCode", void 0);
    return RemoveTagsFromResourceResponse;
}(SpeakeasyBase));
export { RemoveTagsFromResourceResponse };
