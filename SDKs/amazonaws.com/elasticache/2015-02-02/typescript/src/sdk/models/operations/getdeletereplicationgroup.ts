import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteReplicationGroupActionEnum {
    DeleteReplicationGroup = "DeleteReplicationGroup"
}

export enum GetDeleteReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDeleteReplicationGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteReplicationGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FinalSnapshotIdentifier" })
  finalSnapshotIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" })
  replicationGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RetainPrimaryCluster" })
  retainPrimaryCluster?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteReplicationGroupVersionEnum;
}


export class GetDeleteReplicationGroupHeaders extends SpeakeasyBase {
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


export class GetDeleteReplicationGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteReplicationGroupQueryParams;

  @Metadata()
  headers: GetDeleteReplicationGroupHeaders;
}


export class GetDeleteReplicationGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
