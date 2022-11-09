import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateChangesetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class CreateChangesetHeaders extends SpeakeasyBase {
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

export enum CreateChangesetRequestBodyChangeTypeEnum {
    Replace = "REPLACE"
,    Append = "APPEND"
,    Modify = "MODIFY"
}

export enum CreateChangesetRequestBodyFormatTypeEnum {
    Csv = "CSV"
,    Json = "JSON"
,    Parquet = "PARQUET"
,    Xml = "XML"
}

export enum CreateChangesetRequestBodySourceTypeEnum {
    S3 = "S3"
}


export class CreateChangesetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeType" })
  changeType: CreateChangesetRequestBodyChangeTypeEnum;

  @Metadata({ data: "json, name=formatParams" })
  formatParams?: Map<string, string>;

  @Metadata({ data: "json, name=formatType" })
  formatType?: CreateChangesetRequestBodyFormatTypeEnum;

  @Metadata({ data: "json, name=sourceParams" })
  sourceParams: Map<string, string>;

  @Metadata({ data: "json, name=sourceType" })
  sourceType: CreateChangesetRequestBodySourceTypeEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateChangesetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateChangesetPathParams;

  @Metadata()
  headers: CreateChangesetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateChangesetRequestBody;
}


export class CreateChangesetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createChangesetResponse?: shared.CreateChangesetResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
