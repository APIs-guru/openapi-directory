import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentReadActionEnum } from "./documentreadactionenum";
import { DocumentReadModeEnum } from "./documentreadmodeenum";
import { DocumentReadFeatureTypesEnum } from "./documentreadfeaturetypesenum";
/**
 * The input properties for a topic detection job.
**/
export declare class DocumentReaderConfig extends SpeakeasyBase {
    documentReadAction: DocumentReadActionEnum;
    documentReadMode?: DocumentReadModeEnum;
    featureTypes?: DocumentReadFeatureTypesEnum[];
}
