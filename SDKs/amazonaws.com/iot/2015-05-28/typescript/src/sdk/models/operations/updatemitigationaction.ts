import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateMitigationActionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionName" })
  actionName: string;
}


export class UpdateMitigationActionHeaders extends SpeakeasyBase {
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


// UpdateMitigationActionRequestBodyActionParams
/** 
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
**/
export class UpdateMitigationActionRequestBodyActionParams extends SpeakeasyBase {
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


export class UpdateMitigationActionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionParams" })
  actionParams?: UpdateMitigationActionRequestBodyActionParams;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class UpdateMitigationActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateMitigationActionPathParams;

  @SpeakeasyMetadata()
  headers: UpdateMitigationActionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateMitigationActionRequestBody;
}


export class UpdateMitigationActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateMitigationActionResponse?: shared.UpdateMitigationActionResponse;
}
