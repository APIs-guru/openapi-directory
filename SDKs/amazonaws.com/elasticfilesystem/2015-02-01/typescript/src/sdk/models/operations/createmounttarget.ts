import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateMountTargetHeaders extends SpeakeasyBase {
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
}


export class CreateMountTargetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=SubnetId" })
  subnetId: string;
}


export class CreateMountTargetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateMountTargetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateMountTargetRequestBody;
}


export class CreateMountTargetResponse extends SpeakeasyBase {
  @Metadata()
  availabilityZonesMismatch?: any;

  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  incorrectFileSystemLifeCycleState?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  ipAddressInUse?: any;

  @Metadata()
  mountTargetConflict?: any;

  @Metadata()
  mountTargetDescription?: shared.MountTargetDescription;

  @Metadata()
  networkInterfaceLimitExceeded?: any;

  @Metadata()
  noFreeAddressesInSubnet?: any;

  @Metadata()
  securityGroupLimitExceeded?: any;

  @Metadata()
  securityGroupNotFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  subnetNotFound?: any;

  @Metadata()
  unsupportedAvailabilityZone?: any;
}
