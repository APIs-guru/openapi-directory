import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateMitigationActionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionName" })
  actionName: string;
}


export class CreateMitigationActionHeaders extends SpeakeasyBase {
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


// CreateMitigationActionRequestBodyActionParams
/** 
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
**/
export class CreateMitigationActionRequestBodyActionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addThingsToThingGroupParams" })
  addThingsToThingGroupParams?: shared.AddThingsToThingGroupParams;

  @SpeakeasyMetadata({ data: "json, name=enableIoTLoggingParams" })
  enableIoTLoggingParams?: shared.EnableIoTLoggingParams;

  @SpeakeasyMetadata({ data: "json, name=publishFindingToSnsParams" })
  publishFindingToSnsParams?: shared.PublishFindingToSnsParams;

  @SpeakeasyMetadata({ data: "json, name=replaceDefaultPolicyVersionParams" })
  replaceDefaultPolicyVersionParams?: shared.ReplaceDefaultPolicyVersionParams;

  @SpeakeasyMetadata({ data: "json, name=updateCACertificateParams" })
  updateCaCertificateParams?: shared.UpdateCaCertificateParams;

  @SpeakeasyMetadata({ data: "json, name=updateDeviceCertificateParams" })
  updateDeviceCertificateParams?: shared.UpdateDeviceCertificateParams;
}


export class CreateMitigationActionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionParams" })
  actionParams: CreateMitigationActionRequestBodyActionParams;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateMitigationActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateMitigationActionPathParams;

  @SpeakeasyMetadata()
  headers: CreateMitigationActionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateMitigationActionRequestBody;
}


export class CreateMitigationActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createMitigationActionResponse?: shared.CreateMitigationActionResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
