import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeTerminationPolicyTypesActionEnum {
    DescribeTerminationPolicyTypes = "DescribeTerminationPolicyTypes"
}

export enum PostDescribeTerminationPolicyTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostDescribeTerminationPolicyTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeTerminationPolicyTypesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeTerminationPolicyTypesVersionEnum;
}


export class PostDescribeTerminationPolicyTypesHeaders extends SpeakeasyBase {
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


export class PostDescribeTerminationPolicyTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeTerminationPolicyTypesQueryParams;

  @Metadata()
  headers: PostDescribeTerminationPolicyTypesHeaders;
}


export class PostDescribeTerminationPolicyTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
