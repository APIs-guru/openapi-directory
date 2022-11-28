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
import { ConfigurationOverrides } from "./configurationoverrides";
import { FailureReasonEnum } from "./failurereasonenum";
import { EndpointStateEnum } from "./endpointstateenum";
// Endpoint
/**
 * This entity represents the endpoint that is managed by Amazon EMR on EKS.
**/
var Endpoint = /** @class */ (function (_super) {
    __extends(Endpoint, _super);
    function Endpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateArn" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "certificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationOverrides" }),
        __metadata("design:type", ConfigurationOverrides)
    ], Endpoint.prototype, "configurationOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Endpoint.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionRoleArn" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseLabel" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "releaseLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityGroup" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "securityGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverUrl" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateDetails" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "stateDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetIds" }),
        __metadata("design:type", Array)
    ], Endpoint.prototype, "subnetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], Endpoint.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualClusterId" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "virtualClusterId", void 0);
    return Endpoint;
}(SpeakeasyBase));
export { Endpoint };
