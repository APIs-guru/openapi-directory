import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EcsService
/** 
 *  Contains the service and cluster names used to identify an Amazon ECS deployment's target. 
**/
export class EcsService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
