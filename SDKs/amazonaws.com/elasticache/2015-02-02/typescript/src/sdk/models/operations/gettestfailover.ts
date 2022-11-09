import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetTestFailoverActionEnum {
    TestFailover = "TestFailover"
}

export enum GetTestFailoverVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetTestFailoverQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetTestFailoverActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NodeGroupId" })
  nodeGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" })
  replicationGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetTestFailoverVersionEnum;
}


export class GetTestFailoverHeaders extends SpeakeasyBase {
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


export class GetTestFailoverRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTestFailoverQueryParams;

  @Metadata()
  headers: GetTestFailoverHeaders;
}


export class GetTestFailoverResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
