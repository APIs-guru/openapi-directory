import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentReadActionEnum } from "./documentreadactionenum";
import { DocumentReadModeEnum } from "./documentreadmodeenum";
import { DocumentReadFeatureTypesEnum } from "./documentreadfeaturetypesenum";


// DocumentReaderConfig
/** 
 * The input properties for a topic detection job.
**/
export class DocumentReaderConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentReadAction" })
  documentReadAction: DocumentReadActionEnum;

  @Metadata({ data: "json, name=DocumentReadMode" })
  documentReadMode?: DocumentReadModeEnum;

  @Metadata({ data: "json, name=FeatureTypes" })
  featureTypes?: DocumentReadFeatureTypesEnum[];
}
