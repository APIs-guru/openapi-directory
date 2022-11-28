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
import { ConfigurationItemStatusEnum } from "./configurationitemstatusenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
// BaseConfigurationItem
/**
 * The detailed configuration of a specified resource.
**/
var BaseConfigurationItem = /** @class */ (function (_super) {
    __extends(BaseConfigurationItem, _super);
    function BaseConfigurationItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], BaseConfigurationItem.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], BaseConfigurationItem.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availabilityZone" }),
        __metadata("design:type", String)
    ], BaseConfigurationItem.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsRegion" }),
        __metadata("design:type", String)
    ], BaseConfigurationItem.prototype, "awsRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration" }),
        __metadata("design:type", String)
    ], BaseConfigurationItem.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationItemCaptureTime" }),
        __metadata("design:type", Date)
    ], BaseConfigurationItem.prototype, "configurationItemCaptureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationItemStatus" }),
        __metadata("design:type", String)
    ], BaseConfigurationItem.prototype, "configurationItemStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationStateId" }),
        __metadata("design:type", String)
    ], BaseConfigurationItem.prototype, "configurationStateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceCreationTime" }),
        __metadata("design:type", Date)
    ], BaseConfigurationItem.prototype, "resourceCreationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceId" }),
        __metadata("design:type", String)
    ], BaseConfigurationItem.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], BaseConfigurationItem.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], BaseConfigurationItem.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplementaryConfiguration" }),
        __metadata("design:type", Map)
    ], BaseConfigurationItem.prototype, "supplementaryConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], BaseConfigurationItem.prototype, "version", void 0);
    return BaseConfigurationItem;
}(SpeakeasyBase));
export { BaseConfigurationItem };
