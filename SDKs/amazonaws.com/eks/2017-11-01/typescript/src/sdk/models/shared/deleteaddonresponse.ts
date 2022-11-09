import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Addon } from "./addon";


export class DeleteAddonResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=addon" })
  addon?: Addon;
}
