import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlacierJobDescription } from "./glacierjobdescription";


// ListJobsOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class ListJobsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobList", elemType: shared.GlacierJobDescription })
  jobList?: GlacierJobDescription[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
