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
export var EnableKinesisStreamingDestinationXAmzTargetEnum;
(function (EnableKinesisStreamingDestinationXAmzTargetEnum) {
    EnableKinesisStreamingDestinationXAmzTargetEnum["DynamoDb20120810EnableKinesisStreamingDestination"] = "DynamoDB_20120810.EnableKinesisStreamingDestination";
})(EnableKinesisStreamingDestinationXAmzTargetEnum || (EnableKinesisStreamingDestinationXAmzTargetEnum = {}));
var EnableKinesisStreamingDestinationHeaders = /** @class */ (function (_super) {
    __extends(EnableKinesisStreamingDestinationHeaders, _super);
    function EnableKinesisStreamingDestinationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], EnableKinesisStreamingDestinationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], EnableKinesisStreamingDestinationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], EnableKinesisStreamingDestinationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], EnableKinesisStreamingDestinationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], EnableKinesisStreamingDestinationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], EnableKinesisStreamingDestinationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], EnableKinesisStreamingDestinationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], EnableKinesisStreamingDestinationHeaders.prototype, "xAmzTarget", void 0);
    return EnableKinesisStreamingDestinationHeaders;
}(SpeakeasyBase));
export { EnableKinesisStreamingDestinationHeaders };
var EnableKinesisStreamingDestinationRequest = /** @class */ (function (_super) {
    __extends(EnableKinesisStreamingDestinationRequest, _super);
    function EnableKinesisStreamingDestinationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnableKinesisStreamingDestinationHeaders)
    ], EnableKinesisStreamingDestinationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.KinesisStreamingDestinationInput)
    ], EnableKinesisStreamingDestinationRequest.prototype, "request", void 0);
    return EnableKinesisStreamingDestinationRequest;
}(SpeakeasyBase));
export { EnableKinesisStreamingDestinationRequest };
var EnableKinesisStreamingDestinationResponse = /** @class */ (function (_super) {
    __extends(EnableKinesisStreamingDestinationResponse, _super);
    function EnableKinesisStreamingDestinationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnableKinesisStreamingDestinationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], EnableKinesisStreamingDestinationResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.KinesisStreamingDestinationOutput)
    ], EnableKinesisStreamingDestinationResponse.prototype, "kinesisStreamingDestinationOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], EnableKinesisStreamingDestinationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], EnableKinesisStreamingDestinationResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], EnableKinesisStreamingDestinationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnableKinesisStreamingDestinationResponse.prototype, "statusCode", void 0);
    return EnableKinesisStreamingDestinationResponse;
}(SpeakeasyBase));
export { EnableKinesisStreamingDestinationResponse };
