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
import { ConformancePackInputParameter } from "./conformancepackinputparameter";
var PutOrganizationConformancePackRequest = /** @class */ (function (_super) {
    __extends(PutOrganizationConformancePackRequest, _super);
    function PutOrganizationConformancePackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConformancePackInputParameters", elemType: ConformancePackInputParameter }),
        __metadata("design:type", Array)
    ], PutOrganizationConformancePackRequest.prototype, "conformancePackInputParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryS3Bucket" }),
        __metadata("design:type", String)
    ], PutOrganizationConformancePackRequest.prototype, "deliveryS3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryS3KeyPrefix" }),
        __metadata("design:type", String)
    ], PutOrganizationConformancePackRequest.prototype, "deliveryS3KeyPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExcludedAccounts" }),
        __metadata("design:type", Array)
    ], PutOrganizationConformancePackRequest.prototype, "excludedAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganizationConformancePackName" }),
        __metadata("design:type", String)
    ], PutOrganizationConformancePackRequest.prototype, "organizationConformancePackName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateBody" }),
        __metadata("design:type", String)
    ], PutOrganizationConformancePackRequest.prototype, "templateBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateS3Uri" }),
        __metadata("design:type", String)
    ], PutOrganizationConformancePackRequest.prototype, "templateS3Uri", void 0);
    return PutOrganizationConformancePackRequest;
}(SpeakeasyBase));
export { PutOrganizationConformancePackRequest };
