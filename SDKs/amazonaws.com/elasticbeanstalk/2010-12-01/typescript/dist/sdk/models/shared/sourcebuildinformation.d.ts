import { SpeakeasyBase } from "../../../internal/utils";
import { SourceRepositoryEnum } from "./sourcerepositoryenum";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Location of the source code for an application version.
**/
export declare class SourceBuildInformation extends SpeakeasyBase {
    sourceLocation: string;
    sourceRepository: SourceRepositoryEnum;
    sourceType: SourceTypeEnum;
}
