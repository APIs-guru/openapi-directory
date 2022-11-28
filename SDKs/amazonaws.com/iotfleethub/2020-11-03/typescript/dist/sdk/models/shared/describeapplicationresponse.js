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
import { ApplicationStateEnum } from "./applicationstateenum";
var DescribeApplicationResponse = /** @class */ (function (_super) {
    __extends(DescribeApplicationResponse, _super);
    function DescribeApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationArn" }),
        __metadata("design:type", String)
    ], DescribeApplicationResponse.prototype, "applicationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationCreationDate" }),
        __metadata("design:type", Number)
    ], DescribeApplicationResponse.prototype, "applicationCreationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationDescription" }),
        __metadata("design:type", String)
    ], DescribeApplicationResponse.prototype, "applicationDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationId" }),
        __metadata("design:type", String)
    ], DescribeApplicationResponse.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationLastUpdateDate" }),
        __metadata("design:type", Number)
    ], DescribeApplicationResponse.prototype, "applicationLastUpdateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationName" }),
        __metadata("design:type", String)
    ], DescribeApplicationResponse.prototype, "applicationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationState" }),
        __metadata("design:type", String)
    ], DescribeApplicationResponse.prototype, "applicationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationUrl" }),
        __metadata("design:type", String)
    ], DescribeApplicationResponse.prototype, "applicationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], DescribeApplicationResponse.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], DescribeApplicationResponse.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssoClientId" }),
        __metadata("design:type", String)
    ], DescribeApplicationResponse.prototype, "ssoClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], DescribeApplicationResponse.prototype, "tags", void 0);
    return DescribeApplicationResponse;
}(SpeakeasyBase));
export { DescribeApplicationResponse };
