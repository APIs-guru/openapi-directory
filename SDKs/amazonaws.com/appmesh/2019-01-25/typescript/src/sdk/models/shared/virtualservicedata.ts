import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualServiceSpec } from "./virtualservicespec";
import { VirtualServiceStatus } from "./virtualservicestatus";



// VirtualServiceData
/** 
 * An object that represents a virtual service returned by a describe operation.
**/
export class VirtualServiceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: VirtualServiceSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: VirtualServiceStatus;

  @SpeakeasyMetadata({ data: "json, name=virtualServiceName" })
  virtualServiceName: string;
}
