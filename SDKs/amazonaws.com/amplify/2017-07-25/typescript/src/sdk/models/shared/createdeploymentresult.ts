import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateDeploymentResult
/** 
 *  The result structure for the create a new deployment request. 
**/
export class CreateDeploymentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileUploadUrls" })
  fileUploadUrls: Map<string, string>;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=zipUploadUrl" })
  zipUploadUrl: string;
}
