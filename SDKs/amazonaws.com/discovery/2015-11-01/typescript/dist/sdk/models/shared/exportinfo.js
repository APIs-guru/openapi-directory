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
import { ExportStatusEnum } from "./exportstatusenum";
// ExportInfo
/**
 * Information regarding the export status of discovered data. The value is an array of objects.
**/
var ExportInfo = /** @class */ (function (_super) {
    __extends(ExportInfo, _super);
    function ExportInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=configurationsDownloadUrl" }),
        __metadata("design:type", String)
    ], ExportInfo.prototype, "configurationsDownloadUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=exportId" }),
        __metadata("design:type", String)
    ], ExportInfo.prototype, "exportId", void 0);
    __decorate([
        Metadata({ data: "json, name=exportRequestTime" }),
        __metadata("design:type", Date)
    ], ExportInfo.prototype, "exportRequestTime", void 0);
    __decorate([
        Metadata({ data: "json, name=exportStatus" }),
        __metadata("design:type", String)
    ], ExportInfo.prototype, "exportStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=isTruncated" }),
        __metadata("design:type", Boolean)
    ], ExportInfo.prototype, "isTruncated", void 0);
    __decorate([
        Metadata({ data: "json, name=requestedEndTime" }),
        __metadata("design:type", Date)
    ], ExportInfo.prototype, "requestedEndTime", void 0);
    __decorate([
        Metadata({ data: "json, name=requestedStartTime" }),
        __metadata("design:type", Date)
    ], ExportInfo.prototype, "requestedStartTime", void 0);
    __decorate([
        Metadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], ExportInfo.prototype, "statusMessage", void 0);
    return ExportInfo;
}(SpeakeasyBase));
export { ExportInfo };
