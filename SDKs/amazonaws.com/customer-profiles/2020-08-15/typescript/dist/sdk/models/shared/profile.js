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
import { Address } from "./address";
import { GenderEnum } from "./genderenum";
import { PartyTypeEnum } from "./partytypeenum";
// Profile
/**
 * The standard profile of a customer.
**/
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountNumber" }),
        __metadata("design:type", String)
    ], Profile.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalInformation" }),
        __metadata("design:type", String)
    ], Profile.prototype, "additionalInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", Address)
    ], Profile.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], Profile.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingAddress" }),
        __metadata("design:type", Address)
    ], Profile.prototype, "billingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BirthDate" }),
        __metadata("design:type", String)
    ], Profile.prototype, "birthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessEmailAddress" }),
        __metadata("design:type", String)
    ], Profile.prototype, "businessEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessName" }),
        __metadata("design:type", String)
    ], Profile.prototype, "businessName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessPhoneNumber" }),
        __metadata("design:type", String)
    ], Profile.prototype, "businessPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailAddress" }),
        __metadata("design:type", String)
    ], Profile.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], Profile.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Gender" }),
        __metadata("design:type", String)
    ], Profile.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HomePhoneNumber" }),
        __metadata("design:type", String)
    ], Profile.prototype, "homePhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], Profile.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MailingAddress" }),
        __metadata("design:type", Address)
    ], Profile.prototype, "mailingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MiddleName" }),
        __metadata("design:type", String)
    ], Profile.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MobilePhoneNumber" }),
        __metadata("design:type", String)
    ], Profile.prototype, "mobilePhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartyType" }),
        __metadata("design:type", String)
    ], Profile.prototype, "partyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PersonalEmailAddress" }),
        __metadata("design:type", String)
    ], Profile.prototype, "personalEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneNumber" }),
        __metadata("design:type", String)
    ], Profile.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfileId" }),
        __metadata("design:type", String)
    ], Profile.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingAddress" }),
        __metadata("design:type", Address)
    ], Profile.prototype, "shippingAddress", void 0);
    return Profile;
}(SpeakeasyBase));
export { Profile };
