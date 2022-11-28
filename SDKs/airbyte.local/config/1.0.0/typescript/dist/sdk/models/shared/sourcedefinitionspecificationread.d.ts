import { SpeakeasyBase } from "../../../internal/utils";
import { SynchronousJobRead } from "./synchronousjobread";
export declare class SourceDefinitionSpecificationRead extends SpeakeasyBase {
    connectionSpecification?: Map<string, any>;
    documentationUrl?: string;
    jobInfo: SynchronousJobRead;
    sourceDefinitionId: string;
}
