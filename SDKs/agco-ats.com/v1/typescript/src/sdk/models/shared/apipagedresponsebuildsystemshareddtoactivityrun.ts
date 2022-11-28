import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoActivityRun } from "./buildsystemshareddtoactivityrun";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseBuildSystemSharedDtoActivityRun
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseBuildSystemSharedDtoActivityRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: BuildSystemSharedDtoActivityRun })
  entities: BuildSystemSharedDtoActivityRun[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
