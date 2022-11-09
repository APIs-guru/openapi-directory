import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAutoTerminationPolicyXAmzTargetEnum {
    ElasticMapReduceGetAutoTerminationPolicy = "ElasticMapReduce.GetAutoTerminationPolicy"
}


export class GetAutoTerminationPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAutoTerminationPolicyXAmzTargetEnum;
}


export class GetAutoTerminationPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAutoTerminationPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAutoTerminationPolicyInput;
}


export class GetAutoTerminationPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAutoTerminationPolicyOutput?: shared.GetAutoTerminationPolicyOutput;

  @Metadata()
  statusCode: number;
}
