import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteAnalysisSchemeActionEnum {
    DeleteAnalysisScheme = "DeleteAnalysisScheme"
}

export enum GetDeleteAnalysisSchemeVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetDeleteAnalysisSchemeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteAnalysisSchemeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AnalysisSchemeName" })
  analysisSchemeName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteAnalysisSchemeVersionEnum;
}


export class GetDeleteAnalysisSchemeHeaders extends SpeakeasyBase {
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


export class GetDeleteAnalysisSchemeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteAnalysisSchemeQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteAnalysisSchemeHeaders;
}


export class GetDeleteAnalysisSchemeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
