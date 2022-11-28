import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteNetworkInsightsAnalysisActionEnum {
    DeleteNetworkInsightsAnalysis = "DeleteNetworkInsightsAnalysis"
}

export enum GetDeleteNetworkInsightsAnalysisVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteNetworkInsightsAnalysisQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteNetworkInsightsAnalysisActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInsightsAnalysisId" })
  networkInsightsAnalysisId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteNetworkInsightsAnalysisVersionEnum;
}


export class GetDeleteNetworkInsightsAnalysisHeaders extends SpeakeasyBase {
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


export class GetDeleteNetworkInsightsAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteNetworkInsightsAnalysisQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteNetworkInsightsAnalysisHeaders;
}


export class GetDeleteNetworkInsightsAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
