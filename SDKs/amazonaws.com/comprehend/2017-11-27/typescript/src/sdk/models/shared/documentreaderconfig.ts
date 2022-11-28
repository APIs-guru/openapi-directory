import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentReadActionEnum } from "./documentreadactionenum";
import { DocumentReadModeEnum } from "./documentreadmodeenum";
import { DocumentReadFeatureTypesEnum } from "./documentreadfeaturetypesenum";



// DocumentReaderConfig
/** 
 * The input properties for a topic detection job.
**/
export class DocumentReaderConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentReadAction" })
  documentReadAction: DocumentReadActionEnum;

  @SpeakeasyMetadata({ data: "json, name=DocumentReadMode" })
  documentReadMode?: DocumentReadModeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeatureTypes" })
  featureTypes?: DocumentReadFeatureTypesEnum[];
}
