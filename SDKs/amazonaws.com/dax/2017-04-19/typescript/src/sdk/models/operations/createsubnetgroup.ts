import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateSubnetGroupXAmzTargetEnum {
    AmazonDaxv3CreateSubnetGroup = "AmazonDAXV3.CreateSubnetGroup"
}


export class CreateSubnetGroupHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateSubnetGroupXAmzTargetEnum;
}


export class CreateSubnetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateSubnetGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateSubnetGroupRequest;
}


export class CreateSubnetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createSubnetGroupResponse?: shared.CreateSubnetGroupResponse;

  @SpeakeasyMetadata()
  invalidSubnet?: any;

  @SpeakeasyMetadata()
  serviceLinkedRoleNotFoundFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subnetGroupAlreadyExistsFault?: any;

  @SpeakeasyMetadata()
  subnetGroupQuotaExceededFault?: any;

  @SpeakeasyMetadata()
  subnetQuotaExceededFault?: any;
}
