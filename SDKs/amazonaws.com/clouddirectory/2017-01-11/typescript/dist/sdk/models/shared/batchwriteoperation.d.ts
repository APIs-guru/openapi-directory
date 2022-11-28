import { SpeakeasyBase } from "../../../internal/utils";
import { BatchAddFacetToObject } from "./batchaddfacettoobject";
import { BatchAttachObject } from "./batchattachobject";
import { BatchAttachPolicy } from "./batchattachpolicy";
import { BatchAttachToIndex } from "./batchattachtoindex";
import { BatchAttachTypedLink } from "./batchattachtypedlink";
import { BatchCreateIndex } from "./batchcreateindex";
import { BatchCreateObject } from "./batchcreateobject";
import { BatchDeleteObject } from "./batchdeleteobject";
import { BatchDetachFromIndex } from "./batchdetachfromindex";
import { BatchDetachObject } from "./batchdetachobject";
import { BatchDetachPolicy } from "./batchdetachpolicy";
import { BatchDetachTypedLink } from "./batchdetachtypedlink";
import { BatchRemoveFacetFromObject } from "./batchremovefacetfromobject";
import { BatchUpdateLinkAttributes } from "./batchupdatelinkattributes";
import { BatchUpdateObjectAttributes } from "./batchupdateobjectattributes";
/**
 * Represents the output of a <code>BatchWrite</code> operation.
**/
export declare class BatchWriteOperation extends SpeakeasyBase {
    addFacetToObject?: BatchAddFacetToObject;
    attachObject?: BatchAttachObject;
    attachPolicy?: BatchAttachPolicy;
    attachToIndex?: BatchAttachToIndex;
    attachTypedLink?: BatchAttachTypedLink;
    createIndex?: BatchCreateIndex;
    createObject?: BatchCreateObject;
    deleteObject?: BatchDeleteObject;
    detachFromIndex?: BatchDetachFromIndex;
    detachObject?: BatchDetachObject;
    detachPolicy?: BatchDetachPolicy;
    detachTypedLink?: BatchDetachTypedLink;
    removeFacetFromObject?: BatchRemoveFacetFromObject;
    updateLinkAttributes?: BatchUpdateLinkAttributes;
    updateObjectAttributes?: BatchUpdateObjectAttributes;
}
