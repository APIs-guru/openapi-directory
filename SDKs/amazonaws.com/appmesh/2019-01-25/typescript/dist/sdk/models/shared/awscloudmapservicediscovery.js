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
import { AwsCloudMapInstanceAttribute } from "./awscloudmapinstanceattribute";
// AwsCloudMapServiceDiscovery
/**
 * <p>An object that represents the Cloud Map service discovery information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note>
**/
var AwsCloudMapServiceDiscovery = /** @class */ (function (_super) {
    __extends(AwsCloudMapServiceDiscovery, _super);
    function AwsCloudMapServiceDiscovery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: AwsCloudMapInstanceAttribute }),
        __metadata("design:type", Array)
    ], AwsCloudMapServiceDiscovery.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaceName" }),
        __metadata("design:type", String)
    ], AwsCloudMapServiceDiscovery.prototype, "namespaceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], AwsCloudMapServiceDiscovery.prototype, "serviceName", void 0);
    return AwsCloudMapServiceDiscovery;
}(SpeakeasyBase));
export { AwsCloudMapServiceDiscovery };
