import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceFrequencyEnum } from "./sourcefrequencyenum";
import { SourceKeyword } from "./sourcekeyword";
import { SourceSetUpOptionEnum } from "./sourcesetupoptionenum";
import { SourceTypeEnum } from "./sourcetypeenum";



// CreateControlMappingSource
/** 
 *  Control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This does not contain <code>mappingID</code>. 
**/
export class CreateControlMappingSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceDescription" })
  sourceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceFrequency" })
  sourceFrequency?: SourceFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceKeyword" })
  sourceKeyword?: SourceKeyword;

  @SpeakeasyMetadata({ data: "json, name=sourceName" })
  sourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceSetUpOption" })
  sourceSetUpOption?: SourceSetUpOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: SourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=troubleshootingText" })
  troubleshootingText?: string;
}
