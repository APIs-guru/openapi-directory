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
import { WorkerTypeEnum } from "./workertypeenum";
var CreateDevEndpointRequest = /** @class */ (function (_super) {
    __extends(CreateDevEndpointRequest, _super);
    function CreateDevEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arguments" }),
        __metadata("design:type", Map)
    ], CreateDevEndpointRequest.prototype, "arguments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointName" }),
        __metadata("design:type", String)
    ], CreateDevEndpointRequest.prototype, "endpointName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtraJarsS3Path" }),
        __metadata("design:type", String)
    ], CreateDevEndpointRequest.prototype, "extraJarsS3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtraPythonLibsS3Path" }),
        __metadata("design:type", String)
    ], CreateDevEndpointRequest.prototype, "extraPythonLibsS3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlueVersion" }),
        __metadata("design:type", String)
    ], CreateDevEndpointRequest.prototype, "glueVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfNodes" }),
        __metadata("design:type", Number)
    ], CreateDevEndpointRequest.prototype, "numberOfNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfWorkers" }),
        __metadata("design:type", Number)
    ], CreateDevEndpointRequest.prototype, "numberOfWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicKey" }),
        __metadata("design:type", String)
    ], CreateDevEndpointRequest.prototype, "publicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicKeys" }),
        __metadata("design:type", Array)
    ], CreateDevEndpointRequest.prototype, "publicKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], CreateDevEndpointRequest.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" }),
        __metadata("design:type", String)
    ], CreateDevEndpointRequest.prototype, "securityConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateDevEndpointRequest.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetId" }),
        __metadata("design:type", String)
    ], CreateDevEndpointRequest.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateDevEndpointRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkerType" }),
        __metadata("design:type", String)
    ], CreateDevEndpointRequest.prototype, "workerType", void 0);
    return CreateDevEndpointRequest;
}(SpeakeasyBase));
export { CreateDevEndpointRequest };
