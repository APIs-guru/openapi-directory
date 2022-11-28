import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InitiateJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}


export class InitiateJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// InitiateJobRequestBodyJobParameters
/** 
 * Provides options for defining a job.
**/
export class InitiateJobRequestBodyJobParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArchiveId" })
  archiveId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=InventoryRetrievalParameters" })
  inventoryRetrievalParameters?: shared.InventoryRetrievalJobInput;

  @SpeakeasyMetadata({ data: "json, name=OutputLocation" })
  outputLocation?: shared.OutputLocation;

  @SpeakeasyMetadata({ data: "json, name=RetrievalByteRange" })
  retrievalByteRange?: string;

  @SpeakeasyMetadata({ data: "json, name=SNSTopic" })
  snsTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=SelectParameters" })
  selectParameters?: shared.SelectParameters;

  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}


export class InitiateJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobParameters" })
  jobParameters?: InitiateJobRequestBodyJobParameters;
}


export class InitiateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InitiateJobPathParams;

  @SpeakeasyMetadata()
  headers: InitiateJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: InitiateJobRequestBody;
}


export class InitiateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  initiateJobOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  insufficientCapacityException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  missingParameterValueException?: any;

  @SpeakeasyMetadata()
  policyEnforcedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
