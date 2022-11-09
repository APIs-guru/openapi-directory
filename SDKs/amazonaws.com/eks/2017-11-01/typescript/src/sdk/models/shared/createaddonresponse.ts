import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Addon } from "./addon";


export class CreateAddonResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=addon" })
  addon?: Addon;
}
