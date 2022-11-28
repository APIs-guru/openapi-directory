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
var UpdateProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateProfilePathParams, _super);
    function UpdateProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" }),
        __metadata("design:type", String)
    ], UpdateProfilePathParams.prototype, "domainName", void 0);
    return UpdateProfilePathParams;
}(SpeakeasyBase));
export { UpdateProfilePathParams };
var UpdateProfileHeaders = /** @class */ (function (_super) {
    __extends(UpdateProfileHeaders, _super);
    function UpdateProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateProfileHeaders;
}(SpeakeasyBase));
export { UpdateProfileHeaders };
// UpdateProfileRequestBodyAddress
/**
 * Updates associated with the address properties of a customer profile.
**/
var UpdateProfileRequestBodyAddress = /** @class */ (function (_super) {
    __extends(UpdateProfileRequestBodyAddress, _super);
    function UpdateProfileRequestBodyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address1" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address2" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address3" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyAddress.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address4" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyAddress.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=County" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Province" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyAddress.prototype, "province", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyAddress.prototype, "state", void 0);
    return UpdateProfileRequestBodyAddress;
}(SpeakeasyBase));
export { UpdateProfileRequestBodyAddress };
// UpdateProfileRequestBodyBillingAddress
/**
 * Updates associated with the address properties of a customer profile.
**/
var UpdateProfileRequestBodyBillingAddress = /** @class */ (function (_super) {
    __extends(UpdateProfileRequestBodyBillingAddress, _super);
    function UpdateProfileRequestBodyBillingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address1" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyBillingAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address2" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyBillingAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address3" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyBillingAddress.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address4" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyBillingAddress.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyBillingAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyBillingAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=County" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyBillingAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyBillingAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Province" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyBillingAddress.prototype, "province", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyBillingAddress.prototype, "state", void 0);
    return UpdateProfileRequestBodyBillingAddress;
}(SpeakeasyBase));
export { UpdateProfileRequestBodyBillingAddress };
export var UpdateProfileRequestBodyGenderEnum;
(function (UpdateProfileRequestBodyGenderEnum) {
    UpdateProfileRequestBodyGenderEnum["Male"] = "MALE";
    UpdateProfileRequestBodyGenderEnum["Female"] = "FEMALE";
    UpdateProfileRequestBodyGenderEnum["Unspecified"] = "UNSPECIFIED";
})(UpdateProfileRequestBodyGenderEnum || (UpdateProfileRequestBodyGenderEnum = {}));
// UpdateProfileRequestBodyMailingAddress
/**
 * Updates associated with the address properties of a customer profile.
**/
var UpdateProfileRequestBodyMailingAddress = /** @class */ (function (_super) {
    __extends(UpdateProfileRequestBodyMailingAddress, _super);
    function UpdateProfileRequestBodyMailingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address1" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyMailingAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address2" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyMailingAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address3" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyMailingAddress.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address4" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyMailingAddress.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyMailingAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyMailingAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=County" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyMailingAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyMailingAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Province" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyMailingAddress.prototype, "province", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyMailingAddress.prototype, "state", void 0);
    return UpdateProfileRequestBodyMailingAddress;
}(SpeakeasyBase));
export { UpdateProfileRequestBodyMailingAddress };
export var UpdateProfileRequestBodyPartyTypeEnum;
(function (UpdateProfileRequestBodyPartyTypeEnum) {
    UpdateProfileRequestBodyPartyTypeEnum["Individual"] = "INDIVIDUAL";
    UpdateProfileRequestBodyPartyTypeEnum["Business"] = "BUSINESS";
    UpdateProfileRequestBodyPartyTypeEnum["Other"] = "OTHER";
})(UpdateProfileRequestBodyPartyTypeEnum || (UpdateProfileRequestBodyPartyTypeEnum = {}));
// UpdateProfileRequestBodyShippingAddress
/**
 * Updates associated with the address properties of a customer profile.
**/
var UpdateProfileRequestBodyShippingAddress = /** @class */ (function (_super) {
    __extends(UpdateProfileRequestBodyShippingAddress, _super);
    function UpdateProfileRequestBodyShippingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address1" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyShippingAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address2" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyShippingAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address3" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyShippingAddress.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address4" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyShippingAddress.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyShippingAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyShippingAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=County" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyShippingAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyShippingAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Province" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyShippingAddress.prototype, "province", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBodyShippingAddress.prototype, "state", void 0);
    return UpdateProfileRequestBodyShippingAddress;
}(SpeakeasyBase));
export { UpdateProfileRequestBodyShippingAddress };
var UpdateProfileRequestBody = /** @class */ (function (_super) {
    __extends(UpdateProfileRequestBody, _super);
    function UpdateProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountNumber" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalInformation" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "additionalInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", UpdateProfileRequestBodyAddress)
    ], UpdateProfileRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], UpdateProfileRequestBody.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingAddress" }),
        __metadata("design:type", UpdateProfileRequestBodyBillingAddress)
    ], UpdateProfileRequestBody.prototype, "billingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BirthDate" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "birthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessEmailAddress" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "businessEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessName" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "businessName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessPhoneNumber" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "businessPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailAddress" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Gender" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HomePhoneNumber" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "homePhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MailingAddress" }),
        __metadata("design:type", UpdateProfileRequestBodyMailingAddress)
    ], UpdateProfileRequestBody.prototype, "mailingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MiddleName" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MobilePhoneNumber" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "mobilePhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartyType" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "partyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PersonalEmailAddress" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "personalEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneNumber" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfileId" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAddress" }),
        __metadata("design:type", UpdateProfileRequestBodyShippingAddress)
    ], UpdateProfileRequestBody.prototype, "shippingAddress", void 0);
    return UpdateProfileRequestBody;
}(SpeakeasyBase));
export { UpdateProfileRequestBody };
var UpdateProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateProfileRequest, _super);
    function UpdateProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProfilePathParams)
    ], UpdateProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProfileHeaders)
    ], UpdateProfileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateProfileRequestBody)
    ], UpdateProfileRequest.prototype, "request", void 0);
    return UpdateProfileRequest;
}(SpeakeasyBase));
export { UpdateProfileRequest };
var UpdateProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateProfileResponse, _super);
    function UpdateProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProfileResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProfileResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProfileResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProfileResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProfileResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateProfileResponse)
    ], UpdateProfileResponse.prototype, "updateProfileResponse", void 0);
    return UpdateProfileResponse;
}(SpeakeasyBase));
export { UpdateProfileResponse };
