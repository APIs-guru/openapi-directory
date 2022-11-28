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
import { AwsJobExecutionsRolloutConfig } from "./awsjobexecutionsrolloutconfig";
import { AwsJobPresignedUrlConfig } from "./awsjobpresignedurlconfig";
import { ErrorInfo } from "./errorinfo";
import { OtaUpdateFile } from "./otaupdatefile";
import { OtaUpdateStatusEnum } from "./otaupdatestatusenum";
import { TargetSelectionEnum } from "./targetselectionenum";
// OtaUpdateInfo
/**
 * Information about an OTA update.
**/
var OtaUpdateInfo = /** @class */ (function (_super) {
    __extends(OtaUpdateInfo, _super);
    function OtaUpdateInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalParameters" }),
        __metadata("design:type", Map)
    ], OtaUpdateInfo.prototype, "additionalParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsIotJobArn" }),
        __metadata("design:type", String)
    ], OtaUpdateInfo.prototype, "awsIotJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsIotJobId" }),
        __metadata("design:type", String)
    ], OtaUpdateInfo.prototype, "awsIotJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsJobExecutionsRolloutConfig" }),
        __metadata("design:type", AwsJobExecutionsRolloutConfig)
    ], OtaUpdateInfo.prototype, "awsJobExecutionsRolloutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsJobPresignedUrlConfig" }),
        __metadata("design:type", AwsJobPresignedUrlConfig)
    ], OtaUpdateInfo.prototype, "awsJobPresignedUrlConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", Date)
    ], OtaUpdateInfo.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OtaUpdateInfo.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorInfo" }),
        __metadata("design:type", ErrorInfo)
    ], OtaUpdateInfo.prototype, "errorInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedDate" }),
        __metadata("design:type", Date)
    ], OtaUpdateInfo.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otaUpdateArn" }),
        __metadata("design:type", String)
    ], OtaUpdateInfo.prototype, "otaUpdateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otaUpdateFiles", elemType: OtaUpdateFile }),
        __metadata("design:type", Array)
    ], OtaUpdateInfo.prototype, "otaUpdateFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otaUpdateId" }),
        __metadata("design:type", String)
    ], OtaUpdateInfo.prototype, "otaUpdateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otaUpdateStatus" }),
        __metadata("design:type", String)
    ], OtaUpdateInfo.prototype, "otaUpdateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocols" }),
        __metadata("design:type", Array)
    ], OtaUpdateInfo.prototype, "protocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetSelection" }),
        __metadata("design:type", String)
    ], OtaUpdateInfo.prototype, "targetSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets" }),
        __metadata("design:type", Array)
    ], OtaUpdateInfo.prototype, "targets", void 0);
    return OtaUpdateInfo;
}(SpeakeasyBase));
export { OtaUpdateInfo };
