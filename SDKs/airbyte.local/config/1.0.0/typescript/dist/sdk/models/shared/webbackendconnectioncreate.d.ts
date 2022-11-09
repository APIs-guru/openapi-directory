import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespaceDefinitionTypeEnum } from "./namespacedefinitiontypeenum";
import { OperationCreate } from "./operationcreate";
import { ResourceRequirements } from "./resourcerequirements";
import { ConnectionSchedule } from "./connectionschedule";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { AirbyteCatalog } from "./airbytecatalog";
export declare class WebBackendConnectionCreate extends SpeakeasyBase {
    destinationId: string;
    name?: string;
    namespaceDefinition?: NamespaceDefinitionTypeEnum;
    namespaceFormat?: string;
    operationIds?: string[];
    operations?: OperationCreate[];
    prefix?: string;
    resourceRequirements?: ResourceRequirements;
    schedule?: ConnectionSchedule;
    sourceId: string;
    status: ConnectionStatusEnum;
    syncCatalog?: AirbyteCatalog;
}
