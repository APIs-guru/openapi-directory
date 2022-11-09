import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { LoadBalancer } from "./loadbalancer";
import { NetworkConfiguration } from "./networkconfiguration";
import { Scale } from "./scale";
import { ServiceRegistry } from "./serviceregistry";
import { Tag } from "./tag";


export class CreateTaskSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProviderStrategy", elemType: shared.CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=cluster" })
  cluster: string;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @Metadata({ data: "json, name=loadBalancers", elemType: shared.LoadBalancer })
  loadBalancers?: LoadBalancer[];

  @Metadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @Metadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=scale" })
  scale?: Scale;

  @Metadata({ data: "json, name=service" })
  service: string;

  @Metadata({ data: "json, name=serviceRegistries", elemType: shared.ServiceRegistry })
  serviceRegistries?: ServiceRegistry[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=taskDefinition" })
  taskDefinition: string;
}
