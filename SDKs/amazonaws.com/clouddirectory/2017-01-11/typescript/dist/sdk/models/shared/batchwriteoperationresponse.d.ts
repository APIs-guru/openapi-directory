import { SpeakeasyBase } from "../../../internal/utils";
import { BatchAttachObjectResponse } from "./batchattachobjectresponse";
import { BatchAttachToIndexResponse } from "./batchattachtoindexresponse";
import { BatchAttachTypedLinkResponse } from "./batchattachtypedlinkresponse";
import { BatchCreateIndexResponse } from "./batchcreateindexresponse";
import { BatchCreateObjectResponse } from "./batchcreateobjectresponse";
import { BatchDetachFromIndexResponse } from "./batchdetachfromindexresponse";
import { BatchDetachObjectResponse } from "./batchdetachobjectresponse";
import { BatchUpdateObjectAttributesResponse } from "./batchupdateobjectattributesresponse";
/**
 * Represents the output of a <code>BatchWrite</code> response operation.
**/
export declare class BatchWriteOperationResponse extends SpeakeasyBase {
    addFacetToObject?: Map<string, any>;
    attachObject?: BatchAttachObjectResponse;
    attachPolicy?: Map<string, any>;
    attachToIndex?: BatchAttachToIndexResponse;
    attachTypedLink?: BatchAttachTypedLinkResponse;
    createIndex?: BatchCreateIndexResponse;
    createObject?: BatchCreateObjectResponse;
    deleteObject?: Map<string, any>;
    detachFromIndex?: BatchDetachFromIndexResponse;
    detachObject?: BatchDetachObjectResponse;
    detachPolicy?: Map<string, any>;
    detachTypedLink?: Map<string, any>;
    removeFacetFromObject?: Map<string, any>;
    updateLinkAttributes?: Map<string, any>;
    updateObjectAttributes?: BatchUpdateObjectAttributesResponse;
}
