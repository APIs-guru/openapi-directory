import { SpeakeasyBase } from "../../../internal/utils";
import { CoreDefinitionVersion } from "./coredefinitionversion";
export declare class GetCoreDefinitionVersionResponse extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    definition?: CoreDefinitionVersion;
    id?: string;
    nextToken?: string;
    version?: string;
}
