import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualServiceSpec } from "./virtualservicespec";
import { VirtualServiceStatus } from "./virtualservicestatus";


// VirtualServiceData
/** 
 * An object that represents a virtual service returned by a describe operation.
**/
export class VirtualServiceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=meshName" })
  meshName: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @Metadata({ data: "json, name=spec" })
  spec: VirtualServiceSpec;

  @Metadata({ data: "json, name=status" })
  status: VirtualServiceStatus;

  @Metadata({ data: "json, name=virtualServiceName" })
  virtualServiceName: string;
}
