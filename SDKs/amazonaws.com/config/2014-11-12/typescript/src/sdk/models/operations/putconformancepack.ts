import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutConformancePackXAmzTargetEnum {
    StarlingDoveServicePutConformancePack = "StarlingDoveService.PutConformancePack"
}


export class PutConformancePackHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutConformancePackXAmzTargetEnum;
}


export class PutConformancePackRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutConformancePackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutConformancePackRequest;
}


export class PutConformancePackResponse extends SpeakeasyBase {
  @Metadata()
  conformancePackTemplateValidationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  insufficientPermissionsException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  maxNumberOfConformancePacksExceededException?: any;

  @Metadata()
  putConformancePackResponse?: shared.PutConformancePackResponse;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  statusCode: number;
}
