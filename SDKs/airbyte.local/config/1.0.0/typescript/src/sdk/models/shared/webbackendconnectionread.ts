import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DestinationRead } from "./destinationread";
import { JobStatusEnum } from "./jobstatusenum";
import { NamespaceDefinitionTypeEnum } from "./namespacedefinitiontypeenum";
import { OperationRead } from "./operationread";
import { ResourceRequirements } from "./resourcerequirements";
import { ConnectionSchedule } from "./connectionschedule";
import { SourceRead } from "./sourceread";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { AirbyteCatalog } from "./airbytecatalog";


export class WebBackendConnectionRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=destination" })
  destination: DestinationRead;

  @Metadata({ data: "json, name=destinationId" })
  destinationId: string;

  @Metadata({ data: "json, name=isSyncing" })
  isSyncing: boolean;

  @Metadata({ data: "json, name=latestSyncJobCreatedAt" })
  latestSyncJobCreatedAt?: number;

  @Metadata({ data: "json, name=latestSyncJobStatus" })
  latestSyncJobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=namespaceDefinition" })
  namespaceDefinition?: NamespaceDefinitionTypeEnum;

  @Metadata({ data: "json, name=namespaceFormat" })
  namespaceFormat?: string;

  @Metadata({ data: "json, name=operationIds" })
  operationIds?: string[];

  @Metadata({ data: "json, name=operations", elemType: shared.OperationRead })
  operations?: OperationRead[];

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=resourceRequirements" })
  resourceRequirements?: ResourceRequirements;

  @Metadata({ data: "json, name=schedule" })
  schedule?: ConnectionSchedule;

  @Metadata({ data: "json, name=source" })
  source: SourceRead;

  @Metadata({ data: "json, name=sourceId" })
  sourceId: string;

  @Metadata({ data: "json, name=status" })
  status: ConnectionStatusEnum;

  @Metadata({ data: "json, name=syncCatalog" })
  syncCatalog: AirbyteCatalog;
}
