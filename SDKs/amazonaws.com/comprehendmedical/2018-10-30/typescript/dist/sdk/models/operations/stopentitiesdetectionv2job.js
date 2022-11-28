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
export var StopEntitiesDetectionV2JobXAmzTargetEnum;
(function (StopEntitiesDetectionV2JobXAmzTargetEnum) {
    StopEntitiesDetectionV2JobXAmzTargetEnum["ComprehendMedical20181030StopEntitiesDetectionV2Job"] = "ComprehendMedical_20181030.StopEntitiesDetectionV2Job";
})(StopEntitiesDetectionV2JobXAmzTargetEnum || (StopEntitiesDetectionV2JobXAmzTargetEnum = {}));
var StopEntitiesDetectionV2JobHeaders = /** @class */ (function (_super) {
    __extends(StopEntitiesDetectionV2JobHeaders, _super);
    function StopEntitiesDetectionV2JobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StopEntitiesDetectionV2JobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StopEntitiesDetectionV2JobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StopEntitiesDetectionV2JobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StopEntitiesDetectionV2JobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StopEntitiesDetectionV2JobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StopEntitiesDetectionV2JobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StopEntitiesDetectionV2JobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StopEntitiesDetectionV2JobHeaders.prototype, "xAmzTarget", void 0);
    return StopEntitiesDetectionV2JobHeaders;
}(SpeakeasyBase));
export { StopEntitiesDetectionV2JobHeaders };
var StopEntitiesDetectionV2JobRequest = /** @class */ (function (_super) {
    __extends(StopEntitiesDetectionV2JobRequest, _super);
    function StopEntitiesDetectionV2JobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopEntitiesDetectionV2JobHeaders)
    ], StopEntitiesDetectionV2JobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StopEntitiesDetectionV2JobRequest)
    ], StopEntitiesDetectionV2JobRequest.prototype, "request", void 0);
    return StopEntitiesDetectionV2JobRequest;
}(SpeakeasyBase));
export { StopEntitiesDetectionV2JobRequest };
var StopEntitiesDetectionV2JobResponse = /** @class */ (function (_super) {
    __extends(StopEntitiesDetectionV2JobResponse, _super);
    function StopEntitiesDetectionV2JobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopEntitiesDetectionV2JobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopEntitiesDetectionV2JobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopEntitiesDetectionV2JobResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopEntitiesDetectionV2JobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopEntitiesDetectionV2JobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StopEntitiesDetectionV2JobResponse)
    ], StopEntitiesDetectionV2JobResponse.prototype, "stopEntitiesDetectionV2JobResponse", void 0);
    return StopEntitiesDetectionV2JobResponse;
}(SpeakeasyBase));
export { StopEntitiesDetectionV2JobResponse };
