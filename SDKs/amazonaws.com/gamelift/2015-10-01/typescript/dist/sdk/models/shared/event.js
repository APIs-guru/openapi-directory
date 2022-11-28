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
import { EventCodeEnum } from "./eventcodeenum";
// Event
/**
 * <p>Log entry describing an event that involves GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetEvents</a> </p>
**/
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventCode" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventId" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventTime" }),
        __metadata("design:type", Date)
    ], Event.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], Event.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreSignedLogUrl" }),
        __metadata("design:type", String)
    ], Event.prototype, "preSignedLogUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceId" }),
        __metadata("design:type", String)
    ], Event.prototype, "resourceId", void 0);
    return Event;
}(SpeakeasyBase));
export { Event };
