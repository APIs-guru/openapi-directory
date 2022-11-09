import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeHsmXAmzTargetEnum {
    CloudHsmFrontendServiceDescribeHsm = "CloudHsmFrontendService.DescribeHsm"
}


export class DescribeHsmHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeHsmXAmzTargetEnum;
}


export class DescribeHsmRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeHsmHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeHsmRequest;
}


export class DescribeHsmResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmInternalException?: any;

  @Metadata()
  cloudHsmServiceException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeHsmResponse?: shared.DescribeHsmResponse;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
