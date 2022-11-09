import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeLocationNfsXAmzTargetEnum {
    FmrsServiceDescribeLocationNfs = "FmrsService.DescribeLocationNfs"
}


export class DescribeLocationNfsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeLocationNfsXAmzTargetEnum;
}


export class DescribeLocationNfsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeLocationNfsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeLocationNfsRequest;
}


export class DescribeLocationNfsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeLocationNfsResponse?: shared.DescribeLocationNfsResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
