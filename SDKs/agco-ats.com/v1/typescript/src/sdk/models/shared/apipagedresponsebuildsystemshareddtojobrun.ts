import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoJobRun } from "./buildsystemshareddtojobrun";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseBuildSystemSharedDtoJobRun
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseBuildSystemSharedDtoJobRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: BuildSystemSharedDtoJobRun })
  entities: BuildSystemSharedDtoJobRun[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
