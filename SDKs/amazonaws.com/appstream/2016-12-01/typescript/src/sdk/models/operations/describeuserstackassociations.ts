import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeUserStackAssociationsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeUserStackAssociations = "PhotonAdminProxyService.DescribeUserStackAssociations"
}


export class DescribeUserStackAssociationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeUserStackAssociationsXAmzTargetEnum;
}


export class DescribeUserStackAssociationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeUserStackAssociationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeUserStackAssociationsRequest;
}


export class DescribeUserStackAssociationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeUserStackAssociationsResult?: shared.DescribeUserStackAssociationsResult;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;
}
