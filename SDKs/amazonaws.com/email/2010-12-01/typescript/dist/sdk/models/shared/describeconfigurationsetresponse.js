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
import { ConfigurationSet } from "./configurationset";
import { DeliveryOptions } from "./deliveryoptions";
import { EventDestination } from "./eventdestination";
import { ReputationOptions } from "./reputationoptions";
import { TrackingOptions } from "./trackingoptions";
// DescribeConfigurationSetResponse
/**
 * Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
**/
var DescribeConfigurationSetResponse = /** @class */ (function (_super) {
    __extends(DescribeConfigurationSetResponse, _super);
    function DescribeConfigurationSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfigurationSet)
    ], DescribeConfigurationSetResponse.prototype, "configurationSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeliveryOptions)
    ], DescribeConfigurationSetResponse.prototype, "deliveryOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: EventDestination }),
        __metadata("design:type", Array)
    ], DescribeConfigurationSetResponse.prototype, "eventDestinations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReputationOptions)
    ], DescribeConfigurationSetResponse.prototype, "reputationOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TrackingOptions)
    ], DescribeConfigurationSetResponse.prototype, "trackingOptions", void 0);
    return DescribeConfigurationSetResponse;
}(SpeakeasyBase));
export { DescribeConfigurationSetResponse };
