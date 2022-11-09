import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SynchronousJobRead } from "./synchronousjobread";
import { DestinationSyncModeEnum } from "./destinationsyncmodeenum";


export class DestinationDefinitionSpecificationRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionSpecification" })
  connectionSpecification?: any;

  @Metadata({ data: "json, name=destinationDefinitionId" })
  destinationDefinitionId: string;

  @Metadata({ data: "json, name=documentationUrl" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=jobInfo" })
  jobInfo: SynchronousJobRead;

  @Metadata({ data: "json, name=supportedDestinationSyncModes" })
  supportedDestinationSyncModes?: DestinationSyncModeEnum[];

  @Metadata({ data: "json, name=supportsDbt" })
  supportsDbt?: boolean;

  @Metadata({ data: "json, name=supportsNormalization" })
  supportsNormalization?: boolean;
}
