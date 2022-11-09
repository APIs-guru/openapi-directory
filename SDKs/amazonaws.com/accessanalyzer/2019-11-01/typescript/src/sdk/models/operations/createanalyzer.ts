import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAnalyzerHeaders extends SpeakeasyBase {
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

export enum CreateAnalyzerRequestBodyTypeEnum {
    Account = "ACCOUNT"
,    Organization = "ORGANIZATION"
}


export class CreateAnalyzerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzerName" })
  analyzerName: string;

  @Metadata({ data: "json, name=archiveRules", elemType: shared.InlineArchiveRule })
  archiveRules?: shared.InlineArchiveRule[];

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type: CreateAnalyzerRequestBodyTypeEnum;
}


export class CreateAnalyzerRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAnalyzerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAnalyzerRequestBody;
}


export class CreateAnalyzerResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAnalyzerResponse?: shared.CreateAnalyzerResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
