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
// RepositoryMetadata
/**
 * Information about a repository.
**/
var RepositoryMetadata = /** @class */ (function (_super) {
    __extends(RepositoryMetadata, _super);
    function RepositoryMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], RepositoryMetadata.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], RepositoryMetadata.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloneUrlHttp" }),
        __metadata("design:type", String)
    ], RepositoryMetadata.prototype, "cloneUrlHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloneUrlSsh" }),
        __metadata("design:type", String)
    ], RepositoryMetadata.prototype, "cloneUrlSsh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", Date)
    ], RepositoryMetadata.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultBranch" }),
        __metadata("design:type", String)
    ], RepositoryMetadata.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedDate" }),
        __metadata("design:type", Date)
    ], RepositoryMetadata.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositoryDescription" }),
        __metadata("design:type", String)
    ], RepositoryMetadata.prototype, "repositoryDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositoryId" }),
        __metadata("design:type", String)
    ], RepositoryMetadata.prototype, "repositoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositoryName" }),
        __metadata("design:type", String)
    ], RepositoryMetadata.prototype, "repositoryName", void 0);
    return RepositoryMetadata;
}(SpeakeasyBase));
export { RepositoryMetadata };
