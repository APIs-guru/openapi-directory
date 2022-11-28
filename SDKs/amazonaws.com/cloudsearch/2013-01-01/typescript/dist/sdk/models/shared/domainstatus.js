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
import { ServiceEndpoint } from "./serviceendpoint";
import { Limits } from "./limits";
// DomainStatus
/**
 * The current status of the search domain.
**/
var DomainStatus = /** @class */ (function (_super) {
    __extends(DomainStatus, _super);
    function DomainStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DomainStatus.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DomainStatus.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DomainStatus.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceEndpoint)
    ], DomainStatus.prototype, "docService", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DomainStatus.prototype, "domainId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DomainStatus.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Limits)
    ], DomainStatus.prototype, "limits", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DomainStatus.prototype, "processing", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DomainStatus.prototype, "requiresIndexDocuments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DomainStatus.prototype, "searchInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DomainStatus.prototype, "searchInstanceType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DomainStatus.prototype, "searchPartitionCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceEndpoint)
    ], DomainStatus.prototype, "searchService", void 0);
    return DomainStatus;
}(SpeakeasyBase));
export { DomainStatus };
