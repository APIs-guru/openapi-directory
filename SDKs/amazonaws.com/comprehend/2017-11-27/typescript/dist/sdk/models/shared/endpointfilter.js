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
import { EndpointStatusEnum } from "./endpointstatusenum";
// EndpointFilter
/**
 * The filter used to determine which endpoints are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time.
**/
var EndpointFilter = /** @class */ (function (_super) {
    __extends(EndpointFilter, _super);
    function EndpointFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTimeAfter" }),
        __metadata("design:type", Date)
    ], EndpointFilter.prototype, "creationTimeAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTimeBefore" }),
        __metadata("design:type", Date)
    ], EndpointFilter.prototype, "creationTimeBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelArn" }),
        __metadata("design:type", String)
    ], EndpointFilter.prototype, "modelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], EndpointFilter.prototype, "status", void 0);
    return EndpointFilter;
}(SpeakeasyBase));
export { EndpointFilter };
