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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GetReplaceIamInstanceProfileAssociationActionEnum;
(function (GetReplaceIamInstanceProfileAssociationActionEnum) {
    GetReplaceIamInstanceProfileAssociationActionEnum["ReplaceIamInstanceProfileAssociation"] = "ReplaceIamInstanceProfileAssociation";
})(GetReplaceIamInstanceProfileAssociationActionEnum || (GetReplaceIamInstanceProfileAssociationActionEnum = {}));
// GetReplaceIamInstanceProfileAssociationIamInstanceProfile
/**
 * Describes an IAM instance profile.
**/
var GetReplaceIamInstanceProfileAssociationIamInstanceProfile = /** @class */ (function (_super) {
    __extends(GetReplaceIamInstanceProfileAssociationIamInstanceProfile, _super);
    function GetReplaceIamInstanceProfileAssociationIamInstanceProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=Arn" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationIamInstanceProfile.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=Name" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationIamInstanceProfile.prototype, "name", void 0);
    return GetReplaceIamInstanceProfileAssociationIamInstanceProfile;
}(SpeakeasyBase));
export { GetReplaceIamInstanceProfileAssociationIamInstanceProfile };
export var GetReplaceIamInstanceProfileAssociationVersionEnum;
(function (GetReplaceIamInstanceProfileAssociationVersionEnum) {
    GetReplaceIamInstanceProfileAssociationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetReplaceIamInstanceProfileAssociationVersionEnum || (GetReplaceIamInstanceProfileAssociationVersionEnum = {}));
var GetReplaceIamInstanceProfileAssociationQueryParams = /** @class */ (function (_super) {
    __extends(GetReplaceIamInstanceProfileAssociationQueryParams, _super);
    function GetReplaceIamInstanceProfileAssociationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AssociationId" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationQueryParams.prototype, "associationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IamInstanceProfile" }),
        __metadata("design:type", GetReplaceIamInstanceProfileAssociationIamInstanceProfile)
    ], GetReplaceIamInstanceProfileAssociationQueryParams.prototype, "iamInstanceProfile", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationQueryParams.prototype, "version", void 0);
    return GetReplaceIamInstanceProfileAssociationQueryParams;
}(SpeakeasyBase));
export { GetReplaceIamInstanceProfileAssociationQueryParams };
var GetReplaceIamInstanceProfileAssociationHeaders = /** @class */ (function (_super) {
    __extends(GetReplaceIamInstanceProfileAssociationHeaders, _super);
    function GetReplaceIamInstanceProfileAssociationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetReplaceIamInstanceProfileAssociationHeaders;
}(SpeakeasyBase));
export { GetReplaceIamInstanceProfileAssociationHeaders };
var GetReplaceIamInstanceProfileAssociationRequest = /** @class */ (function (_super) {
    __extends(GetReplaceIamInstanceProfileAssociationRequest, _super);
    function GetReplaceIamInstanceProfileAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetReplaceIamInstanceProfileAssociationQueryParams)
    ], GetReplaceIamInstanceProfileAssociationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetReplaceIamInstanceProfileAssociationHeaders)
    ], GetReplaceIamInstanceProfileAssociationRequest.prototype, "headers", void 0);
    return GetReplaceIamInstanceProfileAssociationRequest;
}(SpeakeasyBase));
export { GetReplaceIamInstanceProfileAssociationRequest };
var GetReplaceIamInstanceProfileAssociationResponse = /** @class */ (function (_super) {
    __extends(GetReplaceIamInstanceProfileAssociationResponse, _super);
    function GetReplaceIamInstanceProfileAssociationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetReplaceIamInstanceProfileAssociationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetReplaceIamInstanceProfileAssociationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetReplaceIamInstanceProfileAssociationResponse.prototype, "statusCode", void 0);
    return GetReplaceIamInstanceProfileAssociationResponse;
}(SpeakeasyBase));
export { GetReplaceIamInstanceProfileAssociationResponse };
