import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetTestFailoverActionEnum {
    TestFailover = "TestFailover"
}

export enum GetTestFailoverVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetTestFailoverQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetTestFailoverActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NodeGroupId" })
  nodeGroupId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" })
  replicationGroupId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetTestFailoverVersionEnum;
}


export class GetTestFailoverHeaders extends SpeakeasyBase {
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


export class GetTestFailoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTestFailoverQueryParams;

  @SpeakeasyMetadata()
  headers: GetTestFailoverHeaders;
}


export class GetTestFailoverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
