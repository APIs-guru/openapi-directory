import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateChangesetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class CreateChangesetHeaders extends SpeakeasyBase {
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

export enum CreateChangesetRequestBodyChangeTypeEnum {
    Replace = "REPLACE",
    Append = "APPEND",
    Modify = "MODIFY"
}

export enum CreateChangesetRequestBodyFormatTypeEnum {
    Csv = "CSV",
    Json = "JSON",
    Parquet = "PARQUET",
    Xml = "XML"
}

export enum CreateChangesetRequestBodySourceTypeEnum {
    S3 = "S3"
}


export class CreateChangesetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeType" })
  changeType: CreateChangesetRequestBodyChangeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=formatParams" })
  formatParams?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=formatType" })
  formatType?: CreateChangesetRequestBodyFormatTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceParams" })
  sourceParams: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType: CreateChangesetRequestBodySourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateChangesetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateChangesetPathParams;

  @SpeakeasyMetadata()
  headers: CreateChangesetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateChangesetRequestBody;
}


export class CreateChangesetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createChangesetResponse?: shared.CreateChangesetResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
