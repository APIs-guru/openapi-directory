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
import { DataResource } from "./dataresource";
import { ReadWriteTypeEnum } from "./readwritetypeenum";
// EventSelector
/**
 * <p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
**/
var EventSelector = /** @class */ (function (_super) {
    __extends(EventSelector, _super);
    function EventSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataResources", elemType: DataResource }),
        __metadata("design:type", Array)
    ], EventSelector.prototype, "dataResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExcludeManagementEventSources" }),
        __metadata("design:type", Array)
    ], EventSelector.prototype, "excludeManagementEventSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeManagementEvents" }),
        __metadata("design:type", Boolean)
    ], EventSelector.prototype, "includeManagementEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadWriteType" }),
        __metadata("design:type", String)
    ], EventSelector.prototype, "readWriteType", void 0);
    return EventSelector;
}(SpeakeasyBase));
export { EventSelector };
