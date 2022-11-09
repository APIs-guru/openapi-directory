import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentationPartTypeEnum } from "./documentationparttypeenum";
/**
 * Specifies the target API entity to which the documentation applies.
**/
export declare class DocumentationPartLocation extends SpeakeasyBase {
    method?: string;
    name?: string;
    path?: string;
    statusCode?: string;
    type: DocumentationPartTypeEnum;
}
