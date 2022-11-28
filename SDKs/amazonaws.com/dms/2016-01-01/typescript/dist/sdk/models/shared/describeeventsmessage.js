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
import { Filter } from "./filter";
import { SourceTypeEnum } from "./sourcetypeenum";
// DescribeEventsMessage
/**
 * <p/>
**/
var DescribeEventsMessage = /** @class */ (function (_super) {
    __extends(DescribeEventsMessage, _super);
    function DescribeEventsMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Duration" }),
        __metadata("design:type", Number)
    ], DescribeEventsMessage.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], DescribeEventsMessage.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventCategories" }),
        __metadata("design:type", Array)
    ], DescribeEventsMessage.prototype, "eventCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Filters", elemType: Filter }),
        __metadata("design:type", Array)
    ], DescribeEventsMessage.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Marker" }),
        __metadata("design:type", String)
    ], DescribeEventsMessage.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxRecords" }),
        __metadata("design:type", Number)
    ], DescribeEventsMessage.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceIdentifier" }),
        __metadata("design:type", String)
    ], DescribeEventsMessage.prototype, "sourceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceType" }),
        __metadata("design:type", String)
    ], DescribeEventsMessage.prototype, "sourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], DescribeEventsMessage.prototype, "startTime", void 0);
    return DescribeEventsMessage;
}(SpeakeasyBase));
export { DescribeEventsMessage };
