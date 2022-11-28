import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArrayJobDependencyEnum } from "./arrayjobdependencyenum";



// JobDependency
/** 
 * An object representing an Batch job dependency.
**/
export class JobDependency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ArrayJobDependencyEnum;
}
