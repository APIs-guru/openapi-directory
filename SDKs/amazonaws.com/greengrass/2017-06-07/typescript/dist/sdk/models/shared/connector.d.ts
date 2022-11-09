import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
**/
export declare class Connector extends SpeakeasyBase {
    connectorArn: string;
    id: string;
    parameters?: Map<string, string>;
}
