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
import * as shared from "../shared";
export var ListPiiEntitiesDetectionJobsXAmzTargetEnum;
(function (ListPiiEntitiesDetectionJobsXAmzTargetEnum) {
    ListPiiEntitiesDetectionJobsXAmzTargetEnum["Comprehend20171127ListPiiEntitiesDetectionJobs"] = "Comprehend_20171127.ListPiiEntitiesDetectionJobs";
})(ListPiiEntitiesDetectionJobsXAmzTargetEnum || (ListPiiEntitiesDetectionJobsXAmzTargetEnum = {}));
var ListPiiEntitiesDetectionJobsHeaders = /** @class */ (function (_super) {
    __extends(ListPiiEntitiesDetectionJobsHeaders, _super);
    function ListPiiEntitiesDetectionJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListPiiEntitiesDetectionJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListPiiEntitiesDetectionJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListPiiEntitiesDetectionJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListPiiEntitiesDetectionJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListPiiEntitiesDetectionJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListPiiEntitiesDetectionJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListPiiEntitiesDetectionJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListPiiEntitiesDetectionJobsHeaders.prototype, "xAmzTarget", void 0);
    return ListPiiEntitiesDetectionJobsHeaders;
}(SpeakeasyBase));
export { ListPiiEntitiesDetectionJobsHeaders };
var ListPiiEntitiesDetectionJobsRequest = /** @class */ (function (_super) {
    __extends(ListPiiEntitiesDetectionJobsRequest, _super);
    function ListPiiEntitiesDetectionJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPiiEntitiesDetectionJobsHeaders)
    ], ListPiiEntitiesDetectionJobsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListPiiEntitiesDetectionJobsRequest)
    ], ListPiiEntitiesDetectionJobsRequest.prototype, "request", void 0);
    return ListPiiEntitiesDetectionJobsRequest;
}(SpeakeasyBase));
export { ListPiiEntitiesDetectionJobsRequest };
var ListPiiEntitiesDetectionJobsResponse = /** @class */ (function (_super) {
    __extends(ListPiiEntitiesDetectionJobsResponse, _super);
    function ListPiiEntitiesDetectionJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPiiEntitiesDetectionJobsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPiiEntitiesDetectionJobsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPiiEntitiesDetectionJobsResponse.prototype, "invalidFilterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPiiEntitiesDetectionJobsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPiiEntitiesDetectionJobsResponse)
    ], ListPiiEntitiesDetectionJobsResponse.prototype, "listPiiEntitiesDetectionJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPiiEntitiesDetectionJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPiiEntitiesDetectionJobsResponse.prototype, "tooManyRequestsException", void 0);
    return ListPiiEntitiesDetectionJobsResponse;
}(SpeakeasyBase));
export { ListPiiEntitiesDetectionJobsResponse };
