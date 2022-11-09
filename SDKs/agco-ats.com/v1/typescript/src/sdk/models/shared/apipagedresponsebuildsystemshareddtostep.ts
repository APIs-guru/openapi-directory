import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoStep } from "./buildsystemshareddtostep";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseBuildSystemSharedDtoStep
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseBuildSystemSharedDtoStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.BuildSystemSharedDtoStep })
  entities: BuildSystemSharedDtoStep[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
