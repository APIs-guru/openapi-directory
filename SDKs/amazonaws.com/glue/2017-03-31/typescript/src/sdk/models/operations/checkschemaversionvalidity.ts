import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CheckSchemaVersionValidityXAmzTargetEnum {
    AwsGlueCheckSchemaVersionValidity = "AWSGlue.CheckSchemaVersionValidity"
}


export class CheckSchemaVersionValidityHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CheckSchemaVersionValidityXAmzTargetEnum;
}


export class CheckSchemaVersionValidityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CheckSchemaVersionValidityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CheckSchemaVersionValidityInput;
}


export class CheckSchemaVersionValidityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  checkSchemaVersionValidityResponse?: shared.CheckSchemaVersionValidityResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
