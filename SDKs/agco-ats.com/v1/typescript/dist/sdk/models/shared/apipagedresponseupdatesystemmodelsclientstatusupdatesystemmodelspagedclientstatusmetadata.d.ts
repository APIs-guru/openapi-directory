import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsClientStatus } from "./updatesystemmodelsclientstatus";
import { UpdateSystemModelsPagedClientStatusMetadata } from "./updatesystemmodelspagedclientstatusmetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata extends SpeakeasyBase {
    entities: UpdateSystemModelsClientStatus[];
    metadata: UpdateSystemModelsPagedClientStatusMetadata;
}
