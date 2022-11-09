import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeInterconnectLoaXAmzTargetEnum {
    OvertureServiceDescribeInterconnectLoa = "OvertureService.DescribeInterconnectLoa"
}


export class DescribeInterconnectLoaHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeInterconnectLoaXAmzTargetEnum;
}


export class DescribeInterconnectLoaRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeInterconnectLoaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeInterconnectLoaRequest;
}


export class DescribeInterconnectLoaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeInterconnectLoaResponse?: shared.DescribeInterconnectLoaResponse;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
