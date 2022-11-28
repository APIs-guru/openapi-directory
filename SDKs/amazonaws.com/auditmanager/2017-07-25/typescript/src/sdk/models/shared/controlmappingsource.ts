import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceFrequencyEnum } from "./sourcefrequencyenum";
import { SourceKeyword } from "./sourcekeyword";
import { SourceSetUpOptionEnum } from "./sourcesetupoptionenum";
import { SourceTypeEnum } from "./sourcetypeenum";



// ControlMappingSource
/** 
 *  The data source that determines from where Audit Manager collects evidence for the control. 
**/
export class ControlMappingSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceDescription" })
  sourceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceFrequency" })
  sourceFrequency?: SourceFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId?: string;

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
