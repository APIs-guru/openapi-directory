import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFunction20200531PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Name" })
  name: string;
}

export enum GetFunction20200531StageEnum {
    Development = "DEVELOPMENT"
,    Live = "LIVE"
}


export class GetFunction20200531QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Stage" })
  stage?: GetFunction20200531StageEnum;
}


export class GetFunction20200531Headers extends SpeakeasyBase {
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


export class GetFunction20200531Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFunction20200531PathParams;

  @Metadata()
  queryParams: GetFunction20200531QueryParams;

  @Metadata()
  headers: GetFunction20200531Headers;
}


export class GetFunction20200531Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
