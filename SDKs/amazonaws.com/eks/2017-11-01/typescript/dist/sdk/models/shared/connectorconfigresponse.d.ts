import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The full description of your connected cluster.
**/
export declare class ConnectorConfigResponse extends SpeakeasyBase {
    activationCode?: string;
    activationExpiry?: Date;
    activationId?: string;
    provider?: string;
    roleArn?: string;
}
