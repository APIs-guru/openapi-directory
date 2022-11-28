import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutWorkflowRunPropertiesRequest extends SpeakeasyBase {
    name: string;
    runId: string;
    runProperties: Map<string, string>;
}
