import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoTerminationPolicy } from "./autoterminationpolicy";


export class PutAutoTerminationPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoTerminationPolicy" })
  autoTerminationPolicy?: AutoTerminationPolicy;

  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
