import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Blueprint } from "./blueprint";



export class GetBlueprintResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Blueprint" })
  blueprint?: Blueprint;
}
