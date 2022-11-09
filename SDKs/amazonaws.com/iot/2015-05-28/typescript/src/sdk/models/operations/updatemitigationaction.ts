import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateMitigationActionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=actionName" })
  actionName: string;
}


export class UpdateMitigationActionHeaders extends SpeakeasyBase {
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


// UpdateMitigationActionRequestBodyActionParams
/** 
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
**/
export class UpdateMitigationActionRequestBodyActionParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=addThingsToThingGroupParams" })
  addThingsToThingGroupParams?: shared.AddThingsToThingGroupParams;

  @Metadata({ data: "json, name=enableIoTLoggingParams" })
  enableIoTLoggingParams?: shared.EnableIoTLoggingParams;

  @Metadata({ data: "json, name=publishFindingToSnsParams" })
  publishFindingToSnsParams?: shared.PublishFindingToSnsParams;

  @Metadata({ data: "json, name=replaceDefaultPolicyVersionParams" })
  replaceDefaultPolicyVersionParams?: shared.ReplaceDefaultPolicyVersionParams;

  @Metadata({ data: "json, name=updateCACertificateParams" })
  updateCaCertificateParams?: shared.UpdateCaCertificateParams;

  @Metadata({ data: "json, name=updateDeviceCertificateParams" })
  updateDeviceCertificateParams?: shared.UpdateDeviceCertificateParams;
}


export class UpdateMitigationActionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionParams" })
  actionParams?: UpdateMitigationActionRequestBodyActionParams;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class UpdateMitigationActionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateMitigationActionPathParams;

  @Metadata()
  headers: UpdateMitigationActionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateMitigationActionRequestBody;
}


export class UpdateMitigationActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateMitigationActionResponse?: shared.UpdateMitigationActionResponse;
}
