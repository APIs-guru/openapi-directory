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
var MergeProfilesPathParams = /** @class */ (function (_super) {
    __extends(MergeProfilesPathParams, _super);
    function MergeProfilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" }),
        __metadata("design:type", String)
    ], MergeProfilesPathParams.prototype, "domainName", void 0);
    return MergeProfilesPathParams;
}(SpeakeasyBase));
export { MergeProfilesPathParams };
var MergeProfilesHeaders = /** @class */ (function (_super) {
    __extends(MergeProfilesHeaders, _super);
    function MergeProfilesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], MergeProfilesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], MergeProfilesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], MergeProfilesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], MergeProfilesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], MergeProfilesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], MergeProfilesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], MergeProfilesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return MergeProfilesHeaders;
}(SpeakeasyBase));
export { MergeProfilesHeaders };
// MergeProfilesRequestBodyFieldSourceProfileIds
/**
 * A duplicate customer profile that is to be merged into a main profile.
**/
var MergeProfilesRequestBodyFieldSourceProfileIds = /** @class */ (function (_super) {
    __extends(MergeProfilesRequestBodyFieldSourceProfileIds, _super);
    function MergeProfilesRequestBodyFieldSourceProfileIds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountNumber" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalInformation" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "additionalInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingAddress" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "billingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BirthDate" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "birthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessEmailAddress" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "businessEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessName" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "businessName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessPhoneNumber" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "businessPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailAddress" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Gender" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HomePhoneNumber" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "homePhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MailingAddress" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "mailingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MiddleName" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MobilePhoneNumber" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "mobilePhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartyType" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "partyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PersonalEmailAddress" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "personalEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneNumber" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAddress" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBodyFieldSourceProfileIds.prototype, "shippingAddress", void 0);
    return MergeProfilesRequestBodyFieldSourceProfileIds;
}(SpeakeasyBase));
export { MergeProfilesRequestBodyFieldSourceProfileIds };
var MergeProfilesRequestBody = /** @class */ (function (_super) {
    __extends(MergeProfilesRequestBody, _super);
    function MergeProfilesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FieldSourceProfileIds" }),
        __metadata("design:type", MergeProfilesRequestBodyFieldSourceProfileIds)
    ], MergeProfilesRequestBody.prototype, "fieldSourceProfileIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MainProfileId" }),
        __metadata("design:type", String)
    ], MergeProfilesRequestBody.prototype, "mainProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfileIdsToBeMerged" }),
        __metadata("design:type", Array)
    ], MergeProfilesRequestBody.prototype, "profileIdsToBeMerged", void 0);
    return MergeProfilesRequestBody;
}(SpeakeasyBase));
export { MergeProfilesRequestBody };
var MergeProfilesRequest = /** @class */ (function (_super) {
    __extends(MergeProfilesRequest, _super);
    function MergeProfilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeProfilesPathParams)
    ], MergeProfilesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeProfilesHeaders)
    ], MergeProfilesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MergeProfilesRequestBody)
    ], MergeProfilesRequest.prototype, "request", void 0);
    return MergeProfilesRequest;
}(SpeakeasyBase));
export { MergeProfilesRequest };
var MergeProfilesResponse = /** @class */ (function (_super) {
    __extends(MergeProfilesResponse, _super);
    function MergeProfilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeProfilesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MergeProfilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeProfilesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MergeProfilesResponse)
    ], MergeProfilesResponse.prototype, "mergeProfilesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeProfilesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MergeProfilesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], MergeProfilesResponse.prototype, "throttlingException", void 0);
    return MergeProfilesResponse;
}(SpeakeasyBase));
export { MergeProfilesResponse };
