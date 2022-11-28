import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CoipPool } from "./coippool";



export class DescribeCoipPoolsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CoipPool })
  coipPools?: CoipPool[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
