import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualNodeServiceProvider
/** 
 * An object that represents a virtual node service provider.
**/
export class VirtualNodeServiceProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualNodeName" })
  virtualNodeName: string;
}
