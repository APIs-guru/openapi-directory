import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Loa } from "./loa";


export class DescribeInterconnectLoaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=loa" })
  loa?: Loa;
}
