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
import { ComputeCapacity } from "./computecapacity";
import { DomainJoinInfo } from "./domainjoininfo";
import { StreamViewEnum } from "./streamviewenum";
import { VpcConfig } from "./vpcconfig";
var UpdateFleetRequest = /** @class */ (function (_super) {
    __extends(UpdateFleetRequest, _super);
    function UpdateFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttributesToDelete" }),
        __metadata("design:type", Array)
    ], UpdateFleetRequest.prototype, "attributesToDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComputeCapacity" }),
        __metadata("design:type", ComputeCapacity)
    ], UpdateFleetRequest.prototype, "computeCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeleteVpcConfig" }),
        __metadata("design:type", Boolean)
    ], UpdateFleetRequest.prototype, "deleteVpcConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateFleetRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisconnectTimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateFleetRequest.prototype, "disconnectTimeoutInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], UpdateFleetRequest.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainJoinInfo" }),
        __metadata("design:type", DomainJoinInfo)
    ], UpdateFleetRequest.prototype, "domainJoinInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableDefaultInternetAccess" }),
        __metadata("design:type", Boolean)
    ], UpdateFleetRequest.prototype, "enableDefaultInternetAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamRoleArn" }),
        __metadata("design:type", String)
    ], UpdateFleetRequest.prototype, "iamRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdleDisconnectTimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateFleetRequest.prototype, "idleDisconnectTimeoutInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageArn" }),
        __metadata("design:type", String)
    ], UpdateFleetRequest.prototype, "imageArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageName" }),
        __metadata("design:type", String)
    ], UpdateFleetRequest.prototype, "imageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], UpdateFleetRequest.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxUserDurationInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateFleetRequest.prototype, "maxUserDurationInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateFleetRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamView" }),
        __metadata("design:type", String)
    ], UpdateFleetRequest.prototype, "streamView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], UpdateFleetRequest.prototype, "vpcConfig", void 0);
    return UpdateFleetRequest;
}(SpeakeasyBase));
export { UpdateFleetRequest };
