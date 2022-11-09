import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Trail } from "./trail";


export class GetTrailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Trail" })
  trail?: Trail;
}
