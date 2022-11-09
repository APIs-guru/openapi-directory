import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkingLocationHeaders extends SpeakeasyBase {
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

export enum GetWorkingLocationRequestBodyLocationTypeEnum {
    Ingestion = "INGESTION"
,    Sagemaker = "SAGEMAKER"
}


export class GetWorkingLocationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationType" })
  locationType?: GetWorkingLocationRequestBodyLocationTypeEnum;
}


export class GetWorkingLocationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetWorkingLocationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetWorkingLocationRequestBody;
}


export class GetWorkingLocationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getWorkingLocationResponse?: shared.GetWorkingLocationResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
