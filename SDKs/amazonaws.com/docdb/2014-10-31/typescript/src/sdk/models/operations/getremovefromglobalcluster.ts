import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRemoveFromGlobalClusterActionEnum {
    RemoveFromGlobalCluster = "RemoveFromGlobalCluster"
}

export enum GetRemoveFromGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetRemoveFromGlobalClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRemoveFromGlobalClusterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DbClusterIdentifier" })
  dbClusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalClusterIdentifier" })
  globalClusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRemoveFromGlobalClusterVersionEnum;
}


export class GetRemoveFromGlobalClusterHeaders extends SpeakeasyBase {
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


export class GetRemoveFromGlobalClusterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoveFromGlobalClusterQueryParams;

  @Metadata()
  headers: GetRemoveFromGlobalClusterHeaders;
}


export class GetRemoveFromGlobalClusterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
