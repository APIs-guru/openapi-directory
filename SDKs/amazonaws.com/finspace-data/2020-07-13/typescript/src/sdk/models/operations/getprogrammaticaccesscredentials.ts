import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProgrammaticAccessCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=durationInMinutes" })
  durationInMinutes?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=environmentId" })
  environmentId: string;
}


export class GetProgrammaticAccessCredentialsHeaders extends SpeakeasyBase {
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


export class GetProgrammaticAccessCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetProgrammaticAccessCredentialsQueryParams;

  @Metadata()
  headers: GetProgrammaticAccessCredentialsHeaders;
}


export class GetProgrammaticAccessCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getProgrammaticAccessCredentialsResponse?: shared.GetProgrammaticAccessCredentialsResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
