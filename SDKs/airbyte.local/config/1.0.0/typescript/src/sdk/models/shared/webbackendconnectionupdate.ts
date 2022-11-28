import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamespaceDefinitionTypeEnum } from "./namespacedefinitiontypeenum";
import { WebBackendOperationCreateOrUpdate } from "./webbackendoperationcreateorupdate";
import { ResourceRequirements } from "./resourcerequirements";
import { ConnectionSchedule } from "./connectionschedule";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { AirbyteCatalog } from "./airbytecatalog";



export class WebBackendConnectionUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceDefinition" })
  namespaceDefinition?: NamespaceDefinitionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=namespaceFormat" })
  namespaceFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=operationIds" })
  operationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: WebBackendOperationCreateOrUpdate })
  operations?: WebBackendOperationCreateOrUpdate[];

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceRequirements" })
  resourceRequirements?: ResourceRequirements;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: ConnectionSchedule;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ConnectionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=syncCatalog" })
  syncCatalog: AirbyteCatalog;

  @SpeakeasyMetadata({ data: "json, name=withRefreshedCatalog" })
  withRefreshedCatalog?: boolean;
}
