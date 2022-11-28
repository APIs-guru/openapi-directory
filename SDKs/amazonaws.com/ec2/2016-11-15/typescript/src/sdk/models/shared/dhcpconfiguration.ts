import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// DhcpConfiguration
/** 
 * Describes a DHCP configuration option.
**/
export class DhcpConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata({ elemType: AttributeValue })
  values?: AttributeValue[];
}
