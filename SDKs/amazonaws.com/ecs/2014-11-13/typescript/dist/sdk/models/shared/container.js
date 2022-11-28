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
import { HealthStatusEnum } from "./healthstatusenum";
import { ManagedAgent } from "./managedagent";
import { NetworkBinding } from "./networkbinding";
import { NetworkInterface } from "./networkinterface";
// Container
/**
 * A Docker container that is part of a task.
**/
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerArn" }),
        __metadata("design:type", String)
    ], Container.prototype, "containerArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpu" }),
        __metadata("design:type", String)
    ], Container.prototype, "cpu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exitCode" }),
        __metadata("design:type", Number)
    ], Container.prototype, "exitCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gpuIds" }),
        __metadata("design:type", Array)
    ], Container.prototype, "gpuIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthStatus" }),
        __metadata("design:type", String)
    ], Container.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], Container.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageDigest" }),
        __metadata("design:type", String)
    ], Container.prototype, "imageDigest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastStatus" }),
        __metadata("design:type", String)
    ], Container.prototype, "lastStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedAgents", elemType: ManagedAgent }),
        __metadata("design:type", Array)
    ], Container.prototype, "managedAgents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", String)
    ], Container.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryReservation" }),
        __metadata("design:type", String)
    ], Container.prototype, "memoryReservation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Container.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkBindings", elemType: NetworkBinding }),
        __metadata("design:type", Array)
    ], Container.prototype, "networkBindings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface }),
        __metadata("design:type", Array)
    ], Container.prototype, "networkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], Container.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeId" }),
        __metadata("design:type", String)
    ], Container.prototype, "runtimeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskArn" }),
        __metadata("design:type", String)
    ], Container.prototype, "taskArn", void 0);
    return Container;
}(SpeakeasyBase));
export { Container };
