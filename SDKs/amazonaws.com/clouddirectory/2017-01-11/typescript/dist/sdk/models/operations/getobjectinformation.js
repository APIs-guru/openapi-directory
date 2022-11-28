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
export var GetObjectInformationXAmzConsistencyLevelEnum;
(function (GetObjectInformationXAmzConsistencyLevelEnum) {
    GetObjectInformationXAmzConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    GetObjectInformationXAmzConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(GetObjectInformationXAmzConsistencyLevelEnum || (GetObjectInformationXAmzConsistencyLevelEnum = {}));
var GetObjectInformationHeaders = /** @class */ (function (_super) {
    __extends(GetObjectInformationHeaders, _super);
    function GetObjectInformationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetObjectInformationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetObjectInformationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetObjectInformationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetObjectInformationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetObjectInformationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetObjectInformationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetObjectInformationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" }),
        __metadata("design:type", String)
    ], GetObjectInformationHeaders.prototype, "xAmzConsistencyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], GetObjectInformationHeaders.prototype, "xAmzDataPartition", void 0);
    return GetObjectInformationHeaders;
}(SpeakeasyBase));
export { GetObjectInformationHeaders };
// GetObjectInformationRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var GetObjectInformationRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(GetObjectInformationRequestBodyObjectReference, _super);
    function GetObjectInformationRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], GetObjectInformationRequestBodyObjectReference.prototype, "selector", void 0);
    return GetObjectInformationRequestBodyObjectReference;
}(SpeakeasyBase));
export { GetObjectInformationRequestBodyObjectReference };
var GetObjectInformationRequestBody = /** @class */ (function (_super) {
    __extends(GetObjectInformationRequestBody, _super);
    function GetObjectInformationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectReference" }),
        __metadata("design:type", GetObjectInformationRequestBodyObjectReference)
    ], GetObjectInformationRequestBody.prototype, "objectReference", void 0);
    return GetObjectInformationRequestBody;
}(SpeakeasyBase));
export { GetObjectInformationRequestBody };
var GetObjectInformationRequest = /** @class */ (function (_super) {
    __extends(GetObjectInformationRequest, _super);
    function GetObjectInformationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectInformationHeaders)
    ], GetObjectInformationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetObjectInformationRequestBody)
    ], GetObjectInformationRequest.prototype, "request", void 0);
    return GetObjectInformationRequest;
}(SpeakeasyBase));
export { GetObjectInformationRequest };
var GetObjectInformationResponse = /** @class */ (function (_super) {
    __extends(GetObjectInformationResponse, _super);
    function GetObjectInformationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetObjectInformationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectInformationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetObjectInformationResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetObjectInformationResponse)
    ], GetObjectInformationResponse.prototype, "getObjectInformationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetObjectInformationResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetObjectInformationResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetObjectInformationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetObjectInformationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetObjectInformationResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObjectInformationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetObjectInformationResponse.prototype, "validationException", void 0);
    return GetObjectInformationResponse;
}(SpeakeasyBase));
export { GetObjectInformationResponse };
