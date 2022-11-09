import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualNodeServiceProvider
/** 
 * An object that represents a virtual node service provider.
**/
export class VirtualNodeServiceProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualNodeName" })
  virtualNodeName: string;
}
