import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Loa } from "./loa";



export class DescribeInterconnectLoaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loa" })
  loa?: Loa;
}
