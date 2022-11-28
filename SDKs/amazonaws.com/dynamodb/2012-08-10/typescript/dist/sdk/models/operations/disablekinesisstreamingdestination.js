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
export var DisableKinesisStreamingDestinationXAmzTargetEnum;
(function (DisableKinesisStreamingDestinationXAmzTargetEnum) {
    DisableKinesisStreamingDestinationXAmzTargetEnum["DynamoDb20120810DisableKinesisStreamingDestination"] = "DynamoDB_20120810.DisableKinesisStreamingDestination";
})(DisableKinesisStreamingDestinationXAmzTargetEnum || (DisableKinesisStreamingDestinationXAmzTargetEnum = {}));
var DisableKinesisStreamingDestinationHeaders = /** @class */ (function (_super) {
    __extends(DisableKinesisStreamingDestinationHeaders, _super);
    function DisableKinesisStreamingDestinationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisableKinesisStreamingDestinationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisableKinesisStreamingDestinationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisableKinesisStreamingDestinationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisableKinesisStreamingDestinationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisableKinesisStreamingDestinationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisableKinesisStreamingDestinationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisableKinesisStreamingDestinationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DisableKinesisStreamingDestinationHeaders.prototype, "xAmzTarget", void 0);
    return DisableKinesisStreamingDestinationHeaders;
}(SpeakeasyBase));
export { DisableKinesisStreamingDestinationHeaders };
var DisableKinesisStreamingDestinationRequest = /** @class */ (function (_super) {
    __extends(DisableKinesisStreamingDestinationRequest, _super);
    function DisableKinesisStreamingDestinationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisableKinesisStreamingDestinationHeaders)
    ], DisableKinesisStreamingDestinationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.KinesisStreamingDestinationInput)
    ], DisableKinesisStreamingDestinationRequest.prototype, "request", void 0);
    return DisableKinesisStreamingDestinationRequest;
}(SpeakeasyBase));
export { DisableKinesisStreamingDestinationRequest };
var DisableKinesisStreamingDestinationResponse = /** @class */ (function (_super) {
    __extends(DisableKinesisStreamingDestinationResponse, _super);
    function DisableKinesisStreamingDestinationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisableKinesisStreamingDestinationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisableKinesisStreamingDestinationResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.KinesisStreamingDestinationOutput)
    ], DisableKinesisStreamingDestinationResponse.prototype, "kinesisStreamingDestinationOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisableKinesisStreamingDestinationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisableKinesisStreamingDestinationResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisableKinesisStreamingDestinationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisableKinesisStreamingDestinationResponse.prototype, "statusCode", void 0);
    return DisableKinesisStreamingDestinationResponse;
}(SpeakeasyBase));
export { DisableKinesisStreamingDestinationResponse };
