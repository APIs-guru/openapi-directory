import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EcsService
/** 
 *  Contains the service and cluster names used to identify an Amazon ECS deployment's target. 
**/
export class EcsService extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
