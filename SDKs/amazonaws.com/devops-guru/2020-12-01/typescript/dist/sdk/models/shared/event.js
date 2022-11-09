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
import { EventDataSourceEnum } from "./eventdatasourceenum";
import { EventClassEnum } from "./eventclassenum";
import { ResourceCollection } from "./resourcecollection";
// Event
/**
 *  An AWS resource event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.
**/
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DataSource" }),
        __metadata("design:type", String)
    ], Event.prototype, "dataSource", void 0);
    __decorate([
        Metadata({ data: "json, name=EventClass" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventClass", void 0);
    __decorate([
        Metadata({ data: "json, name=EventSource" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventSource", void 0);
    __decorate([
        Metadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Event.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Event.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=ResourceCollection" }),
        __metadata("design:type", ResourceCollection)
    ], Event.prototype, "resourceCollection", void 0);
    __decorate([
        Metadata({ data: "json, name=Resources", elemType: shared.EventResource }),
        __metadata("design:type", Array)
    ], Event.prototype, "resources", void 0);
    __decorate([
        Metadata({ data: "json, name=Time" }),
        __metadata("design:type", Date)
    ], Event.prototype, "time", void 0);
    return Event;
}(SpeakeasyBase));
export { Event };
