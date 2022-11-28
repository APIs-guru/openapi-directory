import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtocolEnum } from "./protocolenum";
import { Tag } from "./tag";



// NetworkInsightsPath
/** 
 * Describes a path.
**/
export class NetworkInsightsPath extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createdDate?: Date;

  @SpeakeasyMetadata()
  destination?: string;

  @SpeakeasyMetadata()
  destinationIp?: string;

  @SpeakeasyMetadata()
  destinationPort?: number;

  @SpeakeasyMetadata()
  networkInsightsPathArn?: string;

  @SpeakeasyMetadata()
  networkInsightsPathId?: string;

  @SpeakeasyMetadata()
  protocol?: ProtocolEnum;

  @SpeakeasyMetadata()
  source?: string;

  @SpeakeasyMetadata()
  sourceIp?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
