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
import { CustomerManagedDatastoreS3Storage } from "./customermanageddatastores3storage";
import { DatastoreIotSiteWiseMultiLayerStorage } from "./datastoreiotsitewisemultilayerstorage";
// DatastoreStorage
/**
 * Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.
**/
var DatastoreStorage = /** @class */ (function (_super) {
    __extends(DatastoreStorage, _super);
    function DatastoreStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=customerManagedS3" }),
        __metadata("design:type", CustomerManagedDatastoreS3Storage)
    ], DatastoreStorage.prototype, "customerManagedS3", void 0);
    __decorate([
        Metadata({ data: "json, name=iotSiteWiseMultiLayerStorage" }),
        __metadata("design:type", DatastoreIotSiteWiseMultiLayerStorage)
    ], DatastoreStorage.prototype, "iotSiteWiseMultiLayerStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceManagedS3" }),
        __metadata("design:type", Map)
    ], DatastoreStorage.prototype, "serviceManagedS3", void 0);
    return DatastoreStorage;
}(SpeakeasyBase));
export { DatastoreStorage };
