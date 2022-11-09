import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutBlockPublicAccessConfigurationXAmzTargetEnum {
    ElasticMapReducePutBlockPublicAccessConfiguration = "ElasticMapReduce.PutBlockPublicAccessConfiguration"
}


export class PutBlockPublicAccessConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutBlockPublicAccessConfigurationXAmzTargetEnum;
}


export class PutBlockPublicAccessConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutBlockPublicAccessConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutBlockPublicAccessConfigurationInput;
}


export class PutBlockPublicAccessConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  putBlockPublicAccessConfigurationOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
