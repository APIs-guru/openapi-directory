import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetDataRetrievalPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class SetDataRetrievalPolicyHeaders extends SpeakeasyBase {
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


// SetDataRetrievalPolicyRequestBodyPolicy
/** 
 * Data retrieval policy.
**/
export class SetDataRetrievalPolicyRequestBodyPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: shared.DataRetrievalRule })
  rules?: shared.DataRetrievalRule[];
}


export class SetDataRetrievalPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: SetDataRetrievalPolicyRequestBodyPolicy;
}


export class SetDataRetrievalPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetDataRetrievalPolicyPathParams;

  @SpeakeasyMetadata()
  headers: SetDataRetrievalPolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SetDataRetrievalPolicyRequestBody;
}


export class SetDataRetrievalPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  missingParameterValueException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
