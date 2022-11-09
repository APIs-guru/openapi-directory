import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutEvaluationsXAmzTargetEnum {
    StarlingDoveServicePutEvaluations = "StarlingDoveService.PutEvaluations"
}


export class PutEvaluationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutEvaluationsXAmzTargetEnum;
}


export class PutEvaluationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutEvaluationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutEvaluationsRequest;
}


export class PutEvaluationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  invalidResultTokenException?: any;

  @Metadata()
  noSuchConfigRuleException?: any;

  @Metadata()
  putEvaluationsResponse?: shared.PutEvaluationsResponse;

  @Metadata()
  statusCode: number;
}
