import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDefinitionVersion } from "./resourcedefinitionversion";
export declare class GetResourceDefinitionVersionResponse extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    definition?: ResourceDefinitionVersion;
    id?: string;
    version?: string;
}
