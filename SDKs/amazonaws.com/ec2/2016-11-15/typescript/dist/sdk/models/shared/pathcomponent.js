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
import { AnalysisAclRule } from "./analysisaclrule";
import { AnalysisComponent } from "./analysiscomponent";
import { AnalysisPacketHeader } from "./analysispacketheader";
import { AnalysisRouteTableRoute } from "./analysisroutetableroute";
import { AnalysisSecurityGroupRule } from "./analysissecuritygrouprule";
// PathComponent
/**
 * Describes a path component.
**/
var PathComponent = /** @class */ (function (_super) {
    __extends(PathComponent, _super);
    function PathComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisAclRule)
    ], PathComponent.prototype, "aclRule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], PathComponent.prototype, "component", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], PathComponent.prototype, "destinationVpc", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisPacketHeader)
    ], PathComponent.prototype, "inboundHeader", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisPacketHeader)
    ], PathComponent.prototype, "outboundHeader", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisRouteTableRoute)
    ], PathComponent.prototype, "routeTableRoute", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisSecurityGroupRule)
    ], PathComponent.prototype, "securityGroupRule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PathComponent.prototype, "sequenceNumber", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], PathComponent.prototype, "sourceVpc", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], PathComponent.prototype, "subnet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalysisComponent)
    ], PathComponent.prototype, "vpc", void 0);
    return PathComponent;
}(SpeakeasyBase));
export { PathComponent };
