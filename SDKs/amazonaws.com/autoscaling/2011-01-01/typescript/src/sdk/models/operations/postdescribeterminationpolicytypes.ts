import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDescribeTerminationPolicyTypesActionEnum {
    DescribeTerminationPolicyTypes = "DescribeTerminationPolicyTypes"
}

export enum PostDescribeTerminationPolicyTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostDescribeTerminationPolicyTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeTerminationPolicyTypesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeTerminationPolicyTypesVersionEnum;
}


export class PostDescribeTerminationPolicyTypesHeaders extends SpeakeasyBase {
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


export class PostDescribeTerminationPolicyTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDescribeTerminationPolicyTypesQueryParams;

  @SpeakeasyMetadata()
  headers: PostDescribeTerminationPolicyTypesHeaders;
}


export class PostDescribeTerminationPolicyTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
