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
export var PostApplyPendingMaintenanceActionActionEnum;
(function (PostApplyPendingMaintenanceActionActionEnum) {
    PostApplyPendingMaintenanceActionActionEnum["ApplyPendingMaintenanceAction"] = "ApplyPendingMaintenanceAction";
})(PostApplyPendingMaintenanceActionActionEnum || (PostApplyPendingMaintenanceActionActionEnum = {}));
export var PostApplyPendingMaintenanceActionVersionEnum;
(function (PostApplyPendingMaintenanceActionVersionEnum) {
    PostApplyPendingMaintenanceActionVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostApplyPendingMaintenanceActionVersionEnum || (PostApplyPendingMaintenanceActionVersionEnum = {}));
var PostApplyPendingMaintenanceActionQueryParams = /** @class */ (function (_super) {
    __extends(PostApplyPendingMaintenanceActionQueryParams, _super);
    function PostApplyPendingMaintenanceActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostApplyPendingMaintenanceActionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostApplyPendingMaintenanceActionQueryParams.prototype, "version", void 0);
    return PostApplyPendingMaintenanceActionQueryParams;
}(SpeakeasyBase));
export { PostApplyPendingMaintenanceActionQueryParams };
var PostApplyPendingMaintenanceActionHeaders = /** @class */ (function (_super) {
    __extends(PostApplyPendingMaintenanceActionHeaders, _super);
    function PostApplyPendingMaintenanceActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostApplyPendingMaintenanceActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostApplyPendingMaintenanceActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostApplyPendingMaintenanceActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostApplyPendingMaintenanceActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostApplyPendingMaintenanceActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostApplyPendingMaintenanceActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostApplyPendingMaintenanceActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostApplyPendingMaintenanceActionHeaders;
}(SpeakeasyBase));
export { PostApplyPendingMaintenanceActionHeaders };
var PostApplyPendingMaintenanceActionRequest = /** @class */ (function (_super) {
    __extends(PostApplyPendingMaintenanceActionRequest, _super);
    function PostApplyPendingMaintenanceActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApplyPendingMaintenanceActionQueryParams)
    ], PostApplyPendingMaintenanceActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApplyPendingMaintenanceActionHeaders)
    ], PostApplyPendingMaintenanceActionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostApplyPendingMaintenanceActionRequest.prototype, "request", void 0);
    return PostApplyPendingMaintenanceActionRequest;
}(SpeakeasyBase));
export { PostApplyPendingMaintenanceActionRequest };
var PostApplyPendingMaintenanceActionResponse = /** @class */ (function (_super) {
    __extends(PostApplyPendingMaintenanceActionResponse, _super);
    function PostApplyPendingMaintenanceActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApplyPendingMaintenanceActionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApplyPendingMaintenanceActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApplyPendingMaintenanceActionResponse.prototype, "statusCode", void 0);
    return PostApplyPendingMaintenanceActionResponse;
}(SpeakeasyBase));
export { PostApplyPendingMaintenanceActionResponse };
