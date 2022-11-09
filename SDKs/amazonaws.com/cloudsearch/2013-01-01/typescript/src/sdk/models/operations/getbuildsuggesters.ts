import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetBuildSuggestersActionEnum {
    BuildSuggesters = "BuildSuggesters"
}

export enum GetBuildSuggestersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetBuildSuggestersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetBuildSuggestersActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetBuildSuggestersVersionEnum;
}


export class GetBuildSuggestersHeaders extends SpeakeasyBase {
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


export class GetBuildSuggestersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBuildSuggestersQueryParams;

  @Metadata()
  headers: GetBuildSuggestersHeaders;
}


export class GetBuildSuggestersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
