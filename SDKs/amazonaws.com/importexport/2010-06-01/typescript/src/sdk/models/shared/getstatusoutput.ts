import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
import { JobTypeEnum } from "./jobtypeenum";



// GetStatusOutput
/** 
 * Output structure for the GetStatus operation.
**/
export class GetStatusOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Artifact })
  artifactList?: Artifact[];

  @SpeakeasyMetadata()
  carrier?: string;

  @SpeakeasyMetadata()
  creationDate?: Date;

  @SpeakeasyMetadata()
  currentManifest?: string;

  @SpeakeasyMetadata()
  errorCount?: number;

  @SpeakeasyMetadata()
  jobId?: string;

  @SpeakeasyMetadata()
  jobType?: JobTypeEnum;

  @SpeakeasyMetadata()
  locationCode?: string;

  @SpeakeasyMetadata()
  locationMessage?: string;

  @SpeakeasyMetadata()
  logBucket?: string;

  @SpeakeasyMetadata()
  logKey?: string;

  @SpeakeasyMetadata()
  progressCode?: string;

  @SpeakeasyMetadata()
  progressMessage?: string;

  @SpeakeasyMetadata()
  signature?: string;

  @SpeakeasyMetadata()
  signatureFileContents?: string;

  @SpeakeasyMetadata()
  trackingNumber?: string;
}
