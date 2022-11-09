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
import { ComputeCapacity } from "./computecapacity";
import { DomainJoinInfo } from "./domainjoininfo";
import { FleetTypeEnum } from "./fleettypeenum";
import { StreamViewEnum } from "./streamviewenum";
import { VpcConfig } from "./vpcconfig";
var CreateFleetRequest = /** @class */ (function (_super) {
    __extends(CreateFleetRequest, _super);
    function CreateFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ComputeCapacity" }),
        __metadata("design:type", ComputeCapacity)
    ], CreateFleetRequest.prototype, "computeCapacity", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateFleetRequest.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=DisconnectTimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], CreateFleetRequest.prototype, "disconnectTimeoutInSeconds", void 0);
    __decorate([
        Metadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], CreateFleetRequest.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=DomainJoinInfo" }),
        __metadata("design:type", DomainJoinInfo)
    ], CreateFleetRequest.prototype, "domainJoinInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=EnableDefaultInternetAccess" }),
        __metadata("design:type", Boolean)
    ], CreateFleetRequest.prototype, "enableDefaultInternetAccess", void 0);
    __decorate([
        Metadata({ data: "json, name=FleetType" }),
        __metadata("design:type", String)
    ], CreateFleetRequest.prototype, "fleetType", void 0);
    __decorate([
        Metadata({ data: "json, name=IamRoleArn" }),
        __metadata("design:type", String)
    ], CreateFleetRequest.prototype, "iamRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=IdleDisconnectTimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], CreateFleetRequest.prototype, "idleDisconnectTimeoutInSeconds", void 0);
    __decorate([
        Metadata({ data: "json, name=ImageArn" }),
        __metadata("design:type", String)
    ], CreateFleetRequest.prototype, "imageArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ImageName" }),
        __metadata("design:type", String)
    ], CreateFleetRequest.prototype, "imageName", void 0);
    __decorate([
        Metadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], CreateFleetRequest.prototype, "instanceType", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxUserDurationInSeconds" }),
        __metadata("design:type", Number)
    ], CreateFleetRequest.prototype, "maxUserDurationInSeconds", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateFleetRequest.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=StreamView" }),
        __metadata("design:type", String)
    ], CreateFleetRequest.prototype, "streamView", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateFleetRequest.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], CreateFleetRequest.prototype, "vpcConfig", void 0);
    return CreateFleetRequest;
}(SpeakeasyBase));
export { CreateFleetRequest };
