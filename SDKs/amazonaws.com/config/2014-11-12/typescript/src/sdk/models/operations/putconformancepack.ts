import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutConformancePackXAmzTargetEnum {
    StarlingDoveServicePutConformancePack = "StarlingDoveService.PutConformancePack"
}


export class PutConformancePackHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutConformancePackXAmzTargetEnum;
}


export class PutConformancePackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutConformancePackHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutConformancePackRequest;
}


export class PutConformancePackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conformancePackTemplateValidationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insufficientPermissionsException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  maxNumberOfConformancePacksExceededException?: any;

  @SpeakeasyMetadata()
  putConformancePackResponse?: shared.PutConformancePackResponse;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
