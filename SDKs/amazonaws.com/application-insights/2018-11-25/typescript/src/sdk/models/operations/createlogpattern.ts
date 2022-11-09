import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateLogPatternXAmzTargetEnum {
    Ec2WindowsBarleyServiceCreateLogPattern = "EC2WindowsBarleyService.CreateLogPattern"
}


export class CreateLogPatternHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateLogPatternXAmzTargetEnum;
}


export class CreateLogPatternRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateLogPatternHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateLogPatternRequest;
}


export class CreateLogPatternResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createLogPatternResponse?: shared.CreateLogPatternResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
