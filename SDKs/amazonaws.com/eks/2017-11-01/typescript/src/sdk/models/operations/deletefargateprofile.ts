import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFargateProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fargateProfileName" })
  fargateProfileName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteFargateProfileHeaders extends SpeakeasyBase {
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


export class DeleteFargateProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFargateProfilePathParams;

  @Metadata()
  headers: DeleteFargateProfileHeaders;
}


export class DeleteFargateProfileResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteFargateProfileResponse?: shared.DeleteFargateProfileResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
