import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTargetsForPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=targets" })
  targets?: string[];
}
