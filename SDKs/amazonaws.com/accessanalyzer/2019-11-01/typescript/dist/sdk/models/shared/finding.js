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
import { ResourceTypeEnum } from "./resourcetypeenum";
import { FindingSource } from "./findingsource";
import { FindingStatusEnum } from "./findingstatusenum";
// Finding
/**
 * Contains information about a finding.
**/
var Finding = /** @class */ (function (_super) {
    __extends(Finding, _super);
    function Finding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", Array)
    ], Finding.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analyzedAt" }),
        __metadata("design:type", Date)
    ], Finding.prototype, "analyzedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", Map)
    ], Finding.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Finding.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Finding.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Finding.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPublic" }),
        __metadata("design:type", Boolean)
    ], Finding.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principal" }),
        __metadata("design:type", Map)
    ], Finding.prototype, "principal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], Finding.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceOwnerAccount" }),
        __metadata("design:type", String)
    ], Finding.prototype, "resourceOwnerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], Finding.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sources", elemType: FindingSource }),
        __metadata("design:type", Array)
    ], Finding.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Finding.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], Finding.prototype, "updatedAt", void 0);
    return Finding;
}(SpeakeasyBase));
export { Finding };
