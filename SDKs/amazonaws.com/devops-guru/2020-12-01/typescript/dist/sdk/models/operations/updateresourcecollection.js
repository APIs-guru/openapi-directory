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
var UpdateResourceCollectionHeaders = /** @class */ (function (_super) {
    __extends(UpdateResourceCollectionHeaders, _super);
    function UpdateResourceCollectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateResourceCollectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateResourceCollectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateResourceCollectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateResourceCollectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateResourceCollectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateResourceCollectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateResourceCollectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateResourceCollectionHeaders;
}(SpeakeasyBase));
export { UpdateResourceCollectionHeaders };
export var UpdateResourceCollectionRequestBodyActionEnum;
(function (UpdateResourceCollectionRequestBodyActionEnum) {
    UpdateResourceCollectionRequestBodyActionEnum["Add"] = "ADD";
    UpdateResourceCollectionRequestBodyActionEnum["Remove"] = "REMOVE";
})(UpdateResourceCollectionRequestBodyActionEnum || (UpdateResourceCollectionRequestBodyActionEnum = {}));
// UpdateResourceCollectionRequestBodyResourceCollection
/**
 *  Contains information used to update a collection of AWS resources.
**/
var UpdateResourceCollectionRequestBodyResourceCollection = /** @class */ (function (_super) {
    __extends(UpdateResourceCollectionRequestBodyResourceCollection, _super);
    function UpdateResourceCollectionRequestBodyResourceCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudFormation" }),
        __metadata("design:type", shared.UpdateCloudFormationCollectionFilter)
    ], UpdateResourceCollectionRequestBodyResourceCollection.prototype, "cloudFormation", void 0);
    return UpdateResourceCollectionRequestBodyResourceCollection;
}(SpeakeasyBase));
export { UpdateResourceCollectionRequestBodyResourceCollection };
var UpdateResourceCollectionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateResourceCollectionRequestBody, _super);
    function UpdateResourceCollectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Action" }),
        __metadata("design:type", String)
    ], UpdateResourceCollectionRequestBody.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceCollection" }),
        __metadata("design:type", UpdateResourceCollectionRequestBodyResourceCollection)
    ], UpdateResourceCollectionRequestBody.prototype, "resourceCollection", void 0);
    return UpdateResourceCollectionRequestBody;
}(SpeakeasyBase));
export { UpdateResourceCollectionRequestBody };
var UpdateResourceCollectionRequest = /** @class */ (function (_super) {
    __extends(UpdateResourceCollectionRequest, _super);
    function UpdateResourceCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateResourceCollectionHeaders)
    ], UpdateResourceCollectionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateResourceCollectionRequestBody)
    ], UpdateResourceCollectionRequest.prototype, "request", void 0);
    return UpdateResourceCollectionRequest;
}(SpeakeasyBase));
export { UpdateResourceCollectionRequest };
var UpdateResourceCollectionResponse = /** @class */ (function (_super) {
    __extends(UpdateResourceCollectionResponse, _super);
    function UpdateResourceCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateResourceCollectionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateResourceCollectionResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateResourceCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateResourceCollectionResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateResourceCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateResourceCollectionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateResourceCollectionResponse.prototype, "updateResourceCollectionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateResourceCollectionResponse.prototype, "validationException", void 0);
    return UpdateResourceCollectionResponse;
}(SpeakeasyBase));
export { UpdateResourceCollectionResponse };
