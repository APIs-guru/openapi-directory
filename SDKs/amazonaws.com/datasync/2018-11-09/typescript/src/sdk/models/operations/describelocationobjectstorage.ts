import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeLocationObjectStorageXAmzTargetEnum {
    FmrsServiceDescribeLocationObjectStorage = "FmrsService.DescribeLocationObjectStorage"
}


export class DescribeLocationObjectStorageHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeLocationObjectStorageXAmzTargetEnum;
}


export class DescribeLocationObjectStorageRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeLocationObjectStorageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeLocationObjectStorageRequest;
}


export class DescribeLocationObjectStorageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeLocationObjectStorageResponse?: shared.DescribeLocationObjectStorageResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
