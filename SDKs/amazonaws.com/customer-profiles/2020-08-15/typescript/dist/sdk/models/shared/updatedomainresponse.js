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
import { MatchingResponse } from "./matchingresponse";
var UpdateDomainResponse = /** @class */ (function (_super) {
    __extends(UpdateDomainResponse, _super);
    function UpdateDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], UpdateDomainResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeadLetterQueueUrl" }),
        __metadata("design:type", String)
    ], UpdateDomainResponse.prototype, "deadLetterQueueUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultEncryptionKey" }),
        __metadata("design:type", String)
    ], UpdateDomainResponse.prototype, "defaultEncryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultExpirationDays" }),
        __metadata("design:type", Number)
    ], UpdateDomainResponse.prototype, "defaultExpirationDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainName" }),
        __metadata("design:type", String)
    ], UpdateDomainResponse.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" }),
        __metadata("design:type", Date)
    ], UpdateDomainResponse.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Matching" }),
        __metadata("design:type", MatchingResponse)
    ], UpdateDomainResponse.prototype, "matching", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], UpdateDomainResponse.prototype, "tags", void 0);
    return UpdateDomainResponse;
}(SpeakeasyBase));
export { UpdateDomainResponse };
