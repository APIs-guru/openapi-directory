import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutAutoTerminationPolicyXAmzTargetEnum {
    ElasticMapReducePutAutoTerminationPolicy = "ElasticMapReduce.PutAutoTerminationPolicy"
}


export class PutAutoTerminationPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutAutoTerminationPolicyXAmzTargetEnum;
}


export class PutAutoTerminationPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutAutoTerminationPolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutAutoTerminationPolicyInput;
}


export class PutAutoTerminationPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putAutoTerminationPolicyOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
