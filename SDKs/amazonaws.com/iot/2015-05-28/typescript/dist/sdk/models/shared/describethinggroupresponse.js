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
import { DynamicGroupStatusEnum } from "./dynamicgroupstatusenum";
import { ThingGroupMetadata } from "./thinggroupmetadata";
import { ThingGroupProperties } from "./thinggroupproperties";
var DescribeThingGroupResponse = /** @class */ (function (_super) {
    __extends(DescribeThingGroupResponse, _super);
    function DescribeThingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexName" }),
        __metadata("design:type", String)
    ], DescribeThingGroupResponse.prototype, "indexName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryString" }),
        __metadata("design:type", String)
    ], DescribeThingGroupResponse.prototype, "queryString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryVersion" }),
        __metadata("design:type", String)
    ], DescribeThingGroupResponse.prototype, "queryVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DescribeThingGroupResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupArn" }),
        __metadata("design:type", String)
    ], DescribeThingGroupResponse.prototype, "thingGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupId" }),
        __metadata("design:type", String)
    ], DescribeThingGroupResponse.prototype, "thingGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupMetadata" }),
        __metadata("design:type", ThingGroupMetadata)
    ], DescribeThingGroupResponse.prototype, "thingGroupMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupName" }),
        __metadata("design:type", String)
    ], DescribeThingGroupResponse.prototype, "thingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupProperties" }),
        __metadata("design:type", ThingGroupProperties)
    ], DescribeThingGroupResponse.prototype, "thingGroupProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], DescribeThingGroupResponse.prototype, "version", void 0);
    return DescribeThingGroupResponse;
}(SpeakeasyBase));
export { DescribeThingGroupResponse };
