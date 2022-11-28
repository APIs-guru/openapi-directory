import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAttribute } from "./accountattribute";



export class DescribeAccountAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AccountAttribute })
  accountAttributes?: AccountAttribute[];
}
