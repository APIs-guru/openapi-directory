import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutReplicationConfigurationXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutReplicationConfiguration = "AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration"
}


export class PutReplicationConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutReplicationConfigurationXAmzTargetEnum;
}


export class PutReplicationConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutReplicationConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutReplicationConfigurationRequest;
}


export class PutReplicationConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  putReplicationConfigurationResponse?: shared.PutReplicationConfigurationResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
