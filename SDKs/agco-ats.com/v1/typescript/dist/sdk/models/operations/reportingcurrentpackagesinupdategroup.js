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
export var ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum;
(function (ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum) {
    ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum["RequiredOnly"] = "RequiredOnly";
    ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum["Default"] = "Default";
    ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum["All"] = "All";
})(ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum || (ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum = {}));
var ReportingCurrentPackagesInUpdateGroupQueryParams = /** @class */ (function (_super) {
    __extends(ReportingCurrentPackagesInUpdateGroupQueryParams, _super);
    function ReportingCurrentPackagesInUpdateGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ID" }),
        __metadata("design:type", String)
    ], ReportingCurrentPackagesInUpdateGroupQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubscriptionTypeFilter" }),
        __metadata("design:type", String)
    ], ReportingCurrentPackagesInUpdateGroupQueryParams.prototype, "subscriptionTypeFilter", void 0);
    return ReportingCurrentPackagesInUpdateGroupQueryParams;
}(SpeakeasyBase));
export { ReportingCurrentPackagesInUpdateGroupQueryParams };
var ReportingCurrentPackagesInUpdateGroupRequest = /** @class */ (function (_super) {
    __extends(ReportingCurrentPackagesInUpdateGroupRequest, _super);
    function ReportingCurrentPackagesInUpdateGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportingCurrentPackagesInUpdateGroupQueryParams)
    ], ReportingCurrentPackagesInUpdateGroupRequest.prototype, "queryParams", void 0);
    return ReportingCurrentPackagesInUpdateGroupRequest;
}(SpeakeasyBase));
export { ReportingCurrentPackagesInUpdateGroupRequest };
var ReportingCurrentPackagesInUpdateGroupResponse = /** @class */ (function (_super) {
    __extends(ReportingCurrentPackagesInUpdateGroupResponse, _super);
    function ReportingCurrentPackagesInUpdateGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ReportingCurrentPackagesInUpdateGroupResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReportingCurrentPackagesInUpdateGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReportingCurrentPackagesInUpdateGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReportingCurrentPackagesInUpdateGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.UpdateSystemModelsPackage }),
        __metadata("design:type", Array)
    ], ReportingCurrentPackagesInUpdateGroupResponse.prototype, "updateSystemModelsPackages", void 0);
    return ReportingCurrentPackagesInUpdateGroupResponse;
}(SpeakeasyBase));
export { ReportingCurrentPackagesInUpdateGroupResponse };
