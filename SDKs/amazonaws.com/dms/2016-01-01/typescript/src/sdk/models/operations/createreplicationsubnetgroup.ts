import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateReplicationSubnetGroupXAmzTargetEnum {
    AmazonDmSv20160101CreateReplicationSubnetGroup = "AmazonDMSv20160101.CreateReplicationSubnetGroup"
}


export class CreateReplicationSubnetGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateReplicationSubnetGroupXAmzTargetEnum;
}


export class CreateReplicationSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateReplicationSubnetGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateReplicationSubnetGroupMessage;
}


export class CreateReplicationSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createReplicationSubnetGroupResponse?: shared.CreateReplicationSubnetGroupResponse;

  @Metadata()
  invalidSubnet?: any;

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
}
