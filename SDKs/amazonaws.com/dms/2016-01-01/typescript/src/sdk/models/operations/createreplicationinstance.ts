import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateReplicationInstanceXAmzTargetEnum {
    AmazonDmSv20160101CreateReplicationInstance = "AmazonDMSv20160101.CreateReplicationInstance"
}


export class CreateReplicationInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateReplicationInstanceXAmzTargetEnum;
}


export class CreateReplicationInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateReplicationInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateReplicationInstanceMessage;
}


export class CreateReplicationInstanceResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createReplicationInstanceResponse?: shared.CreateReplicationInstanceResponse;

  @Metadata()
  insufficientResourceCapacityFault?: any;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  invalidSubnet?: any;

  @Metadata()
  kmsKeyNotAccessibleFault?: any;

  @Metadata()
  replicationSubnetGroupDoesNotCoverEnoughAZs?: any;

  @Metadata()
  resourceAlreadyExistsFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  resourceQuotaExceededFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  storageQuotaExceededFault?: any;
}
