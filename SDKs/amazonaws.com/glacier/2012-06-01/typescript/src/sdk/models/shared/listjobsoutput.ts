import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlacierJobDescription } from "./glacierjobdescription";



// ListJobsOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class ListJobsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobList", elemType: GlacierJobDescription })
  jobList?: GlacierJobDescription[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
