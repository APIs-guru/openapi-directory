import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUpdateScalingParametersActionEnum {
    UpdateScalingParameters = "UpdateScalingParameters"
}


// GetUpdateScalingParametersScalingParameters
/** 
 * The desired instance type and desired number of replicas of each index partition.
**/
export class GetUpdateScalingParametersScalingParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=DesiredInstanceType" })
  desiredInstanceType?: shared.PartitionInstanceTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=DesiredPartitionCount" })
  desiredPartitionCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=DesiredReplicationCount" })
  desiredReplicationCount?: number;
}

export enum GetUpdateScalingParametersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetUpdateScalingParametersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateScalingParametersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScalingParameters" })
  scalingParameters: GetUpdateScalingParametersScalingParameters;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateScalingParametersVersionEnum;
}


export class GetUpdateScalingParametersHeaders extends SpeakeasyBase {
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


export class GetUpdateScalingParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateScalingParametersQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateScalingParametersHeaders;
}


export class GetUpdateScalingParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
