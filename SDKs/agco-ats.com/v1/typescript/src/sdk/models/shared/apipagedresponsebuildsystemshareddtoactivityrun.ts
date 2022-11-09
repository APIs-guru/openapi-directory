import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoActivityRun } from "./buildsystemshareddtoactivityrun";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseBuildSystemSharedDtoActivityRun
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseBuildSystemSharedDtoActivityRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.BuildSystemSharedDtoActivityRun })
  entities: BuildSystemSharedDtoActivityRun[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
