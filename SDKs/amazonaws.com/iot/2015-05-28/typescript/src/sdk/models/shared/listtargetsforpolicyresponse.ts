import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTargetsForPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: string[];
}
