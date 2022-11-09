import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Blueprint } from "./blueprint";


export class GetBlueprintResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Blueprint" })
  blueprint?: Blueprint;
}
