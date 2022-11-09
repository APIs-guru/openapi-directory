import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeLocationFsxWindowsXAmzTargetEnum {
    FmrsServiceDescribeLocationFsxWindows = "FmrsService.DescribeLocationFsxWindows"
}


export class DescribeLocationFsxWindowsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeLocationFsxWindowsXAmzTargetEnum;
}


export class DescribeLocationFsxWindowsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeLocationFsxWindowsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeLocationFsxWindowsRequest;
}


export class DescribeLocationFsxWindowsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeLocationFsxWindowsResponse?: shared.DescribeLocationFsxWindowsResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
