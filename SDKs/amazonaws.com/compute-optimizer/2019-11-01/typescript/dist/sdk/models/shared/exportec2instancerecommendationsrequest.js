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
import { FileFormatEnum } from "./fileformatenum";
import { Filter } from "./filter";
import { RecommendationPreferences } from "./recommendationpreferences";
import { S3DestinationConfig } from "./s3destinationconfig";
var ExportEc2InstanceRecommendationsRequest = /** @class */ (function (_super) {
    __extends(ExportEc2InstanceRecommendationsRequest, _super);
    function ExportEc2InstanceRecommendationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountIds" }),
        __metadata("design:type", Array)
    ], ExportEc2InstanceRecommendationsRequest.prototype, "accountIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldsToExport" }),
        __metadata("design:type", Array)
    ], ExportEc2InstanceRecommendationsRequest.prototype, "fieldsToExport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileFormat" }),
        __metadata("design:type", String)
    ], ExportEc2InstanceRecommendationsRequest.prototype, "fileFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters", elemType: Filter }),
        __metadata("design:type", Array)
    ], ExportEc2InstanceRecommendationsRequest.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeMemberAccounts" }),
        __metadata("design:type", Boolean)
    ], ExportEc2InstanceRecommendationsRequest.prototype, "includeMemberAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendationPreferences" }),
        __metadata("design:type", RecommendationPreferences)
    ], ExportEc2InstanceRecommendationsRequest.prototype, "recommendationPreferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3DestinationConfig" }),
        __metadata("design:type", S3DestinationConfig)
    ], ExportEc2InstanceRecommendationsRequest.prototype, "s3DestinationConfig", void 0);
    return ExportEc2InstanceRecommendationsRequest;
}(SpeakeasyBase));
export { ExportEc2InstanceRecommendationsRequest };
