import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
export declare class DetectPhiResponse extends SpeakeasyBase {
    entities: Entity[];
    modelVersion: string;
    paginationToken?: string;
}
