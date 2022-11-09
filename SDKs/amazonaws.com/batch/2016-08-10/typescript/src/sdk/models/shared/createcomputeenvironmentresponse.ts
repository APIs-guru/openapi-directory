import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateComputeEnvironmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEnvironmentArn" })
  computeEnvironmentArn?: string;

  @Metadata({ data: "json, name=computeEnvironmentName" })
  computeEnvironmentName?: string;
}
