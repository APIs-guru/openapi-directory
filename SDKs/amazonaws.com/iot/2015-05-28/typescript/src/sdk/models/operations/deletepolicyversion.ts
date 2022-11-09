import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePolicyVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=policyName" })
  policyName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=policyVersionId" })
  policyVersionId: string;
}


export class DeletePolicyVersionHeaders extends SpeakeasyBase {
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


export class DeletePolicyVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePolicyVersionPathParams;

  @Metadata()
  headers: DeletePolicyVersionHeaders;
}


export class DeletePolicyVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteConflictException?: any;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
