import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceCodeVersionTypeEnum } from "./sourcecodeversiontypeenum";
/**
 * Identifies a version of code that AWS App Runner refers to within a source code repository.
**/
export declare class SourceCodeVersion extends SpeakeasyBase {
    type: SourceCodeVersionTypeEnum;
    value: string;
}
