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
// ConformancePackDetail
/**
 * Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region.
**/
var ConformancePackDetail = /** @class */ (function (_super) {
    __extends(ConformancePackDetail, _super);
    function ConformancePackDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConformancePackArn" }),
        __metadata("design:type", String)
    ], ConformancePackDetail.prototype, "conformancePackArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConformancePackId" }),
        __metadata("design:type", String)
    ], ConformancePackDetail.prototype, "conformancePackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConformancePackInputParameters", elemType: ConformancePackInputParameter }),
        __metadata("design:type", Array)
    ], ConformancePackDetail.prototype, "conformancePackInputParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConformancePackName" }),
        __metadata("design:type", String)
    ], ConformancePackDetail.prototype, "conformancePackName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedBy" }),
        __metadata("design:type", String)
    ], ConformancePackDetail.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryS3Bucket" }),
        __metadata("design:type", String)
    ], ConformancePackDetail.prototype, "deliveryS3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryS3KeyPrefix" }),
        __metadata("design:type", String)
    ], ConformancePackDetail.prototype, "deliveryS3KeyPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateRequestedTime" }),
        __metadata("design:type", Date)
    ], ConformancePackDetail.prototype, "lastUpdateRequestedTime", void 0);
    return ConformancePackDetail;
}(SpeakeasyBase));
export { ConformancePackDetail };
