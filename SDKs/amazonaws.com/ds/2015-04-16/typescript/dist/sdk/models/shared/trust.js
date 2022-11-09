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
import { SelectiveAuthEnum } from "./selectiveauthenum";
import { TrustDirectionEnum } from "./trustdirectionenum";
import { TrustStateEnum } from "./truststateenum";
import { TrustTypeEnum } from "./trusttypeenum";
// Trust
/**
 * Describes a trust relationship between an Managed Microsoft AD directory and an external domain.
**/
var Trust = /** @class */ (function (_super) {
    __extends(Trust, _super);
    function Trust() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CreatedDateTime" }),
        __metadata("design:type", Date)
    ], Trust.prototype, "createdDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=DirectoryId" }),
        __metadata("design:type", String)
    ], Trust.prototype, "directoryId", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], Trust.prototype, "lastUpdatedDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=RemoteDomainName" }),
        __metadata("design:type", String)
    ], Trust.prototype, "remoteDomainName", void 0);
    __decorate([
        Metadata({ data: "json, name=SelectiveAuth" }),
        __metadata("design:type", String)
    ], Trust.prototype, "selectiveAuth", void 0);
    __decorate([
        Metadata({ data: "json, name=StateLastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], Trust.prototype, "stateLastUpdatedDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=TrustDirection" }),
        __metadata("design:type", String)
    ], Trust.prototype, "trustDirection", void 0);
    __decorate([
        Metadata({ data: "json, name=TrustId" }),
        __metadata("design:type", String)
    ], Trust.prototype, "trustId", void 0);
    __decorate([
        Metadata({ data: "json, name=TrustState" }),
        __metadata("design:type", String)
    ], Trust.prototype, "trustState", void 0);
    __decorate([
        Metadata({ data: "json, name=TrustStateReason" }),
        __metadata("design:type", String)
    ], Trust.prototype, "trustStateReason", void 0);
    __decorate([
        Metadata({ data: "json, name=TrustType" }),
        __metadata("design:type", String)
    ], Trust.prototype, "trustType", void 0);
    return Trust;
}(SpeakeasyBase));
export { Trust };
