import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListConfigurationSetsActionEnum {
    ListConfigurationSets = "ListConfigurationSets"
}

export enum GetListConfigurationSetsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetListConfigurationSetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListConfigurationSetsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListConfigurationSetsVersionEnum;
}


export class GetListConfigurationSetsHeaders extends SpeakeasyBase {
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


export class GetListConfigurationSetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListConfigurationSetsQueryParams;

  @Metadata()
  headers: GetListConfigurationSetsHeaders;
}


export class GetListConfigurationSetsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
