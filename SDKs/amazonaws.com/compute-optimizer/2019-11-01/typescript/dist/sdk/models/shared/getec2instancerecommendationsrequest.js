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
import * as shared from "../shared";
import { RecommendationPreferences } from "./recommendationpreferences";
var GetEc2InstanceRecommendationsRequest = /** @class */ (function (_super) {
    __extends(GetEc2InstanceRecommendationsRequest, _super);
    function GetEc2InstanceRecommendationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accountIds" }),
        __metadata("design:type", Array)
    ], GetEc2InstanceRecommendationsRequest.prototype, "accountIds", void 0);
    __decorate([
        Metadata({ data: "json, name=filters", elemType: shared.Filter }),
        __metadata("design:type", Array)
    ], GetEc2InstanceRecommendationsRequest.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceArns" }),
        __metadata("design:type", Array)
    ], GetEc2InstanceRecommendationsRequest.prototype, "instanceArns", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], GetEc2InstanceRecommendationsRequest.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], GetEc2InstanceRecommendationsRequest.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=recommendationPreferences" }),
        __metadata("design:type", RecommendationPreferences)
    ], GetEc2InstanceRecommendationsRequest.prototype, "recommendationPreferences", void 0);
    return GetEc2InstanceRecommendationsRequest;
}(SpeakeasyBase));
export { GetEc2InstanceRecommendationsRequest };
