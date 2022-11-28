import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Loa } from "./loa";



export class DescribeConnectionLoaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loa" })
  loa?: Loa;
}
