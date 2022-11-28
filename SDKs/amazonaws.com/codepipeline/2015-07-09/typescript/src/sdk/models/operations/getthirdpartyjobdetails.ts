import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetThirdPartyJobDetailsXAmzTargetEnum {
    CodePipeline20150709GetThirdPartyJobDetails = "CodePipeline_20150709.GetThirdPartyJobDetails"
}


export class GetThirdPartyJobDetailsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetThirdPartyJobDetailsXAmzTargetEnum;
}


export class GetThirdPartyJobDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetThirdPartyJobDetailsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetThirdPartyJobDetailsInput;
}


export class GetThirdPartyJobDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getThirdPartyJobDetailsOutput?: shared.GetThirdPartyJobDetailsOutput;

  @SpeakeasyMetadata()
  invalidClientTokenException?: any;

  @SpeakeasyMetadata()
  invalidJobException?: any;

  @SpeakeasyMetadata()
  jobNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
