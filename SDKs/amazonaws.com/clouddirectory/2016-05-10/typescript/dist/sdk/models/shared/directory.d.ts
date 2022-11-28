import { SpeakeasyBase } from "../../../internal/utils";
import { DirectoryStateEnum } from "./directorystateenum";
/**
 * Directory structure that includes the directory name and directory ARN.
**/
export declare class Directory extends SpeakeasyBase {
    creationDateTime?: Date;
    directoryArn?: string;
    name?: string;
    state?: DirectoryStateEnum;
}
