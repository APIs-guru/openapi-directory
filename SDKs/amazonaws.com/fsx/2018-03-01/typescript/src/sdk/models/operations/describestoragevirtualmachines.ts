import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeStorageVirtualMachinesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeStorageVirtualMachinesXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DescribeStorageVirtualMachines = "AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines"
}


export class DescribeStorageVirtualMachinesHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeStorageVirtualMachinesXAmzTargetEnum;
}


export class DescribeStorageVirtualMachinesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeStorageVirtualMachinesQueryParams;

  @Metadata()
  headers: DescribeStorageVirtualMachinesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeStorageVirtualMachinesRequest;
}


export class DescribeStorageVirtualMachinesResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeStorageVirtualMachinesResponse?: shared.DescribeStorageVirtualMachinesResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  storageVirtualMachineNotFound?: any;
}
