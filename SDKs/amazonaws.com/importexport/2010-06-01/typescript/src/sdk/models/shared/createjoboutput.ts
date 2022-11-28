import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
import { JobTypeEnum } from "./jobtypeenum";



// CreateJobOutput
/** 
 * Output structure for the CreateJob operation.
**/
export class CreateJobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Artifact })
  artifactList?: Artifact[];

  @SpeakeasyMetadata()
  jobId?: string;

  @SpeakeasyMetadata()
  jobType?: JobTypeEnum;

  @SpeakeasyMetadata()
  signature?: string;

  @SpeakeasyMetadata()
  signatureFileContents?: string;

  @SpeakeasyMetadata()
  warningMessage?: string;
}
