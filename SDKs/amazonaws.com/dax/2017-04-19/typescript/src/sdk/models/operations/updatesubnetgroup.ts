import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateSubnetGroupXAmzTargetEnum {
    AmazonDaxv3UpdateSubnetGroup = "AmazonDAXV3.UpdateSubnetGroup"
}


export class UpdateSubnetGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateSubnetGroupXAmzTargetEnum;
}


export class UpdateSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSubnetGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateSubnetGroupRequest;
}


export class UpdateSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidSubnet?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  subnetGroupNotFoundFault?: any;

  @Metadata()
  subnetInUse?: any;

  @Metadata()
  subnetQuotaExceededFault?: any;

  @Metadata()
  updateSubnetGroupResponse?: shared.UpdateSubnetGroupResponse;
}
