import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostRestoreDbClusterFromSnapshotActionEnum {
    RestoreDbClusterFromSnapshot = "RestoreDBClusterFromSnapshot"
}

export enum PostRestoreDbClusterFromSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostRestoreDbClusterFromSnapshotQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRestoreDbClusterFromSnapshotActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRestoreDbClusterFromSnapshotVersionEnum;
}


export class PostRestoreDbClusterFromSnapshotHeaders extends SpeakeasyBase {
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


export class PostRestoreDbClusterFromSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostRestoreDbClusterFromSnapshotQueryParams;

  @Metadata()
  headers: PostRestoreDbClusterFromSnapshotHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRestoreDbClusterFromSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
