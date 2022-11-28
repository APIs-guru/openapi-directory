import { SpeakeasyBase } from "../../../internal/utils";
import { NamespaceDefinitionTypeEnum } from "./namespacedefinitiontypeenum";
import { ResourceRequirements } from "./resourcerequirements";
import { ConnectionSchedule } from "./connectionschedule";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { AirbyteCatalog } from "./airbytecatalog";
export declare class ConnectionUpdate extends SpeakeasyBase {
    connectionId: string;
    namespaceDefinition?: NamespaceDefinitionTypeEnum;
    namespaceFormat?: string;
    operationIds?: string[];
    prefix?: string;
    resourceRequirements?: ResourceRequirements;
    schedule?: ConnectionSchedule;
    status: ConnectionStatusEnum;
    syncCatalog: AirbyteCatalog;
}
