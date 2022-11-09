import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoTerminationPolicy } from "./autoterminationpolicy";


export class GetAutoTerminationPolicyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoTerminationPolicy" })
  autoTerminationPolicy?: AutoTerminationPolicy;
}
