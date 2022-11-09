import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContainerSummary
/** 
 * An object representing summary details of a container within a job.
**/
export class ContainerSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
