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
var CreateProfilePathParams = /** @class */ (function (_super) {
    __extends(CreateProfilePathParams, _super);
    function CreateProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" }),
        __metadata("design:type", String)
    ], CreateProfilePathParams.prototype, "domainName", void 0);
    return CreateProfilePathParams;
}(SpeakeasyBase));
export { CreateProfilePathParams };
var CreateProfileHeaders = /** @class */ (function (_super) {
    __extends(CreateProfileHeaders, _super);
    function CreateProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateProfileHeaders;
}(SpeakeasyBase));
export { CreateProfileHeaders };
// CreateProfileRequestBodyAddress
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
var CreateProfileRequestBodyAddress = /** @class */ (function (_super) {
    __extends(CreateProfileRequestBodyAddress, _super);
    function CreateProfileRequestBodyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address1" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address2" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address3" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyAddress.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address4" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyAddress.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=County" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Province" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyAddress.prototype, "province", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyAddress.prototype, "state", void 0);
    return CreateProfileRequestBodyAddress;
}(SpeakeasyBase));
export { CreateProfileRequestBodyAddress };
// CreateProfileRequestBodyBillingAddress
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
var CreateProfileRequestBodyBillingAddress = /** @class */ (function (_super) {
    __extends(CreateProfileRequestBodyBillingAddress, _super);
    function CreateProfileRequestBodyBillingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address1" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyBillingAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address2" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyBillingAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address3" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyBillingAddress.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address4" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyBillingAddress.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyBillingAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyBillingAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=County" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyBillingAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyBillingAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Province" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyBillingAddress.prototype, "province", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyBillingAddress.prototype, "state", void 0);
    return CreateProfileRequestBodyBillingAddress;
}(SpeakeasyBase));
export { CreateProfileRequestBodyBillingAddress };
export var CreateProfileRequestBodyGenderEnum;
(function (CreateProfileRequestBodyGenderEnum) {
    CreateProfileRequestBodyGenderEnum["Male"] = "MALE";
    CreateProfileRequestBodyGenderEnum["Female"] = "FEMALE";
    CreateProfileRequestBodyGenderEnum["Unspecified"] = "UNSPECIFIED";
})(CreateProfileRequestBodyGenderEnum || (CreateProfileRequestBodyGenderEnum = {}));
// CreateProfileRequestBodyMailingAddress
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
var CreateProfileRequestBodyMailingAddress = /** @class */ (function (_super) {
    __extends(CreateProfileRequestBodyMailingAddress, _super);
    function CreateProfileRequestBodyMailingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address1" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyMailingAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address2" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyMailingAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address3" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyMailingAddress.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address4" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyMailingAddress.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyMailingAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyMailingAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=County" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyMailingAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyMailingAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Province" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyMailingAddress.prototype, "province", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyMailingAddress.prototype, "state", void 0);
    return CreateProfileRequestBodyMailingAddress;
}(SpeakeasyBase));
export { CreateProfileRequestBodyMailingAddress };
export var CreateProfileRequestBodyPartyTypeEnum;
(function (CreateProfileRequestBodyPartyTypeEnum) {
    CreateProfileRequestBodyPartyTypeEnum["Individual"] = "INDIVIDUAL";
    CreateProfileRequestBodyPartyTypeEnum["Business"] = "BUSINESS";
    CreateProfileRequestBodyPartyTypeEnum["Other"] = "OTHER";
})(CreateProfileRequestBodyPartyTypeEnum || (CreateProfileRequestBodyPartyTypeEnum = {}));
// CreateProfileRequestBodyShippingAddress
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
var CreateProfileRequestBodyShippingAddress = /** @class */ (function (_super) {
    __extends(CreateProfileRequestBodyShippingAddress, _super);
    function CreateProfileRequestBodyShippingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address1" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyShippingAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address2" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyShippingAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address3" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyShippingAddress.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address4" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyShippingAddress.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyShippingAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyShippingAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=County" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyShippingAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyShippingAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Province" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyShippingAddress.prototype, "province", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBodyShippingAddress.prototype, "state", void 0);
    return CreateProfileRequestBodyShippingAddress;
}(SpeakeasyBase));
export { CreateProfileRequestBodyShippingAddress };
var CreateProfileRequestBody = /** @class */ (function (_super) {
    __extends(CreateProfileRequestBody, _super);
    function CreateProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountNumber" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalInformation" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "additionalInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", CreateProfileRequestBodyAddress)
    ], CreateProfileRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], CreateProfileRequestBody.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingAddress" }),
        __metadata("design:type", CreateProfileRequestBodyBillingAddress)
    ], CreateProfileRequestBody.prototype, "billingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BirthDate" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "birthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessEmailAddress" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "businessEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessName" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "businessName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessPhoneNumber" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "businessPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailAddress" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Gender" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HomePhoneNumber" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "homePhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MailingAddress" }),
        __metadata("design:type", CreateProfileRequestBodyMailingAddress)
    ], CreateProfileRequestBody.prototype, "mailingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MiddleName" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MobilePhoneNumber" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "mobilePhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartyType" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "partyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PersonalEmailAddress" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "personalEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneNumber" }),
        __metadata("design:type", String)
    ], CreateProfileRequestBody.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAddress" }),
        __metadata("design:type", CreateProfileRequestBodyShippingAddress)
    ], CreateProfileRequestBody.prototype, "shippingAddress", void 0);
    return CreateProfileRequestBody;
}(SpeakeasyBase));
export { CreateProfileRequestBody };
var CreateProfileRequest = /** @class */ (function (_super) {
    __extends(CreateProfileRequest, _super);
    function CreateProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProfilePathParams)
    ], CreateProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProfileHeaders)
    ], CreateProfileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateProfileRequestBody)
    ], CreateProfileRequest.prototype, "request", void 0);
    return CreateProfileRequest;
}(SpeakeasyBase));
export { CreateProfileRequest };
var CreateProfileResponse = /** @class */ (function (_super) {
    __extends(CreateProfileResponse, _super);
    function CreateProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProfileResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProfileResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateProfileResponse)
    ], CreateProfileResponse.prototype, "createProfileResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProfileResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProfileResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProfileResponse.prototype, "throttlingException", void 0);
    return CreateProfileResponse;
}(SpeakeasyBase));
export { CreateProfileResponse };
