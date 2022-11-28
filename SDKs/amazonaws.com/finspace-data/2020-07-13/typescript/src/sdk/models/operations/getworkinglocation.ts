import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkingLocationHeaders extends SpeakeasyBase {
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

export enum GetWorkingLocationRequestBodyLocationTypeEnum {
    Ingestion = "INGESTION",
    Sagemaker = "SAGEMAKER"
}


export class GetWorkingLocationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationType" })
  locationType?: GetWorkingLocationRequestBodyLocationTypeEnum;
}


export class GetWorkingLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetWorkingLocationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetWorkingLocationRequestBody;
}


export class GetWorkingLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getWorkingLocationResponse?: shared.GetWorkingLocationResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
