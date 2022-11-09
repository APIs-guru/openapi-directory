import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArrayJobDependencyEnum } from "./arrayjobdependencyenum";


// JobDependency
/** 
 * An object representing an Batch job dependency.
**/
export class JobDependency extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=type" })
  type?: ArrayJobDependencyEnum;
}
