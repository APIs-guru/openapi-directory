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
var GetComponentVersionArtifactPathParams = /** @class */ (function (_super) {
    __extends(GetComponentVersionArtifactPathParams, _super);
    function GetComponentVersionArtifactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=arn" }),
        __metadata("design:type", String)
    ], GetComponentVersionArtifactPathParams.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactName" }),
        __metadata("design:type", String)
    ], GetComponentVersionArtifactPathParams.prototype, "artifactName", void 0);
    return GetComponentVersionArtifactPathParams;
}(SpeakeasyBase));
export { GetComponentVersionArtifactPathParams };
var GetComponentVersionArtifactHeaders = /** @class */ (function (_super) {
    __extends(GetComponentVersionArtifactHeaders, _super);
    function GetComponentVersionArtifactHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetComponentVersionArtifactHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetComponentVersionArtifactHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetComponentVersionArtifactHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetComponentVersionArtifactHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetComponentVersionArtifactHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetComponentVersionArtifactHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetComponentVersionArtifactHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetComponentVersionArtifactHeaders;
}(SpeakeasyBase));
export { GetComponentVersionArtifactHeaders };
var GetComponentVersionArtifactRequest = /** @class */ (function (_super) {
    __extends(GetComponentVersionArtifactRequest, _super);
    function GetComponentVersionArtifactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetComponentVersionArtifactPathParams)
    ], GetComponentVersionArtifactRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetComponentVersionArtifactHeaders)
    ], GetComponentVersionArtifactRequest.prototype, "headers", void 0);
    return GetComponentVersionArtifactRequest;
}(SpeakeasyBase));
export { GetComponentVersionArtifactRequest };
var GetComponentVersionArtifactResponse = /** @class */ (function (_super) {
    __extends(GetComponentVersionArtifactResponse, _super);
    function GetComponentVersionArtifactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetComponentVersionArtifactResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetComponentVersionArtifactResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetComponentVersionArtifactResponse)
    ], GetComponentVersionArtifactResponse.prototype, "getComponentVersionArtifactResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetComponentVersionArtifactResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetComponentVersionArtifactResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetComponentVersionArtifactResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetComponentVersionArtifactResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetComponentVersionArtifactResponse.prototype, "validationException", void 0);
    return GetComponentVersionArtifactResponse;
}(SpeakeasyBase));
export { GetComponentVersionArtifactResponse };
