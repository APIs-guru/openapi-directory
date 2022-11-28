import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoStep } from "./buildsystemshareddtostep";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseBuildSystemSharedDtoStep
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseBuildSystemSharedDtoStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: BuildSystemSharedDtoStep })
  entities: BuildSystemSharedDtoStep[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
