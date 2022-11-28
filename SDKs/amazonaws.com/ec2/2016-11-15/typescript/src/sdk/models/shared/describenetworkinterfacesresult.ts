import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterface } from "./networkinterface";



// DescribeNetworkInterfacesResult
/** 
 * Contains the output of DescribeNetworkInterfaces.
**/
export class DescribeNetworkInterfacesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
