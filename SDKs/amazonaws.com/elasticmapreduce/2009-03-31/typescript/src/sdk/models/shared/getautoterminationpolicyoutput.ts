import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoTerminationPolicy } from "./autoterminationpolicy";



export class GetAutoTerminationPolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoTerminationPolicy" })
  autoTerminationPolicy?: AutoTerminationPolicy;
}
