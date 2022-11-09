import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUpdateScalingParametersActionEnum {
    UpdateScalingParameters = "UpdateScalingParameters"
}


// GetUpdateScalingParametersScalingParameters
/** 
 * The desired instance type and desired number of replicas of each index partition.
**/
export class GetUpdateScalingParametersScalingParameters extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=DesiredInstanceType" })
  desiredInstanceType?: shared.PartitionInstanceTypeEnum;

  @Metadata({ data: "queryParam, name=DesiredPartitionCount" })
  desiredPartitionCount?: number;

  @Metadata({ data: "queryParam, name=DesiredReplicationCount" })
  desiredReplicationCount?: number;
}

export enum GetUpdateScalingParametersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetUpdateScalingParametersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateScalingParametersActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScalingParameters" })
  scalingParameters: GetUpdateScalingParametersScalingParameters;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateScalingParametersVersionEnum;
}


export class GetUpdateScalingParametersHeaders extends SpeakeasyBase {
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


export class GetUpdateScalingParametersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateScalingParametersQueryParams;

  @Metadata()
  headers: GetUpdateScalingParametersHeaders;
}


export class GetUpdateScalingParametersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
