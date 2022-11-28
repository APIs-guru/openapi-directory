import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorDefinitionVersion } from "./connectordefinitionversion";
export declare class GetConnectorDefinitionVersionResponse extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    definition?: ConnectorDefinitionVersion;
    id?: string;
    nextToken?: string;
    version?: string;
}
