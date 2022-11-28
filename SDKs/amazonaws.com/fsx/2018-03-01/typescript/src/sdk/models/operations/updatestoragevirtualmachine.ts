import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateStorageVirtualMachineXAmzTargetEnum {
    AwsSimbaApiServiceV20180301UpdateStorageVirtualMachine = "AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine"
}


export class UpdateStorageVirtualMachineHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateStorageVirtualMachineXAmzTargetEnum;
}


export class UpdateStorageVirtualMachineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateStorageVirtualMachineHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateStorageVirtualMachineRequest;
}


export class UpdateStorageVirtualMachineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incompatibleParameterError?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  storageVirtualMachineNotFound?: any;

  @SpeakeasyMetadata()
  unsupportedOperation?: any;

  @SpeakeasyMetadata()
  updateStorageVirtualMachineResponse?: shared.UpdateStorageVirtualMachineResponse;
}
