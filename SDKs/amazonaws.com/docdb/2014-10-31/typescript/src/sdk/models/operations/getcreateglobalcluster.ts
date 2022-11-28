import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateGlobalClusterActionEnum {
    CreateGlobalCluster = "CreateGlobalCluster"
}

export enum GetCreateGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetCreateGlobalClusterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateGlobalClusterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeletionProtection" })
  deletionProtection?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalClusterIdentifier" })
  globalClusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceDBClusterIdentifier" })
  sourceDbClusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StorageEncrypted" })
  storageEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateGlobalClusterVersionEnum;
}


export class GetCreateGlobalClusterHeaders extends SpeakeasyBase {
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


export class GetCreateGlobalClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateGlobalClusterQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateGlobalClusterHeaders;
}


export class GetCreateGlobalClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
