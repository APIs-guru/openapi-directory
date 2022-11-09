import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InitiateJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}


export class InitiateJobHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// InitiateJobRequestBodyJobParameters
/** 
 * Provides options for defining a job.
**/
export class InitiateJobRequestBodyJobParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArchiveId" })
  archiveId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Format" })
  format?: string;

  @Metadata({ data: "json, name=InventoryRetrievalParameters" })
  inventoryRetrievalParameters?: shared.InventoryRetrievalJobInput;

  @Metadata({ data: "json, name=OutputLocation" })
  outputLocation?: shared.OutputLocation;

  @Metadata({ data: "json, name=RetrievalByteRange" })
  retrievalByteRange?: string;

  @Metadata({ data: "json, name=SNSTopic" })
  snsTopic?: string;

  @Metadata({ data: "json, name=SelectParameters" })
  selectParameters?: shared.SelectParameters;

  @Metadata({ data: "json, name=Tier" })
  tier?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}


export class InitiateJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobParameters" })
  jobParameters?: InitiateJobRequestBodyJobParameters;
}


export class InitiateJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InitiateJobPathParams;

  @Metadata()
  headers: InitiateJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: InitiateJobRequestBody;
}


export class InitiateJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  initiateJobOutput?: Map<string, any>;

  @Metadata()
  insufficientCapacityException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  missingParameterValueException?: any;

  @Metadata()
  policyEnforcedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
