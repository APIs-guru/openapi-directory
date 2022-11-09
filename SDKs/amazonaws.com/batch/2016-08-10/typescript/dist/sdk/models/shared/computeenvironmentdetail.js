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
import { ComputeResource } from "./computeresource";
import { CeStateEnum } from "./cestateenum";
import { CeStatusEnum } from "./cestatusenum";
import { CeTypeEnum } from "./cetypeenum";
// ComputeEnvironmentDetail
/**
 * An object representing an Batch compute environment.
**/
var ComputeEnvironmentDetail = /** @class */ (function (_super) {
    __extends(ComputeEnvironmentDetail, _super);
    function ComputeEnvironmentDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=computeEnvironmentArn" }),
        __metadata("design:type", String)
    ], ComputeEnvironmentDetail.prototype, "computeEnvironmentArn", void 0);
    __decorate([
        Metadata({ data: "json, name=computeEnvironmentName" }),
        __metadata("design:type", String)
    ], ComputeEnvironmentDetail.prototype, "computeEnvironmentName", void 0);
    __decorate([
        Metadata({ data: "json, name=computeResources" }),
        __metadata("design:type", ComputeResource)
    ], ComputeEnvironmentDetail.prototype, "computeResources", void 0);
    __decorate([
        Metadata({ data: "json, name=ecsClusterArn" }),
        __metadata("design:type", String)
    ], ComputeEnvironmentDetail.prototype, "ecsClusterArn", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceRole" }),
        __metadata("design:type", String)
    ], ComputeEnvironmentDetail.prototype, "serviceRole", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ComputeEnvironmentDetail.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ComputeEnvironmentDetail.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=statusReason" }),
        __metadata("design:type", String)
    ], ComputeEnvironmentDetail.prototype, "statusReason", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], ComputeEnvironmentDetail.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ComputeEnvironmentDetail.prototype, "type", void 0);
    return ComputeEnvironmentDetail;
}(SpeakeasyBase));
export { ComputeEnvironmentDetail };
