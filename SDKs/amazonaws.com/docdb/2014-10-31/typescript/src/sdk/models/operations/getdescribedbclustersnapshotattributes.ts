import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeDbClusterSnapshotAttributesActionEnum {
    DescribeDbClusterSnapshotAttributes = "DescribeDBClusterSnapshotAttributes"
}

export enum GetDescribeDbClusterSnapshotAttributesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDescribeDbClusterSnapshotAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeDbClusterSnapshotAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterSnapshotIdentifier" })
  dbClusterSnapshotIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeDbClusterSnapshotAttributesVersionEnum;
}


export class GetDescribeDbClusterSnapshotAttributesHeaders extends SpeakeasyBase {
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


export class GetDescribeDbClusterSnapshotAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeDbClusterSnapshotAttributesQueryParams;

  @Metadata()
  headers: GetDescribeDbClusterSnapshotAttributesHeaders;
}


export class GetDescribeDbClusterSnapshotAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
