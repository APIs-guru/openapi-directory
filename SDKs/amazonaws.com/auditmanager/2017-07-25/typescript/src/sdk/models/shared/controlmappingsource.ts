import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceFrequencyEnum } from "./sourcefrequencyenum";
import { SourceKeyword } from "./sourcekeyword";
import { SourceSetUpOptionEnum } from "./sourcesetupoptionenum";
import { SourceTypeEnum } from "./sourcetypeenum";


// ControlMappingSource
/** 
 *  The data source that determines from where Audit Manager collects evidence for the control. 
**/
export class ControlMappingSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceDescription" })
  sourceDescription?: string;

  @Metadata({ data: "json, name=sourceFrequency" })
  sourceFrequency?: SourceFrequencyEnum;

  @Metadata({ data: "json, name=sourceId" })
  sourceId?: string;

  @Metadata({ data: "json, name=sourceKeyword" })
  sourceKeyword?: SourceKeyword;

  @Metadata({ data: "json, name=sourceName" })
  sourceName?: string;

  @Metadata({ data: "json, name=sourceSetUpOption" })
  sourceSetUpOption?: SourceSetUpOptionEnum;

  @Metadata({ data: "json, name=sourceType" })
  sourceType?: SourceTypeEnum;

  @Metadata({ data: "json, name=troubleshootingText" })
  troubleshootingText?: string;
}
