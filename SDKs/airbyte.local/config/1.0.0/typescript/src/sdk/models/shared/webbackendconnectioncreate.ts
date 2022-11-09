import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NamespaceDefinitionTypeEnum } from "./namespacedefinitiontypeenum";
import { OperationCreate } from "./operationcreate";
import { ResourceRequirements } from "./resourcerequirements";
import { ConnectionSchedule } from "./connectionschedule";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { AirbyteCatalog } from "./airbytecatalog";


export class WebBackendConnectionCreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationId" })
  destinationId: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namespaceDefinition" })
  namespaceDefinition?: NamespaceDefinitionTypeEnum;

  @Metadata({ data: "json, name=namespaceFormat" })
  namespaceFormat?: string;

  @Metadata({ data: "json, name=operationIds" })
  operationIds?: string[];

  @Metadata({ data: "json, name=operations", elemType: shared.OperationCreate })
  operations?: OperationCreate[];

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=resourceRequirements" })
  resourceRequirements?: ResourceRequirements;

  @Metadata({ data: "json, name=schedule" })
  schedule?: ConnectionSchedule;

  @Metadata({ data: "json, name=sourceId" })
  sourceId: string;

  @Metadata({ data: "json, name=status" })
  status: ConnectionStatusEnum;

  @Metadata({ data: "json, name=syncCatalog" })
  syncCatalog?: AirbyteCatalog;
}
