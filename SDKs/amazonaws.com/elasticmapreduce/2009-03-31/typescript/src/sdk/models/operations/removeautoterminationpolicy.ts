import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RemoveAutoTerminationPolicyXAmzTargetEnum {
    ElasticMapReduceRemoveAutoTerminationPolicy = "ElasticMapReduce.RemoveAutoTerminationPolicy"
}


export class RemoveAutoTerminationPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: RemoveAutoTerminationPolicyXAmzTargetEnum;
}


export class RemoveAutoTerminationPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: RemoveAutoTerminationPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RemoveAutoTerminationPolicyInput;
}


export class RemoveAutoTerminationPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  removeAutoTerminationPolicyOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
