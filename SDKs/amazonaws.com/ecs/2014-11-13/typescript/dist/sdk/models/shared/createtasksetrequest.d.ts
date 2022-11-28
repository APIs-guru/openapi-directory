import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { LoadBalancer } from "./loadbalancer";
import { NetworkConfiguration } from "./networkconfiguration";
import { Scale } from "./scale";
import { ServiceRegistry } from "./serviceregistry";
import { Tag } from "./tag";
export declare class CreateTaskSetRequest extends SpeakeasyBase {
    capacityProviderStrategy?: CapacityProviderStrategyItem[];
    clientToken?: string;
    cluster: string;
    externalId?: string;
    launchType?: LaunchTypeEnum;
    loadBalancers?: LoadBalancer[];
    networkConfiguration?: NetworkConfiguration;
    platformVersion?: string;
    scale?: Scale;
    service: string;
    serviceRegistries?: ServiceRegistry[];
    tags?: Tag[];
    taskDefinition: string;
}
