import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoJob } from "./buildsystemshareddtojob";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseBuildSystemSharedDtoJob
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseBuildSystemSharedDtoJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.BuildSystemSharedDtoJob })
  entities: BuildSystemSharedDtoJob[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
