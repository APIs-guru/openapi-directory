import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeFleetsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeFleets = "PhotonAdminProxyService.DescribeFleets"
}


export class DescribeFleetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeFleetsXAmzTargetEnum;
}


export class DescribeFleetsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeFleetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeFleetsRequest;
}


export class DescribeFleetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeFleetsResult?: shared.DescribeFleetsResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
