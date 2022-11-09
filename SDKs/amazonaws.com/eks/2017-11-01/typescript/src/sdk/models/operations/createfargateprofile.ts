import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFargateProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CreateFargateProfileHeaders extends SpeakeasyBase {
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
}


export class CreateFargateProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=fargateProfileName" })
  fargateProfileName: string;

  @Metadata({ data: "json, name=podExecutionRoleArn" })
  podExecutionRoleArn: string;

  @Metadata({ data: "json, name=selectors", elemType: shared.FargateProfileSelector })
  selectors?: shared.FargateProfileSelector[];

  @Metadata({ data: "json, name=subnets" })
  subnets?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateFargateProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateFargateProfilePathParams;

  @Metadata()
  headers: CreateFargateProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateFargateProfileRequestBody;
}


export class CreateFargateProfileResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createFargateProfileResponse?: shared.CreateFargateProfileResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedAvailabilityZoneException?: any;
}
