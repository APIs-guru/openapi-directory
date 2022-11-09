import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CheckSchemaVersionValidityXAmzTargetEnum {
    AwsGlueCheckSchemaVersionValidity = "AWSGlue.CheckSchemaVersionValidity"
}


export class CheckSchemaVersionValidityHeaders extends SpeakeasyBase {
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
  xAmzTarget: CheckSchemaVersionValidityXAmzTargetEnum;
}


export class CheckSchemaVersionValidityRequest extends SpeakeasyBase {
  @Metadata()
  headers: CheckSchemaVersionValidityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CheckSchemaVersionValidityInput;
}


export class CheckSchemaVersionValidityResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  checkSchemaVersionValidityResponse?: shared.CheckSchemaVersionValidityResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
