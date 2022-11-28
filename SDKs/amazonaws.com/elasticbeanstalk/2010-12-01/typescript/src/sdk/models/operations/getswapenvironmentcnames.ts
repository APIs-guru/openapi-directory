import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSwapEnvironmentCnamEsActionEnum {
    SwapEnvironmentCnamEs = "SwapEnvironmentCNAMEs"
}

export enum GetSwapEnvironmentCnamEsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetSwapEnvironmentCnamEsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSwapEnvironmentCnamEsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationEnvironmentId" })
  destinationEnvironmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationEnvironmentName" })
  destinationEnvironmentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceEnvironmentId" })
  sourceEnvironmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceEnvironmentName" })
  sourceEnvironmentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSwapEnvironmentCnamEsVersionEnum;
}


export class GetSwapEnvironmentCnamEsHeaders extends SpeakeasyBase {
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


export class GetSwapEnvironmentCnamEsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSwapEnvironmentCnamEsQueryParams;

  @SpeakeasyMetadata()
  headers: GetSwapEnvironmentCnamEsHeaders;
}


export class GetSwapEnvironmentCnamEsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
