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
// Event
/**
 * Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.
**/
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AccessKeyId" }),
        __metadata("design:type", String)
    ], Event.prototype, "accessKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=CloudTrailEvent" }),
        __metadata("design:type", String)
    ], Event.prototype, "cloudTrailEvent", void 0);
    __decorate([
        Metadata({ data: "json, name=EventId" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventId", void 0);
    __decorate([
        Metadata({ data: "json, name=EventName" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventName", void 0);
    __decorate([
        Metadata({ data: "json, name=EventSource" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventSource", void 0);
    __decorate([
        Metadata({ data: "json, name=EventTime" }),
        __metadata("design:type", Date)
    ], Event.prototype, "eventTime", void 0);
    __decorate([
        Metadata({ data: "json, name=ReadOnly" }),
        __metadata("design:type", String)
    ], Event.prototype, "readOnly", void 0);
    __decorate([
        Metadata({ data: "json, name=Resources", elemType: shared.Resource }),
        __metadata("design:type", Array)
    ], Event.prototype, "resources", void 0);
    __decorate([
        Metadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], Event.prototype, "username", void 0);
    return Event;
}(SpeakeasyBase));
export { Event };
