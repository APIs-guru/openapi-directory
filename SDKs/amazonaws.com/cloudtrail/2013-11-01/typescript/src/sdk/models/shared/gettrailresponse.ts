import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trail } from "./trail";



export class GetTrailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Trail" })
  trail?: Trail;
}
