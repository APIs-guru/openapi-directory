import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateDeploymentResult
/** 
 *  The result structure for the create a new deployment request. 
**/
export class CreateDeploymentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileUploadUrls" })
  fileUploadUrls: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=zipUploadUrl" })
  zipUploadUrl: string;
}
