import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteStorageVirtualMachineXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DeleteStorageVirtualMachine = "AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine"
}


export class DeleteStorageVirtualMachineHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteStorageVirtualMachineXAmzTargetEnum;
}


export class DeleteStorageVirtualMachineRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteStorageVirtualMachineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteStorageVirtualMachineRequest;
}


export class DeleteStorageVirtualMachineResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteStorageVirtualMachineResponse?: shared.DeleteStorageVirtualMachineResponse;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  storageVirtualMachineNotFound?: any;
}
