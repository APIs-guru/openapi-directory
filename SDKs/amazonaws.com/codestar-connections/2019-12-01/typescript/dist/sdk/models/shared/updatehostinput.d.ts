import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfiguration } from "./vpcconfiguration";
export declare class UpdateHostInput extends SpeakeasyBase {
    hostArn: string;
    providerEndpoint?: string;
    vpcConfiguration?: VpcConfiguration;
}
