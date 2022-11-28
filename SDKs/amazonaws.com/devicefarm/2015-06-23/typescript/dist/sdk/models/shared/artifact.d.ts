import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactTypeEnum } from "./artifacttypeenum";
/**
 * Represents the output of a test. Examples of artifacts include logs and screenshots.
**/
export declare class Artifact extends SpeakeasyBase {
    arn?: string;
    extension?: string;
    name?: string;
    type?: ArtifactTypeEnum;
    url?: string;
}
