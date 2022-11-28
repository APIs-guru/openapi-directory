import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateComputeEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEnvironmentArn" })
  computeEnvironmentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=computeEnvironmentName" })
  computeEnvironmentName?: string;
}
