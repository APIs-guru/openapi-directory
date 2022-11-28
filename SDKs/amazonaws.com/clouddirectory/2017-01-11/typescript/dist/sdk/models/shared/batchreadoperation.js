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
import { BatchGetLinkAttributes } from "./batchgetlinkattributes";
import { BatchGetObjectAttributes } from "./batchgetobjectattributes";
import { BatchGetObjectInformation } from "./batchgetobjectinformation";
import { BatchListAttachedIndices } from "./batchlistattachedindices";
import { BatchListIncomingTypedLinks } from "./batchlistincomingtypedlinks";
import { BatchListIndex } from "./batchlistindex";
import { BatchListObjectAttributes } from "./batchlistobjectattributes";
import { BatchListObjectChildren } from "./batchlistobjectchildren";
import { BatchListObjectParentPaths } from "./batchlistobjectparentpaths";
import { BatchListObjectParents } from "./batchlistobjectparents";
import { BatchListObjectPolicies } from "./batchlistobjectpolicies";
import { BatchListOutgoingTypedLinks } from "./batchlistoutgoingtypedlinks";
import { BatchListPolicyAttachments } from "./batchlistpolicyattachments";
import { BatchLookupPolicy } from "./batchlookuppolicy";
// BatchReadOperation
/**
 * Represents the output of a <code>BatchRead</code> operation.
**/
var BatchReadOperation = /** @class */ (function (_super) {
    __extends(BatchReadOperation, _super);
    function BatchReadOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GetLinkAttributes" }),
        __metadata("design:type", BatchGetLinkAttributes)
    ], BatchReadOperation.prototype, "getLinkAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GetObjectAttributes" }),
        __metadata("design:type", BatchGetObjectAttributes)
    ], BatchReadOperation.prototype, "getObjectAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GetObjectInformation" }),
        __metadata("design:type", BatchGetObjectInformation)
    ], BatchReadOperation.prototype, "getObjectInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListAttachedIndices" }),
        __metadata("design:type", BatchListAttachedIndices)
    ], BatchReadOperation.prototype, "listAttachedIndices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListIncomingTypedLinks" }),
        __metadata("design:type", BatchListIncomingTypedLinks)
    ], BatchReadOperation.prototype, "listIncomingTypedLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListIndex" }),
        __metadata("design:type", BatchListIndex)
    ], BatchReadOperation.prototype, "listIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListObjectAttributes" }),
        __metadata("design:type", BatchListObjectAttributes)
    ], BatchReadOperation.prototype, "listObjectAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListObjectChildren" }),
        __metadata("design:type", BatchListObjectChildren)
    ], BatchReadOperation.prototype, "listObjectChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListObjectParentPaths" }),
        __metadata("design:type", BatchListObjectParentPaths)
    ], BatchReadOperation.prototype, "listObjectParentPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListObjectParents" }),
        __metadata("design:type", BatchListObjectParents)
    ], BatchReadOperation.prototype, "listObjectParents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListObjectPolicies" }),
        __metadata("design:type", BatchListObjectPolicies)
    ], BatchReadOperation.prototype, "listObjectPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListOutgoingTypedLinks" }),
        __metadata("design:type", BatchListOutgoingTypedLinks)
    ], BatchReadOperation.prototype, "listOutgoingTypedLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListPolicyAttachments" }),
        __metadata("design:type", BatchListPolicyAttachments)
    ], BatchReadOperation.prototype, "listPolicyAttachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookupPolicy" }),
        __metadata("design:type", BatchLookupPolicy)
    ], BatchReadOperation.prototype, "lookupPolicy", void 0);
    return BatchReadOperation;
}(SpeakeasyBase));
export { BatchReadOperation };
