import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoAgent } from "./buildsystemshareddtoagent";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseBuildSystemSharedDtoAgent
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseBuildSystemSharedDtoAgent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.BuildSystemSharedDtoAgent })
  entities: BuildSystemSharedDtoAgent[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
