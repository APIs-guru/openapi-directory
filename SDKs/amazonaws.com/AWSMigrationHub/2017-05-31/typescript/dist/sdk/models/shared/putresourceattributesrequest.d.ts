import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceAttribute } from "./resourceattribute";
export declare class PutResourceAttributesRequest extends SpeakeasyBase {
    dryRun?: boolean;
    migrationTaskName: string;
    progressUpdateStream: string;
    resourceAttributeList: ResourceAttribute[];
}
