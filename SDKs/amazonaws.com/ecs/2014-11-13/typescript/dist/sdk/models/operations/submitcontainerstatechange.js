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
export var SubmitContainerStateChangeXAmzTargetEnum;
(function (SubmitContainerStateChangeXAmzTargetEnum) {
    SubmitContainerStateChangeXAmzTargetEnum["AmazonEc2ContainerServiceV20141113SubmitContainerStateChange"] = "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange";
})(SubmitContainerStateChangeXAmzTargetEnum || (SubmitContainerStateChangeXAmzTargetEnum = {}));
var SubmitContainerStateChangeHeaders = /** @class */ (function (_super) {
    __extends(SubmitContainerStateChangeHeaders, _super);
    function SubmitContainerStateChangeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SubmitContainerStateChangeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SubmitContainerStateChangeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SubmitContainerStateChangeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SubmitContainerStateChangeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SubmitContainerStateChangeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SubmitContainerStateChangeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SubmitContainerStateChangeHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], SubmitContainerStateChangeHeaders.prototype, "xAmzTarget", void 0);
    return SubmitContainerStateChangeHeaders;
}(SpeakeasyBase));
export { SubmitContainerStateChangeHeaders };
var SubmitContainerStateChangeRequest = /** @class */ (function (_super) {
    __extends(SubmitContainerStateChangeRequest, _super);
    function SubmitContainerStateChangeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubmitContainerStateChangeHeaders)
    ], SubmitContainerStateChangeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubmitContainerStateChangeRequest)
    ], SubmitContainerStateChangeRequest.prototype, "request", void 0);
    return SubmitContainerStateChangeRequest;
}(SpeakeasyBase));
export { SubmitContainerStateChangeRequest };
var SubmitContainerStateChangeResponse = /** @class */ (function (_super) {
    __extends(SubmitContainerStateChangeResponse, _super);
    function SubmitContainerStateChangeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitContainerStateChangeResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitContainerStateChangeResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SubmitContainerStateChangeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitContainerStateChangeResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SubmitContainerStateChangeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubmitContainerStateChangeResponse)
    ], SubmitContainerStateChangeResponse.prototype, "submitContainerStateChangeResponse", void 0);
    return SubmitContainerStateChangeResponse;
}(SpeakeasyBase));
export { SubmitContainerStateChangeResponse };
