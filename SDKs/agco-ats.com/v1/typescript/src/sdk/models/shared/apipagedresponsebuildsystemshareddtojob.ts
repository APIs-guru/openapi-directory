import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoJob } from "./buildsystemshareddtojob";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseBuildSystemSharedDtoJob
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseBuildSystemSharedDtoJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: BuildSystemSharedDtoJob })
  entities: BuildSystemSharedDtoJob[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
