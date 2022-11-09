import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListCustomVerificationEmailTemplatesActionEnum {
    ListCustomVerificationEmailTemplates = "ListCustomVerificationEmailTemplates"
}

export enum GetListCustomVerificationEmailTemplatesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetListCustomVerificationEmailTemplatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListCustomVerificationEmailTemplatesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListCustomVerificationEmailTemplatesVersionEnum;
}


export class GetListCustomVerificationEmailTemplatesHeaders extends SpeakeasyBase {
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


export class GetListCustomVerificationEmailTemplatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListCustomVerificationEmailTemplatesQueryParams;

  @Metadata()
  headers: GetListCustomVerificationEmailTemplatesHeaders;
}


export class GetListCustomVerificationEmailTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
