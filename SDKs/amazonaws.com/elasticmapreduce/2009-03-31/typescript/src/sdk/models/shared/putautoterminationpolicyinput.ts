import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoTerminationPolicy } from "./autoterminationpolicy";



export class PutAutoTerminationPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoTerminationPolicy" })
  autoTerminationPolicy?: AutoTerminationPolicy;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
