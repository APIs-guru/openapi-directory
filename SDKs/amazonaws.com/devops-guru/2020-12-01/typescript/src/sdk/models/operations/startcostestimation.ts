import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartCostEstimationHeaders extends SpeakeasyBase {
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


// StartCostEstimationRequestBodyResourceCollection
/** 
 * Information about a filter used to specify which AWS resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>. 
**/
export class StartCostEstimationRequestBodyResourceCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudFormation" })
  cloudFormation?: shared.CloudFormationCostEstimationResourceCollectionFilter;
}


export class StartCostEstimationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=ResourceCollection" })
  resourceCollection: StartCostEstimationRequestBodyResourceCollection;
}


export class StartCostEstimationRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartCostEstimationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartCostEstimationRequestBody;
}


export class StartCostEstimationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startCostEstimationResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
