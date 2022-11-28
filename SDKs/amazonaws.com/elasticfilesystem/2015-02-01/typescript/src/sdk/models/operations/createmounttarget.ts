import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateMountTargetHeaders extends SpeakeasyBase {
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
}


export class CreateMountTargetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId: string;
}


export class CreateMountTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateMountTargetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateMountTargetRequestBody;
}


export class CreateMountTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZonesMismatch?: any;

  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileSystemNotFound?: any;

  @SpeakeasyMetadata()
  incorrectFileSystemLifeCycleState?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  ipAddressInUse?: any;

  @SpeakeasyMetadata()
  mountTargetConflict?: any;

  @SpeakeasyMetadata()
  mountTargetDescription?: shared.MountTargetDescription;

  @SpeakeasyMetadata()
  networkInterfaceLimitExceeded?: any;

  @SpeakeasyMetadata()
  noFreeAddressesInSubnet?: any;

  @SpeakeasyMetadata()
  securityGroupLimitExceeded?: any;

  @SpeakeasyMetadata()
  securityGroupNotFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subnetNotFound?: any;

  @SpeakeasyMetadata()
  unsupportedAvailabilityZone?: any;
}
