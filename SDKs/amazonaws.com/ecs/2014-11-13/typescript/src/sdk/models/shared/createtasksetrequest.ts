import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { LoadBalancer } from "./loadbalancer";
import { NetworkConfiguration } from "./networkconfiguration";
import { Scale } from "./scale";
import { ServiceRegistry } from "./serviceregistry";
import { Tag } from "./tag";



export class CreateTaskSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProviderStrategy", elemType: CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: string;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=loadBalancers", elemType: LoadBalancer })
  loadBalancers?: LoadBalancer[];

  @SpeakeasyMetadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @SpeakeasyMetadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale?: Scale;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;

  @SpeakeasyMetadata({ data: "json, name=serviceRegistries", elemType: ServiceRegistry })
  serviceRegistries?: ServiceRegistry[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=taskDefinition" })
  taskDefinition: string;
}
