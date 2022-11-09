import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifyReplicationSubnetGroupXAmzTargetEnum {
    AmazonDmSv20160101ModifyReplicationSubnetGroup = "AmazonDMSv20160101.ModifyReplicationSubnetGroup"
}


export class ModifyReplicationSubnetGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyReplicationSubnetGroupXAmzTargetEnum;
}


export class ModifyReplicationSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifyReplicationSubnetGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifyReplicationSubnetGroupMessage;
}


export class ModifyReplicationSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidSubnet?: any;

  @Metadata()
  modifyReplicationSubnetGroupResponse?: shared.ModifyReplicationSubnetGroupResponse;

  @Metadata()
  replicationSubnetGroupDoesNotCoverEnoughAZs?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  resourceQuotaExceededFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  subnetAlreadyInUse?: any;
}
