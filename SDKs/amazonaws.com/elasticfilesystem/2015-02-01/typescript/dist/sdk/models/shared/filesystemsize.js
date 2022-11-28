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
// FileSystemSize
/**
 * The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time.
**/
var FileSystemSize = /** @class */ (function (_super) {
    __extends(FileSystemSize, _super);
    function FileSystemSize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timestamp" }),
        __metadata("design:type", Date)
    ], FileSystemSize.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Value" }),
        __metadata("design:type", Number)
    ], FileSystemSize.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValueInIA" }),
        __metadata("design:type", Number)
    ], FileSystemSize.prototype, "valueInIa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValueInStandard" }),
        __metadata("design:type", Number)
    ], FileSystemSize.prototype, "valueInStandard", void 0);
    return FileSystemSize;
}(SpeakeasyBase));
export { FileSystemSize };
