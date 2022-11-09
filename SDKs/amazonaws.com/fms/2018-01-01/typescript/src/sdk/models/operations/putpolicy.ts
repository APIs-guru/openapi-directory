import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutPolicyXAmzTargetEnum {
    Awsfms20180101PutPolicy = "AWSFMS_20180101.PutPolicy"
}


export class PutPolicyHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutPolicyXAmzTargetEnum;
}


export class PutPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutPolicyRequest;
}


export class PutPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  invalidTypeException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  putPolicyResponse?: shared.PutPolicyResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
