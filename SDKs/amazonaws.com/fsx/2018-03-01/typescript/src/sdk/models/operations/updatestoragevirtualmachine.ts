import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateStorageVirtualMachineXAmzTargetEnum {
    AwsSimbaApiServiceV20180301UpdateStorageVirtualMachine = "AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine"
}


export class UpdateStorageVirtualMachineHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateStorageVirtualMachineXAmzTargetEnum;
}


export class UpdateStorageVirtualMachineRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateStorageVirtualMachineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateStorageVirtualMachineRequest;
}


export class UpdateStorageVirtualMachineResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  storageVirtualMachineNotFound?: any;

  @Metadata()
  unsupportedOperation?: any;

  @Metadata()
  updateStorageVirtualMachineResponse?: shared.UpdateStorageVirtualMachineResponse;
}
