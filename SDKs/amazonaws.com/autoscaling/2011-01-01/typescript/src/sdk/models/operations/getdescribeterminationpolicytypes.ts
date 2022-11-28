import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeTerminationPolicyTypesActionEnum {
    DescribeTerminationPolicyTypes = "DescribeTerminationPolicyTypes"
}

export enum GetDescribeTerminationPolicyTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDescribeTerminationPolicyTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeTerminationPolicyTypesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeTerminationPolicyTypesVersionEnum;
}


export class GetDescribeTerminationPolicyTypesHeaders extends SpeakeasyBase {
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


export class GetDescribeTerminationPolicyTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeTerminationPolicyTypesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeTerminationPolicyTypesHeaders;
}


export class GetDescribeTerminationPolicyTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
