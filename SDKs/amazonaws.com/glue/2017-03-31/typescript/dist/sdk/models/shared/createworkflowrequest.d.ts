import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateWorkflowRequest extends SpeakeasyBase {
    defaultRunProperties?: Map<string, string>;
    description?: string;
    maxConcurrentRuns?: number;
    name: string;
    tags?: Map<string, string>;
}
