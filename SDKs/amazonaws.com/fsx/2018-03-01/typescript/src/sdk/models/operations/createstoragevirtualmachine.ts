import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateStorageVirtualMachineXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateStorageVirtualMachine = "AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine"
}


export class CreateStorageVirtualMachineHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateStorageVirtualMachineXAmzTargetEnum;
}


export class CreateStorageVirtualMachineRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateStorageVirtualMachineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateStorageVirtualMachineRequest;
}


export class CreateStorageVirtualMachineResponse extends SpeakeasyBase {
  @Metadata()
  activeDirectoryError?: any;

  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createStorageVirtualMachineResponse?: shared.CreateStorageVirtualMachineResponse;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  serviceLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperation?: any;
}
