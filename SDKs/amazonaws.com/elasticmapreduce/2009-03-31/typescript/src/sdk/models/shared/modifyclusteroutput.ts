import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyClusterOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StepConcurrencyLevel" })
  stepConcurrencyLevel?: number;
}
