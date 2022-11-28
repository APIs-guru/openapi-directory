import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SynchronousJobRead } from "./synchronousjobread";
import { DestinationSyncModeEnum } from "./destinationsyncmodeenum";



export class DestinationDefinitionSpecificationRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionSpecification" })
  connectionSpecification?: any;

  @SpeakeasyMetadata({ data: "json, name=destinationDefinitionId" })
  destinationDefinitionId: string;

  @SpeakeasyMetadata({ data: "json, name=documentationUrl" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=jobInfo" })
  jobInfo: SynchronousJobRead;

  @SpeakeasyMetadata({ data: "json, name=supportedDestinationSyncModes" })
  supportedDestinationSyncModes?: DestinationSyncModeEnum[];

  @SpeakeasyMetadata({ data: "json, name=supportsDbt" })
  supportsDbt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportsNormalization" })
  supportsNormalization?: boolean;
}
