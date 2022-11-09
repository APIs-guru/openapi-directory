import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigTypeData } from "./configtypedata";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";
/**
 * <p/>
**/
export declare class GetConfigResponse extends SpeakeasyBase {
    configArn: string;
    configData: ConfigTypeData;
    configId: string;
    configType?: ConfigCapabilityTypeEnum;
    name: string;
    tags?: Map<string, string>;
}
