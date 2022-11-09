import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetThirdPartyJobDetailsXAmzTargetEnum {
    CodePipeline20150709GetThirdPartyJobDetails = "CodePipeline_20150709.GetThirdPartyJobDetails"
}


export class GetThirdPartyJobDetailsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetThirdPartyJobDetailsXAmzTargetEnum;
}


export class GetThirdPartyJobDetailsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetThirdPartyJobDetailsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetThirdPartyJobDetailsInput;
}


export class GetThirdPartyJobDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getThirdPartyJobDetailsOutput?: shared.GetThirdPartyJobDetailsOutput;

  @Metadata()
  invalidClientTokenException?: any;

  @Metadata()
  invalidJobException?: any;

  @Metadata()
  jobNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
