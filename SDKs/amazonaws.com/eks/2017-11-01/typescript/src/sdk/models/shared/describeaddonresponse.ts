import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Addon } from "./addon";


export class DescribeAddonResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=addon" })
  addon?: Addon;
}
