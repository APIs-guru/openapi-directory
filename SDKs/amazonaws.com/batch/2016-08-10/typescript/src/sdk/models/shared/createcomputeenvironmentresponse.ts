import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateComputeEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEnvironmentArn" })
  computeEnvironmentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=computeEnvironmentName" })
  computeEnvironmentName?: string;
}
