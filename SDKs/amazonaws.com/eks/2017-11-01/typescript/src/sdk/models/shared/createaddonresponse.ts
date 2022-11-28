import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Addon } from "./addon";



export class CreateAddonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addon" })
  addon?: Addon;
}
