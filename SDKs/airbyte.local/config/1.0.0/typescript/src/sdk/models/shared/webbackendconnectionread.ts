import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: DestinationRead;

  @SpeakeasyMetadata({ data: "json, name=destinationId" })
  destinationId: string;

  @SpeakeasyMetadata({ data: "json, name=isSyncing" })
  isSyncing: boolean;

  @SpeakeasyMetadata({ data: "json, name=latestSyncJobCreatedAt" })
  latestSyncJobCreatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=latestSyncJobStatus" })
  latestSyncJobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceDefinition" })
  namespaceDefinition?: NamespaceDefinitionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=namespaceFormat" })
  namespaceFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=operationIds" })
  operationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: OperationRead })
  operations?: OperationRead[];

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceRequirements" })
  resourceRequirements?: ResourceRequirements;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: ConnectionSchedule;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: SourceRead;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ConnectionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=syncCatalog" })
  syncCatalog: AirbyteCatalog;
}
