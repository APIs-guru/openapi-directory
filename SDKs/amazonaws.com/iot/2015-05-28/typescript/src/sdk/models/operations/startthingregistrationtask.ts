import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartThingRegistrationTaskHeaders extends SpeakeasyBase {
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


export class StartThingRegistrationTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputFileBucket" })
  inputFileBucket: string;

  @SpeakeasyMetadata({ data: "json, name=inputFileKey" })
  inputFileKey: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=templateBody" })
  templateBody: string;
}


export class StartThingRegistrationTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartThingRegistrationTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartThingRegistrationTaskRequestBody;
}


export class StartThingRegistrationTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  startThingRegistrationTaskResponse?: shared.StartThingRegistrationTaskResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
