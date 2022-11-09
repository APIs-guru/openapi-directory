import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSwapEnvironmentCnamEsActionEnum {
    SwapEnvironmentCnamEs = "SwapEnvironmentCNAMEs"
}

export enum GetSwapEnvironmentCnamEsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetSwapEnvironmentCnamEsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSwapEnvironmentCnamEsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationEnvironmentId" })
  destinationEnvironmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationEnvironmentName" })
  destinationEnvironmentName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceEnvironmentId" })
  sourceEnvironmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceEnvironmentName" })
  sourceEnvironmentName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSwapEnvironmentCnamEsVersionEnum;
}


export class GetSwapEnvironmentCnamEsHeaders extends SpeakeasyBase {
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


export class GetSwapEnvironmentCnamEsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSwapEnvironmentCnamEsQueryParams;

  @Metadata()
  headers: GetSwapEnvironmentCnamEsHeaders;
}


export class GetSwapEnvironmentCnamEsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
