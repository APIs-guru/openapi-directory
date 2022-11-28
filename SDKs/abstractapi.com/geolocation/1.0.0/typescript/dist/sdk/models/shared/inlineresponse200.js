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
var InlineResponse200Connection = /** @class */ (function (_super) {
    __extends(InlineResponse200Connection, _super);
    function InlineResponse200Connection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autonomous_system_number" }),
        __metadata("design:type", Number)
    ], InlineResponse200Connection.prototype, "autonomousSystemNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autonomous_system_organization" }),
        __metadata("design:type", String)
    ], InlineResponse200Connection.prototype, "autonomousSystemOrganization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_type" }),
        __metadata("design:type", String)
    ], InlineResponse200Connection.prototype, "connectionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isp_name" }),
        __metadata("design:type", String)
    ], InlineResponse200Connection.prototype, "ispName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_name" }),
        __metadata("design:type", String)
    ], InlineResponse200Connection.prototype, "organizationName", void 0);
    return InlineResponse200Connection;
}(SpeakeasyBase));
export { InlineResponse200Connection };
var InlineResponse200Currency = /** @class */ (function (_super) {
    __extends(InlineResponse200Currency, _super);
    function InlineResponse200Currency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_code" }),
        __metadata("design:type", String)
    ], InlineResponse200Currency.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_name" }),
        __metadata("design:type", String)
    ], InlineResponse200Currency.prototype, "currencyName", void 0);
    return InlineResponse200Currency;
}(SpeakeasyBase));
export { InlineResponse200Currency };
var InlineResponse200Flag = /** @class */ (function (_super) {
    __extends(InlineResponse200Flag, _super);
    function InlineResponse200Flag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emoji" }),
        __metadata("design:type", String)
    ], InlineResponse200Flag.prototype, "emoji", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=png" }),
        __metadata("design:type", String)
    ], InlineResponse200Flag.prototype, "png", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svg" }),
        __metadata("design:type", String)
    ], InlineResponse200Flag.prototype, "svg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unicode" }),
        __metadata("design:type", String)
    ], InlineResponse200Flag.prototype, "unicode", void 0);
    return InlineResponse200Flag;
}(SpeakeasyBase));
export { InlineResponse200Flag };
var InlineResponse200Security = /** @class */ (function (_super) {
    __extends(InlineResponse200Security, _super);
    function InlineResponse200Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_vpn" }),
        __metadata("design:type", Boolean)
    ], InlineResponse200Security.prototype, "isVpn", void 0);
    return InlineResponse200Security;
}(SpeakeasyBase));
export { InlineResponse200Security };
var InlineResponse200Timezone = /** @class */ (function (_super) {
    __extends(InlineResponse200Timezone, _super);
    function InlineResponse200Timezone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abbreviation" }),
        __metadata("design:type", String)
    ], InlineResponse200Timezone.prototype, "abbreviation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_time" }),
        __metadata("design:type", String)
    ], InlineResponse200Timezone.prototype, "currentTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gmt_offset" }),
        __metadata("design:type", Number)
    ], InlineResponse200Timezone.prototype, "gmtOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_dst" }),
        __metadata("design:type", Boolean)
    ], InlineResponse200Timezone.prototype, "isDst", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InlineResponse200Timezone.prototype, "name", void 0);
    return InlineResponse200Timezone;
}(SpeakeasyBase));
export { InlineResponse200Timezone };
var InlineResponse200 = /** @class */ (function (_super) {
    __extends(InlineResponse200, _super);
    function InlineResponse200() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], InlineResponse200.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city_geoname_id" }),
        __metadata("design:type", Number)
    ], InlineResponse200.prototype, "cityGeonameId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection" }),
        __metadata("design:type", InlineResponse200Connection)
    ], InlineResponse200.prototype, "connection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continent" }),
        __metadata("design:type", String)
    ], InlineResponse200.prototype, "continent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continent_code" }),
        __metadata("design:type", String)
    ], InlineResponse200.prototype, "continentCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continent_geoname_id" }),
        __metadata("design:type", Number)
    ], InlineResponse200.prototype, "continentGeonameId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], InlineResponse200.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], InlineResponse200.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_geoname_id" }),
        __metadata("design:type", Number)
    ], InlineResponse200.prototype, "countryGeonameId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_is_eu" }),
        __metadata("design:type", Boolean)
    ], InlineResponse200.prototype, "countryIsEu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", InlineResponse200Currency)
    ], InlineResponse200.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flag" }),
        __metadata("design:type", InlineResponse200Flag)
    ], InlineResponse200.prototype, "flag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], InlineResponse200.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], InlineResponse200.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], InlineResponse200.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], InlineResponse200.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], InlineResponse200.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region_geoname_id" }),
        __metadata("design:type", Number)
    ], InlineResponse200.prototype, "regionGeonameId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region_iso_code" }),
        __metadata("design:type", String)
    ], InlineResponse200.prototype, "regionIsoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=security" }),
        __metadata("design:type", InlineResponse200Security)
    ], InlineResponse200.prototype, "security", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", InlineResponse200Timezone)
    ], InlineResponse200.prototype, "timezone", void 0);
    return InlineResponse200;
}(SpeakeasyBase));
export { InlineResponse200 };
