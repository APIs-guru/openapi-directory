import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyClusterOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StepConcurrencyLevel" })
  stepConcurrencyLevel?: number;
}
