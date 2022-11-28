import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContainerSummary
/** 
 * An object representing summary details of a container within a job.
**/
export class ContainerSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
