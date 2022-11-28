import { SpeakeasyBase } from "../../../internal/utils";
export declare class StartSchemaExtensionRequest extends SpeakeasyBase {
    createSnapshotBeforeSchemaExtension: boolean;
    description: string;
    directoryId: string;
    ldifContent: string;
}
