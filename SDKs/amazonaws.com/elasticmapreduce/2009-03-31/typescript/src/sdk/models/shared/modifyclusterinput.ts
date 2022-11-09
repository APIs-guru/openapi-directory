import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyClusterInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=StepConcurrencyLevel" })
  stepConcurrencyLevel?: number;
}
