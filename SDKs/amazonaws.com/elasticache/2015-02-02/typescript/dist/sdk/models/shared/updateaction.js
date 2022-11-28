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
import { CacheNodeUpdateStatus } from "./cachenodeupdatestatus";
import { NodeGroupUpdateStatus } from "./nodegroupupdatestatus";
import { ServiceUpdateSeverityEnum } from "./serviceupdateseverityenum";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
import { ServiceUpdateTypeEnum } from "./serviceupdatetypeenum";
import { SlaMetEnum } from "./slametenum";
import { UpdateActionStatusEnum } from "./updateactionstatusenum";
// UpdateAction
/**
 * The status of the service update for a specific replication group
**/
var UpdateAction = /** @class */ (function (_super) {
    __extends(UpdateAction, _super);
    function UpdateAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAction.prototype, "cacheClusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CacheNodeUpdateStatus }),
        __metadata("design:type", Array)
    ], UpdateAction.prototype, "cacheNodeUpdateStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAction.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAction.prototype, "estimatedUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: NodeGroupUpdateStatus }),
        __metadata("design:type", Array)
    ], UpdateAction.prototype, "nodeGroupUpdateStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAction.prototype, "nodesUpdated", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAction.prototype, "replicationGroupId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAction.prototype, "serviceUpdateName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], UpdateAction.prototype, "serviceUpdateRecommendedApplyByDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], UpdateAction.prototype, "serviceUpdateReleaseDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAction.prototype, "serviceUpdateSeverity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAction.prototype, "serviceUpdateStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAction.prototype, "serviceUpdateType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAction.prototype, "slaMet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], UpdateAction.prototype, "updateActionAvailableDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAction.prototype, "updateActionStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], UpdateAction.prototype, "updateActionStatusModifiedDate", void 0);
    return UpdateAction;
}(SpeakeasyBase));
export { UpdateAction };
