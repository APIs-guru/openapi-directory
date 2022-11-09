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
import * as shared from "../shared";
export var DeleteReplicationTaskAssessmentRunXAmzTargetEnum;
(function (DeleteReplicationTaskAssessmentRunXAmzTargetEnum) {
    DeleteReplicationTaskAssessmentRunXAmzTargetEnum["AmazonDmSv20160101DeleteReplicationTaskAssessmentRun"] = "AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun";
})(DeleteReplicationTaskAssessmentRunXAmzTargetEnum || (DeleteReplicationTaskAssessmentRunXAmzTargetEnum = {}));
var DeleteReplicationTaskAssessmentRunHeaders = /** @class */ (function (_super) {
    __extends(DeleteReplicationTaskAssessmentRunHeaders, _super);
    function DeleteReplicationTaskAssessmentRunHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskAssessmentRunHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskAssessmentRunHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskAssessmentRunHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskAssessmentRunHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskAssessmentRunHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskAssessmentRunHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskAssessmentRunHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskAssessmentRunHeaders.prototype, "xAmzTarget", void 0);
    return DeleteReplicationTaskAssessmentRunHeaders;
}(SpeakeasyBase));
export { DeleteReplicationTaskAssessmentRunHeaders };
var DeleteReplicationTaskAssessmentRunRequest = /** @class */ (function (_super) {
    __extends(DeleteReplicationTaskAssessmentRunRequest, _super);
    function DeleteReplicationTaskAssessmentRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteReplicationTaskAssessmentRunHeaders)
    ], DeleteReplicationTaskAssessmentRunRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteReplicationTaskAssessmentRunMessage)
    ], DeleteReplicationTaskAssessmentRunRequest.prototype, "request", void 0);
    return DeleteReplicationTaskAssessmentRunRequest;
}(SpeakeasyBase));
export { DeleteReplicationTaskAssessmentRunRequest };
var DeleteReplicationTaskAssessmentRunResponse = /** @class */ (function (_super) {
    __extends(DeleteReplicationTaskAssessmentRunResponse, _super);
    function DeleteReplicationTaskAssessmentRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteReplicationTaskAssessmentRunResponse.prototype, "accessDeniedFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteReplicationTaskAssessmentRunResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteReplicationTaskAssessmentRunResponse)
    ], DeleteReplicationTaskAssessmentRunResponse.prototype, "deleteReplicationTaskAssessmentRunResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteReplicationTaskAssessmentRunResponse.prototype, "invalidResourceStateFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteReplicationTaskAssessmentRunResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteReplicationTaskAssessmentRunResponse.prototype, "statusCode", void 0);
    return DeleteReplicationTaskAssessmentRunResponse;
}(SpeakeasyBase));
export { DeleteReplicationTaskAssessmentRunResponse };
