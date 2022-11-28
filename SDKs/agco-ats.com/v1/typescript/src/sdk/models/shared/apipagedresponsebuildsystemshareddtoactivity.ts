import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoActivity } from "./buildsystemshareddtoactivity";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseBuildSystemSharedDtoActivity
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseBuildSystemSharedDtoActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: BuildSystemSharedDtoActivity })
  entities: BuildSystemSharedDtoActivity[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
