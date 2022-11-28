import { SpeakeasyBase } from "../../../internal/utils";
import { ContentSubmissionSharedBusinessEntitiesRelease } from "./contentsubmissionsharedbusinessentitiesrelease";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseContentSubmissionSharedBusinessEntitiesRelease extends SpeakeasyBase {
    entities: ContentSubmissionSharedBusinessEntitiesRelease[];
    metadata: ApiPagedResponseMetadata;
}
