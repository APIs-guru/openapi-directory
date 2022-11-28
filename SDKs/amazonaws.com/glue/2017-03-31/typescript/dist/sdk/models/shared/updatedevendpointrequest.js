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
import { DevEndpointCustomLibraries } from "./devendpointcustomlibraries";
var UpdateDevEndpointRequest = /** @class */ (function (_super) {
    __extends(UpdateDevEndpointRequest, _super);
    function UpdateDevEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddArguments" }),
        __metadata("design:type", Map)
    ], UpdateDevEndpointRequest.prototype, "addArguments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddPublicKeys" }),
        __metadata("design:type", Array)
    ], UpdateDevEndpointRequest.prototype, "addPublicKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomLibraries" }),
        __metadata("design:type", DevEndpointCustomLibraries)
    ], UpdateDevEndpointRequest.prototype, "customLibraries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeleteArguments" }),
        __metadata("design:type", Array)
    ], UpdateDevEndpointRequest.prototype, "deleteArguments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeletePublicKeys" }),
        __metadata("design:type", Array)
    ], UpdateDevEndpointRequest.prototype, "deletePublicKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointName" }),
        __metadata("design:type", String)
    ], UpdateDevEndpointRequest.prototype, "endpointName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicKey" }),
        __metadata("design:type", String)
    ], UpdateDevEndpointRequest.prototype, "publicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateEtlLibraries" }),
        __metadata("design:type", Boolean)
    ], UpdateDevEndpointRequest.prototype, "updateEtlLibraries", void 0);
    return UpdateDevEndpointRequest;
}(SpeakeasyBase));
export { UpdateDevEndpointRequest };
