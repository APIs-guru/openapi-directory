import { SpeakeasyBase } from "../../../internal/utils";
import { SynchronousJobRead } from "./synchronousjobread";
import { DestinationSyncModeEnum } from "./destinationsyncmodeenum";
export declare class DestinationDefinitionSpecificationRead extends SpeakeasyBase {
    connectionSpecification?: any;
    destinationDefinitionId: string;
    documentationUrl?: string;
    jobInfo: SynchronousJobRead;
    supportedDestinationSyncModes?: DestinationSyncModeEnum[];
    supportsDbt?: boolean;
    supportsNormalization?: boolean;
}
