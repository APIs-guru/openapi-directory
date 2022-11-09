import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoActivity } from "./buildsystemshareddtoactivity";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseBuildSystemSharedDtoActivity
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseBuildSystemSharedDtoActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.BuildSystemSharedDtoActivity })
  entities: BuildSystemSharedDtoActivity[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
