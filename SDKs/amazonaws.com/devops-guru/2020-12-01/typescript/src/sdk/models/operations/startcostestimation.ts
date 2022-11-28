import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartCostEstimationHeaders extends SpeakeasyBase {
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


// StartCostEstimationRequestBodyResourceCollection
/** 
 * Information about a filter used to specify which AWS resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>. 
**/
export class StartCostEstimationRequestBodyResourceCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudFormation" })
  cloudFormation?: shared.CloudFormationCostEstimationResourceCollectionFilter;
}


export class StartCostEstimationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceCollection" })
  resourceCollection: StartCostEstimationRequestBodyResourceCollection;
}


export class StartCostEstimationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartCostEstimationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartCostEstimationRequestBody;
}


export class StartCostEstimationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  startCostEstimationResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
