import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteAnalysisSchemeActionEnum {
    DeleteAnalysisScheme = "DeleteAnalysisScheme"
}

export enum GetDeleteAnalysisSchemeVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetDeleteAnalysisSchemeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteAnalysisSchemeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AnalysisSchemeName" })
  analysisSchemeName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteAnalysisSchemeVersionEnum;
}


export class GetDeleteAnalysisSchemeHeaders extends SpeakeasyBase {
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


export class GetDeleteAnalysisSchemeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteAnalysisSchemeQueryParams;

  @Metadata()
  headers: GetDeleteAnalysisSchemeHeaders;
}


export class GetDeleteAnalysisSchemeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
