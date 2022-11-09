import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteSuggesterActionEnum {
    DeleteSuggester = "DeleteSuggester"
}

export enum GetDeleteSuggesterVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetDeleteSuggesterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteSuggesterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SuggesterName" })
  suggesterName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteSuggesterVersionEnum;
}


export class GetDeleteSuggesterHeaders extends SpeakeasyBase {
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


export class GetDeleteSuggesterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteSuggesterQueryParams;

  @Metadata()
  headers: GetDeleteSuggesterHeaders;
}


export class GetDeleteSuggesterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
