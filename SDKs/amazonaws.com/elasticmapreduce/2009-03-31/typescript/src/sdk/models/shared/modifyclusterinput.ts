import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyClusterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=StepConcurrencyLevel" })
  stepConcurrencyLevel?: number;
}
