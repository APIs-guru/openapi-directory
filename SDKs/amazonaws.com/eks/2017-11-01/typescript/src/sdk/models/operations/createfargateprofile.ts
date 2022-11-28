import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFargateProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CreateFargateProfileHeaders extends SpeakeasyBase {
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
}


export class CreateFargateProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=fargateProfileName" })
  fargateProfileName: string;

  @SpeakeasyMetadata({ data: "json, name=podExecutionRoleArn" })
  podExecutionRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=selectors", elemType: shared.FargateProfileSelector })
  selectors?: shared.FargateProfileSelector[];

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateFargateProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateFargateProfilePathParams;

  @SpeakeasyMetadata()
  headers: CreateFargateProfileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateFargateProfileRequestBody;
}


export class CreateFargateProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createFargateProfileResponse?: shared.CreateFargateProfileResponse;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceLimitExceededException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedAvailabilityZoneException?: any;
}
