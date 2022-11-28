import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Addon } from "./addon";



export class DeleteAddonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addon" })
  addon?: Addon;
}
