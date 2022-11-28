import { SpeakeasyBase } from "../../../internal/utils";
import { NamespaceDefinitionTypeEnum } from "./namespacedefinitiontypeenum";
import { WebBackendOperationCreateOrUpdate } from "./webbackendoperationcreateorupdate";
import { ResourceRequirements } from "./resourcerequirements";
import { ConnectionSchedule } from "./connectionschedule";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { AirbyteCatalog } from "./airbytecatalog";
export declare class WebBackendConnectionUpdate extends SpeakeasyBase {
    connectionId: string;
    namespaceDefinition?: NamespaceDefinitionTypeEnum;
    namespaceFormat?: string;
    operationIds?: string[];
    operations?: WebBackendOperationCreateOrUpdate[];
    prefix?: string;
    resourceRequirements?: ResourceRequirements;
    schedule?: ConnectionSchedule;
    status: ConnectionStatusEnum;
    syncCatalog: AirbyteCatalog;
    withRefreshedCatalog?: boolean;
}
