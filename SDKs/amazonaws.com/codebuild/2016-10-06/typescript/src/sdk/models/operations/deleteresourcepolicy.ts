import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteResourcePolicyXAmzTargetEnum {
    CodeBuild20161006DeleteResourcePolicy = "CodeBuild_20161006.DeleteResourcePolicy"
}


export class DeleteResourcePolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteResourcePolicyXAmzTargetEnum;
}


export class DeleteResourcePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteResourcePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteResourcePolicyInput;
}


export class DeleteResourcePolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteResourcePolicyOutput?: Map<string, any>;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
