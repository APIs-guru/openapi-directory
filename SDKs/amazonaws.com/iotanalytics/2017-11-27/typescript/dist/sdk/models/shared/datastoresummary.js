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
import { DatastorePartitions } from "./datastorepartitions";
import { DatastoreStorageSummary } from "./datastorestoragesummary";
import { FileFormatTypeEnum } from "./fileformattypeenum";
import { DatastoreStatusEnum } from "./datastorestatusenum";
// DatastoreSummary
/**
 * A summary of information about a data store.
**/
var DatastoreSummary = /** @class */ (function (_super) {
    __extends(DatastoreSummary, _super);
    function DatastoreSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Date)
    ], DatastoreSummary.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datastoreName" }),
        __metadata("design:type", String)
    ], DatastoreSummary.prototype, "datastoreName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datastorePartitions" }),
        __metadata("design:type", DatastorePartitions)
    ], DatastoreSummary.prototype, "datastorePartitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datastoreStorage" }),
        __metadata("design:type", DatastoreStorageSummary)
    ], DatastoreSummary.prototype, "datastoreStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileFormatType" }),
        __metadata("design:type", String)
    ], DatastoreSummary.prototype, "fileFormatType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastMessageArrivalTime" }),
        __metadata("design:type", Date)
    ], DatastoreSummary.prototype, "lastMessageArrivalTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdateTime" }),
        __metadata("design:type", Date)
    ], DatastoreSummary.prototype, "lastUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DatastoreSummary.prototype, "status", void 0);
    return DatastoreSummary;
}(SpeakeasyBase));
export { DatastoreSummary };
