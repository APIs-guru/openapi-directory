import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NamespaceDefinitionTypeEnum } from "./namespacedefinitiontypeenum";
import { WebBackendOperationCreateOrUpdate } from "./webbackendoperationcreateorupdate";
import { ResourceRequirements } from "./resourcerequirements";
import { ConnectionSchedule } from "./connectionschedule";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { AirbyteCatalog } from "./airbytecatalog";


export class WebBackendConnectionUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=namespaceDefinition" })
  namespaceDefinition?: NamespaceDefinitionTypeEnum;

  @Metadata({ data: "json, name=namespaceFormat" })
  namespaceFormat?: string;

  @Metadata({ data: "json, name=operationIds" })
  operationIds?: string[];

  @Metadata({ data: "json, name=operations", elemType: shared.WebBackendOperationCreateOrUpdate })
  operations?: WebBackendOperationCreateOrUpdate[];

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=resourceRequirements" })
  resourceRequirements?: ResourceRequirements;

  @Metadata({ data: "json, name=schedule" })
  schedule?: ConnectionSchedule;

  @Metadata({ data: "json, name=status" })
  status: ConnectionStatusEnum;

  @Metadata({ data: "json, name=syncCatalog" })
  syncCatalog: AirbyteCatalog;

  @Metadata({ data: "json, name=withRefreshedCatalog" })
  withRefreshedCatalog?: boolean;
}
