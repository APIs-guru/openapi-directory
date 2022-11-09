import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetDataRetrievalPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class SetDataRetrievalPolicyHeaders extends SpeakeasyBase {
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


// SetDataRetrievalPolicyRequestBodyPolicy
/** 
 * Data retrieval policy.
**/
export class SetDataRetrievalPolicyRequestBodyPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rules", elemType: shared.DataRetrievalRule })
  rules?: shared.DataRetrievalRule[];
}


export class SetDataRetrievalPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy?: SetDataRetrievalPolicyRequestBodyPolicy;
}


export class SetDataRetrievalPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetDataRetrievalPolicyPathParams;

  @Metadata()
  headers: SetDataRetrievalPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SetDataRetrievalPolicyRequestBody;
}


export class SetDataRetrievalPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  missingParameterValueException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
