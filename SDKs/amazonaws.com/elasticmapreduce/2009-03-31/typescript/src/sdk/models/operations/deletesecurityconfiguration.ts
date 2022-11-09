import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteSecurityConfigurationXAmzTargetEnum {
    ElasticMapReduceDeleteSecurityConfiguration = "ElasticMapReduce.DeleteSecurityConfiguration"
}


export class DeleteSecurityConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteSecurityConfigurationXAmzTargetEnum;
}


export class DeleteSecurityConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteSecurityConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteSecurityConfigurationInput;
}


export class DeleteSecurityConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteSecurityConfigurationOutput?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
