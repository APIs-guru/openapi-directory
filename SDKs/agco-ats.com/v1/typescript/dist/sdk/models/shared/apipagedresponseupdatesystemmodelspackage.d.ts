import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsPackage } from "./updatesystemmodelspackage";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseUpdateSystemModelsPackage extends SpeakeasyBase {
    entities: UpdateSystemModelsPackage[];
    metadata: ApiPagedResponseMetadata;
}
